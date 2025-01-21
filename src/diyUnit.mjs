global.describe = (name, describeBlock) => {
  describeBlock()
}

function expect(actual) {
  return {
    toEqual: expected => {
      console.log({ result: actual === expected ? '✅ PASS' : '❌ FAIL', expected, actual: actual });
    }
  }
}