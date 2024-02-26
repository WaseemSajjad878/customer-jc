<script setup>
const $q = useQuasar()

/* Use custom Untitled and JetClass icon library with jc: */
$q.iconMapFn = (iconName) => {
  if (iconName.startsWith('jc:') === true) {
    return {
      cls: 'jc-' + iconName.substring(3),
    }
  }
}
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
