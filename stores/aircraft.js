import { defineStore } from "pinia";
import {
  addAircraft,
  getAircraftById,
  getAircraftFiles,
  getAircrafts,
  updaeAircraft,
} from "@/utils/aircraft";
import { getAirports } from "@/utils/general";

const initialState = () => ({
  aircrafts: [],
  aircraft: null,
  search: "",
  airports: [],
});
export const useAircraftStore = defineStore({
  id: "aircraft",
  state: initialState,
  actions: {
    async fetchAircrafts() {
      let res = await getAircrafts();
      console.log("aircrafts", res.data[2]);
      this.aircrafts = res.data;
    },
    async fetchAircraftById(id) {
      let res = await getAircraftById(id);
      console.log("aircrafts", res.data);
      this.aircraft = res.data[0];
    },
    async addAricraft(data) {
      return await addAircraft(data);
    },
    async updateAricraft(id, data) {
      return await updaeAircraft(id, data);
    },
    async getAircraftFiles(id) {
      const res = await getAircraftFiles(id);
      return res;
    },
    async fetchAirports() {
      let res = await getAirports();
      this.airports = res.data;
    },
  },
  getters: {
    getAircrafts: (state) =>
      state.search
        ? state.aircrafts.filter((x) => x.title.includes(state.search))
        : state.aircrafts,
    getAircraft: (state) => state.aircraft,
  },
});
