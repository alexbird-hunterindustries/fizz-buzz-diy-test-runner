# FizzBuzz

- Print something for every number from 1 to 100
- For most numbers, print the number
- If it is divisible by 3, print "Fizz" instead
- If it is divisible by 5, print "Buzz" instead
- If it is divisible by 3 and 5, print "FizzBuzz" instead

## Approach

- loop from 1 to 100 and print the "FizzBuzz" string
    - "print" means input/output -- more complicated to test
    - up to 100 is more output than I want to do in a single test
- get the "FizzBuzz string" for a given number
    - this seems easy to test: number in, string out

## Plan

1. ✅ TDD a function `toFizzBuzzString` for all the interesting numbers
2. TDD a function `fizzBuzzLoop`, but use a test double for `toFizzBuzzString` and
   `console.log`
3. Write (and manually test) an executable file `fizzBuzz` that runs `fizzBuzzLoop`
    - This will use the real `toFizzBuzzString` and `console.log`