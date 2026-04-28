<script>
  export let color;
  export let center = '#F5AB54';
  export let size = 36;
  export let opacity = 1;
  export let style = '';

  const SK = '#2b1d0e';
  const SW = '2';

  function cx(a) { return 30 + Math.cos((a - 90) * Math.PI / 180) * 11; }
  function cy(a) { return 30 + Math.sin((a - 90) * Math.PI / 180) * 11; }
</script>

<svg viewBox="0 0 60 60" width={size} height={size}
  style="display:inline-block;overflow:visible;opacity:{opacity};{style}">
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
