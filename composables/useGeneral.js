import moment from 'moment'

export function useNumber(number, locale = 'en-US') {
  return Intl.NumberFormat(locale).format(number)
}

export function useCurrency(amount, currency = 'AED', locale = 'en-US') {
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount)
}

export function convertSecondToHHMM(seconds) {
  const duration = moment.duration(seconds, 'seconds')
  const hour = `${Math.floor(duration.asHours())}`.padStart(2, '0')
  const minute = `${duration.minutes()}`.padStart(2, '0')
  return { hour, minute }
}

export function dataURLtoFile(dataURL, filename) {
  var arr = dataURL.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n)

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File([u8arr], filename, { type: mime })
}

export function formateDate(date, format) {
  return moment(date, format).format(format)
}

export function yearOptions(startYear = 1980) {
  const currentYear = new Date().getFullYear()
  return Array.from({ length: currentYear - startYear + 1 }, (_, index) => startYear + index)
}

export function isChange(oldValue, newValue) {
  return JSON.stringify(oldValue) != JSON.stringify(newValue)
}
