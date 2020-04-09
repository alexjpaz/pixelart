{%- assign date_format = "%b %-d, %Y" -%}
{{ include.value | date: date_format }}
