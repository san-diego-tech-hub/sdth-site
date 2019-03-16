import React from "react"
import { render } from "react-testing-library"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

import Header from "./index"

library.add(faCaretDown)

test("The Header component matches its snapshot", () => {
  const { getByTestId } = render(<Header />)
  expect(getByTestId("header")).toMatchSnapshot()
})
