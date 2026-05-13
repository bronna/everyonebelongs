<script>
  /** @type {{ label: string, value: number, unit?: string, stateAvg: number, explanation: string }} */
  let { label, value, unit = '%', stateAvg, explanation } = $props();

  let showExplanation = $state(false);

  const diff = $derived(value - stateAvg);
  const diffLabel = $derived(
    diff > 0
      ? `+${diff.toFixed(1)}${unit} above state avg`
      : diff < 0
        ? `${diff.toFixed(1)}${unit} below state avg`
        : 'At state avg'
  );
  const diffClass = $derived(
    diff > 0 ? 'above' : diff < 0 ? 'below' : 'neutral'
  );
</script>

<div class="metric-card">
  <div class="card-header">
    <span class="card-label">{label}</span>
    <button
      class="info-btn"
      onclick={() => (showExplanation = !showExplanation)}
      aria-label="About {label}"
      aria-expanded={showExplanation}
    >ⓘ</button>
  </div>

  <div class="card-value">
    {value.toFixed(1)}<span class="unit">{unit}</span>
  </div>

  <div class="card-comparison {diffClass}">
    {diffLabel}
    <span class="state-avg">(state avg: {stateAvg.toFixed(1)}{unit})</span>
  </div>

  {#if showExplanation}
    <p class="explanation">{explanation}</p>
  {/if}
</div>

<style>
  .metric-card {
    background: #fff;
    border: 2px solid var(--near-black);
    box-shadow: 3px 3px 0 var(--near-black);
    padding: 20px 22px;
    flex: 1;
    min-width: 0;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 10px;
  }

  .card-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(34,34,34,0.55);
  }

  .info-btn {
    background: none;
    border: none;
    padding: 0;
    font-size: 16px;
    color: rgba(34,34,34,0.4);
    cursor: pointer;
    line-height: 1;
    flex-shrink: 0;
    transition: color 0.1s;
  }

  .info-btn:hover {
    color: var(--deep-forest);
  }

  .card-value {
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    font-size: 42px;
    line-height: 1;
    color: var(--near-black);
    letter-spacing: -0.02em;
    margin-bottom: 8px;
  }

  .unit {
    font-size: 22px;
    font-weight: 400;
    color: rgba(34,34,34,0.5);
    margin-left: 2px;
  }

  .card-comparison {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    align-items: center;
  }

  .above { color: var(--deep-forest); }
  .below { color: var(--poppy); }
  .neutral { color: rgba(34,34,34,0.5); }

  .state-avg {
    color: rgba(34,34,34,0.45);
    font-weight: 400;
  }

  .explanation {
    margin-top: 12px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    line-height: 1.6;
    color: rgba(34,34,34,0.65);
    padding-top: 12px;
    border-top: 1px solid rgba(34,34,34,0.1);
  }
</style>
