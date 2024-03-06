<script setup>
const scrollData = ref({ position: 0 })

const onScrollChange = ({ position = 0 }) => {
  scrollData.value.position = position
}
const addHeaderBg = computed(() => (scrollData.value?.position > 170 ? 'bg-black transition' : ''))
</script>

<template>
  <q-layout @scroll="onScrollChange" view="lHr LpR fFf" class="min-h-100vh">
    <q-header :class="[`text-dark transition1 ${addHeaderBg} q-px-lg`]">
      <primary-navbar />
    </q-header>
    <div style="height: 30vh">
      <base-leaflet />
    </div>
    <div class="app-wrapper q-px-lg q-py-sm">
      <slot />
    </div>
    <!-- <q-page-container class="relative-position min-h-100vh q-pt-none" style="z-index: 200">
    </q-page-container> -->
  </q-layout>
</template>
<style scoped>
.bg-gradient {
  background: linear-gradient(to right, #000 44%, 55%, transparent 76%);
}
</style>
