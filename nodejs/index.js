/**
 * A simple nodejs script which launches an orbitdb instance and creates a db 
 * with a single record.
 * 
 * To run from the terminal:
 * 
 * ```bash
 * node index.js
 * ```
 */
import * as Ipfs from 'ipfs-core'
import { createOrbitDB, OrbitDBAccessController } from '@orbitdb/core'

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

const ipfs = await Ipfs.create({ repo: './ipfs', config: config })

const orbitdb = await createOrbitDB({ ipfs: ipfs, id: 'nodejs', directory: './orbitdb' })

const db = await orbitdb.open('nodejs')

await db.add('hello world 1')

for await (const res of db.iterator()) {
  console.log(res)
}

await db.close()
await orbitdb.stop()
await ipfs.stop()

process.exit(0)
