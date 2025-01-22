# What is a test?

An example of how some code should behave. It's usually written with a traditional syntax.
When you run the test, it tells you if the actual behavior is what you expect.

# What is a test framework?

## What's good about our current approach?

- we can define a set of examples for how our code should behave
- it exercises our code
- tells us if our code is behaving correctly
- keeps test plumbing and test examples separate
- supports parameterized tests
    - (which is helpful for functions that map input to output)
- Has a familiar structure for writing tests so that new folks can onboard quickly
- Has a single "pass"/"fail" at the end
    - (with some statistics and color coding for pass/fail)
- Only shows details if the test fails

## What's missing from our current approach?

