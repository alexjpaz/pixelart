---
layout: default
layout: post-bulma
---

{% for post in site.categories.til %}
 <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url | relative_url }}">{{ post.title }}</a></li>
{% endfor %}
