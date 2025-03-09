import { fizzBuzz } from "./fizzBuzz.mjs";

let failures = 0;

function test(expected, actual) {
  const pass = expected === actual;
  if (!pass) {
    failures += 1;
  }
  console.log(pass ? "✅" : "❌", `expected ${expected}, got ${actual}`);
}

function expect(actual) {
  return {
    toEqual: (expected) => {
      test(expected, actual);
    },
  };
}

expect(fizzBuzz(1)).toEqual(1);
expect(fizzBuzz(2)).toEqual(2);
expect(fizzBuzz(3)).toEqual("Fizz");
expect(fizzBuzz(4)).toEqual(4);
expect(fizzBuzz(5)).toEqual("Buzz");
expect(fizzBuzz(6)).toEqual("Fizz");
expect(fizzBuzz(10)).toEqual("Buzz");
expect(fizzBuzz(15)).toEqual("FizzBuzz");

console.log(!failures ? "ALL PASS" : `${failures} FAILED`);