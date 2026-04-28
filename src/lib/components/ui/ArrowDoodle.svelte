<script>
  export let color = '#222';
  export let style = '';
</script>

<svg viewBox="0 0 60 40" style="width:60px;overflow:visible;display:inline-block;{style}">
  <path d="M4,20 C20,16 42,20 52,20" fill="none" stroke={color} stroke-width="3" stroke-linecap="round" filter="url(#rough)"/>
  <path d="M44,12 L54,20 L44,28" fill="none" stroke={color} stroke-width="3" stroke-linecap="round" stroke-linejoin="round" filter="url(#rough)"/>
</svg>
