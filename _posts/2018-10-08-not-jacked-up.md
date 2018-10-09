---
layout: post
title: My website no longer looks jacked up
tags:
- career
- personal
- redesign
---

My site does not look jacked up right now! A web developer's website may never be truly "done," but I'm calling this as done as it needs to be for a while. Not really, I'll continue to tweak. But I'm feeling good about it!

I don't feel the need to go into great depth since this is no award winning design, but there are some things that were interesting or seem notable:

- I deleted a whole bunch of code. There were at least three whole template files that I got rid of, mostly because I could accomplish something at least as good with more creative use of the Liquid template engine. One was just an experiment gone idle.
- My first use of CSS Grid in production! No better place to use experimental features than a personal site. [I used it for the home page features](https://github.com/abea/abea.github.io/blob/v2.0/_sass/_layout.scss#L31-L40), defining grid areas for the different blocks. One great outcome of that is that it's super easy to rearrange the blocks as content changes. When I made one a bit longer, I could leave the HTML as it was, only changing some CSS to get a different column layout.
- Also [my first use of `object-fit` in production](https://github.com/abea/abea.github.io/blob/v2.0/_sass/_layout.scss#L51-L58). Together with the `@supports` query, I used it to make my photo on the home page fit better in the grid. This is a great new CSS feature that I look forward to using more. No more (or, less) `background-image`!
- Most people probably won't notice it, but [the body border changes color with each breakpoint](https://github.com/abea/abea.github.io/blob/v2.0/_sass/base/_base.scss#L2-L25). I originally did this, without the transition, to help me see when breakpoints came into effect. It's a subtle effect, and since I don't have much other color on the site, I decided to keep it. The colors are a bit of an Easter egg as well.
- The nav links also cycle through the color scheme when you hover over each. That alone is just kind of neat, but more so is [the mixin I used for this](https://github.com/abea/abea.github.io/blob/v2.0/_sass/utilities/_mixins.scss#L27-L36). I got the kernel of the approach from a Stack Overflow response, and changed it for my use, including allowing for future use with properties other than `color`. It also got me flexing my `nth-child` muscle.

This is much better, if not anything amazing. Still, I already have some plans for the next things I'd like to do. I want to reincorporate the SVG logo animation I built previously, which is why I haven't deleted it entirely. Same for [the Github activity feature]({{ site.baseurl }}/blog/github-color-band/). There are also some other style improvements I have in mind (e.g., link styles, non-`#fff` background color)

I'll leave it there for now. Finally, some screenshots of the current state of the site:

![new mobile homepage]({{ site.baseurl }}/img/blog/2018-10-08/mobile-home.jpg)
![new desktop homepage]({{ site.baseurl }}/img/blog/2018-10-08/desk-home.jpg)
![new mobile work page]({{ site.baseurl }}/img/blog/2018-10-08/mobile-work.jpg)
![new desktop work page]({{ site.baseurl }}/img/blog/2018-10-08/desk-work.jpg)
