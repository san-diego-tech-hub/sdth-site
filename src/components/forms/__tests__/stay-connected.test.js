import React from "react"
import { render } from "react-testing-library"
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
  return () => Promise.resolve({
    result: "success",
    msg: "Thanks for subscribing!"
  })
})

describe("Appearance", () => {
  test("matches its snapshot", () => {
    const { getByTestId } = render(<StayConnected />)
    expect(getByTestId("stay-connected")).toMatchSnapshot()
  })
})

describe("Validation Errors", () => {
  xtest("invalid inputs prevent form submission", () => {
    render(<StayConnected />)
    expect(MockAddToMailchimp).not.toHaveBeenCalled()
  })
})
