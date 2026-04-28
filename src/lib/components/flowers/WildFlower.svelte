<script>
  export let color;
  export let center = undefined;
  export let size = 38;
  export let opacity = 1;
  export let style = '';

  const SK = '#2b1d0e';
  const SW = '2';

  $: cc = center || color;
</script>

<svg viewBox="0 0 60 60" width={size} height={size}
  style="display:inline-block;overflow:visible;opacity:{opacity};{style}">
  <ellipse cx="30" cy="11" rx="6" ry="11" fill={color} stroke={SK} stroke-width={SW} filter="url(#petal)"/>
  <ellipse cx="49" cy="19" rx="6" ry="11" fill={color} stroke={SK} stroke-width={SW} filter="url(#petal)" transform="rotate(65 49 19)"/>
  <ellipse cx="47" cy="41" rx="6" ry="11" fill={color} stroke={SK} stroke-width={SW} filter="url(#petal)" transform="rotate(135 47 41)"/>
  <ellipse cx="30" cy="51" rx="6" ry="11" fill={color} stroke={SK} stroke-width={SW} filter="url(#petal)" transform="rotate(185 30 51)"/>
  <ellipse cx="13" cy="43" rx="6" ry="11" fill={color} stroke={SK} stroke-width={SW} filter="url(#petal)" transform="rotate(228 13 43)"/>
  <ellipse cx="11" cy="21" rx="6" ry="11" fill={color} stroke={SK} stroke-width={SW} filter="url(#petal)" transform="rotate(300 11 21)"/>
  <circle cx="30" cy="30" r="9" fill={cc} stroke={SK} stroke-width={SW} filter="url(#roughStrong)"/>
</svg>
