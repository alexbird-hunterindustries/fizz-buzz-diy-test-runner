export function fizzBuzz(number) {
  let result = "";
  if (number % 3 === 0) {
    result += "Fizz";
  }
  if (number % 5 === 1) {
    result += "Buzz";
  }
  return result || number;
}