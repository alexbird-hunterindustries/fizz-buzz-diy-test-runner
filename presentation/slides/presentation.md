---
theme: gaia
_class: lead
paginate: true
backgroundColor: #fff
backgroundImage: url('https://marp.app/assets/hero-background.svg')
footer: The "Jargon Trap" | What Even Is A Test Framework? | Alex Bird | alex@alexanderbird.software
breaks: 'off'
---

## What Even Is A Test Framework?

Escaping the Jargon Trap

![bg right 90%](./images/deer-on-deck.jpg)

---

### We'll Be Talking About

- Test tooling
- Learning strategies
- Teaching mental models
- Deer pictures from my house

![bg left 90%](./images/deer-on-deck-2.jpg)

---

![bg right 90%](./images/alexbird.jpg)

# About Me

I **write software** in an ensemble (mob) for Hunter Industries.

My job is primarily **coaching**, but I do it by **coding with others**.

alex&ZeroWidthSpace;**@alexanderbird**.software  
**@alexanderbird**@mstdn.ca

---

![bg right 90%](./images/alexbird.jpg)

# About Me

I want to **make others more effective** at work.

So I often think about **how we learn and teach**.

I'm learning about how to **transmit mental models** to others.

---

# Taboo

Give clues to get your team to say **"Dolphin"**, but you can't say any of these words.

![bg right 90%](./images/taboo.jpg)

---

## The "Taboo Test"

You can pass the "Taboo Test" if you can **explain a concept** without **jargon**.

![bg right 90%](./images/taboo.jpg)

---

#### Jargon In The Workplace

- Jargon refers to **words with rich meaning in a narrow context**
- Speeds up conversation
    - A sentence becomes a word
- Hard for outsiders/ newcomers

![bg right 90%](./images/taboo.jpg)

---

## The "Jargon Trap"

Jargon helps us work.

But **if we cannot explain ourselves without jargon**, we **don't understand** what we're
talking about.

![bg right 90%](./images/taboo.jpg)

---

## Learning Strategy

#### What if we didn't have X?

I'm going to share a **learning strategy** that I have found helpful for myself and others
to **get out of the
Jargon Trap**; to learn enough to **pass the "Taboo Test"**.

![bg right 100%](./images/standing-deer.jpg)

---

## Learning Strategy

#### What if we didn't have X?

We're going to use unit test frameworks as an **example of this learning approach**.

![bg right 100%](./images/standing-deer.jpg)

---

## Exercise

- "Test Framework" is jargon
- We're going to explain it without using jargon

![bg right 100%](./images/standing-deer.jpg)

---

# What Even Is a Test Framework?

**Pretend** with me for a moment that you do not know **what is a test framework**.

If you genuinely don't know, even better.

---

# Pretend We're In The Jargon Trap

- We use a test framework, but **it's still magic to us**.
- Someone else set it up
    - (so if the **tests can't run** at all, **we'll need help**)
- When we write tests, we
    1. Find another test in the codebase
    2. **Copy + paste** it
    3. Modify it

---

# Escaping the Jargon Trap

We'll start by doing a web search: let's learn more about test frameworks

---

![width:1100px](./images/jest.png)

---

![width:1100px](./images/junit.png)

---

![width:1100px](./images/playwright.png)

---

![width:1100px](./images/jasmine.jpg)

---

# Wikipedia

#### Test Automation Framework

- "Is an **integrated system**"
- "Sets the **rules of automation** of a specified product"
- "**Integrates** the function libraries, test data sources, object details, and various
  reusable models"
- "The framework **provides the basis of test automation** and **simplifies the automation
  effort**"

---

# The "Taboo Test"

Define "Testing Framework" without saying these words

| Testing Framework |
|-------------------|
| Tool              |
| Technology        |
| Unit              |
| Test              |
| Automation        |

---

# The "Taboo Test"

Take 1 minute; Write down your definition (you'll need it at the end)

| Testing Framework |
|-------------------|
| Tool              |
| Technology        |
| Unit              |
| Test              |
| Automation        |

---

# Time's Up

Let's answer this question together!

![bg right 90%](./images/deer-on-deck.jpg)

---

# Learning Prompt

If we didn't have X, what would we do instead?

![bg left 100%](./images/standing-deer.jpg)

---

# Learning Prompt

If we didn't have **our test framework**, what would we do instead?

Once we answer this, we'll be **able to pass the "Taboo Test"**.

![bg left 100%](./images/standing-deer.jpg)

---

# Exercise

Discover the essence of a **test framework** by building one from scratch.

![bg right 100%](./images/snow-fort.jpg)

---

# Exercise

We're going to be coding **FizzBuzz** together, and we'll be **creating a test framework**
as we go.

We'll practice Test Driven Development using our homemade test framework.

---

# Aside: FizzBuzz

FizzBuzz is a popular coding exercise.

You print out a sequence of numbers, but for some numbers you print out something else.

```
1
2
Fizz
4
...
```

---

# Exercise

We're going to pay attention to **what we want** and **need** from this framework.

At first, the framework will suck, and **we'll write down why it sucks**.

Then we'll unsuck it.

---

# Exercise

By the end, we'll have **solved FizzBuzz** and we'll have about **~100 lines of code** for
**our test framework**.

---

# Exercise

We'll use **Node.js** with **no dependencies** and aim for Jest/Jasmine style syntax:

```typescript
describe('FizzBuzz', () => {
  it('logs the fizz buzz string up to 4', () => {
    // ...
    expect(consoleLog).toEqual([
      // ...
    ]);
  });
});
```

---

# Exercise

Let's go!!

![bg right 90%](./images/sledding.png)

---

#### What Did We Just Learn?

- About testing?
- About learning?
- About teaching?

![bg right 90%](./images/many-deer.jpg)

---

# A Test Is...

- An **example** of how some **code should behave**.
- It's usually written with a **traditional syntax**.
- You can **run a test**
    - It tells you if the **actual behavior** is **what you expect**.

---

# A Test Framework Is... *

A **code library** which...

- Makes it easy to **write** a set of examples
    - for how the code should behave
- Can be run to **check** that all the code behaves as expected
- Outputs a **summary** of the results of all the checks

---

# A Test Framework Is... *

- a **syntax** for your **examples**
- an **executable** to **check** your code
    - which **reports** the results concisely

---

#                                   * Aside

- I hope you prepend **"In Alex's opinion..."** before that and every other slide here.
- This is **not a canonical definition**.
- Next year I will probably express it differently.

---

# Compare With Your Definition

Compare **the definition you wrote at the start** with this one &mdash; how do they
compare?

> A **code library** which...
>
> - Makes it easy to **write** a set of examples for how the code should behave
> - Can be run to **check** that all the code behaves as expected
> - Outputs a **summary** of the results of all the checks

---

#### What Did We Just Learn?

- *Testing*: Tests are executable examples
- About learning?
- About teaching?

![bg right 90%](./images/many-deer.jpg)

---

# The "Taboo Test"

1. Take a **tool, practice, or concept** you use at work.
2. Explain it **in your own words**, like you would to a friend from outside the software
   industry.
    - What is it for?
    - How does it work?
3. If you have a hard time explaining it, **you just found a learning opportunity** 🥳

---

# Learning Opportunity

When I can't explain something I use often, **I make it my aim to become an expert in my
area of confusion**.

I do whatever it takes to become an expert.

---

# Ideas For Becoming An Expert

- **Build it** yourself **from scratch** (like we did together)
    - Or brainstorm how you would build it from scratch
- Deep dive on **YouTube** (from one related video to the next)
- Buy a **textbook**, and read the whole thing
- Write a blog post or make a video **explaining** the thing
    - (and do the **research** you need to do to prepare the answer)
- **Find another expert** and ask them to teach you

---

# No, Seriously,

**you can become an expert!**

You don't have to "fake it until you make it".

If you **need to know** something for work,  
it's faster to **stop and learn it** than to fake it.

![bg left 90%](./images/buck-on-lawn.jpg)

---

#### What Did We Just Learn?

- *Testing*: Tests are executable examples
- *Learning*: If you can't say it without jargon, maybe stop to make yourself
  an expert.
- About teaching?

![bg right 90%](./images/many-deer.jpg)

---

#### Teaching From Miniatures

Software is **complicated**  
but often it has a **simple core**

![bg left 90%](./images/solitary-deer.jpg)

---

#### Teaching From Miniatures

<br/>
<br/>
<br/>

The **Simple core** gives us a  
**mental model** to clarify the  
**complicated whole**.

![bg left 90%](./images/solitary-deer.jpg)

---

## Example of Teaching From Miniatures

#### Sandbox for map/filter/reduce

- complicated production code
    - &rarr; sandbox / playground environment

---

## Example of Teaching From Miniatures

#### diy event library to mimic `rxjs`

- `rxjs` async event library
    - &rarr; diy version using JavaScript `Stream`

---

## Example of Teaching From Miniatures

#### Whiteboarding: what to do without Terraform?

- Terraform for infrastructure as code (IaC)
    - &rarr; imaginary solution of evolving IaC
      from scratch
        - AWS CLI > version controlled scripts > custom framework > managed state

---

#### What Did We Just Learn?

- *Testing*: Tests are executable examples.
- *Learning*: If you can't say it without jargon, maybe stop to make yourself
  an expert.
- *Teaching*: Miniatures help develop mental models which help understand the complicated
  whole.

![bg right 90%](./images/many-deer.jpg)

---

## And What Now?

- *Builders*: Try making **diyUnit** with **your favorite language**.
- *Learners*: This week, pay attention for something you **use but don't understand well
  **.
  Maybe, choose to **become an expert**.
- *Teachers*: If folks are looking for **cheat sheets**, consider instead using a
  miniature to **share your mental model** with them.

---

![bg right 90%](./images/alexbird-2.jpg)

#### Thanks For Having Me!

Alex Bird

alex&ZeroWidthSpace;**@alexanderbird**.software  
**@alexanderbird**@mstdn.ca

Code and slides:
[github.com/&ZeroWidthSpace;alexbird-hunterindustries/&ZeroWidthSpace;fizz-buzz-diy-test-runner](https://github.com/alexbird-hunterindustries/fizz-buzz-diy-test-runner)
