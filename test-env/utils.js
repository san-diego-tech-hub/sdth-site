const { fireEvent } = require("react-testing-library")

export const MOCK_INVALID_EMAIL = "invalid@email"

export function asyncEvent() {
  return new Promise(resolve => {
    setTimeout(resolve, 0)
  })
}

export function fillInput(element, text) {
  fireEvent.change(element, { target: { value: text } })
}
