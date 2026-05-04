<script>
  import Pansy from '../flowers/Pansy.svelte';
  import Daisy from '../flowers/Daisy.svelte';
  import Tulip from '../flowers/Tulip.svelte';
  import Cosmos from '../flowers/Cosmos.svelte';
  import BellFlower from '../flowers/BellFlower.svelte';
  import WildFlower from '../flowers/WildFlower.svelte';
  import PoppyFlower from '../flowers/PoppyFlower.svelte';
  import Sunflower from '../flowers/Sunflower.svelte';
  import Clover from '../flowers/Clover.svelte';
  import LeafSprig from '../flowers/LeafSprig.svelte';
  import SmallLeaf from '../flowers/SmallLeaf.svelte';
  import Squiggle from '../ui/Squiggle.svelte';
  import RoughBg from '../ui/RoughBg.svelte';
  import ArrowDoodle from '../ui/ArrowDoodle.svelte';

  const storiesData = [
    {
      quote: "My daughter was told she couldn't go on the class trip because 'it would be too complicated.' Everyone Belongs helped us fight back. She went — and had the best day of her school year.",
      name: 'Maria T.',
      role: 'Parent, Los Angeles',
      color: 'var(--sky-blue)',
    },
    {
      quote: 'I have dyslexia and ADHD. For years I was put in the corner and ignored. This organization helped my school actually teach me. I graduated with honors.',
      name: 'Jordan K.',
      role: 'Student, Chicago',
      color: 'var(--lavender)',
    },
    {
      quote: "We didn't know what an IEP really meant — that it was a legal document. Once we understood our rights, everything changed for our family.",
      name: 'DeShawn & Priya R.',
      role: 'Parents, Atlanta',
      color: 'var(--mango)',
    },
  ];

  let active = 0;
  $: story = storiesData[active];
</script>

<section class="community">
  <!-- Decorative background flowers -->
  <Sunflower color="var(--mango)" center="#5C3317" size={90} style="position:absolute;top:30px;right:120px;opacity:0.16"/>
  <WildFlower color="var(--lavender)" center="var(--mango)" size={70} style="position:absolute;bottom:200px;left:80px;opacity:0.14"/>
  <Tulip color="var(--poppy)" size={60} style="position:absolute;top:80px;left:120px;opacity:0.15"/>
  <PoppyFlower color="var(--sky-blue)" size={50} style="position:absolute;bottom:280px;right:200px;opacity:0.14"/>
  <Cosmos color="var(--lavender)" center="var(--mango)" size={44} style="position:absolute;top:220px;right:340px;opacity:0.2"/>
  <Clover color="var(--mango)" size={40} style="position:absolute;top:60px;left:40%;opacity:0.12"/>
  <BellFlower color="var(--sky-blue)" size={48} style="position:absolute;bottom:360px;right:400px;opacity:0.18"/>
  <LeafSprig color="rgba(26,107,74,0.2)" size={60} style="position:absolute;top:40px;left:300px"/>
  <Squiggle color="rgba(207,164,204,0.18)" width={180} style="position:absolute;bottom:160px;right:100px;transform:rotate(4deg)"/>

  <div class="inner">

    <!-- Their Stories -->
    <div class="header">
      <div class="label-row">
        <Daisy color="var(--mango)" center="#F7F3ED" size={26} style="opacity:0.85"/>
        <Squiggle color="var(--mango)" width={40}/>
        <span class="label">Real Voices</span>
        <Squiggle color="var(--mango)" width={40}/>
        <PoppyFlower color="var(--mango)" center="#F7F3ED" size={24} style="opacity:0.8"/>
      </div>
      <h2 class="heading">Their Stories</h2>
    </div>

    <div class="card">
      <RoughBg color={story.color} style="transition:background 0.4s"/>
      <Pansy color="rgba(34,34,34,0.1)" center="rgba(34,34,34,0.06)" size={90}
        style="position:absolute;bottom:10px;right:20px;z-index:0"/>
      <div class="quote-mark">"</div>
      <div class="card-inner">
        <p class="quote">"{story.quote}"</p>
        <div class="attribution">
          <div class="avatar"></div>
          <div>
            <div class="name">{story.name}</div>
            <div class="role">{story.role}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="dots">
      {#each storiesData as _, i}
        <button
          class="dot"
          class:active={i === active}
          aria-label="Go to story {i + 1}"
          on:click={() => active = i}
        ></button>
      {/each}
    </div>

    <!-- Divider -->
    <div class="divider">
      <SmallLeaf color="rgba(247,243,237,0.2)" size={14} rotate={-20}/>
      <div class="divider-line"></div>
      <Cosmos color="rgba(207,164,204,0.35)" center="rgba(245,171,84,0.3)" size={22}/>
      <div class="divider-line"></div>
      <SmallLeaf color="rgba(247,243,237,0.2)" size={14} rotate={15}/>
    </div>

    <!-- Plant Your Flower -->
    <div class="garden-invite">
      <div class="label-row">
        <Squiggle color="var(--mango)" width={40}/>
        <span class="label">Community Flower Garden</span>
        <Squiggle color="var(--mango)" width={40}/>
      </div>
      <p class="garden-subhead">
        Draw a flower and share a moment of inclusion from your life — approved drawings join the garden and become part of the Everyone Belongs community.
      </p>
      <div class="flower-cluster">
        <Sunflower color="var(--mango)" center="#5C3317" size={56} style="opacity:0.65"/>
        <Pansy color="var(--lavender)" center="var(--mango)" size={46} style="opacity:0.7;margin-bottom:14px"/>
        <WildFlower color="var(--sky-blue)" center="rgba(247,243,237,0.8)" size={42} style="opacity:0.6;margin-top:8px"/>
        <Cosmos color="var(--poppy)" center="var(--mango)" size={38} style="opacity:0.65;margin-bottom:8px"/>
        <Daisy color="rgba(247,243,237,0.7)" center="var(--mango)" size={36} style="opacity:0.55;margin-top:10px"/>
      </div>
      <a href="/garden" class="cta-btn">
        Draw Your Flower <ArrowDoodle color="#fff" style="display:inline-block;vertical-align:middle;margin-left:8px"/>
      </a>
    </div>

  </div>
</section>

<style>
  .community {
    background: var(--near-black);
    padding: 100px 40px;
    position: relative;
    overflow: hidden;
  }
  .inner {
    max-width: 900px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .header {
    text-align: center;
    margin-bottom: 64px;
    width: 100%;
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
    font-size: clamp(32px, 4vw, 52px);
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: #F7F3ED;
  }
  .card {
    position: relative;
    padding: 52px 60px;
    box-shadow: 8px 8px 0 rgba(247,243,237,0.12);
    min-height: 280px;
    width: 100%;
  }
  .quote-mark {
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    font-size: 120px;
    line-height: 0.8;
    color: rgba(34,34,34,0.08);
    position: absolute;
    top: 24px;
    left: 40px;
    user-select: none;
    z-index: 0;
  }
  .card-inner {
    position: relative;
    z-index: 1;
  }
  .quote {
    font-family: 'DM Sans', sans-serif;
    font-size: 22px;
    line-height: 1.65;
    color: var(--near-black);
    font-style: italic;
    font-weight: 300;
    margin-bottom: 32px;
  }
  .attribution {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--near-black);
    opacity: 0.12;
  }
  .name {
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--near-black);
  }
  .role {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: rgba(34,34,34,0.6);
    margin-top: 2px;
  }
  .dots {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 36px;
  }
  .dot {
    height: 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background: rgba(247,243,237,0.2);
    transition: width 0.3s, background 0.3s;
    width: 10px;
  }
  .dot.active {
    width: 32px;
    background: var(--mango);
  }

  /* Divider */
  .divider {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    margin: 64px 0;
  }
  .divider-line {
    flex: 1;
    height: 1px;
    background: rgba(247,243,237,0.1);
  }

  /* Garden invite */
  .garden-invite {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .garden-subhead {
    font-family: 'DM Sans', sans-serif;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(247,243,237,0.65);
    font-weight: 300;
    max-width: 520px;
    margin: 0 auto 48px;
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
