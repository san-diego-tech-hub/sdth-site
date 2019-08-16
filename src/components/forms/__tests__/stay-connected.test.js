import React from "react"
import { fireEvent, render } from "react-testing-library"
import { toast as MockToast } from "react-toastify"
import MockAddToMailchimp from "gatsby-plugin-mailchimp"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faFacebookSquare,
  faLinkedin,
  faSlack,
  faTwitterSquare,
  faGithubSquare
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
  faTwitterSquare,
  faGithubSquare
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

const EMPTY = ""

function renderStayConnected() {
  const { container, getByTestId } = render(<StayConnected />)
  const getById = (id) => container.querySelector(`#${id}`)

  const username = getById("username")
  const email = getById("email")
  const comments = getById("comments")
  const subscribe = getByTestId("subscribe")

  return {
    username,
    email,
    comments,
    subscribe,
    getByTestId
  }
}

test("matches its snapshot", () => {
  const { getByTestId } = render(<StayConnected />)
  expect(getByTestId("stay-connected")).toMatchSnapshot()
})

describe("Validation:", () => {
  test("prevents form submission unless name and email are valid", () => {
    const {
      username,
      email,
      comments,
      subscribe
    } = renderStayConnected()

    // does NOT submit if name is empty
    fillInput(username, EMPTY)
    fillInput(email, "has@symbol")
    fillInput(comments, "a comment")
    fireEvent.click(subscribe)
    expect(MockAddToMailchimp).not.toHaveBeenCalled()

    // does NOT submit if email is invalid
    fillInput(username, "Name")
    fillInput(email, "noAtSymbol")
    fillInput(comments, "a comment")
    fireEvent.click(subscribe)
    expect(MockAddToMailchimp).not.toHaveBeenCalled()

    // DOES submit if name and email are valid
    fillInput(username, "Name")
    fillInput(email, "has@symbol")
    fillInput(comments, EMPTY)
    fireEvent.click(subscribe)
    expect(MockAddToMailchimp).toHaveBeenCalledWith(
      "has@symbol", {
        NAME: "Name",
        COMMENTS: ""
      }
    )
  })

  test("displays validation errors", () => {
    const {
      username,
      email,
      subscribe,
      getByTestId
    } = renderStayConnected()

    const expectError = (field) => {
      expect(getByTestId(`${field}-error`)).not.toBeEmpty()
    }

    const expectNoError = (field) => {
      expect(getByTestId(`${field}-error`)).toBeEmpty()
    }


    // errors are NOT displayed initially
    expectNoError("username")
    expectNoError("email")

    // errors are displayed after submission attempt
    fireEvent.click(subscribe)
    expectError("username")
    expectError("email")

    // errors disappear when fields become valid
    fillInput(username, "Name")
    expectNoError("username")

    fillInput(email, "has@symbol")
    expectNoError("email")

    // errors reappear when fields become invalid
    fillInput(username, EMPTY)
    expectError("username")

    fillInput(email, "noAtSymbol")
    expectError("email")
  })
})

describe("Submission results:", () => {
  test("displays success message if subscribed", async () => {
    const {
      username,
      email,
      subscribe
    } = renderStayConnected()

    fillInput(username, "Name")
    fillInput(email, "has@symbol")
    fireEvent.click(subscribe)
    await asyncEvent()

    expect(MockToast.success).toHaveBeenCalledTimes(1)
    expect(MockToast.error).not.toHaveBeenCalled()
  })

  test("displays error message if MailChimp returns error", async () => {
    const {
      username,
      email,
      subscribe
    } = renderStayConnected()

    fillInput(username, "Name")
    fillInput(email, MOCK_INVALID_EMAIL)
    fireEvent.click(subscribe)
    await asyncEvent()

    expect(MockToast.success).not.toHaveBeenCalled()
    expect(MockToast.error).toHaveBeenCalledTimes(1)
  })

  test("does NOT display any message if there are validation errors", async () => {
    const { subscribe } = renderStayConnected()

    fireEvent.click(subscribe)
    await asyncEvent()

    expect(MockToast.success).not.toHaveBeenCalled()
    expect(MockToast.error).not.toHaveBeenCalled()
  })

  test("resets field values on successful submission", () => {
    const {
      username,
      email,
      subscribe
    } = renderStayConnected()

    fillInput(username, "Name")
    fillInput(email, "has@symbol")

    // fields are populated before submit
    expect(username.value).toEqual("Name")
    expect(email.value).toEqual("has@symbol")

    fireEvent.click(subscribe)

    // fields are cleared after successful submit
    expect(username.value).toEqual("")
    expect(email.value).toEqual("")
  })
})
