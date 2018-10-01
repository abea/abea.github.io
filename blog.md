---
layout: listing
title: Writing
permalink: /blog/
---

{% for post in site.posts %}
<article>
  <header>
    <time datetime="{{ post.date }}">
      {{ post.date | date: "%B %-d, %Y" }}
    </time>
    <a href="{{ post.url | prepend: site.baseurl }}">
      <h3>{{ post.title }}</h3>
    </a>
  </header>
  <p>
    {{ post.excerpt | strip_html | strip_newlines | truncate: 300 }}
  </p>
</article>
{% endfor %}
