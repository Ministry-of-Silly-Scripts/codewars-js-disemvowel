const { disemvowel } = require("../src/index");

describe("disemvowel", () => {
  test("test disemvowel", () => {
    expect(disemvowel(0)).toBe(true);
  });
});
