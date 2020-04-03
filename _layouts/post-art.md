---
layout: post-bulma
---

<article class='section'>
  <div class='section'>
     <div class='has-text-centered'>
         <p> <img src='{{ page.image }}' /> </p>
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


