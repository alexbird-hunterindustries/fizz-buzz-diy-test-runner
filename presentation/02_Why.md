## Why?

There are good off the shelf options for unit testing available in all the
popular languages that I am aware of. What good is it to know how to build your
own?

### Building your own clarifies your mental model

Often, off the shelf developer tools do something simple, really well. They
cover the edge cases, deal with performance and scaling problems, handle
platform-specific quirks, and have some documentation. But if you strip all
those parts away, the underlying technology is simple.

When you build a toy model from scratch, you get to see what parts are needed to
make it work. You get a sense of the essense of the thing (and you appreciate
all the edge cases that someone else handles in the off the shelf tool).

### Builders: a clear mental models speed up troubleshooting

You can't reason well about a system if your mental model is completely
unrelated to reality. All our models are wrong, but the more wrong your model,
the worse your reasoning.

If you have a clear mental model about a tool you use, you can reason well about
it. 

That's why if you call a good car mechanic and say "my engine makes a
whirrKlunkSrampsh sound when it's cold out" there's a decent chance they already
know what the problem is. They have such a good mental model of a car engine,
that when they hear your poor imitation of the sound, they know what's wrong.

When we have a clear mental model of our tooling and we get a cryptic error or
surprising behavior, our odds of knowing how to fix it go way up.

A clear mental model speeds up troubleshooting.

### Builders: the tool works for you, you don't work for the tool

Your work is unique. You are doing something that few other people in the world
are doing. If everyone was doing exactly what you are doing, there would be a
paid off the shelf option and you wouldn't have to write the code yourself.

But there isn't, and you do. So when you are working on your unique problem, you
reach for available tools. Some are decent, some are amazing. None are perfectly
tailored to your unique problem.

If you're comfortable maintaining your tools, you can build some sweet tools --
and that will make you much better at your job.

A friend of mine runs a welding shop, and he gave me a tour. As we were walking
around, I saw a lot of custom jigs. "I asked him what tools in the shop he had
made. He slowly spun around, and then started pointing at almost everything. We
made these tables, we made those racks, we made those jigs, we made this bucket
that is shaped just right to catch the offcuts from this machine, we made that
sign, we made those coat hooks, ..." and so on. He's been running the shop for
quite some time, and month after month he slowly customizes his workplace to
improve the effectiveness. It makes sense; he's a welder.

We're software developers! We build tools for a living. We should have sweet
tools that make our lives easy at work. When we're comfortable customizing our
tools -- or building from scratch, if there is nothing available -- we will have
a sweet work environment.

### Teachers: teach mental models not rules of thumb

The best technique I have found to empower my less experienced team mates is to
share my mental models with them. I can't make cheat sheets or rules of thumb
fast enough to keep up with our pace of work. If my teaching model is "explain
to them what we should do", I can't keep up with our pace of work (and I can't
take a day off). When my teaching model is "show them the territory and help
them identify the goal", then they don't need me any more. This is much more
efficient for me and much more fun for them. In this talk I am demonstrating
this technique: let's peel back the layers of complexity to get to the heart of
a thing -- in this case, unit testing -- and then we'll leave with a shared
understanding of what is a unit test framework for, and how does it work.
