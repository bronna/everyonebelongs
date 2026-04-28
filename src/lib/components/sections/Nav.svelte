<script>
  import { onMount } from 'svelte';
  import Pansy from '../flowers/Pansy.svelte';
  import Tulip from '../flowers/Tulip.svelte';
  import Daisy from '../flowers/Daisy.svelte';
  import Cosmos from '../flowers/Cosmos.svelte';
  import WildFlower from '../flowers/WildFlower.svelte';
  import RoughBg from '../ui/RoughBg.svelte';

  let scrolled = false;

  onMount(() => {
    const fn = () => { scrolled = window.scrollY > 40; };
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  });

  const links = ['Our Mission', 'Stories', 'Resources', 'Get Involved'];

</script>

<nav class:scrolled>
  <div class="inner">
    <div class="logo-wrap">
      <svg viewBox="0 0 42 42" width="40" height="40" style="flex-shrink:0">
        <circle cx="21" cy="21" r="19" fill="#1A6B4A" filter="url(#rough)"/>
        <g transform="translate(8,11) scale(0.38)"><Pansy color="#CFA4CC" center="#F5AB54" size={36}/></g>
        <g transform="translate(18,7) scale(0.32)"><Tulip color="#EE5A36" size={40}/></g>
        <g transform="translate(27,11) scale(0.36)"><Daisy color="#F7F3ED" center="#F5AB54" size={34}/></g>
        <g transform="translate(10,22) scale(0.34)"><Cosmos color="#7DBDE5" center="#fff" size={30}/></g>
        <g transform="translate(24,22) scale(0.34)"><WildFlower color="#F5AB54" center="#EE5A36" size={30}/></g>
      </svg>
      <span class="brand">Everyone Belongs</span>
    </div>
    <div class="nav-right">
      {#each links as l}
        <a href="#" class="nav-link">{l}</a>
      {/each}
      <button
        class="cta-btn"
      >
        <RoughBg color="var(--poppy)"/>
        <span style="position:relative;z-index:1">Take Action</span>
      </button>
    </div>
  </div>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background: transparent;
    backdrop-filter: none;
    transition: background 0.3s, box-shadow 0.3s;
    box-shadow: none;
  }
  nav.scrolled {
    background: rgba(247, 243, 237, 0.97);
    backdrop-filter: blur(8px);
    box-shadow: 0 2px 16px rgba(34, 34, 34, 0.07);
  }
  .inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 32px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .brand {
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    font-size: 17px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: var(--near-black);
  }
  .nav-right {
    display: flex;
    gap: 36px;
    align-items: center;
  }
  .nav-link {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: var(--near-black);
    text-decoration: none;
    opacity: 0.75;
    transition: opacity 0.2s;
  }
  .nav-link:hover {
    opacity: 1;
  }
  .cta-btn {
    position: relative;
    background: transparent;
    border: none;
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 10px 22px;
    cursor: pointer;
    color: #fff;
    box-shadow: 3px 3px 0 var(--near-black);
    transition: transform 0.15s, box-shadow 0.15s;
  }
  .cta-btn:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 var(--near-black);
  }
</style>
