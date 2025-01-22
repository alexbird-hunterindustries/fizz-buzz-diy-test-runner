import { toFizzBuzzString } from "./toFizzBuzzString.mjs";

describe("toFizzBuzzString", () => {

  [
    { input: 1, output: 1 },
    { input: 2, output: 2 },
    { input: 3, output: "Fizz" }, // 3 is divisible by 3
    { input: 4, output: 4 },
    { input: 5, output: "Buzz" }, // 5 is divisible by 5
    { input: 6, output: "Fizz" },
    { input: 10, output: "Buzz" },
    { input: 15, output: "FizzBuzz" }, // 15 is divisible by 3 and 5
    { input: 30, output: "FizzBuzz" },
    { input: 42, output: "Fizz" },
    { input: 45, output: "FizzBuzz" },
    { input: 50, output: "Buzz" },
    { input: 52, output: 52 },
  ].forEach(({ input, output }) => {
    it(`converts ${input} to ${output}`, () => {
      expect(toFizzBuzzString(input)).toEqual(output);
    });
  });
});
