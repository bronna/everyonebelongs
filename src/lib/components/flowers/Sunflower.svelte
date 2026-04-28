<script>
  export let color = '#F5AB54';
  export let center = '#7B3F00';
  export let size = 40;
  export let opacity = 1;
  export let style = '';

  const SK = '#2b1d0e';
  const SW = '2';
  const SWT = '1.4';

  function ecx(i) { return 30 + Math.cos(((i / 16) * 360 - 90) * Math.PI / 180) * 14; }
  function ecy(i) { return 30 + Math.sin(((i / 16) * 360 - 90) * Math.PI / 180) * 14; }
  function angle(i) { return (i / 16) * 360; }
</script>

<svg viewBox="0 0 60 60" width={size} height={size}
  style="display:inline-block;overflow:visible;opacity:{opacity};{style}">
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
