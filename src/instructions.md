# FizzBuzz

- Print something for every number from 1 to 100
- For most numbers, print the number
- If it is divisible by 3, print "Fizz" instead
- If it is divisible by 5, print "Buzz" instead
- If it is divisible by 3 and 5, print "FizzBuzz" instead

## Approach

- loop from 1 to 100 and print something
    - testing notes:
        - test setup:
            - "print" means `console.log` -- hard to test
            - 1 to 100 means generating a sequence with lots of output -- hard to test
        - test cases:
            - no branching (always loop 1 to n; always print the thing)
        - consider using test doubles for `console.log` and `getFizzBuzzString`
- get the "FizzBuzz string" for a given number
    - testing notes:
        - test setup:
            - for one input, expect one output
        - test cases:
            - many examples, interesting conditionals
        - consider parameterized tests
