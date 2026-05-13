<script>
  import { arc, pie } from 'd3-shape';

  /**
   * @type {{
   *   segments: Array<{ label: string, value: number, color: string, plainLabel: string }>,
   *   size?: number,
   *   centerValue: string,
   *   centerLabel: string
   * }}
   */
  let { segments, size = 240, centerValue, centerLabel } = $props();

  const outerRadius = $derived(size / 2 - 4);
  const innerRadius = $derived(outerRadius * 0.58);

  const pieLayout = $derived(
    pie()
      .value((d) => d.value)
      .sort(null)(segments)
  );

  const arcGen = $derived(
    arc().innerRadius(innerRadius).outerRadius(outerRadius).padAngle(0.018).cornerRadius(2)
  );

  let tooltip = $state(null);

  function showTooltip(segment) {
    tooltip = segment;
  }

  function hideTooltip() {
    tooltip = null;
  }
</script>

<div class="donut-wrap" style="width:{size}px;height:{size}px;position:relative;">
  <svg
    width={size}
    height={size}
    viewBox="0 0 {size} {size}"
    role="img"
    aria-label="Donut chart showing LRE placement percentages"
    style="display:block;"
  >
    <g transform="translate({size / 2},{size / 2})">
      {#each pieLayout as slice, i}
        <path
          d={arcGen(slice)}
          fill={segments[i].color}
          stroke="#fff"
          stroke-width="1"
          onmouseenter={() => showTooltip(segments[i])}
          onmouseleave={hideTooltip}
          onfocus={() => showTooltip(segments[i])}
          onblur={hideTooltip}
          tabindex="0"
          role="button"
          aria-label="{segments[i].plainLabel}: {segments[i].value.toFixed(1)}%"
          style="cursor:default;outline:none;"
        />
      {/each}

      <text
        text-anchor="middle"
        dy="-0.3em"
        font-family="Rubik, sans-serif"
        font-weight="900"
        font-size={size * 0.155}
        fill="var(--near-black)"
      >
        {centerValue}
      </text>
      <text
        text-anchor="middle"
        dy="1.3em"
        font-family="DM Sans, sans-serif"
        font-weight="400"
        font-size={size * 0.062}
        fill="rgba(34,34,34,0.55)"
        style="white-space:pre-wrap;"
      >
        {centerLabel}
      </text>
    </g>
  </svg>

  {#if tooltip}
    <div class="tooltip">
      <span class="tooltip-label">{tooltip.plainLabel}</span>
      <span class="tooltip-value">{tooltip.value.toFixed(1)}%</span>
    </div>
  {/if}
</div>

<style>
  .donut-wrap {
    flex-shrink: 0;
  }

  .tooltip {
    position: absolute;
    bottom: -48px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--near-black);
    color: #f7f3ed;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    padding: 7px 12px;
    white-space: nowrap;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
    box-shadow: 2px 2px 0 rgba(0,0,0,0.3);
  }

  .tooltip-label {
    font-weight: 400;
    opacity: 0.85;
  }

  .tooltip-value {
    font-weight: 700;
    font-size: 15px;
  }
</style>
