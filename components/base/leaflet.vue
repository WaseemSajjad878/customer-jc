<template>
  <div>asdasdasd</div>
  <!-- <LMap ref="map" :options="mapOptions" :zoom="zoom" :center="current.from">
    <LTileLayer url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png" />
    <LMarker :lat-lng="current.from" />
    <LMarker :lat-lng="current.to" />
    <l-polyline :lat-lngs="[current.from, current.to]" color="#13B89B" />
  </LMap> -->
</template>

<script setup>
import { ref } from 'vue'

const zoom = ref(7)

const map = ref(null)

const arr = [
  {
    from: [46.238064, 6.10895],
    to: [49.626575, 6.211517],
  },
  {
    from: [47.464722, 8.549167],
    to: [52.308613, 4.763889],
  },
  {
    from: [24.95764, 46.698776],
    to: [24.55056, 55.103174],
  },
]

const mapOptions = {
  zoomControl: false,
}

const current = ref(arr[0])

const bounds = computed(() => [current.value.to, current.value.from])

onMounted(() => {
  // setTimeout(() => (current.value = arr[1]), 5000)
})
</script>

<style>
body {
  margin: 0;
}
</style>
