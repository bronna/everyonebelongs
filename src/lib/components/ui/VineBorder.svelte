<script>
  export let color = '#1A6B4A';
  export let height = 48;
  export let style = '';
</script>

<svg viewBox="0 0 1440 48" preserveAspectRatio="none"
  style="display:block;width:100%;height:{height}px;overflow:visible;{style}">
  <path d="M0,24 C80,10 160,38 240,24 C320,10 400,38 480,24 C560,10 640,38 720,24 C800,10 880,38 960,24 C1040,10 1120,38 1200,24 C1280,10 1360,38 1440,24"
    fill="none" stroke={color} stroke-width="2.5" stroke-linecap="round" opacity="0.5" filter="url(#rough)"/>
  {#each [120,240,360,480,600,720,840,960,1080,1200,1320] as x, i}
    <g transform="translate({x},{i % 2 === 0 ? 14 : 32})">
      <ellipse cx="0" cy="0" rx="6" ry="4" fill={color} stroke="#2b1d0e" stroke-width="1"
        opacity="0.6" filter="url(#rough)" transform="rotate({i % 2 === 0 ? -30 : 30})"/>
    </g>
  {/each}
</svg>
