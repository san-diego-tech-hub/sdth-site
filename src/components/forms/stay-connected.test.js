import React from "react"
import { render } from "react-testing-library"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faSlack, faLinkedin, faFacebookSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"

import StayConnected from "./stay-connected"

library.add(faSlack, faLinkedin, faFacebookSquare, faTwitterSquare)

describe("The StayConnected component", () => {
  test("matches its snapshot", () => {
    const { getByTestId } = render(<StayConnected />)
    expect(getByTestId("stay-connected")).toMatchSnapshot()
  })
})
