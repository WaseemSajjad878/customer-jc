<script setup>
defineProps({
  search: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
  iconColor: {
    type: String,
  },
})
</script>
<template>
  <q-input
    input-class="text-weight-medium"
    :model-value="search"
    @update:model-value="$emit('update:search', $event)"
    @clear="$emit('clearSearch')"
    outlined
    dense
    clear-icon="jc:x-close"
  >
    <template v-slot:prepend>
      <q-icon class="cursor-pointer q-mr-sm" :color="iconColor" :name="icon" size="xs" />
    </template>

    <template v-for="(_, slot, idx) in $slots" :key="idx" v-slot:[slot]="props">
      <slot :name="slot" v-bind="props" :key="idx" />
    </template>
  </q-input>
</template>
<style scoped lang="scss">
:deep(.jc-x-close:before) {
  color: $negative-1;
}
.custom-search-input {
  :deep(.q-field__control:before) {
    border: 2px solid $secondary-4;
  }
  &.q-field--dense {
    :deep(.q-field__control),
    :deep(.q-field__marginal) {
      height: 56px;
    }
  }
}
</style>
