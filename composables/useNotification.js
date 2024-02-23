import { computed, ref } from 'vue'

const defaultValue = {
  message: '',
  type: 'success',
  show: false,
}

const notification = ref(defaultValue)

export default function useNotification() {
  const showNotification = (message, type = 'success') => {
    notification.value = { message, type, show: true }
    setTimeout(() => hideNotification(), 3000)
  }

  const hideNotification = () => {
    notification.value.show = false
  }

  return {
    notification,
    showNotification,
    hideNotification,
  }
}
