import React from "react"
import { fireEvent, render } from "react-testing-library"
import { fillInput } from "Test/utils"
import { library } from "@fortawesome/fontawesome-svg-core"
import MockAddToMailchimp from "gatsby-plugin-mailchimp"
import {
  faFacebookSquare,
  faLinkedin,
  faSlack,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons"
import StayConnected from "../stay-connected"

library.add(
  faFacebookSquare,
  faLinkedin,
  faSlack,
  faTwitterSquare
)

jest.mock("gatsby-plugin-mailchimp", () => {
  return jest.fn(() => Promise.resolve({
    result: "success",
    msg: "Thanks for subscribing!"
  }))
})

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
    expect(MockAddToMailchimp).toHaveBeenCalledTimes(1)
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

describe("Success Message:", () => {
  xtest("displays success message if subscribed", () => {

  })

  xtest("does NOT display success message if validation errors", () => {

  })
})
