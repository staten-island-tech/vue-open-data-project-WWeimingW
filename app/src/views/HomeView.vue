<template>
  <div>
    <h1>NYC Collision Data</h1>

    <BarChart v-if="chartdata" :chart-data="chartdata" />
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BarChart from '../views/BarChart.vue'

const data = ref([])
const chartdata = ref(null)

onMounted(async () => {
  const res = await fetch('https://data.cityofnewyork.us/resource/h9gi-nx95.json')
  data.value = await res.json()

  const counts = {}

  data.value.forEach((item) => {
    const borough = item.borough || 'Unknown'
    counts[borough] = (counts[borough] || 0) + 1
  })

  chartdata.value = {
    labels: Object.keys(counts),
    datasets: [
      {
        label: 'Collisions by Borough',
        data: Object.values(counts),
      },
    ],
  }
})
</script>
