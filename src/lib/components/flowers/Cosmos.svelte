<script>
  export let color;
  export let center = '#F5AB54';
  export let size = 36;
  export let opacity = 1;
  export let style = '';

  const SK = '#2b1d0e';
  const SW = '0'; //2
  const SWT = '0'; //1.4

  function petalPath(a) {
    const cx1 = 30 + Math.cos((a - 90) * Math.PI / 180) * 5;
    const cy1 = 30 + Math.sin((a - 90) * Math.PI / 180) * 5;
    const cx2 = 30 + Math.cos((a - 75) * Math.PI / 180) * 19;
    const cy2 = 30 + Math.sin((a - 75) * Math.PI / 180) * 19;
    const cx3 = 30 + Math.cos((a - 105) * Math.PI / 180) * 19;
    const cy3 = 30 + Math.sin((a - 105) * Math.PI / 180) * 19;
    return `M30,30 L${cx1},${cy1} C${cx2},${cy2} ${cx3},${cy3} ${cx1},${cy1}Z`;
  }
</script>

<svg viewBox="0 0 60 60" width={size} height={size}
  style="display:inline-block;overflow:visible;opacity:{opacity};{style}">
  {#each [0, 45, 90, 135, 180, 225, 270, 315] as a}
    <path d={petalPath(a)} fill={color} stroke={SK} stroke-width={SWT} stroke-linejoin="round" filter="url(#petal)"/>
  {/each}
  <circle cx="30" cy="30" r="7" fill={center} stroke={SK} stroke-width={SW} filter="url(#roughStrong)"/>
</svg>
