<script>
  export let color = '#1A6B4A';
  export let size = 22;
  export let rotate = 0;
  export let style = '';

  const SK = '#2b1d0e';
  const SWT = '0';
</script>

<svg viewBox="0 0 30 36" width={size} height={size * 1.2}
  style="display:inline-block;overflow:visible;transform:rotate({rotate}deg);{style}">
  <path d="M15,32 C15,24 6,14 8,6 C10,0 20,0 22,6 C24,14 15,24 15,32 Z"
    fill={color} stroke={SK} stroke-width={SWT} stroke-linejoin="round" filter="url(#roughMed)"/>
  <path d="M15,30 C15,22 15,14 15,8" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="1" stroke-linecap="round"/>
</svg>
