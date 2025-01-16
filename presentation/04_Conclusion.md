## So what next?

### Builders

#### Testing: diyUnit

If you had fun with this, I suggest you try it yourself! Take your favorite
coding puzzle and your favorite language, and TDD the puzzle with zero
dependencies; write your test runner from scratch. You can mimic the interface
of your favorite test library (like we did today), or you can invent your own
test structure.

#### Testing: a custom expect

I've talked about the value of customizing our tooling: if you want to apply
this to your work this week, you can keep an eye out for complicated expect
statements -- maybe multiple asserts, or some domain specific complexity. Try
writing your own wrapper around `expect` that makes it really easy to express
the assertion. Break the implementation to make the test fail, then refactor the
expect, then put the implementation back.

### Teachers

#### Prompt: if we didn't have X, what would we do?

If you're coaching someone and you see they are treating some tool, pattern, or
approach as a magic, black box solution, but you think it would be helpful for
them to understand it more deeply, try out the prompt "If we didn't have X or
common alternatives to X, what would we do? What is X for? How could we get by
without it?"

#### Tell me: how do you share mental models

I've told you today what is my current favorite way to share a mental model.
What is yours? Please let me know, either after the talk or by email. I'm keen
to learn from your experience if you're willing to share.

### Everyone: de-mystify something

I challenge you to pay attention for tools you use often but don't understand --
the magical black boxes. Choose one, and try building a working version from
scratch. You're welcome to "cheat" and look at the source code or documentation
for the tool you usually use.

