<div class='section'>
   <div class='has-text-centered'>
       <img src='{{ include.page.image }}' 
          style='
          {%- if include.page.image_background -%}
          background: {{ include.page.image_background }};
          {%- endif -%}
          {%- if include.page.image_scale_width -%}
          width: {{ include.page.image_scale_width }};
          {%- endif -%}
          '
          class='pixelart-post-art-main-image' />
   </div>
</div>

