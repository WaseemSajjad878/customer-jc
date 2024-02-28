import { defineStore } from 'pinia'

const initialState = () => ({
  offers: [],
})
export const useOfferStore = defineStore({
  id: 'offer',
  state: initialState,
  actions: {
    async fetchOffers() {
      if (this.offers.length) return
      let res = await fetch('/data/offers.json')
      let data = await res.json()
      this.offers = data.data
      console.log('offers', this.offers)
    },
  },
  getters: {
    getOffers: (state) => state.offers,
  },
})
