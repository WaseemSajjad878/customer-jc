// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-quasar-ui", "@pinia/nuxt"],
  css: ["@/assets/styles/base.scss"],
  quasar: {
    plugins: [
      // "Notify",
    ],
    sassVariables: "@/assets/styles/quasar-variables.sass",
    extras: {
      fontIcons: ["material-icons"],
    },
  },
});
