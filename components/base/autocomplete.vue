<script setup>
import { ref } from 'vue'
const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
  select: {
    type: [String, Number],
  },
})

const isFocused = ref(false)

const localOpts = ref(props.options)

const filterFn = (val, update, abort) => {
  update(() => {
    const needle = val.toLowerCase()
    localOpts.value =
      props.options && props.options[0]?.label
        ? props.options.filter((v) => v.label.toLowerCase().indexOf(needle) > -1)
        : props.options.filter((v) => v.toLowerCase().indexOf(needle) > -1)
  })
}
</script>
<template>
  <q-select
    :model-value="select"
    @update:model-value="$emit('update:select', $event)"
    options-selected-class="bg-primary text-white"
    :class="['custom-q-select menu ', isFocused ? 'foucsed' : '']"
    @popup-show="isFocused = true"
    @popup-hide="isFocused = false"
    popup-content-class="no-border-radius"
    dropdown-icon="jc:chevron-down"
    :options="localOpts"
    behavior="menu"
    outlined
    hide-selected
    clear-icon="jc:x-close"
    use-input
    fill-input
    input-debounce="0"
    v-bind="$attrs"
    emit-value
    map-options
    @filter="filterFn"
  >
    <template v-slot:append>
      <q-icon name="jc:chevron-down" color="black" />
    </template>
    <template v-for="(_, slot, idx) in $slots" :key="idx" v-slot:[slot]="props">
      <slot :name="slot" v-bind="props" :key="idx" />
    </template>

    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-grey"> No results </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<style lang="scss" scoped>
.custom-q-select {
  &.foucsed {
    :deep(.q-field__control) {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
}

:deep(.jc-x-close:before) {
  color: $negative-1;
}
</style>
