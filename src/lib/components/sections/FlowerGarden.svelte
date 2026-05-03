<script>
  import Cosmos from '../flowers/Cosmos.svelte';
  import Daisy from '../flowers/Daisy.svelte';
  import WildFlower from '../flowers/WildFlower.svelte';
  import Pansy from '../flowers/Pansy.svelte';
  import Tulip from '../flowers/Tulip.svelte';
  import SmallLeaf from '../flowers/SmallLeaf.svelte';
  import Clover from '../flowers/Clover.svelte';
  import Squiggle from '../ui/Squiggle.svelte';
  import RoughBg from '../ui/RoughBg.svelte';
</script>

<section class="garden">
  <!-- Scattered background flowers -->
  <Tulip color="var(--lavender)" size={52} style="position:absolute;top:40px;left:60px;opacity:0.28"/>
  <WildFlower color="var(--mango)" center="var(--poppy)" size={44} style="position:absolute;top:80px;right:80px;opacity:0.25"/>
  <Clover color="var(--sky-blue)" size={36} style="position:absolute;bottom:60px;left:140px;opacity:0.28"/>
  <Cosmos color="var(--poppy)" center="var(--mango)" size={38} style="position:absolute;bottom:80px;right:160px;opacity:0.22"/>
  <Squiggle color="rgba(247,243,237,0.12)" width={140} style="position:absolute;top:30px;left:35%;transform:rotate(-6deg)"/>

  <div class="inner">
    <div class="header">
      <div class="label-row">
        <Daisy color="var(--mango)" center="var(--warm-cream)" size={20} style="opacity:0.85"/>
        <Squiggle color="var(--mango)" width={40}/>
        <span class="label">Community Flower Garden</span>
        <Squiggle color="var(--mango)" width={40}/>
        <SmallLeaf color="rgba(247,243,237,0.6)" size={16} rotate={15}/>
      </div>
      <h2 class="heading">Plant Your Flower</h2>
      <p class="subhead">
        Draw a flower and share a moment of inclusion from your life — approved drawings join the garden and become part of the Everyone Belongs community.
      </p>
    </div>

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
          rows="6"
          placeholder="Tell us about a moment when someone felt truly included — at school, in a classroom, or in your community…"
          disabled
        ></textarea>
        <button class="submit-btn" disabled>
          <RoughBg color="var(--poppy)"/>
          <span style="position:relative;z-index:1">Submit Your Flower</span>
        </button>
        <p class="form-note">Submissions are reviewed before joining the garden. No account needed.</p>
      </div>
    </div>

    <p class="placeholder-note">⚙ Placeholder — canvas drawing tool + Netlify Forms submission coming soon</p>
  </div>
</section>

<style>
  .garden {
    background: var(--deep-forest);
    padding: 100px 40px;
    position: relative;
    overflow: hidden;
  }
  .inner {
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  }
  .header {
    text-align: center;
    margin-bottom: 64px;
  }
  .label-row {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 16px;
  }
  .label {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--mango);
  }
  .heading {
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    font-size: clamp(32px, 4vw, 56px);
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: #F7F3ED;
    margin-bottom: 20px;
  }
  .subhead {
    font-family: 'DM Sans', sans-serif;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(247,243,237,0.65);
    font-weight: 300;
    max-width: 560px;
    margin: 0 auto;
  }
  .layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: start;
    max-width: 1000px;
    margin: 0 auto;
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
    border: 2px dashed rgba(247,243,237,0.35);
    box-shadow: 4px 4px 0 rgba(247,243,237,0.25);
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
    border: 2px solid rgba(247,243,237,0.2);
    flex-shrink: 0;
  }
  .tool-sep {
    width: 1px;
    height: 20px;
    background: rgba(247,243,237,0.2);
    margin: 0 4px;
  }
  .tool-btn {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #F7F3ED;
    border: 1.5px solid rgba(247,243,237,0.3);
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
    color: var(--mango);
  }
  .story-input {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.65;
    padding: 16px 18px;
    border: 2px solid rgba(247,243,237,0.2);
    background: rgba(247,243,237,0.07);
    color: #F7F3ED;
    resize: none;
    box-shadow: 3px 3px 0 rgba(247,243,237,0.2);
    outline: none;
    opacity: 0.55;
    cursor: not-allowed;
  }
  .story-input::placeholder {
    color: rgba(247,243,237,0.4);
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
    box-shadow: 3px 3px 0 rgba(247,243,237,0.25);
    cursor: not-allowed;
    opacity: 0.55;
  }
  .form-note {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: rgba(247,243,237,0.45);
    line-height: 1.5;
  }
  .placeholder-note {
    margin-top: 48px;
    text-align: center;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: rgba(247,243,237,0.35);
    font-style: italic;
  }
  .placeholder-note code {
    font-style: normal;
    font-weight: 600;
  }
  @media (max-width: 860px) {
    .layout { grid-template-columns: 1fr; }
  }
</style>
