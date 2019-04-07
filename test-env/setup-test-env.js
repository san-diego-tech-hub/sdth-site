import "jest-dom/extend-expect"

// this is basically: afterEach(cleanup)
import "react-testing-library/cleanup-after-each"

import MockFetch from "jest-fetch-mock"

global.fetch = MockFetch

// Setup for visual testing
require("expect-puppeteer")
const { toMatchImageSnapshot } = require("jest-image-snapshot")

expect.extend({ toMatchImageSnapshot })
jest.setTimeout(25000)
