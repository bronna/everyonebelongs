<script>
  import SmallLeaf from '../flowers/SmallLeaf.svelte';
  import Tulip from '../flowers/Tulip.svelte';
  import Pansy from '../flowers/Pansy.svelte';
  import LeafSprig from '../flowers/LeafSprig.svelte';
  import Cosmos from '../flowers/Cosmos.svelte';
  import Clover from '../flowers/Clover.svelte';
  import Squiggle from '../ui/Squiggle.svelte';
  import Underline from '../ui/Underline.svelte';
  import RoughBg from '../ui/RoughBg.svelte';

  const stats = [
    ['7.3M', 'students served under IDEA nationwide'],
    ['< 40%', 'of students with IEPs feel fully included'],
    ['3×', 'higher dropout rate for students with unmet needs'],
  ];
</script>

<section class="mission">
  <div class="inner">
    <div class="left">
      <div class="label-row">
        <SmallLeaf color="var(--deep-forest)" size={16} rotate={-15}/>
        <Squiggle color="var(--poppy)" width={50}/>
        <span class="label">Our Mission</span>
      </div>
      <h2 class="heading">
        We Don't Ask<br/>For a Seat at<br/>
        the <span style="position:relative;display:inline-block">Table.
          <Underline color="var(--deep-forest)" height={10} style="margin-top:-4px"/>
        </span>
      </h2>
      <p class="body-text">
        Everyone Belongs is a grassroots advocacy organization working to dismantle barriers that keep students with disabilities out of full participation in school life — academic, social, and extracurricular.
      </p>
      <p class="body-text" style="margin-top:20px">
        We believe inclusion isn't a privilege or an accommodation. <strong>It's the baseline.</strong>
      </p>
      <div style="margin-top:40px">
        <button
          class="cta-btn"
        >
          <RoughBg color="var(--deep-forest)"/>
          <span style="position:relative;z-index:1">Read Our Story</span>
        </button>
      </div>
    </div>

    <div class="right">
      <div class="stat-card">
        <RoughBg color="var(--sky-blue)"/>
        <div class="stat-inner">
          <div class="bouquet-card">
            <Tulip color="#EE5A36" size={44} style="position:absolute;top:0;right:30px"/>
            <Pansy color="#fff" center="#CFA4CC" size={38} style="position:absolute;top:8px;right:-4px"/>
            <SmallLeaf color="#1A6B4A" size={16} rotate={30} style="position:absolute;top:40px;right:50px;opacity:0.7"/>
          </div>
          <div class="big-num">1 in 5</div>
          <div class="stat-label">students in the U.S. has a disability or learning difference</div>
          <Underline color="var(--poppy)" height={8} style="margin-top:8px"/>
          <div class="stat-list">
            {#each stats as [n, l]}
              <div class="stat-row">
                <div class="stat-n">{n}</div>
                <div class="stat-l">{l}</div>
              </div>
            {/each}
          </div>
        </div>
      </div>
      <div class="side-botanical">
        <LeafSprig color="var(--deep-forest)" size={50}/>
        <Cosmos color="var(--lavender)" center="#F5AB54" size={32} style="margin-bottom:8px"/>
        <Clover color="var(--lavender)" size={28} style="margin-bottom:4px"/>
      </div>
    </div>
  </div>
</section>

<style>
  .mission {
    background: var(--warm-cream);
    padding: 100px 40px;
  }
  .inner {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
  }
  .label-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
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
    font-size: clamp(36px, 4vw, 58px);
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: var(--near-black);
  }
  .body-text {
    font-family: 'DM Sans', sans-serif;
    font-size: 18px;
    line-height: 1.75;
    color: rgba(34,34,34,0.72);
    margin-top: 32px;
    max-width: 480px;
    font-weight: 300;
  }
  .body-text strong {
    font-weight: 600;
    color: var(--near-black);
  }
  .cta-btn {
    position: relative;
    background: transparent;
    border: none;
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    padding: 14px 30px;
    cursor: pointer;
    color: #F7F3ED;
    box-shadow: 3px 3px 0 var(--near-black);
    transition: transform 0.15s, box-shadow 0.15s;
  }
  .cta-btn:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 var(--near-black);
  }
  .right {
    position: relative;
  }
  .stat-card {
    position: relative;
    padding: 52px 48px;
    box-shadow: 8px 8px 0 var(--near-black);
  }
  .stat-inner {
    position: relative;
    z-index: 1;
  }
  .bouquet-card {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .big-num {
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    font-size: 80px;
    text-transform: uppercase;
    line-height: 1;
    color: var(--deep-forest);
    margin-bottom: 8px;
    letter-spacing: -0.04em;
  }
  .stat-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 17px;
    font-weight: 500;
    color: var(--near-black);
    line-height: 1.5;
  }
  .stat-list {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .stat-row {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .stat-n {
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    font-size: 26px;
    color: var(--poppy);
    min-width: 64px;
  }
  .stat-l {
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: var(--near-black);
    line-height: 1.45;
    font-weight: 400;
  }
  .side-botanical {
    position: absolute;
    bottom: -40px;
    left: -50px;
    display: flex;
    align-items: flex-end;
    gap: 4px;
    opacity: 0.75;
  }
</style>
