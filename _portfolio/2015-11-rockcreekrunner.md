---
layout: portfolio
title: Rock Creek Runner
thumbnail-path: "img/projects/rockcreekrunner-new.jpg"
short-description: Designed and built an updated Wordpress theme for trail running coach and blogger, Doug Hay. Launched November 2, 2015.

---

{:.center}
![Screenshot of the new Rock Creek Runner website]({{ site.baseurl }}/{{page.thumbnail-path}})

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
The final [Rock Creek Runner website](http://rockcreekrunner.com) puts a personal face on Doug's work while making the site easy to read on any device. Component styles make it simple for him to continue to edit and add promotional blocks to multiple block regions as needed. Importantly, there are at least two major layers of content management removed, between the clunky drag-and-drop theme and and sales page product, without sacrificing design.

Over the same period the previous year, the new website has seen a nearly 10% increase in site sessions as well as a slight decrease in bounce rate. The client's response to his new site has been enthusiastically positive regarding design, use, and reception.

## Conclusion
The Rock Creek Runner project was a pleasure to take on as a developer. Doug is a great person and is making a bold move creating a business from his passion. It was important for me to express through the design how important the trails are to him and how genuine his work is. I look forward to continuing to work with Doug and seeing how Rock Creek Runner will grow.