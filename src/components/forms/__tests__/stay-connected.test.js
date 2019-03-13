import React from "react"
import { render } from "react-testing-library"
import MockAddToMailchimp from "gatsby-plugin-mailchimp"
import StayConnected from "../stay-connected"

jest.mock("gatsby-plugin-mailchimp", () => {
  return () => Promise.resolve({
    result: "success",
    msg: "Thanks for subscribing!"
  })
})

describe("Validation Errors", () => {
  xtest("invalid inputs prevent form submission", () => {
    render(<StayConnected />)
    expect(MockAddToMailchimp).not.toHaveBeenCalled()
  })
})
