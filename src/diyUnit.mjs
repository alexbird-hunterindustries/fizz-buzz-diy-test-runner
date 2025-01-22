global.describe = (describeName, describeBlock) => {
  global.it = (testName, testBlock) => {

  }
  describeBlock()
}

function expect(actual) {
  return {
    toEqual: expected => {
      console.log({ result: actual === expected ? '✅ PASS' : '❌ FAIL', expected, actual: actual });
    }
  }
}