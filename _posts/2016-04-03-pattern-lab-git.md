---
layout: post
title: Figuring out Pattern Lab's git workflow
tags:
- style guides
- web development
---

Being both a front end developer and a pedant, I've been excited about the idea of good, maintainable style guides for a while now. The promise is amazing: future development made easier to extend and harder to screw up thanks to comprehensive documentation of all the styles the site needs. [Pattern Lab](http://patternlab.io/) has emerged in the last year as the style guide system to beat. When I started using it, however, a major question had me stuck for days.

## Pattern Lab
As a brief explainer, Pattern Lab is a system devised and built by [Brad Frost](http://bradfrostweb.com/) and [Dave Olsen](https://twitter.com/dmolsen). Maybe unfairly, it's most often associated with Frost since he's much more public and evangelical about it.

Put very simply, Pattern Lab works by establishing a hierarchy of the patterns that make up your style guide. [Using a biological metaphor](http://patternlab.io/about.html), atoms are your smallest bits such as a button or headline style, molecules are simple but made of a few atoms, such as a search form, organisms are more complex page elements, then templates and pages (breaking the metaphor) are even more complete structures using the lower level patterns.

When it comes to actually using the tool, you'd download or clone one of the version repositories from GitHub, either on its own or within a project. The original is PHP-based with [Mustache](https://mustache.github.io/) templates, but I'm using the [Twig](http://twig.sensiolabs.org/) version for a Drupal 8 project and I know there are others. All seem to come with a number of directories, including:

- `config`
- `core`
- `extras`
- `public`
- `source`
- `packages`

After your [first build](http://patternlab.io/docs/first-run.html), the basic workflow is that you create your patterns in the `source` directory and then run a generate script to build the style guide in the `public`, where they're now [navigable and organized](http://demo.patternlab.io/) for use.

## The tricky part (for me, at least)
The `.gitignore` file that comes with Pattern Lab makes no sense for us to use as developers building style guides. It turns out that's for good reason, but it threw me when it came to starting to use the tool.

Using version control with git with my team, I always want the code I commit to be exactly what I changed and nothing extra. If I throw in temporary comments or debugging code as I'm working, I don't want to commit that. Similarly, if I'm using a build tool, I'd prefer to only commit my changes and not the additional code generated from that while I work. A common example of this is styling in Sass and leaving out the compiled CSS. Ideally, your CSS can be compiled on the server, helping to avoid unnecessary merge conflicts and [git diffs](https://github.com/pattern-lab/patternlab-php/commit/9d72a48cf988885a95d5d93873771af0f48567eb).

Similarly, I would like to commit my `source` patterns and not the `public` files that it builds. This is particularly the case because, by default, the generate command will generate the WHOLE `public` directory of patterns instead of only those that changed. Committing `public` then means that my code reviewer could have to wade through thousands of lines of code diffs to see what I actually wrote.

The `.gitignore` file that comes with Pattern Lab, for both PHP and Twig, tells your computer to ignore changes in _both_ `source` and `public` directories, with the Twig version also ignoring `config`. As I got to work and explored generating the public version on the server, I struggled to understand **what I actually should and should not ignore.**

## My solution
Maybe this should have been obvious. Part of it is. Skipping right to that, `public` should be ignored in your git workflow. Easy.

After that, why were `config` and `source` ignored as well? One option would be to do some experimentation, but for two things:

1. trying to uncommit something after committing it can be a major pain.
1. I know getting the style guide generating on the server will be tricky enough on its own.

So I submitted an "issue" [question on the Twig version's repo](https://github.com/pattern-lab/patternengine-php-twig/issues/15) in the hopes that they could help me clear this up. Thankfully, Dave Olsen responded with a more complete explanation. First, the `.gitignore` file that comes with that repository at least is meant for people using the PHP dependency management tool Composer as well as to help in his development of the tool. The latter point is likely true for the original PHP/Mustache version as well.

Sweet. Knowing I can safely delete those files was the first step. Already long story shorter, **`public` and `export` (from the Twig version) are the only that should be ignored.** The rest will be used to generate the final style guide on the server.

## TLDR;
I'm realizing that this is a pretty long blog post to just say that you should only be ignoring `public` and the Twig version's `export` directories if generating on the remote server using the built-in scripts. The length here is likely an expression of how much I chose to stress out about it.

The process to get Drupal to actually generate this thing on the remote server is even more complex, but that's what we have back end developers for, right? And it's a blog post for another day.