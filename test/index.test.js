const assert = require("assert");
const indexTest = require("../src/index.js");

describe("#index", () => {
  describe("Functions", () => {
    it("indexTest should redturn done", () => {
      assert.equal(indexTest.linkTest(), "linked");
    });
  });
});
