---
layout: post
---

<style>
img {
  image-rendering: pixelated;
}

.is-centered {
    text-align: center;
}
.zoom {
    margin-top: 5em;
}
.zoom img {
    width: 100%;
}
</style>

<div class='is-centered'>
    <p>
        <img src='{{ page.image }}' />
    </p>

    <p class='zoom'>
        <img src='{{ page.image }}' />
    </p>
</div>
