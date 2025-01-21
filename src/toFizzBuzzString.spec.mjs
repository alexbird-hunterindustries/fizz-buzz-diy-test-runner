/**
 * toFizzBuzzString converts a number to a string
 *   - For most numbers, return the number
 *   - If it is divisible by 3, return "Fizz" instead
 *   - If it is divisible by 5, return "Buzz" instead
 *   - If it is divisible by 3 and 5, return "FizzBuzz" instead
 */

import { toFizzBuzzString } from "./toFizzBuzzString.mjs";

const actual = toFizzBuzzString(1);
const expected = 1;
expect(actual).toEqual(expected);

function expect(actual) {
  return {
    toEqual: expected => {
      console.log({
        result: actual === expected ? "✅ PASS" : "❌ FAIL",
        expected,
        actual,
      });
    },
  };
}
