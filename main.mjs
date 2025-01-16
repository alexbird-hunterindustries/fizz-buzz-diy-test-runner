import { toFizzBuzzString } from './toFizzBuzzString.mjs';
import { buildFizzBuzz } from './FizzBuzz.mjs';

const fizzBuzz = buildFizzBuzz({
  toFizzBuzzString,
  consoleLog: console.log
});

fizzBuzz(100);
