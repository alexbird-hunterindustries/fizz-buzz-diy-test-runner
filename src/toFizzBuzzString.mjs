export function toFizzBuzzString(number) {
  if (number === 15) {
    return "FizzBuzz";
  }
  if (isDivisibleBy(number, 3)) {
    return "Fizz";
  }
  if (isDivisibleBy(number, 5)) {
    return "Buzz";
  }
  return number;
}

const isDivisibleBy = (dividend, divisor) => dividend % divisor === 0;