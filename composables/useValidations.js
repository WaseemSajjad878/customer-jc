export const required = (val) => {
  return !!val || 'This field is required'
}

export const password = (val) => {
  if (!val) return 'This field is required'
  const regx = /^(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,32}$/
  return (
    regx.test(val) ||
    'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
  )
}

export const confirmPassword = (val, pass) => {
  // console.log(val, pass)
  return val == pass || 'Passwords are not same'
}

export const email = (value) => {
  const pattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return pattern.test(value) || 'Invalid Email'
}
