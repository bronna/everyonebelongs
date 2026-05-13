<script>
  import { onMount } from 'svelte';
  import Pansy from '../flowers/Pansy.svelte';
  import Tulip from '../flowers/Tulip.svelte';
  import Daisy from '../flowers/Daisy.svelte';
  import Cosmos from '../flowers/Cosmos.svelte';
  import BellFlower from '../flowers/BellFlower.svelte';
  import PoppyFlower from '../flowers/PoppyFlower.svelte';
  import WildFlower from '../flowers/WildFlower.svelte';
  import Sunflower from '../flowers/Sunflower.svelte';
  import Clover from '../flowers/Clover.svelte';

  let scrollY = 0;

  onMount(() => {
    const update = () => { scrollY = window.scrollY; };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  });

  const TICKER_FLOWERS = [
    { C: Pansy,       color: '#222', center: '#F5AB54', size: 24 },
    { C: Tulip,       color: '#222',                    size: 28 },
    { C: Daisy,       color: '#222', center: '#F5AB54', size: 22 },
    { C: Cosmos,      color: '#222', center: '#F5AB54', size: 22 },
    { C: BellFlower,  color: '#222',                    size: 26 },
    { C: PoppyFlower, color: '#222', center: '#F5AB54', size: 22 },
    { C: WildFlower,  color: '#222', center: '#F5AB54', size: 20 },
    { C: Clover,      color: '#222',                    size: 24 },
    { C: Sunflower,   color: '#222', center: '#F5AB54', size: 22 },
  ];

  //const TICKER_WORDS = ['VISIBLE','INCLUDED','HEARD','CELEBRATED','EMPOWERED','RESPECTED','SEEN','VALUED','SUPPORTED'];
  
  const TICKER_WORDS = ['PREPARING PEOPLE FOR VIBRANT DEMOCRACY MEANS EVERYBODY’S AT THE TABLE FROM THE TIME THEY’RE LITTLE','- BARBARA BUSWELL'];

  const items = TICKER_WORDS.flatMap((w, i) => [
    { type: 'word', text: w, key: `w${i}` },
    { type: 'flower', F: TICKER_FLOWERS[i % TICKER_FLOWERS.length], key: `f${i}` },
  ]);
</script>

<div class="band">
  <div class="track" style="transform: translateX(calc(15vw - {scrollY}px))">
    {#each [0, 1] as rep}
      <div class="rep">
        {#each items as item (item.key + rep)}
          {#if item.type === 'word'}
            <span class="word">{item.text}</span>
          {:else}
            <span class="flower-sep">
              <svelte:component this={item.F.C} color={item.F.color} center={item.F.center} size={item.F.size}/>
            </span>
          {/if}
        {/each}
      </div>
    {/each}
  </div>
</div>

<style>
  .band {
    background: var(--mango);
    padding: 14px 0;
    overflow: hidden;
    border-top: 3px solid var(--near-black);
    border-bottom: 3px solid var(--near-black);
    z-index: 3;
    position: relative;
  }
  .track {
    display: flex;
    white-space: nowrap;
    align-items: center;
    will-change: transform;
  }
  .rep {
    display: inline-flex;
    align-items: center;
  }
  .word {
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    font-size: 22px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    word-spacing: 0.4em;
    color: var(--near-black);
    padding: 0 18px;
    display: inline-flex;
    align-items: center;
  }
  .flower-sep {
    display: inline-flex;
    align-items: center;
    padding: 0 8px;
    opacity: 0.55;
  }
</style>
