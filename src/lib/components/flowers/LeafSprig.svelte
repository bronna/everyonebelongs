<script>
  export let color = '#1A6B4A';
  export let size = 48;
  export let style = '';

  const SK = '#2b1d0e';
  const SW = '0';
  const SWT = '0';
</script>

<svg viewBox="0 0 60 70" width={size} height={size * 1.2}
  style="display:inline-block;overflow:visible;{style}">
  <path d="M30,65 C30,50 28,35 30,10" fill="none" stroke={SK} stroke-width={SW} stroke-linecap="round" filter="url(#rough)"/>
  <path d="M30,40 C20,30 12,18 20,12 C26,8 30,22 30,28" fill={color} stroke={SK} stroke-width={SWT} stroke-linejoin="round" filter="url(#roughMed)"/>
  <path d="M30,28 C34,20 42,10 48,14 C52,18 44,28 30,34" fill={color} stroke={SK} stroke-width={SWT} stroke-linejoin="round" filter="url(#roughMed)"/>
  <path d="M30,16 C26,8 30,4 34,8 C36,12 32,16 30,16" fill={color} stroke={SK} stroke-width={SWT} stroke-linejoin="round" filter="url(#roughMed)"/>
</svg>
