export const notEmpty = (val) => val.trim().length > 0

export const isValidEmail = (val) => /.@./.test(val)

export const isValidPhone = (val) => /^\d{10}$/.test(val)

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

export const contactPhoneField = {
  name: "contactPhone",
  errorMsg: ""
}

export const phoneField = {
  name: "phone",
  validate: isValidPhone,
  errorMsg: "Please enter a valid phone number"
}

export const websiteField = {
  name: "website",
  errorMsg: ""
}

export const descriptionField = {
  name: "description",
  validate: notEmpty,
  errorMsg: "Description cannot be blank"
}

export const venueNameField = {
  name: "venueName",
  validate: notEmpty,
  errorMsg: "Venue name cannot be blank"
}

export const addressField = {
  name: "address",
  validate: notEmpty,
  errorMsg: "Address field cannot be blank"
}

export const facebookField = {
  name: "facebook",
  errorMsg: ""
}

export const linkedinField = {
  name: "linkedin",
  errorMsg: ""
}

export const githubField = {
  name: "github",
  errorMsg: ""
}

export const twitterField = {
  name: "twitter",
  errorMsg: ""
}

export const imageUrlField = {
  name: "image",
  errorMsg: ""
}

export const amenitiesField = {
  name: "amenities",
  errorMsg: ""
}

export const costField = {
  name: "cost",
  errorMsg: ""
}

export const capacityField = {
  name: "capacity",
  validate: notEmpty,
  errorMsg: "Capacity field cannot be empty"
}

export const techStackField = {
  name: "techStack",
  errorMsg: ""
}
