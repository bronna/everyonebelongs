<script>
  import { onMount } from 'svelte';
  import Pansy from '../flowers/Pansy.svelte';
  import Tulip from '../flowers/Tulip.svelte';
  import Daisy from '../flowers/Daisy.svelte';
  import Cosmos from '../flowers/Cosmos.svelte';
  import WildFlower from '../flowers/WildFlower.svelte';
  import RoughBg from '../ui/RoughBg.svelte';

  let scrolled = false;
  let menuOpen = false;

  onMount(() => {
    const fn = () => { scrolled = window.scrollY > 40; };
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  });

  const links = ['Our Mission', 'Stories', 'Resources', 'Get Involved'];

  function closeMenu() { menuOpen = false; }
</script>

<nav class:scrolled class:menu-open={menuOpen}>
  <div class="inner">
    <div class="logo-wrap">
      <svg viewBox="0 0 42 42" width="40" height="40" style="flex-shrink:0">
        <circle cx="21" cy="21" r="19" fill="none" filter="url(#rough)"/>
        <g transform="translate(8,11) scale(0.38)"><Pansy color="#CFA4CC" center="#F5AB54" size={36}/></g>
        <g transform="translate(18,7) scale(0.32)"><Tulip color="#EE5A36" size={40}/></g>
        <g transform="translate(27,11) scale(0.36)"><Daisy color="#F7F3ED" center="#F5AB54" size={34}/></g>
        <g transform="translate(10,22) scale(0.34)"><Cosmos color="#7DBDE5" center="#fff" size={30}/></g>
        <g transform="translate(24,22) scale(0.34)"><WildFlower color="#F5AB54" center="#EE5A36" size={30}/></g>
      </svg>
      <span class="brand">Everyone Belongs</span>
    </div>

    <!-- Desktop nav -->
    <div class="nav-right">
      {#each links as l}
        <a href="#" class="nav-link">{l}</a>
      {/each}
      <button class="cta-btn">
        <RoughBg color="var(--poppy)"/>
        <span style="position:relative;z-index:1">Take Action</span>
      </button>
    </div>

    <!-- Hamburger -->
    <button class="menu-toggle" aria-label="Toggle menu" on:click={() => menuOpen = !menuOpen}>
      <span class="bar" class:open={menuOpen}></span>
      <span class="bar" class:open={menuOpen}></span>
      <span class="bar" class:open={menuOpen}></span>
    </button>
  </div>

  <!-- Mobile menu -->
  {#if menuOpen}
    <div class="mobile-menu" class:scrolled>
      {#each links as l}
        <a href="#" class="mobile-link" on:click={closeMenu}>{l}</a>
      {/each}
      <button class="cta-btn mobile-cta" on:click={closeMenu}>
        <RoughBg color="var(--poppy)"/>
        <span style="position:relative;z-index:1">Take Action</span>
      </button>
    </div>
  {/if}
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
    background: rgba(247, 243, 237, 0.9);
    backdrop-filter: blur(8px);
    box-shadow: 0 2px 16px rgba(34, 34, 34, 0.07);
    color: var(--near-black);
  }
  nav.menu-open {
    background: var(--deep-forest);
    backdrop-filter: none;
  }
  nav.menu-open.scrolled {
    background: rgba(247, 243, 237, 0.97);
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
    color: var(--warm-cream);
    transition: color 0.3s;
  }
  nav.scrolled .brand {
    color: var(--near-black);
  }
  nav.menu-open .brand {
    color: var(--warm-cream);
  }
  nav.menu-open.scrolled .brand {
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
    color: var(--warm-cream);
    text-decoration: none;
    opacity: 0.75;
    transition: opacity 0.2s, color 0.3s;
  }
  nav.scrolled .nav-link {
    color: var(--near-black);
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

  /* Hamburger */
  .menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 6px;
    width: 36px;
    height: 36px;
  }
  .bar {
    display: block;
    width: 24px;
    height: 2px;
    background: var(--warm-cream);
    border-radius: 2px;
    transition: transform 0.25s, opacity 0.25s, background 0.3s;
    transform-origin: center;
  }
  nav.scrolled .bar {
    background: var(--near-black);
  }
  .bar:nth-child(1).open { transform: translateY(7px) rotate(45deg); }
  .bar:nth-child(2).open { opacity: 0; }
  .bar:nth-child(3).open { transform: translateY(-7px) rotate(-45deg); }

  /* Mobile menu panel */
  .mobile-menu {
    background: var(--deep-forest);
    border-top: 1px solid rgba(247, 243, 237, 0.12);
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 16px 32px 28px;
    gap: 4px;
    animation: slideDown 0.2s ease;
  }
  .mobile-menu.scrolled {
    background: rgba(247, 243, 237, 0.97);
    border-top-color: rgba(26, 107, 74, 0.12);
  }
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .mobile-link {
    font-family: 'DM Sans', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: var(--warm-cream);
    text-decoration: none;
    padding: 14px 0;
    border-bottom: 1px solid rgba(247, 243, 237, 0.1);
    opacity: 0.85;
    transition: opacity 0.2s;
  }
  .mobile-menu.scrolled .mobile-link {
    color: var(--near-black);
    border-bottom-color: rgba(26, 107, 74, 0.1);
  }
  .mobile-link:hover { opacity: 1; }
  .mobile-cta {
    margin-top: 16px;
    align-self: flex-start;
  }

  @media (max-width: 768px) {
    .nav-right { display: none; }
    .menu-toggle { display: flex; }
  }
</style>
