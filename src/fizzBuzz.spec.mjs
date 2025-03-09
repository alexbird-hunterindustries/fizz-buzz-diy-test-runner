import { fizzBuzz } from "./fizzBuzz.mjs";

// We need a place to put the before and after test stuff
// In Jest the tests are wrapped in a "describe"
// Let's try that to see if we can hide away the test infra

function describe(name, testDefinition) {
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

  testDefinition();
  console.log(!failures ? "ALL PASS" : `${failures} FAILED`);
}

// In Jest, 'expect' and 'describe' are not imported; they're globals
// Maybe we should make 'expect' a global

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
