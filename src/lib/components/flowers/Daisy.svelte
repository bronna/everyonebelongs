<script>
  export let color;
  export let center = '#F5AB54';
  export let size = 40;
  export let opacity = 1;
  export let style = '';

  const SK = '#2b1d0e';
  const SW = '0';
  const SWT = '0';
  const petals = 12;

  function ecx(i) { return 30 + Math.cos(((i / petals) * 360 - 90) * Math.PI / 180) * 13; }
  function ecy(i) { return 30 + Math.sin(((i / petals) * 360 - 90) * Math.PI / 180) * 13; }
  function angle(i) { return (i / petals) * 360; }
</script>

<svg viewBox="0 0 60 60" width={size} height={size}
  style="display:inline-block;overflow:visible;opacity:{opacity};{style}">
  {#each Array.from({length: petals}, (_, i) => i) as i}
    <ellipse
      cx={ecx(i)} cy={ecy(i)}
      rx="3.5" ry="10"
      fill={color} stroke={SK} stroke-width={SWT}
      filter="url(#petal)"
      transform="rotate({angle(i)} {ecx(i)} {ecy(i)})"
    />
  {/each}
  <circle cx="30" cy="30" r="8" fill={center} stroke={SK} stroke-width={SW} filter="url(#roughStrong)"/>
</svg>
