import { fizzBuzz } from "./fizzBuzz.mjs";
import { describe } from "./diyUnit.mjs";

describe("FizzBuzz", () => {
  expect(fizzBuzz(1)).toEqual(1);
  expect(fizzBuzz(2)).toEqual(2);
  expect(fizzBuzz(3)).toEqual("Fizz");
  expect(fizzBuzz(4)).toEqual(4);
  expect(fizzBuzz(5)).toEqual("Buzz");
  expect(fizzBuzz(6)).toEqual("Fizz");
  expect(fizzBuzz(10)).toEqual("Buzz");
  expect(fizzBuzz(15)).toEqual("FizzBuzz");
});
