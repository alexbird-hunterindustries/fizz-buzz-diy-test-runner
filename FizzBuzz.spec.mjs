import { buildFizzBuzz } from './FizzBuzz.mjs';
/*
 * For i from one to count, log the result of toFizzBuzzString(i)
 */

describe('FizzBuzz', () => {
  
  it('logs the fizz buzz string up to 4', () => {
    const consoleLog = [];

    const fizzBuzz = buildFizzBuzz({
      toFizzBuzzString: x => `the fizz buzz string for "${x}"`,
      consoleLog: x => consoleLog.push(x)
    })

    fizzBuzz(4)
    expect(consoleLog).toEqual([
      'the fizz buzz string for "1"',
      'the fizz buzz string for "2"',
      'the fizz buzz string for "3"',
      'the fizz buzz string for "4"',
    ]);
  });
});
