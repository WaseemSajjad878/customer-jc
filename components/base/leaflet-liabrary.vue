<template>
  <div id="mapContainer"></div>
</template>

<script setup>
const map = ref(null)

onMounted(() => {
  // map.value = L.map('map').setView([41.5, -83.5], 5)
  map.value = L.map('mapContainer').setView([46.05, 11.05], 5)
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map.value)
  //use a mix of renderers
  var customPane = map.value.createPane('customPane')
  var canvasRenderer = L.canvas({ pane: 'customPane' })
  customPane.style.zIndex = 399 // put just behind the standard overlay pane which is at 400
  L.marker([50, 14]).addTo(map.value)

  L.marker([53, 20]).addTo(map.value)
  L.marker([49.5, 19.5]).addTo(map.value)
  L.marker([49, 25]).addTo(map.value)
  L.marker([-10, 25]).addTo(map.value)
  L.marker([10, -25]).addTo(map.value)
  L.marker([0, 0]).addTo(map.value)
  var pathOne = L.curve(['M', [50, 14], 'Q', [53, 20], [49, 25]], {
    renderer: canvasRenderer,
  }).addTo(map.value)
  L.curve(['M', [50, 14], 'Q', [52, 20], [49, 25]], {
    renderer: canvasRenderer,
  }).addTo(map.value)
  L.curve(['M', [50, 14], 'Q', [51, 20], [49, 25]], {
    renderer: canvasRenderer,
  }).addTo(map.value)
  L.curve(['M', [50, 14], 'Q', [50, 20], [49, 25]], {
    renderer: canvasRenderer,
  }).addTo(map.value)
  L.curve(['M', [50, 14], 'Q', [47, 20], [49, 25]], {
    renderer: canvasRenderer,
  }).addTo(map.value)
})

// onBeforeUnmount() {
//     if (map.value) {
//       map.value.remove();
//     }
//   }
</script>

<style>
#mapContainer {
  height: 100vh;
}
</style>
