<template>
  <q-layout view="lHr LpR fFf" style="min-height: 100vh" class="bg-black">
    <base-leaflet />
    <q-page-container class="bg relative-position" style="max-height: calc(100vh-124px); z-index: 200">
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
.bg {
  background: linear-gradient(to right, #000 44%, 55%, transparent 76%);
}
</style>
