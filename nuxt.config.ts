// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-quasar-ui', '@pinia/nuxt', '@nuxtjs/eslint-module', 'nuxt3-leaflet'],
  css: ['@/assets/styles/base.scss'],
  quasar: {
    plugins: [
      // "Notify",
    ],
    sassVariables: '@/assets/styles/quasar-variables.sass',
    extras: {
      fontIcons: ['material-icons', 'fontawesome-v6'],
    },
  },
})
