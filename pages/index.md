---
title: page index
layout: page
---

<div class='columns'>
  <div class='column is-half is-offset-one-quarter'>
      <section class='section'>
        <div class='content'>
            {%- for page in site.pages -%}
            {{ page.url }}
            {%- endfor -%}
        </div>
      </section>
  </div>
</div>


