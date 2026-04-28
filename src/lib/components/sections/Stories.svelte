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
  import Squiggle from '../ui/Squiggle.svelte';
  import RoughBg from '../ui/RoughBg.svelte';

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

<section class="stories">
  <Sunflower color="var(--mango)" center="#5C3317" size={90} style="position:absolute;top:30px;right:120px;opacity:0.16"/>
  <WildFlower color="var(--lavender)" center="var(--mango)" size={70} style="position:absolute;bottom:50px;left:80px;opacity:0.14"/>
  <Tulip color="var(--poppy)" size={60} style="position:absolute;top:80px;left:120px;opacity:0.15"/>
  <PoppyFlower color="var(--sky-blue)" size={50} style="position:absolute;bottom:80px;right:200px;opacity:0.14"/>
  <Cosmos color="var(--lavender)" center="var(--mango)" size={44} style="position:absolute;top:220px;right:340px;opacity:0.2"/>
  <Clover color="var(--mango)" size={40} style="position:absolute;top:60px;left:40%;opacity:0.12"/>
  <BellFlower color="var(--sky-blue)" size={48} style="position:absolute;bottom:120px;right:400px;opacity:0.18"/>
  <LeafSprig color="rgba(26,107,74,0.2)" size={60} style="position:absolute;top:40px;left:300px"/>
  <Squiggle color="rgba(207,164,204,0.18)" width={180} style="position:absolute;bottom:40px;right:100px;transform:rotate(4deg)"/>

  <div class="inner">
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
  </div>
</section>

<style>
  .stories {
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
  }
  .header {
    text-align: center;
    margin-bottom: 64px;
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
</style>
