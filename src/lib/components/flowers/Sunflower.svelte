<script>
  export let color = '#F5AB54';
  export let center = '#7B3F00';
  export let size = 40;
  export let opacity = 1;
  export let style = '';

  const SK = '#2b1d0e';
  const SW = '0';
  const SWT = '0';

  function ecx(i) { return 30 + Math.cos(((i / 16) * 360 - 90) * Math.PI / 180) * 14; }
  function ecy(i) { return 30 + Math.sin(((i / 16) * 360 - 90) * Math.PI / 180) * 14; }
  function angle(i) { return (i / 16) * 360; }
</script>

<svg viewBox="0 0 60 60" width={size} height={size}
  style="display:inline-block;overflow:visible;opacity:{opacity};{style}">
  <defs>
    <filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
      <feTurbulence type="fractalNoise" baseFrequency="0.04 0.04" numOctaves="3" seed="2" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.8" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <filter id="roughStrong" x="-10%" y="-10%" width="120%" height="120%">
      <feTurbulence type="fractalNoise" baseFrequency="0.03 0.05" numOctaves="4" seed="7" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
    <filter id="petal" x="-12%" y="-12%" width="124%" height="124%">
      <feTurbulence type="fractalNoise" baseFrequency="0.05 0.06" numOctaves="2" seed="9" result="noise"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>
  {#each Array.from({length: 16}, (_, i) => i) as i}
    <ellipse
      cx={ecx(i)} cy={ecy(i)}
      rx="4" ry="9"
      fill={color} stroke={SK} stroke-width={SWT}
      filter="url(#petal)"
      transform="rotate({angle(i)} {ecx(i)} {ecy(i)})"
    />
  {/each}
  <circle cx="30" cy="30" r="11" fill={center} stroke={SK} stroke-width={SW} filter="url(#roughStrong)"/>
  <circle cx="30" cy="30" r="7" fill="rgba(0,0,0,0.3)" filter="url(#rough)"/>
</svg>
