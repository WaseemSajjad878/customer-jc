<template>
  <q-layout view="lHr LpR fFf" style="min-height: 100vh" class="bg">
    <base-leaflet />
    <q-page-container style="max-height: calc(100vh-124px); position: relative; z-index: 200">
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
  /* background: linear-gradient(92.57deg, #000000 1.73%, rgba(15, 15, 15, 0) 64.09%); */
  background: black;
}
</style>
