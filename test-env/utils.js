const { fireEvent } = require("react-testing-library")

export function fillInput(element, text) {
  fireEvent.change(element, { target: { value: text } })
}
