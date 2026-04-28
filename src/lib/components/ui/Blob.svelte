<script>
  export let color;
  export let style = '';
</script>

<svg viewBox="0 0 200 180" style="overflow:visible;display:block;{style}">
  <path d="M100,10 C140,5 180,40 175,90 C170,140 145,170 100,168 C55,166 20,140 15,90 C10,40 60,15 100,10 Z"
    fill={color} filter="url(#roughStrong)"/>
</svg>
