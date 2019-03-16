import traverseObject from "./traverseObject"

describe("traverseObject", () => {
  it("tests that it transforms description key", () => {
    const data = {
      title: "Title",
      mainDescription: "Description 1",
      leads: [
        {
          test: {
            title: "Test Title",
            anotherDescription: "Description 2"
          }
        }
      ]
    }

    const CHANGED = "I'm Changed"
    const updated = traverseObject(data, () => CHANGED)

    expect(updated.mainDescription).toBe(CHANGED)
    expect(updated.leads[0].test.anotherDescription).toBe(CHANGED)

    expect(updated.title).toBe("Title")
    expect(updated.leads[0].test.title).toBe("Test Title")
  })
})
