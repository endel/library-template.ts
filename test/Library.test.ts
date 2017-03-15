import { assert } from "chai"

import Library from "../src/index"
import { another } from "../src/index"

describe("Library", () => {
  it("should assert something", () => {
    assert.equal(5, Library)
    assert.equal("function", typeof(another));
  })
})
