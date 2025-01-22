global.describe = (describeName, describeBlock) => {
  global.it = (testName, testBlock) => {
    global.expect = actual => {
      return {
        toEqual: expected => {
          const pass = actual === expected;
          console.log({ result: pass ? '✅ PASS' : '❌ FAIL', expected, actual: actual });
        }
      }
    }
    testBlock();
  }
  describeBlock()
}
