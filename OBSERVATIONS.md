# Observations

## General Observations

### About writing a test runner
- For basic TDD in a single file, you can get by with very simple test tooling
  - We have shown that if your languange supports equality comparison and print
    statements, you can write a minimalist test "framework"
- To expand this to cover multiple files, if your language supports listing
  files and dynamically importing them, that's enough for test discovery
  - If your language does not support that type of metaprogramming, you can do
    your test discovery with a scripting language. Somehow, list the valid files
    and produce a "run all tests" file that imports/executes those files.
      - Perhaps your test discovery script would generate a temporary "run all"
        file containing every test, compile it, and run it.
  - You also could get by for quite a while by manually adding each test file to
    your "run all" script. 

### About TDD
- It is often easier to refactor tests while they are failing (or partially
  failing) so you can get more detailed feedback
- Small units (with test doubles) let me think about fewer things at a time

## What do we look for in a test runner?

### Writing Tests

1. ✅ A way to compare actual and expected
2. ✅ (sometimes) parameterized testing to run many similar tests
3. ✅ Clear test names
4. ✅ Familiar structure
5. Mocking / test doubles

### Running Tests

1. ✅ Print test results (with failure details)
2. ✅ Clear test names
3. ✅ A pass/fail summary at the end
4. ✅ Pretty output (colors, etc.)
5. ✅ Test discovery (run tests across multiple files without listing them)
