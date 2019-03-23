import "jest-dom/extend-expect"

// this is basically: afterEach(cleanup)
import "react-testing-library/cleanup-after-each"

import MockFetch from "jest-fetch-mock"

global.fetch = MockFetch
