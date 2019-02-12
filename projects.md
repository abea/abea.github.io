---
layout: page
title: Web development projects
menu_title: Projects
permalink: /projects/
excerpt: A collection of some of the web development projects I've been tinkering around in spare time.
---

Always looking to do some learning and exploration on my own, I'll start collecting some personal work here. Most will be open-source or otherwise free, so enjoy!

## <a name="bike-history"></a>[Philly Bike History 🚲](https://github.com/abea/bike-history)
In later 2017, P'unk Avenue (my employer) designed a back end challenge for prospective Node developer candidates. We had a front end challenge to build a tic-tac-toe game, [which I'd completed](https://github.com/abea/tic-tac-toe) to get my job. To complete the set, and to exercise my Node, MongoDB, REST API, Vue.js, and Mocha skills, I decided to complete the back end challenge as well (some 16 months since already getting the job).

Put simply, [the challenge](https://github.com/punkave/backend-challenge) was to create an app that would continuously gather both weather and Indego bike station data (the Philadelphia bike share system), then make it available via a new API. The final step was to add a Vue front end. I kept this very basic (frankly as I was ready to move onto other projects), but using the Vue wrapper for Chart.js was an interesting exercise as well. The full requirements are in [the README file](https://github.com/abea/bike-history#requirements).

[Check out the code on Github](https://github.com/abea/bike-history). The live API is currently available at [indego-history.herokuapp.com](https://indego-history.herokuapp.com). And a few API calls to get you started:
- [one station at one time](https://indego-history.herokuapp.com/api/v1/stations/3004?at=2019-02-10T22:00)
- [all stations at one time](https://indego-history.herokuapp.com/api/v1/stations?at=2019-02-10T12:00)
- [one station over time](https://indego-history.herokuapp.com/api/v1/stations/3101?from=2019-02-10T12:00&to=2019-02-12T12:00)

## <a name="localhost-swap"></a>Localhost Swap
I do support on legacy websites every day. That often being asked to diagnose or change something that someone noticed on a specific page of a website--work that I do running a local version of the website. Most humans (like me before today) would click into the address bar, copy the URL path (the URL after the domain), and paste it after `localhost:3000` or whatever port they might be using.

This human will no longer mess with that. I copied [freshAddress](#freshaddress) and changed the function to instead return the same URL, but with `http://localhost:3000` as the protocol and domain. Now you can do. Drag to bookmark bar (or otherwise bookmark it) and move on with your dev life (changing the port number as needed) 👉 <a href="javascript:(function(){let u = document.location.href; u=u.substring(u.indexOf('//') + 2);const d = u.substring(0,u.indexOf('/'));u = u.replace(d, 'http://localhost:3000');window.location.href = u;})()" >Localhost Swap</a>.

## <a name="freshaddress"></a>freshAddress
There's no terribly good reason for this other than obsessiveness about saving clean URLs. When I save links from web development newsletters into my reading list app, I don't want to save them with URL parameters the newsletters use (mainly for click tracking). I have been removing them manually, but I thought I could speed that up and create a learning opportunity by making a bookmarklet to do this for me.

So here it is! Drag this link into your bookmarks bar (or otherwise bookmark it) and click when you want to strip URL parameters 👉 <a title="freshAddress" href="javascript:(function(){ var u = document.location.href; u = u.substring(0, u.indexOf('?')); window.location.href = u; })()" >freshAddress</a>.
