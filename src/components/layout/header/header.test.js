import React from "react"
import { render } from "react-testing-library"

import Header from "./index"

test("The Header component matches its snapshot", () => {
  const { getByTestId } = render(<Header />)
  expect(getByTestId("header")).toMatchSnapshot()
})
