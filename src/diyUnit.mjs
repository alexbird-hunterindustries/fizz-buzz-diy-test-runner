global.describe = (describeName, describeBlock) => {
  global.it = (testName, testBlock) => {
    global.expect = actual => {
      return {
        toEqual: expected => {
          console.log({
            result: actual === expected ? "✅ PASS" : "❌ FAIL",
            expected,
            actual,
          });
        },
      };
    };
    testBlock();
  };
  describeBlock();
};
