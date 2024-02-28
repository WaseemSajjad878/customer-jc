<template>
  <q-layout view="lHr LpR fFf" class="min-h-100vh">
    <div style="height: 30vh; width: 100vw; position: absolute; right: 0; z-index: 1">
      <base-leaflet />
    </div>
    <q-page-container class="relative-position min-h-100vh" style="z-index: 200">
      <div class="app-wrapper q-px-lg q-py-sm">
        <q-header class="text-dark q-mx-lg">
          <primary-navbar />
        </q-header>
        <slot />
      </div>
    </q-page-container>
  </q-layout>
</template>
<style scoped>
.bg-gradient {
  background: linear-gradient(to right, #000 44%, 55%, transparent 76%);
}
</style>
