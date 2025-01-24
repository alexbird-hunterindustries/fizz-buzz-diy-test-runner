import { fizzBuzzLoop } from "./fizzBuzzLoop.mjs";
import { toFizzBuzzString } from "./toFizzBuzzString.mjs";

fizzBuzzLoop(100, {
  consoleLog: console.log,
  toFizzBuzzString,
});