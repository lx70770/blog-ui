import validator from 'validator'

export const validatorUserName = name => {
  return validator.isLength(name, { min: 2, max: 12 })
}

export const validatorPassword1 = password => {
  return (
    validator.isLength(password, { min: 6, max: 32 }) &&
    validator.matches(password, '^(?![0-9])(?![a-zA-Z]+$)[0-9A-Za-z]')
  )
}

export const validatorPassword2 = (password1, password2) => {
  return password2 !== '' && password1 === password2
}

export const validatorEmail = email => {
  return validator.isEmail(email)
}
