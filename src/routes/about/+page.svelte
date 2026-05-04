<script>
  import Tulip from '$lib/components/flowers/Tulip.svelte';
  import Pansy from '$lib/components/flowers/Pansy.svelte';
  import SmallLeaf from '$lib/components/flowers/SmallLeaf.svelte';
  import Squiggle from '$lib/components/ui/Squiggle.svelte';
  import RoughBg from '$lib/components/ui/RoughBg.svelte';
</script>

<svelte:head>
  <title>About — Everyone Belongs</title>
</svelte:head>

<section class="page-hero">
  <Tulip color="rgba(247,243,237,0.12)" size={80} style="position:absolute;top:30px;right:80px"/>
  <Pansy color="rgba(207,164,204,0.15)" center="rgba(245,171,84,0.1)" size={60} style="position:absolute;bottom:20px;left:60px"/>
  <SmallLeaf color="rgba(247,243,237,0.08)" size={40} rotate={20} style="position:absolute;top:60px;left:200px"/>
  <div class="hero-inner">
    <div class="label-row">
      <Squiggle color="var(--mango)" width={40}/>
      <span class="label">Who We Are</span>
      <Squiggle color="var(--mango)" width={40}/>
    </div>
    <h1 class="title">About</h1>
    <p class="subtitle">Our mission, the story behind Everyone Belongs, and the people working to make full inclusion a reality.</p>
  </div>
</section>

<section class="placeholder-body">
  <div class="inner">
    <div class="coming-soon">
      <span class="icon">✦</span>
      <h2>Mission & Story coming soon</h2>
      <p>This section will cover our mission statement, the background on why Everyone Belongs exists, information about the people involved, and the values that guide our work.</p>
    </div>

    <div class="contact-block">
      <RoughBg color="var(--deep-forest)"/>
      <div class="contact-inner">
        <h2 class="contact-heading">Get in Touch</h2>
        <p class="contact-sub">Have a question, a story to share, or want to connect with our team?</p>
        <form class="contact-form">
          <div class="field-row">
            <div class="field">
              <label for="contact-name">Name</label>
              <input id="contact-name" type="text" placeholder="Your name" disabled/>
            </div>
            <div class="field">
              <label for="contact-email">Email</label>
              <input id="contact-email" type="email" placeholder="your@email.com" disabled/>
            </div>
          </div>
          <div class="field">
            <label for="contact-message">Message</label>
            <textarea id="contact-message" rows="5" placeholder="What's on your mind?" disabled></textarea>
          </div>
          <button type="submit" class="send-btn" disabled>
            <span>Send Message</span>
          </button>
          <p class="form-note">⚙ Contact form coming soon — wire up to Netlify Forms</p>
        </form>
      </div>
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
    color: var(--mango);
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
  }
  .inner {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 64px;
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
    color: var(--lavender);
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

  /* Contact form */
  .contact-block {
    position: relative;
    padding: 56px 60px;
    box-shadow: 6px 6px 0 var(--near-black);
    overflow: hidden;
  }
  .contact-inner {
    position: relative;
    z-index: 1;
  }
  .contact-heading {
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 36px;
    letter-spacing: -0.02em;
    color: #F7F3ED;
    margin-bottom: 10px;
  }
  .contact-sub {
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    color: rgba(247,243,237,0.65);
    font-weight: 300;
    margin-bottom: 36px;
  }
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .field-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  .field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .field label {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(247,243,237,0.7);
  }
  .field input,
  .field textarea {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    font-weight: 300;
    padding: 13px 16px;
    border: 2px solid rgba(247,243,237,0.2);
    background: rgba(247,243,237,0.07);
    color: #F7F3ED;
    outline: none;
    resize: none;
    opacity: 0.55;
    cursor: not-allowed;
  }
  .field input::placeholder,
  .field textarea::placeholder {
    color: rgba(247,243,237,0.35);
  }
  .send-btn {
    align-self: flex-start;
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    padding: 14px 32px;
    background: var(--poppy);
    color: #fff;
    border: none;
    box-shadow: 3px 3px 0 rgba(247,243,237,0.2);
    cursor: not-allowed;
    opacity: 0.55;
  }
  .form-note {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: rgba(247,243,237,0.35);
    font-style: italic;
  }
  @media (max-width: 640px) {
    .contact-block { padding: 40px 28px; }
    .field-row { grid-template-columns: 1fr; }
  }
</style>
