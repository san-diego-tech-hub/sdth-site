import isObject from "./isObject"

describe("isObject", () => {
  it("returns true when object", () => {
    const data = {}
    expect(isObject(data)).toBe(true)
  })

  it("returns false when not an object", () => {
    const notObjects = [
      null,
      undefined,
      [],
      1,
      "notObject",
      () => {}
    ]

    notObjects.forEach(i => expect(isObject(i)).toBe(false))
  })
})
