export function describe(name, testDefinition) {
  let failures = 0;

  function test(expected, actual) {
    const pass = expected === actual;
    if (!pass) {
      failures += 1;
    }
    console.log(pass ? "✅" : "❌", `expected ${expected}, got ${actual}`);
  }

  function expect(actual) {
    return {
      toEqual: (expected) => {
        test(expected, actual);
      },
    };
  }

  global.expect = expect;
  testDefinition();
  delete global.expect;
  console.log(!failures ? "ALL PASS" : `${failures} FAILED`);
}