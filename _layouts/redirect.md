{%- assign redirect_to = page.redirect_to | relative_url -%}
<!DOCTYPE html>
<meta charset="utf-8">
<title>Redirecting to {{ redirect_to }}</title>
<meta http-equiv="refresh" content="0; URL={{ redirect_to }}">
<link rel="canonical" href="{{ redirect_to }}">
