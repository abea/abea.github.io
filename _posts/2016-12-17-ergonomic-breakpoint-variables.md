---
layout: post
title: Responsive breakpoints naming by ergonomic context
tags:
- sass
- front end development
---

Ask 20 front end developers what they like to name their responsive breakpoints and you’ll get… probably 10 or so answers. Most people use similar ones, but many of us like to switch it up. For me, I’ve landed on a system I like based on screen interaction context.

To be more clear, what I’m talking about here are variable names for responsive breakpoint values while using CSS preprocessors. I use bracketed Sass, but all the pre- or post-processors I’m aware of (and worth using) have some system for using variables. They allow us to say that `$color-primary` is always `#663399`, then never need to remember in what order those 3s, 6s, and 9s go.

This is arguably even more useful for responsive breakpoints, where there might be three to six (or more?) values to remember. And what if we decide that one of the values should probably be about 100px higher? The point is that using variables for these are important.

## Popular approaches

I think it’s fair to say that the most typical set of breakpoint variables is some language variation of:

```
$small
$medium
$large
$extra-large
```

Maybe those are prefixed with `$bp-` or `$breakpoint-`. Maybe they’re abbreviated to `$sm, $md, $lg, $xl`. But that’s usually what I’ve seen.

My main issue with this is that it’s difficult to expand. I find that depending on the design it can be useful to have more than four breakpoints. In English at least, adding more involves lots more prefixing, such as `$extra-small` or `$medium-large`. This gets clunky, and more importantly it’s very subjective. What’s “small” to me might be “medium” to the next person. My `$xl` might be your `$lg`.

The second most popular system is probably the device route.

```
$phone or $mobile
$tablet
$tablet-portrait
$laptop
$desktop
```

This definitely provides more options for the mid-range values and is also less subjective. Great improvements. My issue with this is somewhat pedantic. Phones can get pretty big, and tablets can be fairly small… as well as bigger toward laptop sizes. Laptops can be really tiny. You get my point.

Worse is when breakpoints are named after specific devices, such as `$iPhone`, `$iPad` (it’s almost always Apple stuff).

## Ergonomic context variable names

It’s important I mention that I didn’t come up with this myself. I remember a while back hearing a discussion of breakpoint naming on the [Shop Talk Show podcast](http://shoptalkshow.com/) and they referenced a CSS-Tricks post that shared some breakpoint ideas and solicited comments for more. I browsed the comments with suggestions both simple and silly (e.g., gollum, bilbo, gimly, aragorn, gandalf, balrog). Then I came on [one comment by Kevin Powell referencing a tweet by Luke Wroblewski](https://css-tricks.com/naming-media-queries/#comment-437419).

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/TrentWalton">@TrentWalton</a> wrist, palm, lap, desk, wall, mall sized screens. human ergonomics won&#39;t change. devices will.</p>&mdash; Luke Wroblewski (@lukew) <a href="https://twitter.com/lukew/status/273453112902172672">November 27, 2012</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

I liked Luke’s point that human ergonomics were, if not unchanging, more stable than device names and types. So without further ado, my breakpoint variables are:

```
$bp-palm
$bp-hands
$bp-hands-wide
$bp-lap
$bp-desk
$bp-wall
```

Luke’s list included “wrist” and “mall sized screens”. I’ve yet to be called on to make a site for anything larger than a wall-sized screen and anything lower than “palm” should be suitable for wristwatch size screens (though I admit I rarely test for anything that small). I also like some short prefixing for clarity.

I also added some in-between levels. People interact with devices in their palm, but also devices they need both their hands to hold (e.g., most tablets). My `$bp-hands-wide` is essentially a landscape tablet width. I don’t love the name, but I’ve not thought of anything better yet.

I can hear the argument that all I’ve done is taken the device-type approach to variables and renamed them. Totally valid. And a screen built into a kiosk might be the size of one that I’d hold wide in my hands while it’s embedded into a refrigerator-sized machine—so we’re no longer interacting while holding in our hands.

As with anything in web development, there are trade-offs. Also, since these variables are part of the build process and not the end product it’s most important that these be meaning for for the current and future developers. After that, personal preference takes us the rest of the way. The device-type approach works for many people, but I like this better. I still do think that the subjective small-medium-large approach is problematic, however.

If your’e curious about my actually sizes, these are mine from a project I’m working on now:

```
$bp-palm: 20em; // 320px
$bp-hands: 37.5em; // 600px
$bp-hands-wide: 53.125em; // 850px
$bp-lap: 75em; // 1200px
$bp-desk: 100em; // 1600px
```

The `em` relative unit is based on the current standard 16px default font size. I also haven’t had need for a `$wall` size yet. I might start that around 2400px or something. Totally pulling that number out of the air in the moment.

If you want a deeper dive into that, check out the provocatively named, but thoughtful post, [The 100% correct way to do CSS breakpoints](https://medium.freecodecamp.com/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862). Gilbertson’s focus on ranges for devices rather than hard, well, breakpoints spoke to me. Clearly his thoughts on variable naming had less of an effect.

Also check out [the inspiring CSS-Tricks post and its comments](https://css-tricks.com/naming-media-queries/) for more brainstorming and front end dev silliness, too.

<hr/>

Updated (2017-03-14): Initially incorrectly stated that `$bp-hands-wide` was related to portrait tablet orientation. The breakpoint is meant to reflect *landscape* tablet orientation.
