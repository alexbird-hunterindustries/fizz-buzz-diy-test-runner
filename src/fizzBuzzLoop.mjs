export function fizzBuzzLoop(count, dependencies) {
  const { consoleLog, toFizzBuzzString } = dependencies;
  for (let i = 1; i <= count; i++) {
    consoleLog(toFizzBuzzString(i));
  }
}