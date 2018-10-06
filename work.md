---
layout: listing
title: My Work
permalink: /work/
---

Check out some of my work here. They're a small reflection of my [years of experience]({{ site.meta.linkedin }}) with web development, project management, and digital strategy both within organizations and at agencies. [Let's talk.](mailto:alex.bea@gmail.com)

## Case Studies

{% assign revPortfolio = site.portfolio | sort:"launched" | reverse %}
{% for project in revPortfolio %}
<article>
  <h3>
    <a href="{{ project.url | prepend: site.baseurl }}">{{ project.title }}</a>
  </h3>
  <p>{{ project.short-description }}</p>
  <a href="{{ project.url | prepend: site.baseurl }}">
    <img src="/{{ project.thumbnail-path }}" alt="{{ project.title }}"/>
  </a>
</article>
{% endfor %}
