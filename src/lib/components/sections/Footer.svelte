<script>
  import Pansy from '../flowers/Pansy.svelte';
  import Tulip from '../flowers/Tulip.svelte';
  import Cosmos from '../flowers/Cosmos.svelte';
  import BellFlower from '../flowers/BellFlower.svelte';
  import VineBorder from '../ui/VineBorder.svelte';

  const cols = [
    { title: 'Resources',    links: ['IEP Guide', 'Know Your Rights', 'Find a Lawyer', 'Blog'] },
    { title: 'Organization', links: ['About Us', 'Our Team', 'Press', 'Donate'] },
    { title: 'Contact',      links: ['hello@everyonebelongs.org', 'Support Line', 'Volunteer', 'Partner'] },
  ];

  const socials = ['Tw', 'Ig', 'Fb', 'Li'];
</script>

<footer>
  <div style="opacity:0.22">
    <VineBorder color="#CFA4CC" height={44}/>
  </div>
  <Cosmos color="rgba(207,164,204,0.08)" center="rgba(207,164,204,0.05)" size={200}
    style="position:absolute;right:-40px;bottom:-40px"/>
  <Tulip color="rgba(247,243,237,0.05)" size={140}
    style="position:absolute;left:-20px;bottom:0"/>

  <div class="inner">
    <div class="grid">
      <div class="brand-col">
        <div class="brand-row">
          <div class="logo-flowers">
            <Tulip color="var(--lavender)" size={30} style="opacity:0.8"/>
            <Pansy color="var(--mango)" center="var(--poppy)" size={26} style="margin-bottom:2px;opacity:0.8"/>
            <BellFlower color="var(--sky-blue)" size={28} style="opacity:0.75"/>
          </div>
          <div class="brand-name">Everyone<br/>Belongs</div>
        </div>
        <p class="brand-desc">Fighting for the full inclusion of students with disabilities in every aspect of school life.</p>
        <div class="socials">
          {#each socials as s}
            <div class="social-btn">{s}</div>
          {/each}
        </div>
      </div>

      {#each cols as col}
        <div>
          <div class="col-title">{col.title}</div>
          {#each col.links as l}
            <a href="#" class="col-link">{l}</a>
          {/each}
        </div>
      {/each}
    </div>

    <div class="bottom-bar">
      <span class="copyright">© 2026 Everyone Belongs. All rights reserved.</span>
      <div class="made-with">
        <Cosmos color="var(--lavender)" center="var(--mango)" size={18} style="opacity:0.55"/>
        <span class="made-text">Made with love & defiance.</span>
      </div>
    </div>
  </div>
</footer>

<style>
  footer {
    background: var(--near-black);
    padding: 0 40px 40px;
    position: relative;
    overflow: hidden;
  }
  .inner {
    max-width: 1280px;
    margin: 0 auto;
    padding-top: 48px;
  }
  .grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 60px;
    margin-bottom: 60px;
  }
  .brand-col {}
  .brand-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
  }
  .logo-flowers {
    display: flex;
    align-items: flex-end;
    gap: 2px;
    height: 34px;
  }
  .brand-name {
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 18px;
    color: #F7F3ED;
    letter-spacing: 0.02em;
  }
  .brand-desc {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    line-height: 1.7;
    color: rgba(247,243,237,0.45);
    font-weight: 300;
    max-width: 280px;
  }
  .socials {
    display: flex;
    gap: 12px;
    margin-top: 28px;
  }
  .social-btn {
    width: 36px;
    height: 36px;
    background: rgba(247,243,237,0.07);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 12px;
    color: rgba(247,243,237,0.45);
    cursor: pointer;
  }
  .col-title {
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 13px;
    color: rgba(247,243,237,0.35);
    letter-spacing: 0.12em;
    margin-bottom: 20px;
  }
  .col-link {
    display: block;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: rgba(247,243,237,0.6);
    text-decoration: none;
    margin-bottom: 12px;
    font-weight: 300;
    transition: color 0.2s;
  }
  .col-link:hover { color: #F7F3ED; }
  .bottom-bar {
    border-top: 1px solid rgba(247,243,237,0.08);
    padding-top: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .copyright {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: rgba(247,243,237,0.3);
    font-weight: 300;
  }
  .made-with {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  .made-text {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: rgba(247,243,237,0.3);
    font-weight: 300;
  }
</style>
