const { disemvowel } = require("../src/index");

describe("disemvowel", () => {
  test("it should have an input as string and return a string as output", () => {
    expect(disemvowel("something")).toBe("something");
  });

  test("it should have an string with the letter 'a' as input and return a string without it", () => {
    expect(disemvowel("There is an a in this sentence")).toBe("There is n  in this sentence");
  });
});
