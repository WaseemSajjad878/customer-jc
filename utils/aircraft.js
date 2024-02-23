import { api } from './axios'
import { UPLOAD_POSITION } from '../constants/index'

export const addAircraft = async (data) => {
  return await api.post('/aircrafts', data)
}
export const updaeAircraft = async (id, data) => {
  return await api.patch(`/aircrafts/id/${id}`, data)
}

export const getAircrafts = async () => {
  return await api.get('/aircrafts')
}

export const getAircraftById = async (id) => {
  return await api.get(`/aircrafts/id/${id}/`)
}

export const getAircraftFiles = async (id) => {
  return await api.get(`/aircrafts/id/${id}/file/`)
}

export const saveAircraftFiles = async (id, type, file1, file2, file3) => {
  const body = new FormData()
  body.append('uploadPosition', type)
  body.append('aircraft_file', file1)
  body.append('aircraft_file', file2)
  body.append('aircraft_file', file3)
  return await api.post(`/aircrafts/id/${id}/file/`, body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const saveAircraftAocFile = async (id, type, file) => {
  const body = new FormData()
  body.append('uploadPosition', type)
  body.append('aocFileTitle', 'test title')
  body.append('aocFileExpiry', '2025')
  body.append('aircraft_file', file)

  return await api.post(`/aircrafts/id/${id}/file/`, body, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const deleteAircraftFiles = async (id, type, batch) => {
  const data = {
    uploadPosition: type,
    batch,
  }
  return await api.delete(`/aircrafts/id/${id}/file/`, {
    data: data,
  })
}

export const updateRegions = async (id, data) => {
  const body = {
    operating_regions: data,
  }
  return await api.patch(`/aircrafts/id/${id}/regions/`, body)
}

export const updateSafeties = async (id, data) => {
  const body = {
    safety: data,
  }
  return await api.patch(`/aircrafts/id/${id}/safeties/`, body)
}

export const updateAmenities = async (id, data) => {
  const body = {
    amenities: data,
  }
  return await api.patch(`/aircrafts/id/${id}/amenities/`, body)
}
