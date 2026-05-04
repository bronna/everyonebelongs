<script>
  export let color;
  export let stem = '#1A6B4A';
  export let size = 44;
  export let opacity = 1;
  export let style = '';

  const SK = '#2b1d0e';
  const SW = '0';
  const SWT = '0';
</script>

<svg viewBox="0 0 40 60" width={size * 0.75} height={size}
  style="display:inline-block;overflow:visible;opacity:{opacity};{style}">
  <path d="M20,52 C20,40 20,34 20,28" stroke={SK} stroke-width={SW} stroke-linecap="round" fill="none" filter="url(#rough)"/>
  <path d="M20,38 C14,32 10,26 14,22 C16,20 18,22 20,26" fill={stem} stroke={SK} stroke-width={SWT} stroke-linejoin="round" filter="url(#roughMed)"/>
  <path d="M12,28 C10,18 14,10 20,8 C26,10 30,18 28,28 C26,34 22,36 20,36 C18,36 14,34 12,28 Z"
    fill={color} stroke={SK} stroke-width={SW} stroke-linejoin="round" filter="url(#roughStrong)"/>
  <path d="M20,11 C19,17 18,23 17,28" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="1.5" stroke-linecap="round"/>
</svg>
