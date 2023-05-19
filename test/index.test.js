const { disemvowel } = require("../src/index");

describe("disemvowel", () => {
//   test("it should have an input as string and return a string as output", () => {
//     expect(disemvowel("something")).toBe("something");
//   });

  // test("it should have an string with the letter 'a' as input and return a string without it", () => {
  //   expect(disemvowel("There is an a in this sentence")).toBe("There is n  in this sentence");
  // });

  test("it should have an string with the letters 'a' and 'e' as input and return a string without it", () => {
    expect(disemvowel("There is an a and e in this sentence")).toBe("Thr is n  nd  in this sntnc");
  });

  test("it should have a string with the characters 'a', 'e', 'A', 'E' and return a string without them", () => {
    expect(disemvowel("ThEre is an A,a and E,e in this sentEnce")).toBe("Thr is n , nd , in this sntnc");
  });
});
