{%- assign date_format = "%b %-d, %Y" -%}

<div class='content'>
    <hr />
    <div class="level">
     <div class="level-left">
      <div class="level-item">
       <span class="icon">
        <i class="far fa-folder"></i>
       </span>
       {{ include.category }}
      </div>
     </div>
    </div>
{%- for post in site.categories[include.category] -%}
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
</div>
