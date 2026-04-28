<script>
  export let color = '#EE5A36';
  export let center = '#2b1d0e';
  export let size = 38;
  export let opacity = 1;
  export let style = '';

  const SK = '#2b1d0e';
  const SW = '2';

  function ecx(a) { return 30 + Math.cos((a - 90) * Math.PI / 180) * 12; }
  function ecy(a) { return 30 + Math.sin((a - 90) * Math.PI / 180) * 12; }
</script>

<svg viewBox="0 0 60 60" width={size} height={size}
  style="display:inline-block;overflow:visible;opacity:{opacity};{style}">
  {#each [0, 90, 180, 270] as a}
    <ellipse
      cx={ecx(a)} cy={ecy(a)}
      rx="11" ry="15"
      fill={color} stroke={SK} stroke-width={SW}
      filter="url(#roughStrong)"
      transform="rotate({a + 12} {ecx(a)} {ecy(a)})"
    />
  {/each}
  <circle cx="30" cy="30" r="8" fill={center} stroke={SK} stroke-width={SW} filter="url(#roughStrong)"/>
</svg>
