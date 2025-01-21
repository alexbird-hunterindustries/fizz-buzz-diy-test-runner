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

![bg right 90%](./deer-on-deck.jpg)

---

![bg right 90%](./alexbird.jpg)

# About Me

I **write software** in an ensemble (mob) for Hunter Industries.

My job is primarily **coaching**, but I do it by **coding with others**.

alex&ZeroWidthSpace;**@alexanderbird**.software  
**@alexanderbird**@mstdn.ca

---

![bg right 90%](./alexbird.jpg)

# About Me

I'm learning about how to **transmit mental models** to others.

My current focus is on how to efficiently **make others more effective**.

So I end up thinking a lot about how we learn and teach.

---

# Taboo

Give clues to get your team to say **"Dolphin"**, but you can't say any of these words.

![bg right 90%](./taboo.jpg)

---

## The "Taboo Test"

You can pass the "Taboo Test" if you can **explain a concept** without **jargon**.

![bg right 90%](./taboo.jpg)

---

## The "Jargon Trap"

For our day-to-day work, **jargon speeds communication**.

But **if we cannot explain ourselves without jargon**, we **don't understand** what we're talking about.

![bg right 90%](./taboo.jpg)

---

# Learning Algorithm

#### What if we didn't have X?

I'm going to share a **learning strategy** that I have found helpful for myself and others to **get out of the
Jargon Trap**; to learn enough to **pass the "Taboo Test"**.

---

# Learning Algorithm

#### What if we didn't have X?

We're going to use unit test frameworks as an **example of this learning approach**.

---

# What Even Is a Test Framework?

**Pretend** with me for a moment that you do not know **what is a test framework**.

If you genuinely don't know, even better.

---

# Sidebar: Why Are We Pretending?

- Software dev is a **learning profession**.
- When you're a **faster learner**, you **do better**
- This talk is **an exercise in learning**
- So even if you are a testing expert: pretend with me that you aren't
    - You still have to learn *something* in your career
    - And **this exercise** may **help you become a better learner**
    - (or a **better teacher**)

---

# Pretend We're In The Jargon Trap

- You use a test frameworks, but **it's still magic to you**.
- Someone else set it up
    - (so if the tests can't run at all, you'll need help)
- When you write tests, you
    1. Find another test in the codebase
    2. Copy + paste it
    3. Modify it

---

# Escaping the Jargon Trap

You start by doing a web search -- let's learn more about test frameworks

---

![width:1100px](./jest.png)

---

![width:1100px](./junit.png)

---

![width:1100px](./playwright.png)

---

![width:1100px](./jasmine.jpg)

---

# Wikipedia

#### Test Automation Framework

- "Is an **integrated system**"
- "Sets the **rules of automation** of a specified product"
- "**Integrates** the function libraries, test data sources, object details, and various reusable models"
- "The framework **provides the basis of test automation** and **simplifies the automation effort**"

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

![bg right 90%](./deer-on-deck.jpg)

---

# Learning Prompt

If we didn't have X, what would we do instead?

![bg left 100%](./standing-deer.jpg)

---

# Learning Prompt

If we didn't have **our test framework**, what would we do instead?

Once we answer this, we'll be **able to pass the "Taboo Test"**.

![bg left 100%](./standing-deer.jpg)

---

# Exercise

Discover the essence of a **test framework** by building one from scratch.

![bg right 100%](./snow-fort.jpg)

---

# Exercise

We're going to be coding **FizzBuzz** together, and we'll be **creating a test framework** as we go.

We'll practice Test Driven Development using our homemade test framework.

---

# Aside: FizzBuzz

FizzBuzz is a popular coding exercise.

You print out a sequence of numbers, but for some numbers you print out something else

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

By the end, we'll have **solved FizzBuzz** and we'll have about **~100 lines of code** for **our test framework**.

---

# Exercise

We'll use **Node.js** with **no dependencies** and aim for Jest/Jasmine style syntax

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

![bg right 90%](./sledding.png)
