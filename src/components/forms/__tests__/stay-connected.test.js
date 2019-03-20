import React from "react"
import { fireEvent, render } from "react-testing-library"
import { toast as MockToast } from "react-toastify"
import MockAddToMailchimp from "gatsby-plugin-mailchimp"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faFacebookSquare,
  faLinkedin,
  faSlack,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons"
import {
  MOCK_INVALID_EMAIL,
  asyncEvent,
  fillInput
} from "Test/utils"
import StayConnected from "../stay-connected"

library.add(
  faFacebookSquare,
  faLinkedin,
  faSlack,
  faTwitterSquare
)

jest.mock("gatsby-plugin-mailchimp", () => {
  return jest.fn(email => {
    const success = {
      result: "success",
      msg: "Thanks for subscribing!"
    }

    const error = {
      result: "error",
      msg: "Something went wrong. 😢"
    }

    const response = email === MOCK_INVALID_EMAIL
      ? error
      : success

    return Promise.resolve(response)
  })
})

jest.mock("react-toastify", () => ({
  ToastContainer: jest.fn(() => null),
  toast: {
    success: jest.fn(),
    error: jest.fn()
  }
}))

afterEach(jest.clearAllMocks)

test("matches its snapshot", () => {
  const { getByTestId } = render(<StayConnected />)
  expect(getByTestId("stay-connected")).toMatchSnapshot()
})

describe("Validation:", () => {
  test("prevents form submission unless name and email are valid", () => {
    const { getByLabelText, getByTestId } = render(<StayConnected />)

    const name = getByLabelText(/name/i)
    const comments = getByLabelText(/comments/i)
    const email = getByLabelText(/email/i)
    const subscribe = getByTestId("subscribe")

    // does NOT submit if name is blank
    fillInput(name, "")
    fillInput(email, "has@symbol")
    fillInput(comments, "a comment")
    fireEvent.click(subscribe)
    expect(MockAddToMailchimp).not.toHaveBeenCalled()

    // does NOT submit if email is invalid
    fillInput(name, "Name")
    fillInput(email, "noAtSymbol")
    fillInput(comments, "a comment")
    fireEvent.click(subscribe)
    expect(MockAddToMailchimp).not.toHaveBeenCalled()

    // DOES submit if name and email are valid
    fillInput(name, "Name")
    fillInput(email, "has@symbol")
    fillInput(comments, "")
    fireEvent.click(subscribe)
    expect(MockAddToMailchimp).toHaveBeenCalledWith(
      "has@symbol", {
        NAME: "Name",
        COMMENTS: ""
      }
    )
  })

  test("displays validation errors", () => {
    const { getByLabelText, getByTestId } = render(<StayConnected />)

    const name = getByLabelText(/name/i)
    const email = getByLabelText(/email/i)
    const subscribe = getByTestId("subscribe")

    // errors are NOT displayed initially
    expect(getByTestId("name-error")).toBeEmpty()
    expect(getByTestId("email-error")).toBeEmpty()

    // errors are displayed after submission attempt
    fireEvent.click(subscribe)
    expect(getByTestId("name-error")).not.toBeEmpty()
    expect(getByTestId("email-error")).not.toBeEmpty()

    // errors disappear when fields become valid
    fillInput(name, "Name")
    expect(getByTestId("name-error")).toBeEmpty()
    fillInput(email, "has@symbol")
    expect(getByTestId("email-error")).toBeEmpty()

    // errors reappear when fields become invalid
    fillInput(name, "")
    expect(getByTestId("name-error")).not.toBeEmpty()
    fillInput(email, "noAtSymbol")
    expect(getByTestId("email-error")).not.toBeEmpty()
  })
})

describe("Submission results:", () => {
  test("displays success message if subscribed", async () => {
    const { getByLabelText, getByTestId } = render(<StayConnected />)

    const name = getByLabelText(/name/i)
    const email = getByLabelText(/email/i)
    const subscribe = getByTestId("subscribe")

    fillInput(name, "Name")
    fillInput(email, "has@symbol")
    fireEvent.click(subscribe)
    await asyncEvent()

    expect(MockToast.success).toHaveBeenCalledTimes(1)
    expect(MockToast.error).not.toHaveBeenCalled()
  })

  test("displays error message if mailchimp returns error", async () => {
    const { getByLabelText, getByTestId } = render(<StayConnected />)

    const name = getByLabelText(/name/i)
    const email = getByLabelText(/email/i)
    const subscribe = getByTestId("subscribe")

    fillInput(name, "Name")
    fillInput(email, MOCK_INVALID_EMAIL)
    fireEvent.click(subscribe)
    await asyncEvent()

    expect(MockToast.success).not.toHaveBeenCalled()
    expect(MockToast.error).toHaveBeenCalledTimes(1)
  })

  test("does NOT display any message if validation errors", async () => {
    const { getByTestId } = render(<StayConnected />)

    const subscribe = getByTestId("subscribe")

    fireEvent.click(subscribe)
    await asyncEvent()

    expect(MockToast.success).not.toHaveBeenCalled()
    expect(MockToast.error).not.toHaveBeenCalled()
  })

  test("resets field values on successful submission", () => {
    const { getByLabelText, getByTestId } = render(<StayConnected />)

    const name = getByLabelText(/name/i)
    const email = getByLabelText(/email/i)
    const subscribe = getByTestId("subscribe")

    fillInput(name, "Name")
    fillInput(email, "has@symbol")

    // fields are populated before submit
    expect(name.value).toEqual("Name")
    expect(email.value).toEqual("has@symbol")

    fireEvent.click(subscribe)

    // fields are cleared after successful submit
    expect(name.value).toEqual("")
    expect(email.value).toEqual("")
  })
})
