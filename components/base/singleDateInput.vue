<script setup>
import moment from 'moment'
import { onMounted, ref } from 'vue'

const props = defineProps({
  vModel: {
    type: String,
    required: true,
  },
  format: {
    type: String,
    required: true,
  },
  maxDate: {
    type: String,
  },
})

const updateDate = (date) => {
  if (!props.maxDate) return true
  return date >= '1900/01/01' && date <= moment(props.maxDate).format('YYYY/MM/DD')
}

const date = ref(moment('05 April 1995', 'DD MMMM, YYYY').format('DD MMMM, YYYY'))
</script>

<template>
  <q-input
    :model-value="vModel"
    @update:model-value="$emit('update:vModel', $event)"
    readonly
    outlined
    v-bind="$attrs"
    input-class="text-weight-medium cursor-pointer"
    class="q-input-readonly"
  >
    <q-popup-proxy cover transition-show="scale" transition-hide="scale">
      <q-date
        :options="updateDate"
        :model-value="vModel"
        @update:model-value="$emit('update:vModel', $event)"
        :mask="format"
        minimal
        v-model="date"
      >
      </q-date>
    </q-popup-proxy>
    <template #prepend>
      <q-icon class="cursor-pointer" color="secondary-4" name="jc:calendar" size="xs"> </q-icon>
    </template>
    <template #append>
      <q-icon class="cursor-pointer" color="black" name="jc:chevron-down" size="xs" />
    </template>
  </q-input>
</template>

<style lang="scss" scoped>
.q-input-readonly {
  :deep(.q-field__control:before) {
    border: 2px solid $secondary-4;
  }
  &.q-field--outlined.q-field--readonly {
    :deep(.q-field__control:before) {
      border-style: solid;
    }
  }
}
</style>
