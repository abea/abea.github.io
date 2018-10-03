---
layout: post
title: Reviewing Wes Bos' Learn Node course
tags:
- career
- node
- javascript
redirect_from: /2018/09/27/learn-node
---

Despite having worked with and on [*the best Node.js CMS in the universe*](https://apostrophecms.org/) for over a year now, I’ve had trouble understanding the line where Node ended and ApostropheCMS began. I know Apostrophe well, but my understanding of Node was fairly limited. To remedy that, I picked up Wes Bos’ [Learn Node course](https://learnnode.com/) many months back, and a month or so ago finally wrapped it up.

The first Wes Bos course I did was his [ES6 for Everyone](https://es6.io/) series back in August 2016. I then picked up [Javascript30](https://javascript30.com/), which is less a course than a series of challenges that are great when you can’t come up with ideas for things to play around with yourself. All of his courses are a series of videos where he records his screen while walking through some coding (discrete snippets or parts of a project). He also includes a code repository with some combination of starter code (for full projects) and finished code from the exercises to reference.

The format is nothing too crazy, but I think he’s done well with these because of his clarity, thoughtful exercise choices, and well designed course assets.

The Node course itself is not terribly long. My delay was more due to the interruptions of life and losing steam after the first several parts. The course walks you through building a restaurant listing and reviewing web app. The finished app includes user account management, content creation form, filtering, and Pug templating.

One thing that the course *isn’t* is a challenge where you can end up with a portfolio piece. [The course ships with a copy of the finished code](https://github.com/wesbos/Learn-Node) and you can literally see every line of code Wes writes. The starter files also include *a lot* — data handlers, basic middleware, configured `package.json` file, and more. As he explains, that starter code is to avoid spending time on the parts that aren’t Node (e.g., CSS) or typing every line out when you’ll hit the same concept again later on.

For example, you’ll learn about middleware by writing project-specific middleware a few times, so making you type out everything like `app.use(bodyParser.urlencoded({ extended: true }));` isn’t worth potentially slowing the course down. Wes does cover what each of those middleware do, however. There’s a risk of glossing over important elements with this, but balanced  with maintaining momentum it felt alright.

What the course *is*, and was for me, was a great way to hit a wide range of important Node (and MongoDB) concepts and patterns in the context of a “real thing.” The ES6 course is good, but covering Node in little, disconnected code snippets wouldn’t have the same effect. As we repeatedly returned to writing routes, about half way through I’d pause the video and write them before watching that part of the video, having internalized the pattern. When we wrote the content form, I could see how it connected with the data schema we wrote previously.

It definitely helped that I’d worked in a Node environment for a while before. There were a lot of concepts and patterns that I was already familiar with from Apostrophe. Seeing them in a pure Node context, however, removed that Apostrophe layer so I made connections that helped me not only understand Node better, but understand Apostrophe better as well.

I feel good about recommending the Learn Node course to devs out there who already know Javascript pretty well and are looking to broaden their skills into server-side code. The video lessons are well designed to make it easy to use as a reference later. I would recommend doing what I did, which is to work on a fully from-scratch Node app right after finishing. Using my new understanding right away, but without the starter code crutch, felt great and I think helped cement the concepts for me. I’ll likely write about that experience sometime soon.

Ultimately I’m really happy with the course. The fully written CSS helped me feel accomplished when I finished a route, controller, and template to immediately have a great looking page that *worked*. For people like me who have been front end developers for some time but never desired to learn PHP or another server-side language, Node is ideal and a skill that I’m sure will help my career. The Learn Node course is a great way to start in on that new skill.
