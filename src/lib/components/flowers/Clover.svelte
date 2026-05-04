<script>
  export let color = '#CFA4CC';
  export let size = 30;
  export let opacity = 1;
  export let style = '';

  const SK = '#2b1d0e';
  const SW = '0';
</script>

<svg viewBox="0 0 50 60" width={size} height={size * 1.1}
  style="display:inline-block;overflow:visible;opacity:{opacity};{style}">
  <path d="M25,40 C25,30 25,20 25,12" stroke={SK} stroke-width={SW} stroke-linecap="round" fill="none" filter="url(#rough)"/>
  <circle cx="25" cy="20" r="11" fill={color} stroke={SK} stroke-width={SW} filter="url(#roughStrong)"/>
  <circle cx="14" cy="33" r="11" fill={color} stroke={SK} stroke-width={SW} filter="url(#roughMed)"/>
  <circle cx="36" cy="33" r="11" fill={color} stroke={SK} stroke-width={SW} filter="url(#roughMed)"/>
</svg>
