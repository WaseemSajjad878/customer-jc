<script setup>
const items = [
    {
        title: 'Home',
        to: '',
    },
    {
        title: 'Search Results',
        to: '',
    },
    {
        title: 'Cessna Citation Offer Details',
        to: '',
    }
]
</script>
<template>
    <div class="flex items-center">
        <div v-for="(item, idx) in items" :key="idx"
            :class="['text-weight-bold text-body2 q-ml-xs cursor-pointer', idx < items.length - 1 ? 'text-secondary-1' : 'text-primary']">
            {{ item.title }}
            <q-icon v-if="idx < items.length - 1" class="q-ml-xs text-secondary-1" name="jc:chevron-left" />
        </div>
    </div>
</template>