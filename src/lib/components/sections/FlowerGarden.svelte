<script>
  import Cosmos from '../flowers/Cosmos.svelte';
  import Daisy from '../flowers/Daisy.svelte';
  import WildFlower from '../flowers/WildFlower.svelte';
  import Pansy from '../flowers/Pansy.svelte';
  import Tulip from '../flowers/Tulip.svelte';
  import Sunflower from '../flowers/Sunflower.svelte';
  import SmallLeaf from '../flowers/SmallLeaf.svelte';
  import Clover from '../flowers/Clover.svelte';
  import Squiggle from '../ui/Squiggle.svelte';
  import ArrowDoodle from '../ui/ArrowDoodle.svelte';
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

    <!-- Sample community flower cluster -->
    <div class="flower-cluster">
      <Sunflower color="var(--mango)" center="#5C3317" size={64} style="opacity:0.7"/>
      <Pansy color="var(--lavender)" center="var(--mango)" size={52} style="opacity:0.75;margin-bottom:16px"/>
      <WildFlower color="var(--sky-blue)" center="var(--warm-cream)" size={48} style="opacity:0.65;margin-top:8px"/>
      <Cosmos color="var(--poppy)" center="var(--mango)" size={44} style="opacity:0.7;margin-bottom:8px"/>
      <Daisy color="var(--warm-cream)" center="var(--mango)" size={40} style="opacity:0.6;margin-top:12px"/>
    </div>

    <a href="/garden" class="cta-btn">
      Draw Your Flower <ArrowDoodle color="#fff" style="display:inline-block;vertical-align:middle;margin-left:8px"/>
    </a>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .header {
    margin-bottom: 56px;
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
    max-width: 520px;
    margin: 0 auto;
  }
  .flower-cluster {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 8px;
    margin-bottom: 48px;
  }
  .cta-btn {
    display: inline-flex;
    align-items: center;
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    color: #fff;
    text-decoration: none;
    background: var(--poppy);
    padding: 18px 40px;
    box-shadow: 4px 4px 0 var(--mango);
    transition: transform 0.15s, box-shadow 0.15s;
  }
  .cta-btn:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 var(--mango);
  }
</style>
