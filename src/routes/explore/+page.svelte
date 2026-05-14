<script>
  import Daisy from '$lib/components/flowers/Daisy.svelte';
  import Cosmos from '$lib/components/flowers/Cosmos.svelte';
  import SmallLeaf from '$lib/components/flowers/SmallLeaf.svelte';
  import Squiggle from '$lib/components/ui/Squiggle.svelte';
  import DistrictSearch from '$lib/components/explorer/DistrictSearch.svelte';
  import DonutChart from '$lib/components/explorer/DonutChart.svelte';
  import GeoIndicator from '$lib/components/explorer/GeoIndicator.svelte';
  import MetricCard from '$lib/components/explorer/MetricCard.svelte';
  import MoreDetails from '$lib/components/explorer/MoreDetails.svelte';
  import { getDistrictById, getGeoEntry } from '$lib/utils/districts.js';

  let { data } = $props();

  let selectedId = $state(data.selectedId ?? null);

  const district = $derived(selectedId ? getDistrictById(selectedId, data.districts) : null);
  const geo = $derived(district ? getGeoEntry(district.id, data.geography, data.crosswalk) : null);

  const donutSegments = $derived(
    district
      ? [
          {
            label: 'lre_80plus',
            plainLabel: 'In regular classes most of the day',
            value: district.lre_80plus,
            color: 'var(--deep-forest)'
          },
          {
            label: 'lre_40to79',
            plainLabel: 'In regular classes part of the day',
            value: district.lre_40to79,
            color: 'var(--sky-blue)'
          },
          {
            label: 'lre_under40',
            plainLabel: 'Mostly in separate classes',
            value: district.lre_under40,
            color: 'var(--mango)'
          },
          {
            label: 'lre_separate',
            plainLabel: 'In separate settings',
            value: district.lre_separate,
            color: 'var(--poppy)'
          }
        ]
      : []
  );
</script>

<svelte:head>
  <title>Inclusion Data Explorer — Everyone Belongs</title>
</svelte:head>

<section class="page-hero">
  <Daisy color="rgba(125,189,229,0.15)" center="rgba(247,243,237,0.1)" size={70} style="position:absolute;top:30px;right:100px"/>
  <Cosmos color="rgba(245,171,84,0.14)" center="rgba(247,243,237,0.1)" size={56} style="position:absolute;bottom:20px;left:80px"/>
  <SmallLeaf color="rgba(247,243,237,0.08)" size={36} rotate={-12} style="position:absolute;top:80px;left:200px"/>
  <div class="hero-inner">
    <div class="label-row">
      <Squiggle color="var(--sky-blue)" width={40}/>
      <span class="label">Inclusion Data Explorer</span>
      <Squiggle color="var(--sky-blue)" width={40}/>
    </div>
    <h1 class="title">Explore</h1>
    <p class="subtitle">Search Oregon school districts to see how students with IEPs spend their school day — and how your district compares.</p>
  </div>
</section>

<section class="search-section">
  <div class="search-inner">
    <p class="search-prompt">Find your school district</p>
    <DistrictSearch
      districts={data.districts}
      onSelect={(id) => (selectedId = id)}
      initialName={data.selectedId ? (data.districts.find(d => d.id === data.selectedId)?.name ?? '') : ''}
    />
  </div>
</section>

{#if district}
  <section class="snapshot-section">
    <div class="snapshot-inner">

      <div class="district-header">
        <div class="district-name-block">
          <span class="district-label">You're viewing</span>
          <h2 class="district-name">{district.name}</h2>
          <span class="district-meta">{district.year} data · Oregon</span>
        </div>
        {#if geo}
          <GeoIndicator lat={geo.lat} lng={geo.lng} size={120} />
        {/if}
      </div>

      <div class="donut-section">
        <div class="donut-wrap">
          <DonutChart
            segments={donutSegments}
            size={220}
            centerValue="{district.lre_80plus.toFixed(0)}%"
            centerLabel="in regular{'\n'}classrooms"
          />
        </div>

        <div class="donut-legend">
          <p class="legend-intro">How students with IEPs spend their school day</p>
          {#each donutSegments as seg}
            <div class="legend-item">
              <span class="legend-swatch" style="background:{seg.color};"></span>
              <span class="legend-label">{seg.plainLabel}</span>
              <span class="legend-val">{seg.value.toFixed(1)}%</span>
            </div>
          {/each}
          <p class="lre-note">Tap any segment to see its label and percentage.</p>
        </div>
      </div>

      <div class="metrics-row">
        <MetricCard
          label="Students with IEPs"
          value={district.iep_percent}
          stateAvg={district.state_avg_iep_percent}
          explanation="This is the percentage of all enrolled students who have an Individualized Education Program (IEP), as reported to the federal government by the district."
        />
        <MetricCard
          label="Graduation rate (IEP students)"
          value={district.grad_rate_iep}
          stateAvg={district.state_avg_grad_rate_iep}
          explanation="This is the four-year adjusted cohort graduation rate for students with IEPs, as reported to the federal government. It may differ from the district's overall graduation rate."
        />
      </div>

      <MoreDetails {district} />

      <p class="attribution">
        Data from the Oregon Department of Education, {district.year}. Federal IDEA reporting. <strong>This is mock data for development purposes.</strong>
      </p>
    </div>
  </section>
{/if}

<style>
  .page-hero {
    background: var(--deep-forest);
    padding: 140px 40px 80px;
    position: relative;
    overflow: hidden;
  }

  .hero-inner {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 2;
  }

  .label-row {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 20px;
  }

  .label {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--sky-blue);
  }

  .title {
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    font-size: clamp(48px, 7vw, 96px);
    line-height: 1.0;
    letter-spacing: -0.02em;
    color: #F7F3ED;
    margin-bottom: 24px;
  }

  .subtitle {
    font-family: 'DM Sans', sans-serif;
    font-size: 20px;
    line-height: 1.65;
    color: rgba(247,243,237,0.65);
    font-weight: 300;
    max-width: 520px;
    margin: 0 auto;
  }

  .search-section {
    background: var(--warm-cream);
    padding: 60px 40px 48px;
    border-bottom: 2px solid rgba(34,34,34,0.08);
  }

  .search-inner {
    max-width: 720px;
    margin: 0 auto;
  }

  .search-prompt {
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 22px;
    color: var(--near-black);
    text-align: center;
    margin-bottom: 24px;
    text-transform: uppercase;
    letter-spacing: -0.01em;
  }

  .snapshot-section {
    background: #faf9f7;
    padding: 56px 40px 80px;
  }

  .snapshot-inner {
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .district-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
    padding-bottom: 32px;
    border-bottom: 2px solid rgba(34,34,34,0.08);
  }

  .district-name-block {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .district-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(34,34,34,0.45);
  }

  .district-name {
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    font-size: clamp(22px, 4vw, 32px);
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: var(--near-black);
    margin: 0;
  }

  .district-meta {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: rgba(34,34,34,0.45);
  }

  .donut-section {
    display: flex;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
  }

  .donut-wrap {
    flex-shrink: 0;
    padding-bottom: 56px;
  }

  .donut-legend {
    flex: 1;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .legend-intro {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: rgba(34,34,34,0.5);
    margin: 0 0 4px;
  }

  .legend-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .legend-swatch {
    width: 12px;
    height: 12px;
    border-radius: 2px;
    flex-shrink: 0;
  }

  .legend-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: var(--near-black);
    flex: 1;
  }

  .legend-val {
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 14px;
    color: var(--near-black);
    letter-spacing: -0.01em;
  }

  .lre-note {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: rgba(34,34,34,0.4);
    font-style: italic;
    margin: 4px 0 0;
  }

  .metrics-row {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .attribution {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: rgba(34,34,34,0.4);
    line-height: 1.5;
    border-top: 1px solid rgba(34,34,34,0.08);
    padding-top: 16px;
    margin: 0;
  }

  @media (max-width: 600px) {
    .page-hero {
      padding: 120px 24px 60px;
    }

    .search-section {
      padding: 40px 24px 36px;
    }

    .snapshot-section {
      padding: 40px 24px 60px;
    }

    .district-header {
      flex-direction: column-reverse;
      align-items: flex-start;
    }

    .donut-section {
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }

    .donut-wrap {
      padding-bottom: 60px;
    }

    .metrics-row {
      flex-direction: column;
    }
  }
</style>
