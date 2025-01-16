const testResults = {};

global.describe = (describeName, describeBody) => {

  global.it = (testName, testBody) => {

    const fullName = `${describeName} > ${testName}`;
    testResults[fullName] = undefined;

    global.expect = (actual) => {
      return {
        toEqual: (expected) => {
          const pass = JSON.stringify(actual) === JSON.stringify(expected);
          const prettyToString = x => JSON.stringify(x, null, 2);
          const prettyExpected  = prettyToString(expected);
          const prettyActual = prettyToString(actual);
          const multilineValues = (prettyExpected + prettyActual).includes('\n');
          const message = multilineValues
            ? `expected:\n${indent(prettyExpected)}\nactual:\n${indent(prettyActual)}`
            : `expected ${prettyExpected}, got ${prettyActual}`;
          testResults[fullName] = { pass, message };
        }
      }
    }

    testBody();
  }
  describeBody();
}

// From a web search for "Node run before exit"
process.on('exit', () => {
  printResults();
});

function printResults() {
  const everyTest = Object.entries(testResults).map(([name, result]) => ({ name, result }));
  everyTest.forEach(test => {
    const icon = test.result.pass ? '✔' : '𝙭';
    const statusColor = test.result.pass ? color.green : color.red;
    console.log(statusColor(`${icon} ${test.name}`));
    if (!test.result.pass) {
      console.error(color.red(indent(test.result.message, 2)));
      console.log(''); // blank line
    }
  });
  
  console.log('\n');
  const failures = everyTest.filter(x => !x.result.pass).length;
  const passes = everyTest.filter(x => x.result.pass).length;
  const allPass = everyTest.every(x => x.result.pass);
  console.log(`Tests: ran ${everyTest.length}, ${(color.red(`failed: ${failures}`))}, ${color.green(`passed: ${passes}`)}`);
  console.log('\n');
  console.log(allPass ? color.green('PASS') : color.red('FAIL'));
}

// Color codes come from the Stack Overflow hit for "Node console log color"
// https://stackoverflow.com/a/41407246
const color = {
  red: text => `\x1b[31m${text}\x1b[0m`,
  green: text => `\x1b[32m${text}\x1b[0m`,
}

const indent = (text, amount = 1) => text.split('\n').map(x => '  '.repeat(amount) + x).join('\n');
