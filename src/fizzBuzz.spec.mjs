import { fizzBuzz } from "./fizzBuzz.mjs";

function test(expected, actual) {
  const pass = expected === actual;
  console.log(pass ? "✅" : "❌", `expected ${expected}, got ${actual}`);
}

test(1, fizzBuzz(1));
test(2, fizzBuzz(2));
test("Fizz", fizzBuzz(3));
test(4, fizzBuzz(4));
test("Buzz", fizzBuzz(5));
test("Fizz", fizzBuzz(6));
test("Buzz", fizzBuzz(10));
test("FizzBuzz", fizzBuzz(15));
