---
layout: page
title: My Work
permalink: /work/
image: "img/color.png"
---

Please explore some of my work below. In addition, I have [years of experience]({{ site.config.linkedin }}) with digital strategy and web project management both within organizations and as an agency project manager. I'd love to talk about how we can collaborate. Please [email me](mailto:alex@abcreations.co).

## Case Studies

{% for project in site.portfolio %}
<section class="feature u-divide">
  <header>
    <a href="{{ project.url | prepend: site.baseurl }}">
      <h3>{{ project.title }}</h3>
    </a>
    <p>{{ project.short-description }}</p>
  </header>
  <div>
    <a href="{{ project.url | prepend: site.baseurl }}">
      <img src="/{{ project.thumbnail-path }}" alt="{{ project.title }}"/>
    </a>
  </div>
</section>
{% endfor %}