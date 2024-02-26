import { defineStore } from 'pinia'
import { getRegions } from '@/utils/general'
import { updateRegions } from '@/utils/aircraft'

const initialState = () => ({
  regions: [],
})
export const useRegionStore = defineStore({
  id: 'region',
  state: initialState,
  actions: {
    async fetchRegions() {
      let res = await getRegions()
      this.regions = res.data
    },
    async updateRegions(id, data) {
      const res = await updateRegions(id, data)
      return res
    },
  },
  getters: {
    getRegions: (state) => state.regions,
  },
})
