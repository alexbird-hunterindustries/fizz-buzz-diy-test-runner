import "./diyUnit.mjs";
import { fizzBuzzLoop } from "./fizzBuzzLoop.mjs";

describe("fizzBuzzLoop", () => {
  it("prints the fizz buzz string from 1 to n", () => {
    const fakeLog = [];
    fizzBuzzLoop({
      consoleLog: message => fakeLog.push(message),
    });

    expect(fakeLog).toEqual([
      "Hello, world",
    ]);
  });
});