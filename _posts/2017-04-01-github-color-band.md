---
layout: post
title: Interior decorating with the GitHub events API
tags:
- javascript
- fun
redirect_from: /2017/04/01/github-color-band
---

Doing mostly Drupal and Wordpress CMS development I haven't had too much need to work with APIs. Google Maps API has come up regularly, but it's so robust and well documented that it can feel like cheating. In order to play with an API (and make this site a tad prettier in the process), I decided to make my own GitHub activity timeline inspired by the one on a GitHub user profile.

![GitHub user profile timeline with squares of green with darkness representing number of actions]({{ site.url }}/img/blog/gh-activity-timeline.png)

Since the ending of the story is probably at the top of the page anyway, here's essentially where I wanted to end up:

![My color band appearing below the page header.]({{ site.url }}/img/blog/gh-activity-band.png)

This band of colored blocks represents (for the most part) the last 30 public actions I took on GitHub with regards to repositories. After looking at the GitHub user events JSON output, I decided to build off of that rather than number of actions like they do on user profiles. This focuses a bit more on recent activity and is not simply copying what's already there. The first "page" of results from the API request defaults to 30, which works for my purposes. It's long enough to be visually varied without looking like a blur on small screens.

## The process

To start, I created the core variables, including an HTTP request variable, my personal API token, request URL, and the timeline element where it'd all end up. Some of you, and the GitHub API documentation, might be going wide-eyed at including an API key in client-side code like this. Normally I definitely wouldn't, but GitHub lets you [set access scopes](https://developer.github.com/v3/oauth/#scopes) for each token you create. By setting the token with no scopes granted, this "grants read-only access to public information (includes public user profile info, public repository info, and gists)". I'm comfortable with that until convinced otherwise.

```js
const ghXhr = new XMLHttpRequest(),
      // API key with only public profile viewing permissions.
      apiKey = "a53efb22fc88ae67848a0ee796402537f164934e" // Not real.
      reqUrl = `https://api.github.com/users/abea/events?access_token=${apiKey}`,
      timeline = document.getElementById("gh-timeline");
```

Next I set the list of event types that I'd be displaying in my timeline. [GitHub's event type list](https://developer.github.com/v3/activity/events/types/) includes more than I used. Several types are deprecated and others are only used to trigger hooks and don't show up in the user event timeline output. Because of my eventual styling choice, including those would have diluted the effect.

```js
// Event types from https://developer.github.com/v3/activity/events/types/
// excluding deprecated or types not visibile in timelines.
const eventTypes = [
  "CommitCommentEvent", "CreateEvent", "DeleteEvent", "ForkEvent", "GollumEvent", "IssueCommentEvent", "IssuesEvent", "MemberEvent", "OrgBlockEvent", "ProjectCardEvent", "ProjectColumnEvent", "ProjectEvent", "PublicEvent", "PullRequestEvent", "PullRequestReviewEvent", "PullRequestReviewCommentEvent", "PushEvent", "ReleaseEvent", "WatchEvent"
];
```

Speaking of that styling effect, I took this event type array and converted it into an array of objects that include both the event name as well as an associated color. The colors are all based on my primary orange color du jour, `#d75c08`. I took the HSL color value for it and wrote a little equation that set the lightness value based on the event type's position in the original array. This way I can add or remove event types if they change and this will all still work nicely.

You can probably see now how removing the unused events makes for more distinct colors across the range.

```js
// Create array of objects with event type and associated color.
const events = eventTypes.map(
  function(eventKey, i) {
    // Calculate the color (HSL) lightness based on event type position in the
    // eventTypes array.
    const lightness = Math.round(100 - ((100/eventTypes.length) * i));

    const event = {
      name: eventKey,
      // Color using the brand primary color with varying lightness value.
      color: `hsl(24, 93%, ${lightness}%)`
    }

    return event;
  }
);
```

At this point I'm ready to start the API request.

```js
// Start the API call.
ghXhr.open("GET", reqUrl, true);
// On readystatechange run the timeline function.
ghXhr.onreadystatechange = checkState;
ghXhr.onerror = function () {
  console.log("Github API call didn't work.");
  timeline.remove();
}
ghXhr.send();
```

Se you can see, when the `readyState` changes for the request, I'm running a `checkState()` function. This is simply a small function that checks if the request is done. If so, we parse the response JSON and run the function to create our event blocks.

```js
function checkState() {
  // If the readyState is DONE parse the timeline JSON and turn it into event
  // blocks.
  if(ghXhr.readyState == XMLHttpRequest.DONE) {
    JSON.parse(ghXhr.responseText, buildBlocks);
  }
}
```

To build the individual event blocks, I look at the returned JSON and find keys of `"type"` that have values that appear in my event types list. Finally, I create a `div` element with the class "color-band__block", background color style from the event object, and `title` attribute with the event type name. The `title` attribute is a little touch to allow people to hover over blocks and get an indication of what's going on. These blocks are appended to the timeline element identified earlier.

```js
function buildBlocks(key, value) {
  // In the JSON, look for event types and check if they're in the array of
  // included event types.
  if (key === "type" && eventTypes.includes(value)) {
    // Find the event object that matches the event type found.
    const typeObj = events.find(obj => obj.name === value);

    // Create a div element, add a specific class, set the `title` attr to the
    // event type name, and set a background color of the associated color.
    // Finally, append it to the timeline element.
    const div = document.createElement("div");
    div.classList.add("color-band__block");
    div.setAttribute("title", value);
    div.style.backgroundColor = typeObj.color;
    timeline.appendChild(div);
  };
}
```

That's it! A little cosmetic addition from some API play time and wordy blog post walking through the code! If you want, this is all easy enough to replicate for your GitHub account by replacing the username in the request URL and the API key (don't use mine, please).
