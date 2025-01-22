export function toFizzBuzzString(number) {
  let result = "";
  if (isDivisibleBy(number, 3)) {
    result += "Fizz";
  }
  if (isDivisibleBy(number, 5)) {
    result += "Buzz";
  }
  return result || number;
}

const isDivisibleBy = (dividend, divisor) => dividend % divisor === 0;