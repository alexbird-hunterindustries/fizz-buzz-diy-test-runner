# What is a test framework?

## What's good about our current approach?

- we can define a set of examples for how our code should behave
- it exercises our code
- tells us if our code is behaving correctly
- keeps test plumbing and test examples separate
- supports parameterized tests
    - (which is helpful for functions that map input to output)

## What's missing from our current approach?

- The more tests we write, the less clear the test output
    - For passes, I don't need nearly as much detail as for failures
- I want a single "pass"/"fail" at the end
- I'd like color coded output to make it clear at a glance if it's a pass or a fail
- It doesn't have the familiar Jest/Jasmine format
    - this makes it harder for new team members to use

