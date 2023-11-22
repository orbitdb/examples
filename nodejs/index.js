/**
 * A simple nodejs script which launches an orbitdb instance and creates a db 
 * with a single record.
 * 
 * To run from the terminal:
 * 
 * ```bash
 * node index.js
 * ```
 * or
 * ```bash
 * node index.js /orbitdb/<hash>
 * ```
 */
import * as Ipfs from 'ipfs-core'
import { createOrbitDB, OrbitDBAccessController } from '@orbitdb/core'
import { mplex } from '@libp2p/mplex'
import { yamux } from '@chainsafe/libp2p-yamux'

const config = {
  Addresses: {
    API: '/ip4/127.0.0.1/tcp/0',
    Swarm: ['/ip4/0.0.0.0/tcp/0'],
    Gateway: '/ip4/0.0.0.0/tcp/0'
  },
  Bootstrap: [],
  Discovery: {
    MDNS: {
      Enabled: true,
      Interval: 0
    },
    webRTCStar: {
      Enabled: false
    }
  }
}

// Add more muxers (helps with testing against Helia and Kubo)
const libp2p = {
  streamMuxers: [
    mplex(),
    yamux()
  ]
}

const id = process.argv.length > 2 ? 2 : 1

const ipfs = await Ipfs.create({ repo: `./ipfs/${id}`, config, libp2p })

const orbitdb = await createOrbitDB({ ipfs: ipfs, id: 'nodejs', directory: `./orbitdb/${id}` })

let db

if (process.argv.length > 2) {
  const remoteDBAddress = process.argv.pop()
  
  db = await orbitdb.open(remoteDBAddress)

  await db.add('hello world 1')

  for await (const res of db.iterator()) {
    console.log(res)
  }
} else {
  db = await orbitdb.open('nodejs', { AccessController: OrbitDBAccessController({ write: ['*'] }) })
  
  console.log(db.address)

  db.events.on('update', event => {
    console.log('update', event)
  })
}

process.on('SIGINT', async () => {
  console.log("exiting...")

  await db.close()
  await orbitdb.stop()
  await ipfs.stop()
  process.exit(0)
})
