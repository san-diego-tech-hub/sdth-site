export const notEmpty = (val) => val.length > 0

export const isValidEmail = (val) => /.@./.test(val)

export const usernameField = {
  name: "username",
  validate: notEmpty,
  errorMsg: "Please enter your name"
}

export const emailField = {
  name: "email",
  validate: isValidEmail,
  errorMsg: "Email must be valid"
}
