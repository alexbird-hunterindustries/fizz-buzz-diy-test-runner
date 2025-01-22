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
  console.log(allPass ? color.green('PASS') : color.red('FAIL'))
}

// Color codes come from the Stack Overflow result for "Node console log color"
// https://stackoverflow.com/a/41407246
const color = {
  red: text => `\x1b[31m${text}\x1b[0m`,
  green: text => `\x1b[32m${text}\x1b[0m`,
}
