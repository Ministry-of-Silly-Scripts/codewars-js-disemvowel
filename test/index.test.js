const { disemvowel } = require("../src/index");

describe("disemvowel", () => {
  test("it should have an input as string and return a string as output", () => {
    expect(disemvowel("something")).toBe("something");
  });
});
