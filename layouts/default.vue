<template>
  <q-layout view="lHr LpR fFf" style="min-height: 100vh" class="bg">
    <q-page-container style="max-height: calc(100vh-124px)">
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
  background-image: url("/images/map.svg");
  background-size: cover;
}
</style>
