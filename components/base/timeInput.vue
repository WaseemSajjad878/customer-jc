<script setup>
import moment from 'moment'

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
  isDate: {
    type: Boolean,
    default: true,
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
      <q-time :model-value="date" @update:model-value="$emit('update:vModel', $event)" mask="YYYY-MM-DD HH:mm">
        <div class="row items-center justify-end">
          <q-btn v-close-popup label="Close" color="primary" flat />
        </div>
      </q-time>
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

// :deep(.jc-x-close:before) {
//   color: $negative-1;
// }
// .custom-search-input {
//   :deep(.q-field__control:before) {
//     border: 2px solid $secondary-4;
//   }
//   &.q-field--dense {
//     :deep(.q-field__control),
//     :deep(.q-field__marginal) {
//       height: 56px;
//     }
//   }
// }
</style>
