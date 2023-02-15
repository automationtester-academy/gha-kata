var assert = require("assert");
var add = require("../app");

describe("Test add", () => {
  it("should return 2 when the values are 1 and 1", () => {
    assert.equal(add(1,1), 2);
  });
  it("should return 5 when the values are 2 and 3", () => {
    assert.equal(add(2,3), 5);
  });
});
