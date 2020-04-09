---
layout: post-bulma
---

<article class='section'>
  {%- include art/main-image.md page=page -%}
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <div class='content is-large'>
      {{ content }}
      </div>

      {%- include art/metadata.md metadata=page.metadata -%}

      {%- include art/gallery-link.md -%}
      
    </div>
  </div>
</article>


