---
title: Posts
layout: page
header_page: true
---


{%- assign date_format = "%b %-d, %Y" -%}

<div class='content'>
{%- for category in site.categories -%}
  <h2>
    <a href='{{ category.first | relative_url }}'>
        {{ category | first }}
    </a>
  </h2>
{% for post in category.last %}
  <article>
  <h3 class='title'>
      <a href="{{ post.url | relative_url }}">
          {{ post.title }}
      </a>
  </h3>
  <p>
      {{ post.date | date: date_format }}
      <p>
          {% for tag in post.tags %} 
          <a href='{{ "/tags" | relative_url }}?tag={{ tag }}'> 
          <span class="tag is-info is-light">{{ tag }}</span>
          </a>
          {% endfor %}
      </p>

  </p>
  </article>
{% endfor %}
{%- endfor -%}
</div>
