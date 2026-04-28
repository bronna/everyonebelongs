<script>
  import Pansy from '../flowers/Pansy.svelte';
  import Tulip from '../flowers/Tulip.svelte';
  import Daisy from '../flowers/Daisy.svelte';
  import Cosmos from '../flowers/Cosmos.svelte';
  import BellFlower from '../flowers/BellFlower.svelte';
  import WildFlower from '../flowers/WildFlower.svelte';
  import PoppyFlower from '../flowers/PoppyFlower.svelte';
  import Sunflower from '../flowers/Sunflower.svelte';
  import Clover from '../flowers/Clover.svelte';
  import SmallLeaf from '../flowers/SmallLeaf.svelte';

  const blooms = [
    { C: Tulip,       color: '#EE5A36',                   size: 52, x: '3%',  b: 0,  o: 0.85 },
    { C: Pansy,       color: '#fff',    center: '#F5AB54', size: 46, x: '10%', b: 8,  o: 0.8  },
    { C: Daisy,       color: '#F5AB54', center: '#F7F3ED', size: 38, x: '17%', b: 0,  o: 0.75 },
    { C: BellFlower,  color: '#fff',                       size: 42, x: '23%', b: 0,  o: 0.7  },
    { C: WildFlower,  color: '#EE5A36', center: '#F5AB54', size: 36, x: '30%', b: 6,  o: 0.8  },
    { C: PoppyFlower, color: '#fff',    center: '#1A6B4A', size: 40, x: '37%', b: 0,  o: 0.75 },
    { C: Cosmos,      color: '#F5AB54', center: '#fff',    size: 34, x: '44%', b: 4,  o: 0.75 },
    { C: Clover,      color: '#fff',                       size: 36, x: '51%', b: 0,  o: 0.7  },
    { C: Sunflower,   color: '#F5AB54', center: '#5C3317', size: 44, x: '58%', b: 2,  o: 0.8  },
    { C: Pansy,       color: '#7DBDE5', center: '#F7F3ED', size: 40, x: '65%', b: 0,  o: 0.75 },
    { C: Tulip,       color: '#CFA4CC',                    size: 46, x: '72%', b: 0,  o: 0.8  },
    { C: Daisy,       color: '#EE5A36', center: '#F5AB54', size: 36, x: '79%', b: 6,  o: 0.7  },
    { C: WildFlower,  color: '#fff',    center: '#CFA4CC', size: 38, x: '86%', b: 0,  o: 0.75 },
    { C: BellFlower,  color: '#F5AB54',                    size: 42, x: '92%', b: 0,  o: 0.8  },
    { C: Cosmos,      color: '#EE5A36', center: '#F5AB54', size: 32, x: '97%', b: 4,  o: 0.7  },
  ];
</script>

<section class="interlude">
  <!-- <Pansy color="rgba(255,255,255,0.15)" center="rgba(255,255,255,0.1)" size={200} style="position:absolute;top:-60px;left:40px"/>
  <WildFlower color="rgba(26,107,74,0.12)" center="rgba(26,107,74,0.08)" size={220} style="position:absolute;bottom:-60px;right:60px"/>
  <Daisy color="rgba(255,255,255,0.1)" center="rgba(255,255,255,0.08)" size={160} style="position:absolute;top:-20px;right:35%"/> -->

  <div class="quote-wrap">
    <div class="flower-row top">
      <Tulip color="#fff" size={32} style="opacity:0.8"/>
      <SmallLeaf color="#1A6B4A" size={18} rotate={-20} style="opacity:0.7"/>
      <PoppyFlower color="#EE5A36" size={28} style="opacity:0.85"/>
      <SmallLeaf color="#1A6B4A" size={16} rotate={15} style="opacity:0.65"/>
      <Pansy color="#fff" center="#F5AB54" size={30} style="opacity:0.8"/>
      <SmallLeaf color="#1A6B4A" size={18} rotate={-10} style="opacity:0.6"/>
      <Cosmos color="#7DBDE5" center="#fff" size={26} style="opacity:0.8"/>
    </div>
    <blockquote>
      "Preparing people for vibrant democracy means everybody’s at the table from the time they’re little." - Barbara Buswell
    </blockquote>
    <div class="flower-row bottom">
      <BellFlower color="#fff" size={28} style="opacity:0.75"/>
      <SmallLeaf color="#1A6B4A" size={16} rotate={30} style="opacity:0.65"/>
      <Clover color="#fff" size={26} style="opacity:0.7"/>
      <SmallLeaf color="#1A6B4A" size={18} rotate={-15} style="opacity:0.6"/>
      <WildFlower color="#F5AB54" center="#EE5A36" size={24} style="opacity:0.8"/>
    </div>
  </div>

  <div class="meadow-bottom">
    {#each blooms as b, i}
      <div style="position:absolute;bottom:{b.b || 0}px;left:{b.x};opacity:{b.o}">
        <svelte:component this={b.C} color={b.color} center={b.center} size={b.size}/>
      </div>
    {/each}
  </div>
</section>

<style>
  .interlude {
    background: var(--lavender);
    position: relative;
    overflow: hidden;
    border-top: 3px solid var(--near-black);
    border-bottom: 3px solid var(--near-black);
    padding-bottom: 0;
  }
  .quote-wrap {
    max-width: 900px;
    margin: 0 auto;
    padding: 64px 40px 48px;
    text-align: center;
    position: relative;
    z-index: 2;
  }
  .flower-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
  }
  .flower-row.top { margin-bottom: 24px; }
  .flower-row.bottom { margin-top: 24px; }
  blockquote {
    font-family: 'DM Sans', sans-serif;
    font-size: clamp(20px, 2.5vw, 28px);
    line-height: 1.55;
    font-style: italic;
    font-weight: 300;
    color: var(--near-black);
  }
  .meadow-bottom {
    position: relative;
    height: 80px;
    overflow: hidden;
  }
</style>
