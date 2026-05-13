<script>
  import { CATEGORY_LABELS } from '$lib/utils/districts.js';

  /** @type {{ tiers: { high: { pct: number, categories: string[] }, medium: { pct: number, categories: string[] }, low: { pct: number, categories: string[] } } }} */
  let { tiers } = $props();

  const tierConfig = [
    {
      key: 'high',
      label: 'Higher support needs',
      color: 'var(--poppy)',
      bg: 'rgba(238,90,54,0.08)'
    },
    {
      key: 'medium',
      label: 'Moderate support needs',
      color: 'var(--mango)',
      bg: 'rgba(245,171,84,0.12)'
    },
    {
      key: 'low',
      label: 'Lower support needs',
      color: 'var(--sky-blue)',
      bg: 'rgba(125,189,229,0.12)'
    }
  ];
</script>

<div class="profile">
  <h4 class="profile-heading">Support needs profile</h4>

  {#each tierConfig as tier}
    {@const data = tiers[tier.key]}
    <div class="tier" style="background:{tier.bg};">
      <div class="tier-header">
        <span class="tier-label">{tier.label}</span>
        <span class="tier-pct" style="color:{tier.color};">{data.pct.toFixed(0)}%</span>
      </div>
      <div class="bar-track">
        <div class="bar-fill" style="width:{Math.min(data.pct, 100)}%;background:{tier.color};"></div>
      </div>
      <p class="tier-cats">
        {data.categories.map((k) => CATEGORY_LABELS[k]).join(' · ')}
      </p>
    </div>
  {/each}

  <p class="disclaimer">
    These groupings are approximate. Individual student support needs vary widely within each category.
  </p>
</div>

<style>
  .profile {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .profile-heading {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(34,34,34,0.55);
    margin: 0;
  }

  .tier {
    padding: 14px 16px;
    border-radius: 2px;
  }

  .tier-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 8px;
  }

  .tier-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: var(--near-black);
  }

  .tier-pct {
    font-family: 'Rubik', sans-serif;
    font-weight: 800;
    font-size: 18px;
    letter-spacing: -0.01em;
  }

  .bar-track {
    height: 8px;
    background: rgba(34,34,34,0.1);
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 8px;
  }

  .bar-fill {
    height: 100%;
    border-radius: 4px;
    transition: width 0.4s ease;
  }

  .tier-cats {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: rgba(34,34,34,0.55);
    margin: 0;
    line-height: 1.5;
  }

  .disclaimer {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: rgba(34,34,34,0.45);
    font-style: italic;
    margin: 0;
    line-height: 1.5;
  }
</style>
