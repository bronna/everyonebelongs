<script>
  import { onMount } from 'svelte';
  import Pansy from '../flowers/Pansy.svelte';
  import Daisy from '../flowers/Daisy.svelte';
  import Tulip from '../flowers/Tulip.svelte';
  import Cosmos from '../flowers/Cosmos.svelte';
  import BellFlower from '../flowers/BellFlower.svelte';
  import WildFlower from '../flowers/WildFlower.svelte';
  import PoppyFlower from '../flowers/PoppyFlower.svelte';
  import Sunflower from '../flowers/Sunflower.svelte';
  import LeafSprig from '../flowers/LeafSprig.svelte';
  import SmallLeaf from '../flowers/SmallLeaf.svelte';
  import Squiggle from '../ui/Squiggle.svelte';
  import CircleHighlight from '../ui/CircleHighlight.svelte';
  import Underline from '../ui/Underline.svelte';
  import ArrowDoodle from '../ui/ArrowDoodle.svelte';
  import RoughBg from '../ui/RoughBg.svelte';
  import Blob from '../ui/Blob.svelte';
  import MeadowStrip from '../ui/MeadowStrip.svelte';

  let visible = false;
  onMount(() => { setTimeout(() => { visible = true; }, 80); });

</script>

<section class="hero">
  <!-- Right corner bouquet -->
  <div class="bouquet-right">
    <LeafSprig color="#F7F3ED" size={80} style="position:absolute;top:10px;right:30px"/>
    <Tulip color="#EE5A36" size={56} style="position:absolute;top:0;right:0"/>
    <Pansy color="#CFA4CC" center="#F5AB54" size={48} style="position:absolute;top:30px;right:60px"/>
    <Daisy color="#F7F3ED" center="#F5AB54" size={36} style="position:absolute;top:80px;right:-10px"/>
    <Cosmos color="#F5AB54" center="#EE5A36" size={30} style="position:absolute;top:100px;right:80px"/>
    <BellFlower color="#CFA4CC" size={38} style="position:absolute;top:60px;right:110px"/>
    <WildFlower color="#7DBDE5" center="#F7F3ED" size={28} style="position:absolute;top:120px;right:140px"/>
    <SmallLeaf color="rgba(247,243,237,0.6)" size={20} rotate={-30} style="position:absolute;top:140px;right:50px"/>
  </div>

  <!-- Left bottom bouquet -->
  <div class="bouquet-left">
    <LeafSprig color="#F7F3ED" size={64} style="position:absolute;bottom:0;left:20px;transform:scaleX(-1)"/>
    <PoppyFlower color="#EE5A36" size={44} style="position:absolute;bottom:50px;left:0"/>
    <Daisy color="#F5AB54" center="#F7F3ED" size={30} style="position:absolute;bottom:70px;left:60px"/>
    <SmallLeaf color="rgba(247,243,237,0.5)" size={18} rotate={40} style="position:absolute;bottom:15px;left:90px"/>
  </div>

  <!-- Scattered flowers -->
  <Pansy color="#CFA4CC" center="#1A6B4A" size={30} opacity={0.3} style="position:absolute;top:220px;left:220px"/>
  <Sunflower color="#F5AB54" center="#5C3317" size={28} opacity={0.25} style="position:absolute;top:330px;right:380px"/>
  <Cosmos color="#7DBDE5" center="#fff" size={24} opacity={0.3} style="position:absolute;bottom:300px;left:340px"/>
  <BellFlower color="rgba(207,164,204,0.5)" size={26} opacity={0.4} style="position:absolute;top:280px;right:220px"/>
  <WildFlower color="rgba(245,171,84,0.4)" center="#EE5A36" size={22} opacity={0.35} style="position:absolute;bottom:240px;right:340px"/>
  <Squiggle color="rgba(207,164,204,0.35)" width={120} style="position:absolute;top:180px;left:70px;transform:rotate(-8deg)"/>

  <div class="content">
    <h1 class="headline" class:visible>
      Everyone<br/>
      Belongs
    </h1>

    <div class="underline-wrap" class:visible>
      <Underline color="#EE5A36" height={12}/>
    </div>

    <div class="cta-row" class:visible>
      <p class="hero-body">
        It's every student's right to be fully supported, included, and valued in their school community.
      </p>
      <div class="btn-col">
        <button
          class="btn-primary"
        >
          <RoughBg color="var(--poppy)"/>
          <span style="position:relative;z-index:1">Join the Movement</span>
        </button>
        <button
          class="btn-secondary"
        >
          Learn Our Story <ArrowDoodle color="rgba(247,243,237,0.7)" style="display:inline-block;vertical-align:middle;margin-left:4px"/>
        </button>
      </div>
    </div>

    <div class="scroll-hint">
      <span>Scroll</span>
      <svg viewBox="0 0 20 28" width="18" style="display:block">
        <path d="M10,2 L10,22 M4,16 L10,24 L16,16" stroke="#F7F3ED" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round" filter="url(#rough)"/>
      </svg>
    </div>
  </div>

  <!-- Meadow strip -->
  <div class="meadow-wrap">
    <div class="meadow-inner">
      <MeadowStrip opacity={1} height={68}/>
    </div>
  </div>
</section>

<style>
  .hero {
    background: var(--deep-forest);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding-top: 72px;
  }
  .bouquet-right {
    position: absolute;
    top: 70px;
    right: 50px;
    opacity: 0.65;
  }
  .bouquet-left {
    position: absolute;
    bottom: 80px;
    left: 30px;
    opacity: 0.5;
  }
  .content {
    max-width: 1280px;
    margin: 0 auto;
    padding: 80px 40px 120px;
    position: relative;
    z-index: 2;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,255,255,0.1);
    border: 2px solid rgba(255,255,255,0.2);
    border-radius: 40px;
    padding: 7px 18px;
    margin-bottom: 40px;
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 0.6s, transform 0.6s;
    position: relative;
  }
  .badge.visible { opacity: 1; transform: none; }
  .badge span {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: rgba(255,255,255,0.9);
    font-weight: 500;
    letter-spacing: 0.04em;
  }
  .headline {
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    font-size: clamp(52px, 8vw, 112px);
    line-height: 1.0;
    letter-spacing: -0.02em;
    color: #F7F3ED;
    max-width: 900px;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.7s 0.1s, transform 0.7s 0.1s;
  }
  .headline.visible { opacity: 1; transform: none; }
  .underline-wrap {
    margin-top: 6px;
    width: 340px;
    opacity: 0;
    transition: opacity 0.6s 0.4s;
  }
  .underline-wrap.visible { opacity: 1; }
  .cta-row {
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.7s 0.3s, transform 0.7s 0.3s;
  }
  .cta-row.visible { opacity: 1; transform: none; }
  .hero-body {
    font-family: 'DM Sans', sans-serif;
    font-size: 20px;
    line-height: 1.65;
    color: rgba(247,243,237,0.85);
    max-width: 480px;
    font-weight: 300;
    text-align: center;
  }
  .btn-col {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding-top: 4px;
    flex-wrap: wrap;
  }
  .btn-primary {
    position: relative;
    background: transparent;
    border: none;
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 18px 40px;
    cursor: pointer;
    color: #fff;
    box-shadow: 4px 4px 0 #F5AB54;
    transition: transform 0.15s, box-shadow 0.15s;
  }
  .btn-primary:hover {
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0 #F5AB54;
  }
  .btn-secondary {
    position: relative;
    background: transparent;
    color: rgba(247,243,237,0.9);
    border: 2px solid rgba(247,243,237,0.3);
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 15px;
    padding: 16px 40px;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s;
    filter: url(#rough);
  }
  .btn-secondary:hover {
    border-color: rgba(247,243,237,0.65);
    color: #F7F3ED;
  }
  .scroll-hint {
    position: absolute;
    bottom: -60px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    opacity: 0.45;
  }
  .scroll-hint span {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: #F7F3ED;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .meadow-wrap {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 68px;
    overflow: hidden;
  }
  .meadow-inner {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 200%;
    opacity: 0.45;
  }
</style>
