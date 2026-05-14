<script>
  import Pansy from '../flowers/Pansy.svelte';
  import Cosmos from '../flowers/Cosmos.svelte';
  import VineBorder from '../ui/VineBorder.svelte';
  import RoughBg from '../ui/RoughBg.svelte';
  import Squiggle from '../ui/Squiggle.svelte';

  let email = '';
  let submitted = false;
  function handleSubmit(e) {
    e.preventDefault();
    if (email) submitted = true;
  }

  const socials = [
    { name: 'Bluesky',   handle: '@everyonebelongs.bsky', href: 'https://bsky.app/profile/everyonebelongs.bsky' },
    { name: 'Instagram', handle: '@everyonebelongs',      href: 'https://instagram.com/everyonebelongs' },
    { name: 'Substack',  handle: 'everyonebelongs',       href: 'https://everyonebelongs.substack.com' },
    { name: 'LinkedIn',  handle: 'everyonebelongs',       href: 'https://linkedin.com/company/everyonebelongs' },
  ];
</script>

<footer>
  <div style="opacity:0.22">
    <VineBorder color="#CFA4CC" height={44}/>
  </div>

  <div class="inner">

    <!-- Main CTA + Contact section -->
    <div class="main-section">

      <!-- Left: Get Involved CTA -->
      <div class="cta-col">
        <div class="label-row">
          <Squiggle color="var(--sky-blue)" width={40}/>
          <span class="label">Get Involved</span>
        </div>
        <h2 class="headline">Inclusion<br/>takes all<br/>of us.</h2>
        <p class="subtext">Stay up to date on advocacy wins, resources, and ways to take action.</p>
        {#if submitted}
          <div class="submitted">
            <Pansy color="var(--mango)" center="#F7F3ED" size={28}/> You're in! Thank you.
          </div>
        {:else}
          <form on:submit={handleSubmit} class="signup-form">
            <input
              type="email"
              bind:value={email}
              placeholder="your@email.com"
              class="email-input"
            />
            <button type="submit" class="signup-btn">
              <RoughBg color="var(--poppy)"/>
              <span style="position:relative;z-index:1">Sign Up</span>
            </button>
          </form>
        {/if}
      </div>

      <!-- Center: decorative flower -->
      <div class="flower-center">
        <Cosmos color="rgba(180,130,60,0.18)" center="rgba(180,130,60,0.12)" size={190}/>
      </div>

      <!-- Right: Get in Touch -->
      <div class="contact-col">
        <div class="label-row">
          <span class="label-2">Get in Touch</span>
        </div>
        <div class="contact-divider"></div>
        <div class="contact-block">
          <span class="contact-type">General</span>
          <a href="mailto:hello@everyonebelongs.org" class="contact-email">hello@everyonebelongs.org</a>
        </div>
        <div class="contact-divider"></div>
      </div>
    </div>

    <!-- Social strip -->
    <div class="social-strip">
      <span class="social-label">Find us elsewhere</span>
      <div class="social-chips">
        {#each socials as s}
          <a href={s.href} class="social-chip" target="_blank" rel="noopener noreferrer">
            <span class="chip-name">{s.name}</span>
          </a>
        {/each}
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="bottom-bar">
      <div class="brand-left">
        <div class="brand-flowers">
          <Pansy color="var(--mango)" center="var(--poppy)" size={18} style="opacity:0.75"/>
          <Cosmos color="var(--lavender)" center="var(--mango)" size={14} style="opacity:0.6"/>
        </div>
        <div class="brand-text">
          <span class="brand-name">Everyone Belongs</span>
          <span class="copyright">© 2026 Everyone Belongs</span>
        </div>
      </div>
      <div class="brand-right">
        <a href="/privacy" class="legal-link">Privacy</a>
        <a href="/accessibility" class="legal-link">Accessibility</a>
        <span class="dot">·</span>
        <span class="tagline">Made with love &amp; defiance.</span>
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
    padding-top: 56px;
  }

  /* ── Main section ── */
  .main-section {
    display: flex;
    align-items: flex-start;
    gap: 0;
    margin-bottom: 56px;
  }

  .cta-col {
    flex: 0 0 52%;
  }

  .flower-center {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 20px;
  }

  .contact-col {
    flex: 0 0 28%;
  }

  /* ── Label row (shared) ── */
  .label-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
  }

  .label {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--sky-blue);
  }

  .label-2 {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--mango);
  }

  /* ── CTA column ── */
  .headline {
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    font-size: clamp(40px, 5vw, 64px);
    text-transform: uppercase;
    color: #F7F3ED;
    line-height: 1.0;
    letter-spacing: -0.01em;
    margin: 0 0 24px;
  }

  .subtext {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    line-height: 1.65;
    color: rgba(247,243,237,0.55);
    font-weight: 300;
    max-width: 420px;
    margin: 0 0 32px;
  }

  .signup-form {
    display: flex;
    gap: 0;
  }

  .email-input {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    padding: 14px 20px;
    border: 1.5px solid rgba(247,243,237,0.25);
    border-right: none;
    background: rgba(247,243,237,0.06);
    color: #F7F3ED;
    outline: none;
    width: 240px;
  }

  .email-input::placeholder {
    color: rgba(247,243,237,0.3);
  }

  .signup-btn {
    position: relative;
    background: transparent;
    border: none;
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    padding: 14px 24px;
    cursor: pointer;
    color: #F7F3ED;
    transition: opacity 0.2s;
  }

  .signup-btn:hover {
    opacity: 0.85;
  }

  .submitted {
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 18px;
    color: var(--mango);
    display: flex;
    align-items: center;
    gap: 12px;
  }

  /* ── Contact column ── */
  .contact-divider {
    border-top: 1px solid rgba(247,243,237,0.1);
    margin-bottom: 20px;
  }

  .contact-block {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 20px;
  }

  .contact-type {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: rgba(247,243,237,0.3);
  }

  .contact-email {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    color: rgba(247,243,237,0.85);
    text-decoration: none;
    font-weight: 400;
    transition: color 0.2s;
  }

  .contact-email:hover {
    color: #F7F3ED;
  }

  /* ── Social strip ── */
  .social-strip {
    border-top: 1px solid rgba(247,243,237,0.1);
    padding-top: 28px;
    display: flex;
    align-items: center;
    gap: 32px;
    margin-bottom: 28px;
    flex-wrap: wrap;
  }

  .social-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: rgba(247,243,237,0.3);
    white-space: nowrap;
  }

  .social-chips {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .social-chip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border: 1px solid rgba(247,243,237,0.18);
    text-decoration: none;
    transition: border-color 0.2s;
  }

  .social-chip:hover {
    border-color: rgba(247,243,237,0.45);
  }

  .chip-name {
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 13px;
    color: #F7F3ED;
  }

  /* ── Bottom bar ── */
  .bottom-bar {
    border-top: 1px solid rgba(247,243,237,0.08);
    padding-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .brand-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .brand-flowers {
    display: flex;
    align-items: flex-end;
    gap: 3px;
  }

  .brand-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .brand-name {
    font-family: 'Rubik', sans-serif;
    font-weight: 900;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #F7F3ED;
  }

  .copyright {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: rgba(247,243,237,0.3);
    font-weight: 300;
  }

  .brand-right {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .legal-link {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: rgba(247,243,237,0.35);
    text-decoration: none;
    font-weight: 300;
    transition: color 0.2s;
  }

  .legal-link:hover {
    color: rgba(247,243,237,0.7);
  }

  .dot {
    color: rgba(247,243,237,0.2);
    font-size: 16px;
  }

  .tagline {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-style: italic;
    color: rgba(247,243,237,0.3);
    font-weight: 300;
  }
</style>
