import { defineStore } from 'pinia'
import { User } from './models/User'
import { login, logout } from '@/utils/auth'
import useNotification from '@/composables/useNotification'
import router from '@/router'

const $notify = useNotification()

const initialState = () => ({
  authenticated: false,
  user: new User(),
  token: localStorage.getItem('_token') || null,
})

export const useAuthStore = defineStore({
  id: 'auth',
  state: initialState,
  actions: {
    async login(data) {
      try {
        const res = await login(data)
        this.user = res.data
        localStorage.setItem('_token', res.data.token)
        this.authenticated = true
        $notify.showNotification('Login Success', 'success')
        router.push('/dashboard')
      } catch (err) {
        $notify.showNotification(err.data.message, 'error')
      }
    },

    reset() {
      localStorage.removeItem('_token')
      router.push('/login')
      this.authenticated = false
      this.user = new User()
      this.token = null
    },

    async logout() {
      try {
        await logout()
        this.reset()
      } catch (err) {
        $notify.showNotification(err.data.message, 'error')
      }
    },
  },
  getters: {
    isAuthenticated: (state) => state.authenticated,
    getAuthStatus: (state) => !!state.user.id || state.token,
    getAuthToken: (state) => state.token,
    getAuthUser: (state) => state.user,
  },
})
