---
layout: link-post
title: TIL about using `this` in `onload`
link: https://www.filamentgroup.com/lab/load-css-simpler/
source: Scott Jehl, Filament Group
tags:
- til
- performance
---

This is a bit of a twofer. This came up in a post by Scott Jehl about simplifying asyncronous CSS loading. It seems like a bit of a hack, but the logic is really solid.

```html
<link rel="stylesheet" href="/path/to/my.css" media="print" onload="this.media='all'">
```

In the snippet there, the media type for the CSS file is set to `print`, so it shouldn't block page rendering while it downloads. The asset is still downloaded, but in case it's a beefy CSS file you're not delaying any site rendering. Then, when the file is fully loaded, the `onload` event handler comes into effect, setting the `media` property of the link to `all` instead of `print`.

That's really cool on its own, but *how* this snippet works is an even bigger deal. the `onload` attribute uses `this` like you'd see in all kinds of Javascript functions. It makes sense, though. Think about it written this way:

```javascript
const link = document.querySelector('link[rel="stylesheet"]');

link.addEventListener('load', function () {
  this.media = 'all';
});
```

As covered in MDN, [`this` in an event handler is a reference to the element](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#The_value_of_this_within_the_handler). Since `onload` is [simply a function to be call ed when the `load` event fires](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload#Value), the value of `this` would be the same in there as it is with any other event handler callback.

There are probably lots of uses for this pattern, though they're probably mostly edge cases. Good to know nonetheless.