---
layout: post-bulma
---

<article class='section'>
  <div class='section'>
     <div class='has-text-centered'>
         <img src='{{ page.image }}' 
            {%- if page.image_background -%}
            style='
            background: {{ page.image_background }};
            {%- if page.image_scale_width -%}
            width: {{ page.image_scale_width }};
            {%- endif -%}
            '
            {%- endif -%}
            class='pixelart-post-art-main-image' />
     </div>
  </div>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <div class='content is-large'>
      {{ content }}
      </div>
      <section class='section'>
          <a class='button is-success is-large is-fullwidth' href='{{ "/gallery" | relative_url }}' >Gallery</a>
      </section>
    </div>
  </div>
</article>


