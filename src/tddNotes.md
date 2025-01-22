# Notes about TDD

- We separated the **logic** from the **input/output**
    - Logic tests are differently difficult from input/output tests
    - Logic tests have simple inputs/outputs but many branches
        - Many tests with simple setup
    - Input/output tests have few branches but messy connections to the real world
        - Few tests with messy setup
    - If you don't separate these two things, you get many messy tests
        - When separate, you get many clean tests of complicated logic, and a few messy
          tests of simple logic