export const notEmpty = (val) => val.trim().length > 0

export const isValidEmail = (val) => /.@./.test(val)

export const isValidPhone = (val) => /^\d{10}$/.test(val)

export const usernameField = {
  name: "username",
  validate: notEmpty,
  errorMsg: "Please enter your name"
}

export const socialField = {
  name: "social"
}

export const emailField = {
  name: "email",
  validate: isValidEmail,
  errorMsg: "Email must be valid"
}

export const nameField = {
  name: "name",
  validate: notEmpty,
  errorMsg: "Name field cannot be blank"
}

export const phoneField = {
  name: "phone",
  validate: isValidPhone,
  errorMsg: "Please enter a valid phone number"
}

export const websiteField = {
  name: "website"
}

export const descriptionField = {
  name: "description",
  validate: notEmpty,
  errorMsg: "Briefly describe yourself, your skills, and what you're looking for."
}
