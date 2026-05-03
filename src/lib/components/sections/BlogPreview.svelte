<script>
  import SmallLeaf from '../flowers/SmallLeaf.svelte';
  import Cosmos from '../flowers/Cosmos.svelte';
  import Clover from '../flowers/Clover.svelte';
  import Squiggle from '../ui/Squiggle.svelte';
  import Underline from '../ui/Underline.svelte';
  import ArrowDoodle from '../ui/ArrowDoodle.svelte';

  const categoryColors = {
    Policy:    { bg: '#1A6B4A', fg: '#F7F3ED' },
    Data:      { bg: '#7DBDE5', fg: '#222222' },
    Stories:   { bg: '#CFA4CC', fg: '#222222' },
    Resources: { bg: '#F5AB54', fg: '#222222' },
  };

  // Replace these with real post data when blog content exists
  const posts = [
    {
      category: 'Policy',
      title: "What the Latest IDEA Guidance Means for Your Child's IEP",
      date: 'Coming soon',
      excerpt: 'A breakdown of recent federal guidance on Least Restrictive Environment requirements and what it means for families navigating IEP meetings this fall.',
    },
    {
      category: 'Data',
      title: "Oregon's Inclusion Gap: Which Districts Are Falling Behind?",
      date: 'Coming soon',
      excerpt: 'Using ODE data, we map how much time students with IEPs spend in general education classrooms — and which districts have the widest gaps to close.',
    },
    {
      category: 'Stories',
      title: "One Family's Fight to Keep Their Daughter in the Classroom",
      date: 'Coming soon',
      excerpt: "When the school district proposed moving their daughter to a self-contained classroom, the Garcias pushed back. Here's what they learned along the way.",
    },
  ];
</script>

<section class="blog-preview">
  <div class="inner">
    <div class="header">
      <div class="label-row">
        <Cosmos color="var(--lavender)" center="#F5AB54" size={20} style="opacity:0.8"/>
        <SmallLeaf color="var(--deep-forest)" size={16} rotate={-20} style="opacity:0.7"/>
        <Squiggle color="var(--lavender)" width={40}/>
        <span class="label">From the Blog</span>
        <Squiggle color="var(--lavender)" width={40}/>
        <SmallLeaf color="var(--deep-forest)" size={16} rotate={20} style="opacity:0.7"/>
        <Clover color="var(--lavender)" size={20} style="opacity:0.8"/>
      </div>
      <h2 class="heading">Recent Posts</h2>
      <div class="heading-underline">
        <Underline color="var(--poppy)" height={10}/>
      </div>
    </div>

    <div class="grid">
      {#each posts as post}
        {@const cat = categoryColors[post.category]}
        <article class="card">
          <div class="card-top">
            <span class="tag" style="background:{cat.bg};color:{cat.fg}">{post.category}</span>
            <span class="date">{post.date}</span>
          </div>
          <h3 class="card-title">{post.title}</h3>
          <p class="card-excerpt">{post.excerpt}</p>
          <div class="card-footer">
            <span class="read-more">
              Read more <ArrowDoodle color="var(--poppy)" style="display:inline-block;vertical-align:middle;margin-left:4px"/>
            </span>
          </div>
        </article>
      {/each}
    </div>

    <div class="cta-row">
      <a href="/blog" class="all-posts-btn">View all posts</a>
    </div>

    <p class="placeholder-note">⚙ Placeholder — wire up to <code>/src/content/blog/</code> markdown files when posts are ready</p>
  </div>
</section>

<style>
  .blog-preview {
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
    color: var(--near-black);
    margin-bottom: 8px;
  }
  .heading-underline {
    width: 180px;
    margin: 0 auto;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-bottom: 48px;
  }
  .card {
    background: #fff;
    border: 2px solid rgba(34,34,34,0.08);
    padding: 32px 28px;
    box-shadow: 4px 4px 0 var(--near-black);
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
  }
  .card:hover {
    transform: translate(-3px, -3px);
    box-shadow: 7px 7px 0 var(--near-black);
  }
  .card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .tag {
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    padding: 4px 10px;
    border-radius: 2px;
  }
  .date {
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    color: rgba(34,34,34,0.45);
    font-weight: 400;
  }
  .card-title {
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 1.25;
    color: var(--near-black);
    letter-spacing: -0.01em;
  }
  .card-excerpt {
    font-family: 'DM Sans', sans-serif;
    font-size: 15px;
    line-height: 1.7;
    color: rgba(34,34,34,0.65);
    font-weight: 300;
    flex: 1;
  }
  .card-footer {
    margin-top: 4px;
  }
  .read-more {
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: var(--poppy);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  .cta-row {
    text-align: center;
  }
  .all-posts-btn {
    font-family: 'Rubik', sans-serif;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    color: var(--deep-forest);
    text-decoration: none;
    border: 2px solid var(--deep-forest);
    padding: 14px 32px;
    display: inline-block;
    box-shadow: 3px 3px 0 var(--near-black);
    transition: transform 0.15s, box-shadow 0.15s;
  }
  .all-posts-btn:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0 var(--near-black);
  }
  .placeholder-note {
    margin-top: 32px;
    text-align: center;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: rgba(34,34,34,0.4);
    font-style: italic;
  }
  .placeholder-note code {
    font-style: normal;
    font-weight: 600;
  }
  @media (max-width: 900px) {
    .grid { grid-template-columns: 1fr; }
  }
</style>
