import { api } from './axios'

export const login = async (data) => {
  return await api.post('/users/login', data)
}

export const logout = async () => {
  return await api.get('/users/logout')
}
