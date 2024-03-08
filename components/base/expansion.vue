<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  isExpanded: {
    type: Boolean,
  },
})
</script>

<template>
  <q-expansion-item :model-value="isExpanded" @update:model-value="$emit('update:isExpanded', $event)">
    <template #header="{}">
      <div class="row no-wrap text-weight-bold items-center full-width q-pa-none">
        <h2 class="col-auto q-my-none q-mr-sm">
          {{ title }}
        </h2>
        <p class="col-7 ellipsis text-primary q-my-none">Price Range: $5,500 - $12,431</p>
      </div>
    </template>
    <slot />
  </q-expansion-item>
</template>

<style lang="scss" scoped></style>
