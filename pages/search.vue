<script setup>
definePageMeta({
  layout: 'search',
})
</script>

<template>
  <div class="wrapper">
    <div class="card-wrapper relative-position">
      <card-offer-filter />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card-wrapper {
  top: -33px;
  z-index: 1000;
}
</style>
