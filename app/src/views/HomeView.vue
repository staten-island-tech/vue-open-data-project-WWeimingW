<template>
  <div>
    <h1>NYC Collision Data</h1>
    <div v-for="item in data" :key="item.collision_id">
      <pre>{{ item }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const data = ref([])
onMounted(async () => {
  const res = await fetch('https://data.cityofnewyork.us/resource/h9gi-nx95.json')
  data.value = await res.json()
})
</script>

<style scoped></style>
