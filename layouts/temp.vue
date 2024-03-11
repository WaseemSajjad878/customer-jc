<template>
  <q-layout view="lHr LpR fFf" class="min-h-100vh">
    <q-header class="text-dark q-mx-lg">
      <primary-navbar />
    </q-header>
    <div class="app-wrapper q-px-lg q-py-sm">
      <slot />
    </div>
  </q-layout>
</template>
<style scoped>
.bg-gradient {
  background: linear-gradient(to right, #000 44%, 55%, transparent 76%);
}
</style>
