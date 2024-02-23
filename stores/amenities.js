import { defineStore } from "pinia";
import { getAmenities } from "@/utils/general";
import { updateAmenities } from "@/utils/aircraft";

const initialState = () => ({
  amenities: [],
});
export const useAmenitiesStore = defineStore({
  id: "amenities",
  state: initialState,
  actions: {
    async fetchAmenities() {
      let res = await getAmenities();
      console.log("amenities", res.data);
      this.amenities = res.data;
    },
    async updateAmenities(id, data) {
      const res = await updateAmenities(id, data);
      return res;
    },
  },
  getters: {},
});
