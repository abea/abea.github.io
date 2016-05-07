---
layout: post
title: Thoughts on code refactoring
feature-img:
tags:
- front end development
- web development
---

My favorite thing about web developer is the problem solving. As a kid who did logic puzzles all afternoon and then went on to have calculus be a favorite class, that's been the clearest guiding light in my dev career so far. It shouldn't be much of a surprise then how much I was looking forward to a serious refactoring project.

For the uninitiated, my current definition of code refactoring is when you make an existing codebase more efficient, more understandable, more future-proof, or otherwise more better. Or [as wikipedia puts it](https://en.wikipedia.org/wiki/Code_refactoring):

> Code refactoring is the process of restructuring existing computer code--changing the factoring--without changing its external behavior.

So if your starting codebase is a pile of cooked spaghetti, your refactoring project might be to unravel it and lay each piece straight and in a nice row. Ruins the fun of pasta, but great for continued use of software.

## Get inspired

In the last week, a few events have coincided to make me think a bit more conceptually about this kind of project. First, I've recently started a refactoring project at work. It is taking a five year old website theme and making it responsive to browser size. That's on the border of "changing external behavior," but I think it fits since my job is mainly to let people use the existing functionality better regardless of their device.

Second, I read a great post on CSS refactoring that popped up in several newsletters I receive: [Refactoring Legacy CSS](http://seesparkbox.com/foundry/refactoring_legacy_css). The post has some really great practical advice about approaching refactor projects, particularly CSS. Kasey Bonifacio hits the major pitfalls and how to avoid them as well.

Finally, at a recent Ithaca Web People meet up, a tech business consultant talked about ["the Seven Types of Tech Debt."](http://www.meetup.com/ithaca-web-people/events/230119785/). The speaker, Alan Willet, spoke of different ways that we coders can cause ourselves problems thanks to perceived (or actual) pressure to take short cuts. The crux of the talk was A) don't do that, and B) though refactoring seems like time and money spent for no new functionality, it can result in exponential increases to productivity going forward.

So refactoring is good and I'm a nerd. Moving on.

## Deep Thought
Starting into my project, I want to fix all the things. [Scss-lint](https://github.com/brigade/scss-lint/) is my favorite code editor plugin, and making each of those little warnings disappear makes my heart a touch warmer each time. When I opened up this five year old theme that was created from a (good) Drupal theme starter kit, my linter just about had a panic attack. Spending days reordering CSS rules, renaming classes, and replacing ID selectors would have gotten old even for a lint-squasher like me. On top of that, we don't have time for all that.

That led to my first question for myself.

### How much time you got?
There are certainly time limitations when you're refactoring your own company's app or site code. When in client services, that is even more critical. Going over budget makes no one happy.

One response to a short timeline is piling on more tech debt. I could a thirteenth CSS file to load after the existing stylesheets and use `!important` with reckless abandon. Or slightly better, I could leave _all_ of the bad practices in place and squeeze good responsive styles in between... using `!important` only half as often.

Besides delivering on the goals of the project, I'd also love to leave the campsite looking nicer than I found it for the next dev. And hey, if we're hired to work on this again, it'd be great to be in cleaner code.

In Bonifacio's article, she talks about working in small chunks. I'm finding this key with limited time. Rather than go through the whole site theme and fix all the scss-lint warnings first, I'm focusing on working through the Sass partials that get me closer to the ultimate goal. If this takes me into the `_carousel.scss` file, I can make the necessary responsive design changes and do a pass through to clear up other clunky or messy code while I'm there.  If the whole project doesn't take me through `_other-component.scss`, then maybe it doesn't get cleaned up this time.

Talking to my colleague Jared at the IWP meet up, I mentioned hearing a podcast where a dev described using a separate CSS file called `hacks.css` where he'd throw in embarrassing hacks that he knew he had to clean up later. Jared told me about a refactor project where they left the big file of ugly code in place and systematically chipped away, moving functionality out of it and into new files. The original file was named to indicate its status, and we went on to joke about naming files `this-is-bad-code.css` or `hey-dont-add-to-this.css`. We have fun.

The point is that with limited time, we have to make decisions about the most important things to clean up while not making things worse. Sort of like a medical triage with the "Do No Harm" motto painted on every wall. Of course, tied to the time we have is the actual scope of work we're hired to do.

### What's the scope?

In my case, job number one is to make this older site theme responsive. We weren't really asked to make the site cleaner or simpler or anything like that. One way to look at extra code refactoring is that it's added benefit. Buy the car and get premium windshield wipers for free.

More importantly, I pull from Alan Willett's talk here. I could do zero code refactoring other than making the components responsive. The thing is that trying to add on top of messy code is hard, frustrating, and simply takes longer. By doing other cleaning and reorganizing first or during, I make my own work faster and more efficient. Something as simple as deleting 60 lines of empty CSS selectors that came with the starter kit makes it that much easier to read through the substantial code.

Still, it's not my job here to make this codebase spotless. As mentioned above, I could add days of work onto the project by tackling only the lower hanging fruit. In practice, this is essentially greater support for my approach described above. By cleaning primarily only what I come across while working on the specified scope and what is getting in the way of that work, I keep the original scope in focus. That results in better, if not perfect, and hopefully even finishing under budget.

### Who carries the torch?

Finally, I've come across the question of who will be working with this code when I'm done. As is pretty clear, I do my styling almost exclusively in [the Sass CSS preprocessor language](http://sass-lang.com/). One of the first eye-opening moments of this project was when I realized that much of the Sass in the theme had been overwritten directly in the compiled CSS by the day-to-day site managers. These folks are not front end developers first, and CSS is what they know. That's completely understandable.

For those not immediately seeing the problem here, since Sass is compiled into the CSS browsers will use, as soon as I run the compilation command all the stuff only in CSS will be wiped away. Still, I'm a fragile snowflake who doesn't want to work in CSS anymore. (Also I'm faster and more efficient with Sass.)

In this case, I checked in with the client site manager and cleared the file reorganization ideas I had. I also went file-by-file and made sure to bring the CSS-only styles into Sass before finally compiling and committing the code. Going forward, the site manager may continue to want to write CSS styles, which is their prerogative. The specifics here are less important than the general approach: As the hired developer, I need to document my workflow well, capture the existing overrides, and communicate well with the client to understand their needs going forward.

## End thought
Actually taking on a refactoring project has dulled my excitement for refactoring noticeably. It turns out that professional code refactoring isn't quite as direct as a middle school logic puzzle. Unlike my ongoing, and maybe never-ending, refactoring of my own site however, refactoring code professionally requires restraint, focus, and thought before diving in deep.

Still, I do get a charge out of pushing a code commit with seriously net negative lines of code and making those little lint warnings disappear. As a wise Jared once said, the most important thing we can do often is delete code.