<script>
  import Daisy from '$lib/components/flowers/Daisy.svelte';
  import WildFlower from '$lib/components/flowers/WildFlower.svelte';
  import Pansy from '$lib/components/flowers/Pansy.svelte';
  import Cosmos from '$lib/components/flowers/Cosmos.svelte';
  import SmallLeaf from '$lib/components/flowers/SmallLeaf.svelte';
  import Squiggle from '$lib/components/ui/Squiggle.svelte';
  import RoughBg from '$lib/components/ui/RoughBg.svelte';
</script>

<svelte:head>
  <title>Plant Your Flower — Everyone Belongs</title>
</svelte:head>

<section class="page-hero">
  <WildFlower color="rgba(245,171,84,0.14)" center="rgba(238,90,54,0.1)" size={72} style="position:absolute;top:30px;right:100px"/>
  <Pansy color="rgba(207,164,204,0.15)" center="rgba(245,171,84,0.1)" size={56} style="position:absolute;bottom:20px;left:80px"/>
  <SmallLeaf color="rgba(247,243,237,0.08)" size={36} rotate={-12} style="position:absolute;top:80px;left:200px"/>
  <div class="hero-inner">
    <div class="label-row">
      <Squiggle color="var(--mango)" width={40}/>
      <span class="label">Community Flower Garden</span>
      <Squiggle color="var(--mango)" width={40}/>
    </div>
    <h1 class="title">Plant Your Flower</h1>
    <p class="subtitle">Draw a flower, share your story — approved drawings join the Everyone Belongs community garden.</p>
  </div>
</section>

<section class="garden-body">
  <div class="inner">
    <div class="layout">
      <!-- Canvas placeholder -->
      <div class="canvas-wrap">
        <div class="canvas-placeholder">
          <Pansy color="rgba(26,107,74,0.12)" center="rgba(245,171,84,0.15)" size={80} style="position:absolute;top:30px;left:40px"/>
          <Cosmos color="rgba(207,164,204,0.2)" center="rgba(238,90,54,0.15)" size={64} style="position:absolute;top:20px;right:50px"/>
          <WildFlower color="rgba(125,189,229,0.2)" center="rgba(245,171,84,0.15)" size={56} style="position:absolute;bottom:40px;left:100px"/>
          <Daisy color="rgba(245,171,84,0.18)" center="rgba(247,243,237,0.2)" size={52} style="position:absolute;bottom:30px;right:60px"/>
          <div class="canvas-label">
            <span>Drawing canvas coming soon</span>
          </div>
        </div>
        <div class="canvas-tools">
          <div class="tool-dot" style="background:#EE5A36"></div>
          <div class="tool-dot" style="background:#1A6B4A"></div>
          <div class="tool-dot" style="background:#7DBDE5"></div>
          <div class="tool-dot" style="background:#F5AB54"></div>
          <div class="tool-dot" style="background:#CFA4CC"></div>
          <div class="tool-sep"></div>
          <div class="tool-btn">Undo</div>
          <div class="tool-btn">Clear</div>
        </div>
      </div>

      <!-- Story input + submit -->
      <div class="form-side">
        <label class="field-label" for="garden-story">Share your story of inclusion</label>
        <textarea
          id="garden-story"
          class="story-input"
          rows="7"
          placeholder="Tell us about a moment when someone felt truly included — at school, in a classroom, or in your community…"
          disabled
        ></textarea>
        <button class="submit-btn" disabled>
          <RoughBg color="var(--poppy)"/>
          <span style="position:relative;z-index:1">Submit Your Flower</span>
        </button>
        <p class="form-note">Submissions are reviewed before joining the garden. No account needed.</p>
        <p class="placeholder-note">⚙ Canvas drawing tool + Netlify Forms submission coming soon</p>
      </div>
    </div>
  </div>
</section>

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
    color: var(--mango);
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
  .garden-body {
    background: var(--warm-cream);
    padding: 80px 40px 100px;
  }
  .inner {
    max-width: 1000px;
    margin: 0 auto;
  }
  .layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: start;
  }
  .canvas-wrap {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .canvas-placeholder {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    background: #fff;
    border: 2px dashed rgba(26,107,74,0.25);
    box-shadow: 4px 4px 0 var(--near-black);
    overflow: hidden;
    cursor: not-allowed;
  }
  .canvas-label {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .canvas-label span {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: rgba(26,107,74,0.4);
    font-style: italic;
    letter-spacing: 0.03em;
  }
  .canvas-tools {
    display: flex;
    align-items: center;
    gap: 10px;
    opacity: 0.45;
    pointer-events: none;
  }
  .tool-dot {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid rgba(34,34,34,0.15);
    flex-shrink: 0;
  }
  .tool-sep {
    width: 1px;
    height: 20px;
    background: rgba(34,34,34,0.15);
    margin: 0 4px;
  }
  .tool-btn {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--near-black);
    border: 1.5px solid rgba(34,34,34,0.2);
    padding: 5px 12px;
    cursor: not-allowed;
  }
  .form-side {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .field-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--deep-forest);
  }
  .story-input {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.65;
    padding: 16px 18px;
    border: 2px solid rgba(26,107,74,0.25);
    background: #fff;
    color: var(--near-black);
    resize: none;
    box-shadow: 3px 3px 0 var(--near-black);
    outline: none;
    opacity: 0.55;
    cursor: not-allowed;
  }
  .story-input::placeholder {
    color: rgba(34,34,34,0.35);
  }
  .submit-btn {
    position: relative;
    align-self: flex-start;
    background: transparent;
    border: none;
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    padding: 16px 32px;
    color: #fff;
    box-shadow: 3px 3px 0 var(--near-black);
    cursor: not-allowed;
    opacity: 0.55;
  }
  .form-note {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: rgba(34,34,34,0.5);
    line-height: 1.5;
  }
  .placeholder-note {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: rgba(34,34,34,0.35);
    font-style: italic;
  }
  @media (max-width: 860px) {
    .layout { grid-template-columns: 1fr; }
  }
</style>
