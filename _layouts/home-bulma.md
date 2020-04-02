---
---
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {%- seo -%}
    <title>Hello Bulma!</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.1/css/bulma.min.css">
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
	<style>
		.is-pixel-perfect {
			image-rendering: pixelated;
		}
	</style>
  </head>
  <body>
  <section class="section">
    <div class="container">
	  <div class='columns'>
		<div class='column is-half is-offset-one-quarter'>
      <h1 class="title">
		{{ site.title }}
      </h1>
      <p class="subtitle">
		{{ site.subtitle }}
      </p>
      {%- for post in site.posts -%}
			<article class='section'>
				<figure class="image is-128x128">
				  <img src="{{ post.image }}" class='is-pixel-perfect' alt="Placeholder image">
				</figure>
			</article>
      {%- endfor -%}
		</div>
	  </div>
    </div>
  </section>
  </body>
</html>
