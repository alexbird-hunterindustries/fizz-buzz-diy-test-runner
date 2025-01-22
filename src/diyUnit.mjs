global.describe = (describeName, describeBlock) => {
  global.it = (testName, testBlock) => {
    global.expect = actual => {
      return {
        toEqual: expected => {
          const pass = actual === expected;
          const result = pass ? "✅ PASS" : "❌ FAIL";
          console.log({ result, expected, actual });
        },
      };
    };
    testBlock();
  };
  describeBlock();
};
