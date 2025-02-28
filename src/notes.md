# What is a test?

An example of how some code should behave. It's usually written with a traditional syntax.
When you run the test, it tells you if the actual behavior is what you expect.

# What is a test framework?

A code library that makes it easy to:

- define a set of examples for how the code should behave
- check that the code behavior matches those examples
- aggregate results from examples in many files

## What's good about our current approach?

- test writing (the test code is a valuable artifact)
    - we can define a set of examples for how our code should behave
    - keeps test plumbing and test examples separate
    - supports parameterized tests
        - (which is helpful for functions that map input to output)
    - Has a familiar structure for writing tests so that new folks can onboard quickly
- test doubles / mocks
    - You can do this with dependency inversion (no tools needed)
        - although for more advanced spies we would want some more advanced tools for
          creating spy methods
- test running and reporting (the test runner is a useful program)
    - tells us if our code is behaving correctly
    - Has a single "pass"/"fail" at the end
        - (with some statistics and color coding for pass/fail)
    - Only shows details if the test fails
    - it counts empty tests as failing
    - it can compare strings, numbers, objects, and arrays by using `JSON.stringify()`
- Run all test files together

## What's missing from our current approach?

### Things we won't fix today

These things are "good enough" for FizzBuzz, but still not great

- it uses `JSON.stringify` for equality, which has some limitations
    - compare with the Jest implementation of "equals", which is over 200 lines of code
        - it covers comparison of Errors, Dates, custom classes, and more
        - https://github.com/jestjs/jest/blob/7ea9a406cb10e828099029c66671e7f5ff030572/packages/expect-utils/src/jasmineUtils.ts
- for multiline differences, we should show a diff (highlight specific lines that have
  changed)
- test discovery (when I add a .spec.mjs file, it should automatically be included)