---
title: Tag Search
layout: post-bulma
---
{%- assign date_format = "%b %-d, %Y" -%}

<div class='container'>
<div id='target'>...</div>
<h2>Other tags</h2>
{% assign rawtags = "" %}
{% for post in site.posts %}
  {% assign ttags = post.tags | join:'|' | append:'|' %}
  {% assign rawtags = rawtags | append:ttags %}
{% endfor %}
{% assign rawtags = rawtags | split:'|' | sort | uniq %}

{% for tag in rawtags %}
<a href='{{ "/tags" | relative_url }}?tag={{ tag }}'> 
  <span class="tag is-info is-light is-large">{{ tag }}</span>
</a>
{% endfor %}
</div>

<script id="template" type="x-tmpl-mustache">
{% raw %}
   <h1 class='title'>posts matching tag <span class="tag is-large">"{{ tag }}"</span></h1>
   <article class='section'>
      {{#posts}}
        <h1 class='title'>
            <a href="{{ url }}">
            {{ title }}
            </a>
        </h1>
         <h2 class="subtitle">
           {{ date_formatted }}
         </h2>
        <p> 
            <a href="{{ url }}">
              <img src='{{ image }}' /> 
            </a>
        </p>
      </div>
      <div class='content'>
        {{ content }}
      </div>
      {{/posts}}
    </article>
{% endraw %}
</script>
<script src='https://cdn.jsdelivr.net/npm/mustache@4.0.1/mustache.min.js'></script>
<script>
var template = document.getElementById('template').innerHTML;
(function() {
var data = {
 
 posts: [],
};

{% for post in site.posts %}
data.posts.push({
  "title": "{{ post.title }}",
  "date_formatted": "{{ post.date | date: date_format }}",
  "url": "{{ post.url | relative_url }}",
  "image": "{{ post.image }}",
  "tags": {{ post.tags | jsonify }},
});
{% endfor %}

var url = new URL(location.href);
var params = new URLSearchParams(url.search);
var tag = params.get('tag');

data.tag = tag;

data.posts = data.posts.filter(function(post) {
  return post.tags.some(function(t) { return t === tag });
});

var rendered = Mustache.render(template, data);
document.getElementById('target').innerHTML = rendered;
})();
</script>
