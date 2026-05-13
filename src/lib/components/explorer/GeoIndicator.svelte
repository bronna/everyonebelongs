<script>
  import { geoAlbers, geoPath } from 'd3-geo';
  import { oregonOutline } from '$lib/utils/oregon-outline.js';

  /** @type {{ lat: number, lng: number, size?: number }} */
  let { lat, lng, size = 130 } = $props();

  const padding = 8;

  const projection = $derived(
    geoAlbers()
      .rotate([120, 0])
      .center([0, 44])
      .parallels([42, 46])
      .scale(size * 9.2)
      .translate([size / 2, size / 2])
  );

  const pathGen = $derived(geoPath().projection(projection));
  const outlinePath = $derived(pathGen(oregonOutline));

  const dotPos = $derived(() => {
    const p = projection([lng, lat]);
    return p ? { x: p[0], y: p[1] } : null;
  });
</script>

<div class="geo-wrap" style="width:{size}px;height:{size}px;" aria-hidden="true">
  <svg width={size} height={size} viewBox="0 0 {size} {size}" style="display:block;">
    <path
      d={outlinePath}
      fill="rgba(26,107,74,0.08)"
      stroke="var(--deep-forest)"
      stroke-width="1.5"
      stroke-linejoin="round"
    />
    {#if dotPos()}
      <circle
        cx={dotPos().x}
        cy={dotPos().y}
        r={5}
        fill="var(--poppy)"
        stroke="#fff"
        stroke-width="1.5"
      />
    {/if}
  </svg>
</div>

<style>
  .geo-wrap {
    flex-shrink: 0;
    border: 1.5px solid rgba(26,107,74,0.15);
    background: rgba(26,107,74,0.03);
  }
</style>
