<template>
  <q-btn
    no-caps
    unelevated
    padding="12px 30px"
    v-bind="$attrs"
    :class="
      $attrs.disabled
        ? 'bg-secondary-1'
        : $attrs.outlined
        ? 'btn-outlined'
        : 'bg-primary'
    "
  >
    <div
      :class="
        $attrs.disabled
          ? 'text-white'
          : $attrs.outlined
          ? 'text-primary'
          : $attrs['text-color']
          ? `text-${$attrs['text-color']}`
          : 'text-white'
      "
    >
      <slot />
    </div>
  </q-btn>
</template>

<style lang="scss" scoped>
.btn-outlined {
  background: linear-gradient(white, white) padding-box, $primary border-box !important;
  border-radius: 4px;
  border: 1px solid transparent;
}
</style>
