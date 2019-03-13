import React from "react"
import { fireEvent, render, Simulate } from "react-testing-library"
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
  test("no email prevents subscribe form submission", () => {
    const { getByLabelText, getByTestId } = render(<StayConnected />)
    const name = getByLabelText(/name/i)
    const comments = getByLabelText(/comments/i)
    const subscribe = getByTestId("subscribe")

    const email = getByLabelText(/email/i)

    name.value = "Some name"
    comments.value = "a comment"
    // fireEvent.change(email, { target: { value: "email@something.com" } })
    Simulate.change(email, { target: { value: "email@something.com" } })
    fireEvent.click(subscribe)

    expect(MockAddToMailchimp).not.toHaveBeenCalled()
  })
})

describe("Successful newsletter subscription", () => {
  xtest("invalid inputs prevent form submission", () => {
    const { getByTestId } = render(<StayConnected />)
    const subscribe = getByTestId("subscribe")

    fireEvent.click(subscribe)

    expect(MockAddToMailchimp).not.toHaveBeenCalled()
  })
})
