{% include bulma/head.html %}
 <body>
  {% include bulma/navbar.html %}
  {{ content }}
  {% include bulma/gallery.html %}

  <div class='columns'>
      <div class='column is-half is-offset-one-quarter'>
          <section class='section'>
            <div class='buttons'>
              <a class='button is-success is-large is-fullwidth' href='{{ "/gallery" | relative_url }}' >Gallery</a>
              {%- for page in site.pages -%}
              {%- if page.header_page -%}
              <a class='button is-light is-large is-fullwidth' href='{{ page.site_url | relative_url }}' >{{ page.title }}</a>
              {%- endif -%}
              {%- endfor -%}
            </div>
          </section>
      </div>
  </div>
 </body>
  {% include bulma/footer.html %}
</html>
