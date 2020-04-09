---
layout: post-bulma
---

<article class='section'>
  <div class='section'>
     <div class='has-text-centered'>
         <img src='{{ page.image }}' 
            style='
            {%- if page.image_background -%}
            background: {{ page.image_background }};
            {%- endif -%}
            {%- if page.image_scale_width -%}
            width: {{ page.image_scale_width }};
            {%- endif -%}
            '
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


