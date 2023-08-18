<script setup>
import { ref, onMounted } from 'vue';
import { create } from 'ipfs-core';
import { createOrbitDB } from '@orbitdb/core';

const pElementRef = ref(null)

onMounted(async () => {
  const ipfs = await create({repo: 'ok' + Math.random()});
  const orbitdb = await createOrbitDB({ ipfs });
  const db = await orbitdb.open('my-db')
  pElementRef.value.textContent = db.address;
  await db.close();
  await ipfs.stop();
})
</script>

<template>
  <p ref="pElementRef"></p>
</template>
