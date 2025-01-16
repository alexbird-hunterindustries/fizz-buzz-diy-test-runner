
export function buildFizzBuzz({ consoleLog, toFizzBuzzString }) {
  return function fizzBuzz(count) {
    for (let i = 1; i < count; i++) {
      consoleLog(toFizzBuzzString(i))
    }
  }
}
