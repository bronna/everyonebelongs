<script>
  import Clover from '$lib/components/flowers/Clover.svelte';
  import LeafSprig from '$lib/components/flowers/LeafSprig.svelte';
  import SmallLeaf from '$lib/components/flowers/SmallLeaf.svelte';
  import Squiggle from '$lib/components/ui/Squiggle.svelte';
</script>

<svelte:head>
  <title>Resources — Everyone Belongs</title>
</svelte:head>

<section class="page-hero">
  <LeafSprig color="rgba(247,243,237,0.1)" size={80} style="position:absolute;top:20px;right:100px"/>
  <Clover color="rgba(207,164,204,0.15)" size={56} style="position:absolute;bottom:20px;left:80px"/>
  <SmallLeaf color="rgba(247,243,237,0.08)" size={36} rotate={10} style="position:absolute;top:90px;left:220px"/>
  <div class="hero-inner">
    <div class="label-row">
      <Squiggle color="var(--sky-blue)" width={40}/>
      <span class="label">Blog & Guides</span>
      <Squiggle color="var(--sky-blue)" width={40}/>
    </div>
    <h1 class="title">Resources</h1>
    <p class="subtitle">Policy explainers, data breakdowns, advocacy guides, and stories from the field.</p>
  </div>
</section>

<section class="placeholder-body">
  <div class="inner">
    <div class="coming-soon">
      <span class="icon">✦</span>
      <h2>Content coming soon</h2>
      <p>This page will list all blog posts with category tag filters — covering Policy, Data, Stories, and Resources — along with links to advocacy guides, questions to ask your district, and Oregon-specific organizations.</p>
    </div>
  </div>
</section>

<style>
  .page-hero {
    background: var(--deep-forest);
    padding: 140px 40px 80px;
    position: relative;
    overflow: hidden;
  }
  .hero-inner {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 2;
  }
  .label-row {
    display: inline-flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 20px;
  }
  .label {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--sky-blue);
  }
  .title {
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    font-size: clamp(48px, 7vw, 96px);
    line-height: 1.0;
    letter-spacing: -0.02em;
    color: #F7F3ED;
    margin-bottom: 24px;
  }
  .subtitle {
    font-family: 'DM Sans', sans-serif;
    font-size: 20px;
    line-height: 1.65;
    color: rgba(247,243,237,0.65);
    font-weight: 300;
    max-width: 520px;
    margin: 0 auto;
  }
  .placeholder-body {
    background: var(--warm-cream);
    padding: 100px 40px;
    min-height: 40vh;
  }
  .inner {
    max-width: 720px;
    margin: 0 auto;
  }
  .coming-soon {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border: 2px dashed rgba(26,107,74,0.2);
    padding: 60px 40px;
    background: #fff;
    box-shadow: 4px 4px 0 rgba(26,107,74,0.1);
  }
  .icon {
    font-size: 32px;
    color: var(--sky-blue);
    line-height: 1;
  }
  .coming-soon h2 {
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 28px;
    letter-spacing: -0.01em;
    color: var(--near-black);
  }
  .coming-soon p {
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    line-height: 1.7;
    color: rgba(34,34,34,0.6);
    font-weight: 300;
    max-width: 480px;
  }
</style>
