---
layout: post
title: Pattern Lab with Github Pages
audio: styleguide-post.mp3
tags:
- front end development
---

After tinkering with this personal portfolio site for a while more or less live, I recently decided to take the opportunity of full control to set up a style guide for a different kind of development. Since, as of today, this site is built with the static site generator Jekyll and hosted by Github, my big question was how to build and display this new style guide.

## Choosing the tool

The answer to how to build the style guide was pretty easy for me: [Pattern Lab](http://patternlab.io/). [As I discussed a bit in a previous post](http://alexbea.com/2016/04/03/pattern-lab-git.html), Pattern Lab is a pretty fantastic tool for intentionally designing and building site or app components from the ground up. I briefly considered [KSS](http://warpspire.com/kss/styleguides/), which seems like a great tool overall. Ultimately my familiarity and affinity for Pattern Lab won out. I did some quick searching for other recommendations specifically to work with [Github Pages](https://pages.github.com/), but didn’t see anything.

Specifically, I decided on the **[Node version of Pattern Lab, Grunt edition](https://github.com/pattern-lab/edition-node-grunt)**. Pattern Lab was originally built with PHP, which was awesome when I used it on a Drupal project. This time around, no reason to spin up a local server with PHP if the rest of the site isn’t using it.

Once I had that settled and started setting it up with my existing styles, I was faced with the question of how to host it. Hosting it publicly was important because… well, it’s fun to share. A public style guide could also be useful to host code samples for potential employers.

## Hosting the style guide with Github Pages

Since I moved my personal site to Github Pages I haven’t had any reason to pay for web hosting. I really wasn’t interested in that changing immediately. The options then seemed either to host my style guide as a stand-alone Github Pages site or keep it within my Jekyll site. [Though it seems there might be a way](https://www.sitepoint.com/hacking-routing-component-jekyll/), keeping it in the Jekyll site seemed more complicated than necessary. Also it turned out that if I went stand-alone the URL for the site would simply be a subdirectory of my master Github Pages site — e.g., (spoilers) alexbea.com/styleguide.

Next problem: To my knowledge, and a bit of searching, Github Pages need to be based on an index page in the site root, like `index.html` or `index.md`. I’m fully prepared to be wrong about this, but didn’t see anything to contradict it. Pattern Lab, however, has two main directories, `source` and `public`. You edit the files in `source` and run the build command, which generates final files in `public`. That `index.html` file I need would be in the `public` directory, rather than the project root. You can edit the Pattern Lab config to place either the source or generated files anywhere, but generating the files into the project root and saving them to version control that way seemed very messy at best.

The `public` directory is ignored by Git by default. For the sake of clear and clean version control, this seemed like a good practice to continue if possible. I knew that I’d absolutely need to deploy those generated files to Github in order to host the site, however. That’s where I remembered the possibility of nesting Git repositories.

In writing this, I learned about a feature in Git called [submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules). They allow you to do something very similar to what I did, but I still don’t think it would have been right in my case. While submodules are meant for breaking a project into nested Git repos, in my case the child repo was also ignored by the parent one. Someone more advanced in Git might be able to correct me here, but it seems like that’d be a problem with submodules. Or at least not taking full advantage of the feature.

In this case, from my Pattern Lab root, I went into the public directory (`cd public`), which (again), is ignored by the Pattern Lab Git repo. I then initialized a new repo (`git init`) and committed those files, pushing them to a new Github repo at https://github.com/abea/styleguide. My fully generated style guide with its `index.html` file was now at the root level of this new repo!

With that done, all that was left was to enable Github Pages for the repository. That’s it! Suddenly I had a new public style guide live at http://alexbea.com/styleguide (you didn’t spoil yourself before, right?).

There might very well be a more elegant or “correct” way to do this with the same playing pieces. If there is, please let me know here or [on Twitter](https://www.twitter.com/alexbea). I’d love to tighten this up further if possible without increasing complexity much more. Hopefully others can use this kind of setup for their own public style guides for more sharing and experimentation.
