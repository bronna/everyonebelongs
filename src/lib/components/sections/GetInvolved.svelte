<script>
  import Pansy from '../flowers/Pansy.svelte';
  import Daisy from '../flowers/Daisy.svelte';
  import Tulip from '../flowers/Tulip.svelte';
  import Cosmos from '../flowers/Cosmos.svelte';
  import BellFlower from '../flowers/BellFlower.svelte';
  import WildFlower from '../flowers/WildFlower.svelte';
  import Clover from '../flowers/Clover.svelte';
  import SmallLeaf from '../flowers/SmallLeaf.svelte';
  import Squiggle from '../ui/Squiggle.svelte';
  import Underline from '../ui/Underline.svelte';
  import CircleHighlight from '../ui/CircleHighlight.svelte';
  import ArrowDoodle from '../ui/ArrowDoodle.svelte';
  import RoughBg from '../ui/RoughBg.svelte';

  const involvedCards = [
    { bg: 'var(--poppy)',       fg: '#fff',    FlowerComp: Tulip,     fc: 'rgba(255,255,255,0.2)',    label: 'Contact Us',     body: 'Have a question, a story to share, or want to connect with our team?',                                      cta: 'Get in Touch', href: '/about' },
    { bg: 'var(--deep-forest)', fg: '#F7F3ED', FlowerComp: WildFlower, fc: 'rgba(247,243,237,0.18)', label: 'Volunteer',      body: 'Help us show up in school board meetings, run workshops, and support families.',                             cta: 'Get Involved'  },
    { bg: 'var(--mango)',       fg: '#222',    FlowerComp: Daisy,     fc: 'rgba(34,34,34,0.15)',      label: 'Spread the Word', body: 'Follow us, share our work, and bring the conversation to your community.', cta: 'Share Now'     },
  ];

</script>

<section class="get-involved" id="get-involved">
  <div class="inner">
    <div class="grid-main">
      <div class="left">
        <div class="label-row">
          <SmallLeaf color="var(--deep-forest)" size={16} rotate={-15} style="opacity:0.8"/>
          <Squiggle color="var(--poppy)" width={50}/>
          <span class="label">Take Action</span>
        </div>
        <h2 class="heading">
          Be Part of the<br/>
          <span style="position:relative;display:inline-block">
            <CircleHighlight color="var(--lavender)"/>
            <span style="position:relative; z-index:1">Change.</span>
          </span>
        </h2>
        <p class="body-text">There are many ways to stand with students with disabilities. Choose yours.</p>
        <div class="mini-meadow">
          <Tulip color="var(--deep-forest)" size={48}/>
          <Pansy color="var(--lavender)" center="var(--mango)" size={36} style="margin-bottom:8px"/>
          <BellFlower color="var(--sky-blue)" size={38} style="margin-bottom:4px"/>
          <Cosmos color="var(--poppy)" center="#F5AB54" size={30} style="margin-bottom:10px"/>
          <SmallLeaf color="var(--deep-forest)" size={18} rotate={20}/>
          <WildFlower color="var(--mango)" center="#EE5A36" size={28} style="margin-bottom:6px"/>
          <Clover color="var(--lavender)" size={24} style="margin-bottom:2px"/>
        </div>
      </div>

      <div class="cards-grid">
        {#each involvedCards as d}
          <svelte:element this={d.href ? 'a' : 'div'} href={d.href ?? null} class="card">
            <RoughBg color={d.bg}/>
            <div class="flower-watermark">
              <svelte:component this={d.FlowerComp} color={d.fc} center={d.fc} size={72}/>
            </div>
            <div class="card-inner" style="color:{d.fg}">
              <div class="card-label">{d.label}</div>
              <Underline color={d.fg} height={6} style="opacity:0.35;margin-bottom:4px"/>
              <p class="card-body">{d.body}</p>
              <div class="card-cta">
                {d.cta} <ArrowDoodle color={d.fg} style="width:40px;height:26px"/>
              </div>
            </div>
          </svelte:element>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .get-involved {
    background: var(--warm-cream);
    padding: 100px 40px;
  }
  .inner {
    max-width: 1280px;
    margin: 0 auto;
  }
  .grid-main {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 80px;
    align-items: start;
  }
  .label-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }
  .label {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--poppy);
  }
  .heading {
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    font-size: clamp(36px, 4vw, 54px);
    line-height: 1.0;
    letter-spacing: -0.02em;
    color: var(--near-black);
  }
  .body-text {
    font-family: 'DM Sans', sans-serif;
    font-size: 17px;
    line-height: 1.7;
    color: rgba(34,34,34,0.65);
    margin-top: 28px;
    font-weight: 300;
  }
  .mini-meadow {
    display: flex;
    align-items: flex-end;
    gap: 4px;
    margin-top: 36px;
    opacity: 0.8;
    height: 56px;
  }
  .cards-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 18px;
  }
  .card {
    position: relative;
    padding: 36px 28px;
    box-shadow: 3px 3px 0 var(--near-black);
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    text-decoration: none;
  }
  .card:hover {
    box-shadow: 6px 6px 0 var(--near-black);
    transform: translate(-2px, -2px);
  }
  .flower-watermark {
    position: absolute;
    bottom: -12px;
    right: -12px;
    opacity: 0.18;
    z-index: 0;
  }
  .card-inner {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex-grow: 1;
  }
  .card-label {
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 22px;
    letter-spacing: -0.01em;
  }
  .card-body {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    line-height: 1.6;
    opacity: 0.85;
    font-weight: 300;
    flex-grow: 1;
  }
  .card-cta {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
  }
</style>
