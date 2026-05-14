<script>
  import { goto } from '$app/navigation';
  import Squiggle from '../ui/Squiggle.svelte';
  import SmallLeaf from '../flowers/SmallLeaf.svelte';
  import DistrictSearch from '../explorer/DistrictSearch.svelte';
  import districts from '../../../data/districts.json';
</script>

<section class="teaser">
  <div class="inner">
    <div class="label-row">
      <SmallLeaf color="var(--deep-forest)" size={16} rotate={-15}/>
      <Squiggle color="var(--deep-forest)" width={50}/>
      <span class="label">Inclusion Data Explorer</span>
    </div>

    <h2 class="heading">How inclusive is<br/>your district?</h2>

    <p class="body-text">
      Search Oregon school districts to see how students with IEPs spend their school day — and how your district compares to its neighbors.
    </p>

    <DistrictSearch {districts} onSelect={(id) => goto(`/explore?district=${id}`)} />
  </div>
</section>

<style>
  .teaser {
    background: var(--sky-blue);
    padding: 100px 40px;
  }
  .inner {
    max-width: 720px;
    margin: 0 auto;
    text-align: center;
  }
  .label-row {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
  }
  .label {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--deep-forest);
  }
  .heading {
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    font-size: clamp(36px, 5vw, 64px);
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: var(--deep-forest);
    margin-bottom: 24px;
  }
  .body-text {
    font-family: 'DM Sans', sans-serif;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(26, 107, 74, 0.8);
    font-weight: 300;
    max-width: 560px;
    margin: 0 auto 48px;
  }
</style>
