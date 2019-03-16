import isObject from "./isObject"

describe("isObject", () => {
  it("returns true when object", () => {
    const obj = {}
    expect(isObject(obj)).toBe(true)
  })

  it("returns false when not an object", () => {
    const notObjects = [
      null,
      undefined,
      1,
      "notObject",
      [],
      () => {},
      Symbol("foo"),
      new Set(),
      new Map()
    ]

    notObjects.forEach(
      type => expect(isObject(type)).toBe(false)
    )
  })
})
