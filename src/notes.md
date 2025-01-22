# What is a test?

An example of how some code should behave. It's usually written with a traditional syntax.
When you run the test, it tells you if the actual behavior is what you expect.

# What is a test framework?

A code library that makes it easy to:

- define a set of examples for how the code should behave
- check that the code behavior matches those examples

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

## What's missing from our current approach?

- you have to run individual test files
