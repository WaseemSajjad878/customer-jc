// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-quasar-ui', '@pinia/nuxt', '@nuxtjs/eslint-module'],
  css: ['@/assets/styles/base.scss'],
  plugins: [
    { src: '~/plugins/leaflet.client.js' }, // Register the plugin globally
  ],
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
