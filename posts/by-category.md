---
title: Posts
layout: page
---


<div class='buttons'>
    <a class='button is-large is-fullwidth is-info is-active' href='{{ "/posts/by-category.html" | relative_url }}'>By Category</a>
    <a class='button is-large is-fullwidth' href='{{ "/posts/by-time.html" | relative_url }}'>By Time</a>
</div>

{%- assign date_format = "%b %-d, %Y" -%}

<div class='content'>
{%- for category in site.categories -%}
    <hr />
    <div class="level">
     <div class="level-left">
      <div class="level-item">
       <span class="icon">
        <i class="far fa-folder"></i>
       </span>
       <a href='{{ category.first | relative_url }}'>
       {{ category | first }}
       </a>
      </div>
     </div>
    </div>
{% for post in category.last %}
  <article>
  <h4 class='title'>
      <a href="{{ post.url | relative_url }}">
          {{ post.title }}
      </a>
  </h4>
  <p>
      {%- include formatted_date.md value=post.date -%}
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
