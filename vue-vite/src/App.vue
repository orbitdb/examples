<script setup>
import { ref, onMounted } from 'vue'
import { createHelia, libp2pDefaults } from 'helia'
import { gossipsub } from '@chainsafe/libp2p-gossipsub'
import { createOrbitDB } from '@orbitdb/core'

const pElementRef = ref(null)

onMounted(async () => {
  const libp2pOptions = libp2pDefaults()
  libp2pOptions.services.pubsub = gossipsub()
  const ipfs = await createHelia({ libp2p: libp2pOptions })
  const orbitdb = await createOrbitDB({ ipfs })
  const db = await orbitdb.open('my-db')
  pElementRef.value.textContent = db.address
  await db.close()
  await ipfs.stop()
})
</script>

<template>
  <p ref="pElementRef"></p>
</template>
