---
layout: page
title: Projects
permalink: /projects/
---

Always looking to do some learning and exploration on my own, I'll start collecting some personal work here. Most will be open-source or otherwise free, so enjoy!

## freshAddress
There's no terribly good reason for this other than my being obsessive about saving clean URLs. When I save links from web development newsletters into Pocket, I don't want to save all the tracking URL parameters the newsletters use. I have been removing them manually, but I thought I could speed that up and be a learning opportunity to make a bookmarklet to clean the URLs for me.

So here it is! Drag this link into your menu bar and click when you want to strip URL parameters --> <a title="freshAddress" href="javascript:(function(){ var u = document.location.href; u = u.substring(0, u.indexOf('?')); window.location.href = u; })()" >freshAddress</a>.