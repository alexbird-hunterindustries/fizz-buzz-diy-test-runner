global.describe = (describeName, describeBlock) => {
  const results = [];
  global.it = (testName, testBlock) => {
    const result = { pass: false, testName, describeName, message: "No expectations" };
    results.push(result);
    global.expect = actual => {
      return {
        toEqual: expected => {
          const pass = JSON.stringify(actual) === JSON.stringify(expected);
          result.message = pass ? "" : formatFailureMessage(expected, actual);
          result.pass = pass;
        },
      };
    };
    testBlock();
  };
  describeBlock();
  results.forEach(result => {
    const statusColor = result.pass ? color.green : color.red;
    const icon = result.pass ? "✔" : "𝗑";
    console.log(statusColor(`${icon} ${result.describeName} > ${result.testName}`));
    if (!result.pass) {
      console.log("    " + color.red(result.message));
    }
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

function formatFailureMessage(expected, actual) {
  const prettyExpected = prettyPrint(expected);
  const prettyActual = prettyPrint(actual);
  if ((prettyActual + prettyExpected).includes("\n")) {
    return `Expected:\n${prettyExpected}\nActual:\n${prettyActual}.`;
  } else {
    return `Expected ${prettyExpected}, got ${prettyActual}.`;
  }
}

function prettyPrint(value) {
  if (typeof value === "object") {
    return JSON.stringify(value, null, 2);
  }
  return JSON.stringify(value);
}
