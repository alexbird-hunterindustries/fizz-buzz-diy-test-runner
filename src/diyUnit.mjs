global.describe = (describeName, describeBlock) => {
  const results = [];
  global.it = (testName, testBlock) => {
    global.expect = actual => {
      return {
        toEqual: expected => {
          const pass = actual === expected;
          const message = pass ? "" : `Expected ${expected}, got ${actual}.`;
          results.push({ pass, describeName, testName, message });
        },
      };
    };
    testBlock();
  };
  describeBlock();
  results.forEach(result => {
    console.log(result);
  });
  console.log("");
  const allPass = results.every(x => x.pass);
  const passCount = results.filter(x => x.pass).length;
  const failCount = results.filter(x => !x.pass).length;
  console.log(`Ran: ${results.length}`);
  console.log(`Passed: ${passCount}`);
  console.log(`Failed: ${failCount}`);
  console.log("");
  console.log(allPass ? color.green("PASS") : color.red("FAIL"));
};

// Color codes come from the Stack Overflow result for "Node console log color"
// https://stackoverflow.com/a/41407246
const color = {
  red: text => `\x1b[31m${text}\x1b[0m`,
  green: text => `\x1b[32m${text}\x1b[0m`,
};
