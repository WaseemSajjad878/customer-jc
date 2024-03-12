import L from 'leaflet'
import '@elfalem/leaflet-curve'
// import './leaflet-curve'
import 'leaflet/dist/leaflet.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('L', L) // Provide L as a Nuxt App Provider
})
