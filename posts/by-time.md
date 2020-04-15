---
title: Posts by time
layout: page
---

<div class='buttons'>
    <a class='button is-large is-fullwidth' href='{{ "/posts/by-category.html" | relative_url }}'>By Category</a>
    <a class='button is-large is-fullwidth is-info is-active' href='{{ "/posts/by-time.html" | relative_url }}'>By Time</a>
</div>

{%- assign date_format = "%b %-d, %Y" -%}

<div class='content'>
{%- for post in site.posts -%}
  <article>
  <h4 class='title'>
      <a href="{{ post.url | relative_url }}">
          {{ post.title }}
      </a>
  </h4>
  <p>
      {%- include formatted_date.md value=post.date -%}
      <p>
      <a href='{{ post.category | relative_url }}'> 
          <span class="tag is-info">{{ post.category }}</span>
      </a>
          {% for tag in post.tags %} 
          <a href='{{ "/tags" | relative_url }}?tag={{ tag }}'> 
          <span class="tag is-info is-light">{{ tag }}</span>
          </a>
          {% endfor %}
      </p>

  </p>
  </article>
{%- endfor -%}
</div>
