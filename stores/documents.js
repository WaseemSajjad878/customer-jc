import { defineStore } from 'pinia'
import { deleteAircraftFiles, saveAircraftAocFile, saveAircraftFiles } from '@/utils/aircraft'

const initialState = () => ({
  acoDocument: null,
  exteriorImages: [],
  interiorImages: [],
  floorPlanImages: [],
})
export const useDocumentsStore = defineStore({
  id: 'documents',
  state: initialState,
  actions: {
    async uploadFiles(id, type, file1, file2, file3) {
      await saveAircraftFiles(id, type, file1, file2, file3)
    },
    async uploadAocFile(id, type, file) {
      await saveAircraftAocFile(id, type, file)
    },

    async deleteAircraftFiles(id, type, batch) {
      await deleteAircraftFiles(id, type, batch)
    },
  },
  getters: {},
})
