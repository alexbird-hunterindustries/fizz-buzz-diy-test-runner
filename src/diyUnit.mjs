global.describe = (describeName, describeBlock) => {
  let allPass = true;
  global.it = (testName, testBlock) => {
    global.expect = actual => {
      return {
        toEqual: expected => {
          const pass = actual === expected;
          console.log({ result: pass ? '✅ PASS' : '❌ FAIL', expected, actual: actual });
          if (!pass) {
            allPass = false;
          }
        }
      }
    }
    testBlock();
  }
  describeBlock();
  console.log('')
  console.log(allPass ? 'PASS' : 'FAIL')
}
