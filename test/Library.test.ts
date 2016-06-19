/// <reference path="../typings/index.d.ts" />

import { assert } from "chai"

import Library from "../src/index.ts"
import { another } from "../src/index.ts"

describe("Library", () => {
  it("should assert something", () => {
    assert.equal(5, Library)
    assert.equal("function", typeof(another));
  })
})
