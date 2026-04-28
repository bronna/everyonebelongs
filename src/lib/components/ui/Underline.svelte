<script>
  export let color = '#EE5A36';
  export let width = '100%';
  export let height = 10;
  export let style = '';
</script>

<svg viewBox="0 0 200 14" preserveAspectRatio="none"
  style="display:block;width:{width};height:{height}px;overflow:visible;{style}">
  <path d="M2,8 C18,4 40,12 65,7 C90,2 115,11 140,6 C162,2 182,9 198,7"
    fill="none" stroke={color} stroke-width="4" stroke-linecap="round" filter="url(#rough)"/>
</svg>
