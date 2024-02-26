import { defineStore } from 'pinia'
import { getAircraftModels } from '@/utils/general'

const initialState = () => ({
  selectedAircraft: null,
  aircraftModels: [],
  search: '',
})
export const useAircraftModelStore = defineStore({
  id: 'aircraftModel',
  state: initialState,
  actions: {
    async fetchAircraftModels() {
      if (this.aircraftModels.length > 0) return
      let res = await getAircraftModels()
      console.log('aircraft models', res.data)
      this.aircraftModels = res.data
    },
  },
  upsetAircraft() {
    const aircraft = this.aircraft.find((a) => a.id === this.aircraft.id)
    aircraft ? Object.assign(this.aircraft, aircraft) : this.aircrafts.push(this.aircraft)
  },
  getters: {
    getAircraftModels: (state) => state.aircraftModels,
    getGroupedAircraftModels: (state) => {
      if (state.aircraftModels) {
        const data = state.search
          ? state.aircraftModels.filter((x) => x.title.toLowerCase().includes(state.search.toLowerCase()))
          : state.aircraftModels

        const groups = {}

        data.forEach((obj) => {
          const firstWord = obj.title.split(' ')[0]

          if (!groups[firstWord]) {
            groups[firstWord] = [obj]
          } else {
            groups[firstWord].push(obj)
          }
        })

        if (state.search) {
          const resultGroups = Object.entries(groups).map(([key, group]) => ({
            group: key,
            data: group,
          }))
          return resultGroups
        } else {
          const resultGroups = Object.entries(groups)
            .filter(([key, group]) => group.length >= 3)
            .map(([key, group]) => ({ group: key, data: group }))

          const otherGroup = Object.entries(groups)
            .filter(([key, group]) => group.length < 3)
            .map(([key, group]) => group)
            .flat()

          if (otherGroup.length > 0) {
            resultGroups.push({ group: 'Other', data: otherGroup })
          }

          return resultGroups
        }
      }
      return []
    },
  },
})
