const { port } = require("../../jest-puppeteer.config").server

const url = `http://localhost:${port}`

describe("Home page", () => {
  beforeAll(async () => {
    await page.goto(`${url}`)
  })

  it("works", async () => {
    const image = await page.screenshot()
    expect(image).toMatchImageSnapshot()
  })
})
