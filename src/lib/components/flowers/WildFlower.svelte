<script>
  export let color;
  export let center = undefined;
  export let size = 38;
  export let opacity = 1;
  export let style = '';

  const SK = '#2b1d0e';
  const SW = '0';

  $: cc = center || color;
</script>

<svg viewBox="0 0 60 60" width={size} height={size}
  style="display:inline-block;overflow:visible;opacity:{opacity};{style}">
  <defs>
    <filter id="roughStrong" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="0.03 0.05" numOctaves="4" seed="7" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <filter id="petal" x="-12%" y="-12%" width="124%" height="124%">
      <feTurbulence type="fractalNoise" baseFrequency="0.05 0.06" numOctaves="2" seed="9" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>
  <ellipse cx="30" cy="11" rx="6" ry="11" fill={color} stroke={SK} stroke-width={SW} filter="url(#petal)"/>
  <ellipse cx="49" cy="19" rx="6" ry="11" fill={color} stroke={SK} stroke-width={SW} filter="url(#petal)" transform="rotate(65 49 19)"/>
  <ellipse cx="47" cy="41" rx="6" ry="11" fill={color} stroke={SK} stroke-width={SW} filter="url(#petal)" transform="rotate(135 47 41)"/>
  <ellipse cx="30" cy="51" rx="6" ry="11" fill={color} stroke={SK} stroke-width={SW} filter="url(#petal)" transform="rotate(185 30 51)"/>
  <ellipse cx="13" cy="43" rx="6" ry="11" fill={color} stroke={SK} stroke-width={SW} filter="url(#petal)" transform="rotate(228 13 43)"/>
  <ellipse cx="11" cy="21" rx="6" ry="11" fill={color} stroke={SK} stroke-width={SW} filter="url(#petal)" transform="rotate(300 11 21)"/>
  <circle cx="30" cy="30" r="9" fill={cc} stroke={SK} stroke-width={SW} filter="url(#roughStrong)"/>
</svg>
