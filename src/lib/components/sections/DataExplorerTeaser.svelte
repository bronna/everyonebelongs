<script>
  import Squiggle from '../ui/Squiggle.svelte';
  import SmallLeaf from '../flowers/SmallLeaf.svelte';
  import RoughBg from '../ui/RoughBg.svelte';
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

    <div class="search-row">
      <input
        class="search-input"
        type="text"
        placeholder="Search by district name…"
        disabled
      />
      <button class="search-btn" disabled>
        <RoughBg color="var(--deep-forest)"/>
        <span style="position:relative;z-index:1">Explore</span>
      </button>
    </div>

    <p class="placeholder-note">⚙ Data Explorer coming soon — full interactive version at <code>/explore</code></p>
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
  .search-row {
    display: flex;
    gap: 12px;
    max-width: 540px;
    margin: 0 auto;
  }
  .search-input {
    flex: 1;
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    padding: 16px 20px;
    border: 2px solid var(--deep-forest);
    background: #fff;
    color: var(--near-black);
    outline: none;
    box-shadow: 3px 3px 0 var(--deep-forest);
    opacity: 0.55;
    cursor: not-allowed;
  }
  .search-btn {
    position: relative;
    background: transparent;
    border: none;
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    padding: 16px 28px;
    color: #F7F3ED;
    box-shadow: 3px 3px 0 var(--near-black);
    cursor: not-allowed;
    opacity: 0.55;
  }
  .placeholder-note {
    margin-top: 28px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: rgba(26, 107, 74, 0.6);
    font-style: italic;
  }
  .placeholder-note code {
    font-style: normal;
    font-weight: 600;
  }
</style>
