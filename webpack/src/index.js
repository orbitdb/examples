import * as Ipfs from 'ipfs-core'
import * as OrbitDB from '@orbitdb/core'

const ipfs = await Ipfs.create({
  config: {
    Addresses: {
      Swarm: [
        '/ip4/0.0.0.0/tcp/12345/ws/p2p-webrtc-star'
      ],
      API: '',
      Gateway: ''
    }
  },
  EXPERIMENTAL: {
    pubsub: true
  }
})

console.log(ipfs)
const orbitdb = await OrbitDB.createOrbitDB({ ipfs })
const db = await orbitdb.open('my-db')
console.log(db.address)
