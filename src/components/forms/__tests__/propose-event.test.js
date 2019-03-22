import React from "react"
import { fireEvent, render } from "react-testing-library"
// import { toast as MockToast } from "react-toastify"
// import { asyncEvent, fillInput } from "Test/utils"
import { fillInput } from "Test/utils"
import ProposeEvent from "../propose-event"

jest.mock("react-toastify", () => ({
  ToastContainer: jest.fn(() => null),
  toast: {
    success: jest.fn(),
    error: jest.fn()
  }
}))

afterEach(jest.clearAllMocks)

const EMPTY = ""

const VALID = {
  email: "has@symbol",
  start: "2098-03-21T15:00",
  end: "2098-03-21T17:00",
  value: "Some value"
}

const INVALID = {
  email: "noAtsymbol",
  end: "2098-03-21T14:00"
}

describe("Validation:", () => {
  test("prevents form submission unless all fields are valid", () => {
    const { container, getByTestId } = render(<ProposeEvent />)
    const getById = (id) => container.querySelector(`#${id}`)

    const username = getById("username")
    const email = getById("email")
    const eventName = getById("event-name")
    const location = getById("location")
    const start = getById("start")
    const end = getById("end")
    const description = getById("description")
    const submit = getByTestId("submit")

    // does NOT submit if username is empty
    fillInput(username, EMPTY) // <<<< EMPTY
    fillInput(email, VALID.email)
    fillInput(eventName, VALID.value)
    fillInput(location, VALID.value)
    fillInput(start, VALID.start)
    fillInput(end, VALID.end)
    fillInput(description, VALID.value)
    fireEvent.click(submit)
    expect(fetch).not.toHaveBeenCalled()

    // does NOT submit if email is invalid
    fillInput(username, VALID.value)
    fillInput(email, INVALID.email) // <<<< INVALID
    fillInput(eventName, VALID.value)
    fillInput(location, VALID.value)
    fillInput(start, VALID.start)
    fillInput(end, VALID.end)
    fillInput(description, VALID.value)
    fireEvent.click(submit)
    expect(fetch).not.toHaveBeenCalled()

    // does NOT submit if eventName is empty
    fillInput(username, VALID.value)
    fillInput(email, VALID.email)
    fillInput(eventName, EMPTY) // <<<< EMPTY
    fillInput(location, VALID.value)
    fillInput(start, VALID.start)
    fillInput(end, VALID.end)
    fillInput(description, VALID.value)
    fireEvent.click(submit)
    expect(fetch).not.toHaveBeenCalled()

    // does NOT submit if location is empty
    fillInput(username, VALID.value)
    fillInput(email, VALID.email)
    fillInput(eventName, VALID.value)
    fillInput(location, EMPTY) // <<<< EMPTY
    fillInput(start, VALID.start)
    fillInput(end, VALID.end)
    fillInput(description, VALID.value)
    fireEvent.click(submit)
    expect(fetch).not.toHaveBeenCalled()

    // does NOT submit if start is empty
    fillInput(username, VALID.value)
    fillInput(email, VALID.email)
    fillInput(eventName, VALID.value)
    fillInput(location, VALID.value)
    fillInput(start, EMPTY) // <<<< EMPTY
    fillInput(end, VALID.end)
    fillInput(description, VALID.value)
    fireEvent.click(submit)
    expect(fetch).not.toHaveBeenCalled()

    // does NOT submit if end time is BEFORE start time
    fillInput(username, VALID.value)
    fillInput(email, VALID.email)
    fillInput(eventName, VALID.value)
    fillInput(location, VALID.value)
    fillInput(start, VALID.start)
    fillInput(end, INVALID.end) // <<<< end time is BEFORE start time
    fillInput(description, VALID.value)
    fireEvent.click(submit)
    expect(fetch).not.toHaveBeenCalled()

    // does NOT submit if description is empty
    fillInput(username, VALID.value)
    fillInput(email, VALID.email)
    fillInput(eventName, VALID.value)
    fillInput(location, VALID.value)
    fillInput(start, VALID.start)
    fillInput(end, VALID.end)
    fillInput(description, EMPTY) // <<<< EMPTY
    fireEvent.click(submit)
    expect(fetch).not.toHaveBeenCalled()

    // DOES submit if all fields are valid
    fillInput(username, VALID.value)
    fillInput(email, VALID.email)
    fillInput(eventName, VALID.value)
    fillInput(location, VALID.value)
    fillInput(start, VALID.start)
    fillInput(end, VALID.end)
    fillInput(description, VALID.value)
    fireEvent.click(submit)
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  test("displays validation errors", () => {
    const { container, getByTestId } = render(<ProposeEvent />)
    const getById = (id) => container.querySelector(`#${id}`)

    const username = getById("username")
    const email = getById("email")
    const eventName = getById("event-name")
    const location = getById("location")
    const start = getById("start")
    const end = getById("end")
    const description = getById("description")
    const submit = getByTestId("submit")

    const expectError = (field) => {
      expect(getByTestId(`${field}-error`)).not.toBeEmpty()
    }

    const expectNoError = (field) => {
      expect(getByTestId(`${field}-error`)).toBeEmpty()
    }

    // errors are NOT displayed initially
    expectNoError("username")
    expectNoError("email")
    expectNoError("event-name")
    expectNoError("location")
    expectNoError("start")
    expectNoError("end")
    expectNoError("description")

    // errors are displayed after submission attempt
    fillInput(start, EMPTY)
    fireEvent.click(submit)
    expectError("username")
    expectError("email")
    expectError("event-name")
    expectError("location")
    expectError("start")
    expectError("end")
    expectError("description")

    // errors disappear when fields become valid
    fillInput(username, VALID.value)
    expectNoError("username")

    fillInput(email, VALID.email)
    expectNoError("email")

    fillInput(eventName, VALID.value)
    expectNoError("event-name")

    fillInput(location, VALID.value)
    expectNoError("location")

    fillInput(start, VALID.start)
    expectNoError("start")

    fillInput(end, VALID.end)
    expectNoError("end")

    fillInput(description, VALID.value)
    expectNoError("description")

    // errors reappear when fields become invalid
    fillInput(username, EMPTY)
    expectError("username")

    fillInput(email, INVALID.email)
    expectError("email")

    fillInput(eventName, EMPTY)
    expectError("event-name")

    fillInput(location, EMPTY)
    expectError("location")

    fillInput(start, EMPTY)
    expectError("start")

    fillInput(end, INVALID.end)
    expectError("end")

    fillInput(description, EMPTY)
    expectError("description")
  })
})

describe("Submission results:", () => {
  xtest("displays success message if submitted successfully", async () => {

  })

  xtest("displays error message if fetch returns an error", async () => {

  })

  xtest("does NOT display any message if there are validation errors", async () => {

  })
})
