import traverseObject from "./traverseObject"

describe("traverseObject", () => {
  it("tests that it transforms description key", () => {
    const data = {
      title: "title",
      mainDescription: "# Test",
      leads: [
        {
          test: {
            title: "Test",
            anotherDescription: "# Test"
          }
        }
      ]
    }

    const changeTo = "Change Me"
    const updated = traverseObject(data, () => changeTo)
    expect(updated.mainDescription).toBe(changeTo)
    expect(updated.leads[0].test.anotherDescription).toBe(changeTo)
    expect(updated.title).toBe("title")
  })
})
