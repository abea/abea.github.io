---
layout: portfolio
title: Rock Creek Runner
thumbnail-path: "img/projects/rockcreekrunner-new.jpg"
short-description: Designed and built an updated Wordpress theme for trail running coach and blogger, Doug Hay. Launched November 2, 2015.

---

{:.center}
![]({{ site.baseurl }}/{{page.thumbnail-path}})

## Explanation

A few years ago, Doug Hay made the bold move to fully pursue his passion for sharing the joys of trail running. He had been blogging about the sport and producing a few educational products for years. Now that he was ready to make it his full-time pursuit, rockcreekrunner.com needed an upgrade.

## Problem

The old Rock Creek Runner website had served Doug well as he built his business. Thanks to Wordpress' vibrant community and user-friendly configuration, Doug had built his own website and introduced a number of features to start turning it into a business. After making it his full-time profession, Doug was interested in improving the layout and user experience to encourage more sign-ups and make the product pages better tied-in to the main site.

![Screenshot of the older Rock Creek Runner website]({{ site.baseurl }}/img/projects/rockcreekrunner-old.jpg)

On top of that, he wanted the design to generally look more polished. Looking at other internet-based running and lifestyle business he respected, as well as in our discussions about his business, we decided that putting Doug more front-and-center was important. People weren't only connecting with his writing. They connected with him as a person and to his personal passion for running.

Additionally, the plugins and drag-and-drop theme also added unneeded complexity and cruft to the back end of the site. Plugins were hanging around long after they were no longer useful and some were serving purposes that could be easily replaced through fairly basic template updates.

## Solution

I started design using a new-to-me tool, Macaw. [The tool came with a significant learning curve]({{ site.baseurl }}/2015/06/22/working-with-macaw), but ultimately it let me design responsively as I would be developing. Also importantly, it gave me the ability to export (imperfect) site code that I could send Doug to open and test in his browser. We ended up with a fairly simple design that made good use of his wonderful photography and featured a running portrait in a way that this humble man could be comfortable.

Key features of the design included prominent, but not distracting, placement of the newsletter signup and a one column sales page template. Both were directly integrated into the site rather than using third-party embed code or services that defined their own styles and stuck out as foreign.

Behind the scenes, I ripped out almost half of the installed plugins. Either I'd replaced them through template features, such as an additional widget region, or we confirmed they were no longer needed. For the template, I used the wonderful base template, [Underscores](http://underscores.me/). It includes essentially no design at all, instead providing a basic structure and key starter templates (e.g., 404 page). Underscores let me start theming quickly without having to override much of anything.

I also used the wonderful [Sass mixin library, Bourbon,](http://bourbon.io/) and its [grid mixin cousin, Neat,](http://neat.bourbon.io/). I'd been wanting to try them out, and sure enough they were great tools to help me write Sass styles and set up a grid without any extra code lying around our stylesheets.

## Results


Though content strategy was not a significant part of this engagement, we did discuss page updates and organization. The website is current and reflects Mr. Bea's expertise well.

According to Mr. Bea:

> The new site is a night and day improvement over the old site in expressing who I am as a professional. I was given good advice from the start: Look at other websites to see what I like, and don’t like. That was very helpful in forming my priorities and preferences. I wanted a clean looking website, with room for content (text), but not cluttered, and with a minimum of images. The final product provides the good looking platform I wanted for my business. One that I can modify as needed. Job well done.

## Conclusion

This was a great first project in my new web development career. Being a developer and strategist first, designer fourth, the design stage was a great learning experience. From our wireframing and discussions, I knew that the site would be relatively simple and have only homepage and basic interior page templates. With the additional client note that the design should be fairly simple, I chose to design in-browser, using the nearly blank canvas of the Responsive II parent theme mentioned above. This was an interesting challenge in that it allowed for a certain amount of "playing" with CSS. 

Designing in-browser worked in this case due to the simplicity and limited number of design elements involved. Not being a designer first, I'm not sure I would have taken that approach if many more content types and use-cases had been involved.

Though this client's needs were not extraordinary, as far as features go, it was important for him to have an online presence that reflects well on him and his business. He and I are both very pleased with how this project achieved the goals we set. I hope it serves his work well.