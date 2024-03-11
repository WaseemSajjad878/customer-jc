<template>
    <q-chip v-bind="$attrs" :class="$attrs.outlined ? 'btn-outlined text-primary' : 'bg-primary'">
        <div :class="$attrs.outlined ? 'text-primary' : ''">

            <slot />
        </div>
    </q-chip>
</template>
<script setup>
</script>

<style lang="scss" scoped>
.btn-outlined {
    background:
        linear-gradient($primary-4, $primary-4) padding-box,
        $primary border-box !important;
    border-radius: 4px;
    border: 1px solid transparent;
}
</style>