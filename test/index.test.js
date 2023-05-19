const { disemvowel } = require("../src/index");

describe("disemvowel", () => {
  test("it should have an input as empty string and return a empty string as output", () => {
    expect(disemvowel("")).toBe("");
  });

  test("it should have a string with vowels (upper/ lower case) as input and return a string without them", () => {
    expect(disemvowel("ThEre is an A,a and E,e and I,i and O,o an U,U in thIs sentEnce")).toBe("Thr s n , nd , nd , nd , n , n ths sntnc");
  });
});
