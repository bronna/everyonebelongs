<script>
  import Pansy from '../flowers/Pansy.svelte';
  import Daisy from '../flowers/Daisy.svelte';
  import Tulip from '../flowers/Tulip.svelte';
  import Cosmos from '../flowers/Cosmos.svelte';
  import Clover from '../flowers/Clover.svelte';
  import SmallLeaf from '../flowers/SmallLeaf.svelte';
  import Squiggle from '../ui/Squiggle.svelte';
  import Underline from '../ui/Underline.svelte';
  import RoughBg from '../ui/RoughBg.svelte';

  const pillarsData = [
    {
      color: '#EE5A36', textColor: '#fff',
      FlowerComp: Pansy, flowerColor: 'rgba(255,255,255,0.2)', flowerCenter: 'rgba(255,255,255,0.1)',
      iconPath: null,
      title: 'Full Inclusion',
      body: 'We advocate for students with disabilities to participate fully in every aspect of school life — classrooms, field trips, sports, clubs, and friendships.',
      tag: 'Advocacy',
    },
    {
      color: '#1A6B4A', textColor: '#F7F3ED',
      FlowerComp: Tulip, flowerColor: 'rgba(247,243,237,0.2)', flowerCenter: 'rgba(247,243,237,0.1)',
      iconPath: null,
      title: 'Know Your Rights',
      body: 'From IEPs to 504 plans to ADA compliance — we equip families and educators with the knowledge to demand what students are entitled to.',
      tag: 'Education',
    },
    {
      color: '#CFA4CC', textColor: '#222222',
      FlowerComp: Daisy, flowerColor: 'rgba(34,34,34,0.15)', flowerCenter: 'rgba(34,34,34,0.08)',
      iconPath: null,
      title: 'Community & Care',
      body: 'Connecting families, educators, and allies into a network of support — because no parent should have to fight these battles alone.',
      tag: 'Community',
    },
    {
      color: '#F5AB54', textColor: '#222222',
      FlowerComp: Cosmos, flowerColor: 'rgba(34,34,34,0.15)', flowerCenter: 'rgba(34,34,34,0.08)',
      iconPath: null,
      title: 'Policy & Change',
      body: 'We show up in school board meetings, statehouses, and federal comment periods. Systemic change needs systemic pressure.',
      tag: 'Policy',
    },
  ];

</script>

<section class="pillars">
  <div class="inner">
    <div class="header">
      <div class="label-row">
        <Cosmos color="var(--lavender)" center="#F5AB54" size={20} style="opacity:0.8"/>
        <SmallLeaf color="var(--deep-forest)" size={16} rotate={-20} style="opacity:0.7"/>
        <Squiggle color="var(--lavender)" width={40}/>
        <span class="label">What We Do</span>
        <Squiggle color="var(--lavender)" width={40}/>
        <SmallLeaf color="var(--deep-forest)" size={16} rotate={20} style="opacity:0.7"/>
        <Clover color="var(--lavender)" size={20} style="opacity:0.8"/>
      </div>
      <h2 class="heading">Four Ways We Show Up</h2>
    </div>

    <div class="grid">
      {#each pillarsData as d, i}
        <div
          class="card"
          style="--card-color:{d.color};--card-fg:{d.textColor}"
        >
          <RoughBg color={d.color}/>
          <div class="flower-watermark">
            <svelte:component this={d.FlowerComp} color={d.flowerColor} center={d.flowerCenter} size={80}/>
          </div>
          <div class="card-content">
            <div class="icon">
              {#if i === 0}
                <svg viewBox="0 0 60 60" width="52" height="52">
                  <circle cx="30" cy="30" r="26" fill="none" stroke="#fff" stroke-width="3" filter="url(#rough)"/>
                  <path d="M20,35 C22,25 38,25 40,35" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" filter="url(#rough)"/>
                  <circle cx="30" cy="22" r="6" fill="#fff" filter="url(#rough)"/>
                  <circle cx="18" cy="32" r="4" fill="rgba(255,255,255,0.5)" filter="url(#rough)"/>
                  <circle cx="42" cy="32" r="4" fill="rgba(255,255,255,0.5)" filter="url(#rough)"/>
                </svg>
              {:else if i === 1}
                <svg viewBox="0 0 60 60" width="52" height="52">
                  <rect x="12" y="16" width="36" height="28" rx="3" fill="none" stroke="#F7F3ED" stroke-width="3" filter="url(#rough)"/>
                  <path d="M20,28 L28,36 L42,22" fill="none" stroke="#F5AB54" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#rough)"/>
                </svg>
              {:else if i === 2}
                <svg viewBox="0 0 60 60" width="52" height="52">
                  <path d="M30,48 C30,48 12,36 12,22 C12,14 18,10 24,12 C27,13 30,16 30,16 C30,16 33,13 36,12 C42,10 48,14 48,22 C48,36 30,48 30,48 Z" fill="none" stroke="#222" stroke-width="3" filter="url(#roughStrong)"/>
                  <path d="M22,28 L26,22 L30,30 L34,18 L38,28" fill="none" stroke="#222" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#rough)"/>
                </svg>
              {:else}
                <svg viewBox="0 0 60 60" width="52" height="52">
                  <path d="M14,46 L14,28 C14,20 18,14 30,14 C42,14 46,20 46,28 L46,46" fill="none" stroke="#222" stroke-width="3" stroke-linecap="round" filter="url(#rough)"/>
                  <path d="M10,46 L50,46" stroke="#222" stroke-width="3" stroke-linecap="round" filter="url(#rough)"/>
                  <path d="M24,46 L24,34 L36,34 L36,46" fill="none" stroke="#222" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#rough)"/>
                  <circle cx="30" cy="22" r="4" fill="#222" filter="url(#rough)"/>
                </svg>
              {/if}
            </div>
            <div class="tag">{d.tag}</div>
            <h3 class="card-title">{d.title}</h3>
            <Underline color={d.textColor} height={7} style="opacity:0.35;margin-bottom:20px"/>
            <p class="card-body">{d.body}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .pillars {
    background: var(--warm-cream);
    padding: 80px 40px 100px;
  }
  .inner {
    max-width: 1280px;
    margin: 0 auto;
  }
  .header {
    text-align: center;
    margin-bottom: 60px;
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
    color: var(--lavender);
  }
  .heading {
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    font-size: clamp(32px, 4vw, 52px);
    line-height: 1.05;
    letter-spacing: -0.02em;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .card {
    position: relative;
    color: var(--card-fg);
    padding: 44px 36px;
    overflow: hidden;
    box-shadow: 4px 4px 0 var(--near-black);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .card:hover {
    box-shadow: 7px 7px 0 var(--near-black);
    transform: translate(-3px, -3px);
  }
  .flower-watermark {
    position: absolute;
    bottom: -10px;
    right: -10px;
    opacity: 0.18;
    z-index: 0;
  }
  .card-content {
    position: relative;
    z-index: 1;
  }
  .icon { margin-bottom: 20px; }
  .tag {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    opacity: 0.6;
    margin-bottom: 12px;
  }
  .card-title {
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 26px;
    letter-spacing: -0.01em;
    line-height: 1.1;
    margin-bottom: 16px;
  }
  .card-body {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    line-height: 1.7;
    opacity: 0.88;
    font-weight: 300;
  }
</style>
