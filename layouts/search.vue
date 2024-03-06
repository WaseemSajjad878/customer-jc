<template>
  <q-layout view="lHr LpR fFf" class="min-h-100vh">
    <q-header class="text-dark q-mx-lg">
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
