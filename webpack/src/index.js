import { createHelia, libp2pDefaults } from 'helia'
import { gossipsub } from '@chainsafe/libp2p-gossipsub'
import { createOrbitDB } from '@orbitdb/core'

console.log('setup')
const libp2pOptions = libp2pDefaults()
libp2pOptions.services.pubsub = gossipsub()
const ipfs = await createHelia({ libp2p: libp2pOptions })
const orbitdb = await createOrbitDB({ ipfs })
const db = await orbitdb.open('my-db')
console.log(db.address)
