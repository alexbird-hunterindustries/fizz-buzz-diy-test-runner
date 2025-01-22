global.describe = (describeName, describeBlock) => {
  let allPass = true;
  global.it = (testName, testBlock) => {
    global.expect = actual => {
      return {
        toEqual: expected => {
          const pass = actual === expected;
          const result = pass ? "✅ PASS" : "❌ FAIL";
          console.log({ result, expected, actual });
          if (!pass) {
            allPass = false;
          }
        },
      };
    };
    testBlock();
  };
  describeBlock();
  console.log("");
  console.log(allPass ? "PASS" : "FAIL");
};
