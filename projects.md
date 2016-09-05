---
layout: page
title: Web development projects
permalink: /projects/
excerpt: A collection of some of the web development projects I've been tinkering around in spare time.
---

Always looking to do some learning and exploration on my own, I'll start collecting some personal work here. Most will be open-source or otherwise free, so enjoy!

## <a name="freshaddress"></a>freshAddress
There's no terribly good reason for this other than obsessiveness about saving clean URLs. When I save links from web development newsletters into my reading list app, I don't want to save them with URL parameters the newsletters use (mainly for click tracking). I have been removing them manually, but I thought I could speed that up and create a learning opportunity by making a bookmarklet to do this for me.

So here it is! Drag this link into your menu bar and click when you want to strip URL parameters --> <a title="freshAddress" href="javascript:(function(){ var u = document.location.href; u = u.substring(0, u.indexOf('?')); window.location.href = u; })()" >freshAddress</a>.
