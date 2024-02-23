import { defineStore } from 'pinia'
import { Request } from '@/stores/models'

const initialState = () => ({
  request: new Request(),
  requests: [],
  activeRequest: null,
})
export const useRequestStore = defineStore({
  id: 'request',
  state: initialState,
  actions: {
    async fetchRequests() {
      if (this.requests.length) return
      let res = await fetch('/data/requests.json')
      this.requests = await res.json()
      this.request = this.requests[0]
    },
    selectRequest(id) {
      this.request = this.requests.find((x) => x.request_id == id)
    },
  },
  getters: {
    getRequests: (state) => state.requests,
    getActiveRequest: (state) => state.request,
  },
})
