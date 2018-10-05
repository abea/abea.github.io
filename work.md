---
layout: listing
title: My Work
permalink: /work/
---

Please explore some of my work below. In addition, I have [years of experience]({{ site.meta.linkedin }}) with digital strategy and web project management both within organizations and as an agency project manager. I'd love to talk about how we can collaborate. Please [email me](mailto:alex.bea@gmail.com).

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
