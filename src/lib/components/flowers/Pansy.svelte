<script>
  export let color;
  export let center = '#F5AB54';
  export let size = 36;
  export let opacity = 1;
  export let style = '';

  const SK = '#2b1d0e';
  const SW = '0';

  function cx(a) { return 30 + Math.cos((a - 90) * Math.PI / 180) * 11; }
  function cy(a) { return 30 + Math.sin((a - 90) * Math.PI / 180) * 11; }
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
  {#each [0, 72, 144, 216, 288] as a}
    <ellipse
      cx={cx(a)} cy={cy(a)}
      rx="8.5" ry="13"
      fill={color} stroke={SK} stroke-width={SW}
      filter="url(#petal)"
      transform="rotate({a} {cx(a)} {cy(a)})"
    />
  {/each}
  <circle cx="30" cy="30" r="8" fill={center} stroke={SK} stroke-width={SW} filter="url(#roughStrong)"/>
</svg>
