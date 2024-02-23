import { api } from './axios'

export const getRegions = async () => {
  return await api.get('/general/regions')
}

export const getAirports = async (query = 'ccj') => {
  // ?q=${query}
  return await api.get('/general/airports')
}

export const getCountries = async () => {
  return await api.get('/general/countries')
}

export const getCurrencies = async () => {
  return await api.get('/general/currencies')
}

export const getAircraftTypes = async () => {
  return await api.get('/general/aircraft_types')
}

export const getAircraftModels = async () => {
  return await api.get('/general/aircraft_models')
}

export const getAmenities = async (type = 'aircraft') => {
  return await api.get(`/general/amenities?type=${type}`)
}
