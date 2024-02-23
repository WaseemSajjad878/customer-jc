import { defineStore } from 'pinia'
import { Offer } from '@/stores/models'

const initialState = () => ({
  offer: new Offer(),
  offers: [],
})
export const useOfferStore = defineStore({
  id: 'offer',
  state: initialState,
  actions: {
    async fetchOffers() {
      if (this.offers.length) return
      let res = await fetch('/data/offers.json')
      this.offers = await res.json()
    },
  },
  getters: {
    getOffers: (state) => state.offers,
  },
})
