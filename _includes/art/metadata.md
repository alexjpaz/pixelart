{%- if include.metadata -%}
<h5>Metadata</h5>
<table class='table is-bordered is-striped is-fullwidth'>
  <tbody>
  {% for item in page.metadata %}
  <tr>
  <td>{{ item.first }}</td>
  <td>{{ item.last }}</td>
  </tr>
  {% endfor %}

  </tbody>
</table>
{%- endif -%}
