global.describe = (describeName, describeBlock) => {
  const results = [];
  global.it = (testName, testBlock) => {
    global.expect = actual => {
      return {
        toEqual: expected => {
          const pass = actual === expected;
          const result = pass ? "✅ PASS" : "❌ FAIL";
          console.log({ result, expected, actual });
          results.push({ pass });
        },
      };
    };
    testBlock();
  };
  describeBlock();
  console.log("");
  const allPass = results.every(x => x.pass);
  console.log(allPass ? color.green("PASS") : color.red("FAIL"));
};

// Color codes come from the Stack Overflow result for "Node console log color"
// https://stackoverflow.com/a/41407246
const color = {
  red: text => `\x1b[31m${text}\x1b[0m`,
  green: text => `\x1b[32m${text}\x1b[0m`,
};
