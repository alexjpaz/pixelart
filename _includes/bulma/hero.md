<section class="hero is-light">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
          {{ page.title }}
      </h1>
      <h2 class="subtitle">
          {{ page.date | date: date_format }}
          {% for tag in page.tags %} 
          <a href='{{ "/tags" | relative_url }}?tag={{ tag }}'> 
          <span class="tag is-info is-light">{{ tag }}</span>
          </a>
          {% endfor %}
      </h2>
    </div>
  </div>
</section>

