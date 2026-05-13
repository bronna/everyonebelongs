<script>
  import SupportNeedsProfile from './SupportNeedsProfile.svelte';
  import { computeSupportTiers } from '$lib/utils/districts.js';

  /** @type {{ district: any }} */
  let { district } = $props();

  let open = $state(false);
  let showDisciplineInfo = $state(false);
  let showIdentificationInfo = $state(false);

  const tiers = $derived(computeSupportTiers(district));
</script>

<div class="more-details">
  <button
    class="toggle-btn"
    onclick={() => (open = !open)}
    aria-expanded={open}
  >
    <span>{open ? 'Show less' : 'See more about this district'}</span>
    <span class="chevron" class:rotated={open}>▾</span>
  </button>

  {#if open}
    <div class="details-body">

      <div class="metric-row">
        <div class="metric-row-header">
          <span class="metric-row-icon" class:flagged={district.discipline_disproportionality.flag}>
            {district.discipline_disproportionality.flag ? '⚑' : '✓'}
          </span>
          <span class="metric-row-label">Disproportionate discipline</span>
          <button
            class="info-btn"
            onclick={() => (showDisciplineInfo = !showDisciplineInfo)}
            aria-label="About disproportionate discipline"
          >ⓘ</button>
        </div>
        <p class="metric-row-note">{district.discipline_disproportionality.note}</p>
        <p class="caveat">Data may not be available for smaller districts due to reporting thresholds.</p>
        {#if showDisciplineInfo}
          <p class="explanation">
            This indicates whether students with disabilities are suspended, expelled, or removed from class at rates significantly higher than students without disabilities. Reported as part of IDEA Indicator 4.
          </p>
        {/if}
      </div>

      <div class="metric-row">
        <div class="metric-row-header">
          <span class="metric-row-icon" class:flagged={district.identification_disproportionality.flag}>
            {district.identification_disproportionality.flag ? '⚑' : '✓'}
          </span>
          <span class="metric-row-label">Identification disproportionality by race</span>
          <button
            class="info-btn"
            onclick={() => (showIdentificationInfo = !showIdentificationInfo)}
            aria-label="About identification disproportionality"
          >ⓘ</button>
        </div>
        <p class="metric-row-note">{district.identification_disproportionality.note}</p>
        <p class="caveat">Data may not be available for smaller districts due to reporting thresholds.</p>
        {#if showIdentificationInfo}
          <p class="explanation">
            This indicates whether students from certain racial or ethnic groups are identified as having a disability at rates significantly higher or lower than other students. Reported as part of IDEA Indicators 9 and 10.
          </p>
        {/if}
      </div>

      <div class="support-section">
        <SupportNeedsProfile {tiers} />
      </div>

    </div>
  {/if}
</div>

<style>
  .more-details {
    border-top: 2px solid rgba(34,34,34,0.1);
    padding-top: 4px;
  }

  .toggle-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    background: none;
    border: none;
    padding: 16px 0;
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 600;
    color: var(--deep-forest);
    cursor: pointer;
    width: 100%;
    text-align: left;
    transition: opacity 0.1s;
  }

  .toggle-btn:hover {
    opacity: 0.75;
  }

  .chevron {
    font-size: 18px;
    transition: transform 0.2s;
    margin-left: auto;
  }

  .chevron.rotated {
    transform: rotate(180deg);
  }

  .details-body {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 8px;
  }

  .metric-row {
    background: rgba(26,107,74,0.04);
    border: 1.5px solid rgba(26,107,74,0.15);
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .metric-row-header {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .metric-row-icon {
    font-size: 18px;
    color: var(--deep-forest);
    flex-shrink: 0;
  }

  .metric-row-icon.flagged {
    color: var(--poppy);
  }

  .metric-row-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: var(--near-black);
    flex: 1;
  }

  .info-btn {
    background: none;
    border: none;
    padding: 0;
    font-size: 16px;
    color: rgba(34,34,34,0.35);
    cursor: pointer;
    flex-shrink: 0;
    transition: color 0.1s;
  }

  .info-btn:hover {
    color: var(--deep-forest);
  }

  .metric-row-note {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: rgba(34,34,34,0.7);
    margin: 0;
    line-height: 1.5;
  }

  .caveat {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: rgba(34,34,34,0.45);
    font-style: italic;
    margin: 0;
  }

  .explanation {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    line-height: 1.6;
    color: rgba(34,34,34,0.65);
    margin: 0;
    padding-top: 8px;
    border-top: 1px solid rgba(34,34,34,0.1);
  }

  .support-section {
    margin-top: 4px;
  }
</style>
