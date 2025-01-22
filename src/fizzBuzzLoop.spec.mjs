import "./diyUnit.mjs";
import { fizzBuzzLoop } from "./fizzBuzzLoop.mjs";

describe("fizzBuzzLoop", () => {
  it("prints the fizz buzz string from 1 to n", () => {
    const fakeLog = [];
    fizzBuzzLoop(4, {
      consoleLog: message => fakeLog.push(message),
      toFizzBuzzString: number => `fake output for ${number}`,
    });

    expect(fakeLog).toEqual([
      "fake output for 1",
      "fake output for 2",
      "fake output for 3",
      "fake output for 4",
    ]);
  });
});