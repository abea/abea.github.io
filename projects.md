---
layout: page
title: Web development projects
menu_title: Projects
permalink: /projects/
excerpt: A collection of some of the web development projects I've been tinkering around in spare time.
---

Always looking to do some learning and exploration on my own, I'll start collecting some personal work here. Most will be open-source or otherwise free, so enjoy!

## <a name="freshaddress"></a>freshAddress
There's no terribly good reason for this other than obsessiveness about saving clean URLs. When I save links from web development newsletters into my reading list app, I don't want to save them with URL parameters the newsletters use (mainly for click tracking). I have been removing them manually, but I thought I could speed that up and create a learning opportunity by making a bookmarklet to do this for me.

So here it is! Drag this link into your menu bar and click when you want to strip URL parameters --> <a title="freshAddress" href="javascript:(function(){ var u = document.location.href; u = u.substring(0, u.indexOf('?')); window.location.href = u; })()" >freshAddress</a>.

## <a name="localhost-swap"></a>Localhost Swap
I do support on legacy websites every day. That often being asked to diagnose or change something that someone noticed on a specific page of a website--work that I do running a local version of the website. Most humans (like me before today) would click into the address bar, copy the URL path (the URL after the domain), and paste it after `localhost:3000` or whatever port they might be using.

This human will no longer mess with that. I copied freshAddress and changed the function to instead return the same URL, but with `http://localhost:3000` as the protocol and domain. Now you can do. Drag to bookmark bar and move on with your dev life (changing the port number as needed). --> <a href="javascript:(function(){let u = document.location.href; u=u.substring(u.indexOf('//') + 2);const d = u.substring(0,u.indexOf('/'));u = u.replace(d, 'http://localhost:3000');window.location.href = u;})()" >Localhost Swap</a>.
