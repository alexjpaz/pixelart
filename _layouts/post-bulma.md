{%- assign date_format = "%b %-d, %Y" -%}

{% include bulma/head.html %}
 <body>
  {% include bulma/navbar.html %}
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
              {{ page.title }}
          </h1>
          <h2 class="subtitle">
              {{ page.date | date: date_format }}
              <a href='{{ page.category | relative_url }}'> 
                  <span class="tag is-info">{{ page.category }}</span>
              </a>
              {% for tag in page.tags %} 
              <a href='{{ "/tags" | relative_url }}?tag={{ tag }}'> 
              <span class="tag is-info is-light">{{ tag }}</span>
              </a>
              {% endfor %}
          </h2>
        </div>
      </div>
    </section>
    {{ content }}
 </body>
  {% include bulma/footer.html %}
</html>
