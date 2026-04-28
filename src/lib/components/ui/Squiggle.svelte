<script>
  export let color = '#7DBDE5';
  export let width = 80;
  export let style = '';
</script>

<svg viewBox="0 0 120 24" style="width:{width}px;overflow:visible;display:block;{style}">
  <path d="M4,12 C14,4 24,20 34,12 C44,4 54,20 64,12 C74,4 84,20 94,12 C104,4 114,20 116,12"
    fill="none" stroke={color} stroke-width="3.5" stroke-linecap="round" filter="url(#rough)"/>
</svg>
