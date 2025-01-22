# What is a test?

An example of how some code should behave. It's usually written with a traditional syntax.
When you run the test, it tells you if the actual behavior is what you expect.

# What is a test framework?

## What's good about our current approach?

- we can define a set of examples for our code
- it tells us if the code matches the examples
- separates the test plumbing from the code examples
- supports parameterized tests
    - (which is helpful for simple functions that map input to output)
- Has a familiar structure for writing tests so that new folks can onboard quickly

## What's missing from our current approach?

- The more tests we write, the less clear the test output
    - For passes, I don't need nearly as much detail as for failures
- I want a single "pass"/"fail" at the end
- I'd like color coded output to make it clear at a glance if it's a pass or a fail

