# Everyone Belongs — Site Design Spec

## 1. Overview & Identity

Everyone Belongs is an advocacy and resource hub focused on inclusion in public schools, aimed at parents of students with IEPs and community members. It combines data transparency (via the Inclusion Data Explorer), advocacy content (via a blog), and community participation (via a flower drawing + story feature) into a single site.

The site is published under a new project/organization name -- Everyone Belongs. It is not a personal blog or tied to an existing organization.

The tone is a mix of authoritative, friendly, defiant, and warm: data and policy content is clear, factual, and grounded; parent-facing content is welcoming, empowering, and accessible. The site does not editorialize within the data explorer itself but does take a clear advocacy stance in blog content and resource recommendations.

---

## 2. Site Structure

Five pages at launch:

### Home (`/`)

The landing page and primary entry point. It serves multiple roles without requiring navigation:

- **Hero section**: The "Everyone Belongs" flower logo, a tagline, and a brief statement of purpose.
- **Data Explorer teaser**: A search input with a headline like "How inclusive is your district?" that links to the full explorer at `/explore`.
- **Recent blog posts**: 2–3 recent post cards with category tags linking to `/resources`.
- **Community flower garden teaser**: A section highlighting the flower garden feature with a prominent "Draw Your Flower" CTA linking to `/garden`. Approved community flowers are displayed here.
- **Get Involved**: Ways to volunteer, spread the word, and contact the team. Anchored at `#get-involved` for direct linking from the nav "Take Action" CTA.

### Data Explorer (`/explore`)

The full Inclusion Data Explorer as specified in the separate explorer design spec. Self-contained component that slots into the site layout.

### Resources (`/resources`)

Blog posts with category tags (e.g., Policy, Data, Stories, Resources). Each post is a Markdown/MDX file in the repo, rendered at build time. Individual posts live at `/resources/[slug]`. This section also includes evergreen resources, which could be sticky blog posts or a sidebar of links.

### Our Mission (`/about`)

Mission statement, background on the project, information about the people behind it, and context for why the site exists. Includes a contact form at the bottom of the page (email and name required, with a message text box).

### Community Flower Garden (`/garden`)

The interactive flower drawing tool. Users draw a flower using a simple canvas tool (finger on mobile, mouse on desktop), write an optional short "share your story of inclusion" text, and submit. The section is inviting and low-barrier — it should feel like a creative activity, not a form.

---

## 3. Navigation

A top nav bar with three text links and one CTA button: **Explore Districts** (`/explore`) · **Resources** (`/resources`) · **Our Mission** (`/about`) + **Take Action** button (anchors to `/#get-involved` on the home page). On mobile, the navigation collapses to a hamburger menu. The project name/logo appears at the left of the nav bar and links home (`/`).

The nav and footer are both part of the shared SvelteKit layout (`+layout.svelte`) and wrap all pages automatically.

The footer has a near-black background and three link columns:

- **Resources** — Explore Districts, IEP Guides, Know Your Rights, Policy & Data
- **About** — Our Mission, Community Garden, Contact Us
- **Community** — hello@yeseveryonebelongs.org, Take Action, Draw Your Flower, Volunteer

Below the columns: the brand name + tagline on the left, social platform icons on the right (Bluesky, Instagram, Substack, LinkedIn). A bottom bar shows the copyright and the site tagline "Made with love & defiance."

---

## 4. Visual Identity

### Logo

The "Everyone Belongs" wordmark composed of hand-drawn flowers. Used as a hero image on the home page and as a smaller wordmark/icon in the nav. The logo is a living element — community-submitted flowers are periodically swapped into the design.

### Color Palette

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Main | Deep Forest | #1A6B4A | Nav, footer, headings, primary buttons, donut hero segment |
| Secondary | Sky Blue | #7DBDE5 | Background washes, secondary highlights, info callouts, blog tags |
| Neutral (page) | Warm Cream | #F7F3ED | Page background |
| Neutral (surface) | White | #FFFFFF | Cards, inputs, content surfaces |
| Warm accent | Poppy | #EE5A36 | CTAs, Take Action links, alerts, donut segment (<40%) |
| Secondary warm | Mango | #F5AB54 | Badges, hover states, secondary buttons, donut segment (40–79%) |
| Tertiary accent | Lavender | #CFA4CC | Blog category tags, decorative touches, donut segment (separate settings) |
| Text | Near Black | #222222 | Body text on light backgrounds |

**Donut chart segment mapping:**

- 80%+ in regular classrooms → Deep Forest (the aspiration)
- 40–79% in regular classrooms → Mango (intermediate)
- Less than 40% → Poppy (draws attention)
- Separate settings → Lavender (distinct, not alarming)

### Typography

| Role | Font | Style | Usage |
|------|------|-------|-------|
| Display / Headers | Rubik | All caps, multiple weights | Page headings, section titles, hero text |
| Body / UI | DM Sans | Normal case, 400/500 weights | Body text, blog content, nav, data labels, tooltips |

Both are Google Fonts, loaded via the standard Google Fonts link or self-hosted for performance.

### Spacing & Layout

Mobile-first responsive design. Content max-width around 720–800px for readability. Generous whitespace. Cards only when needed. The overall feel is open and breathable, not dense.

---

## 5. Blog System

### Content Management

Blog posts are Markdown (or MDX) files stored in the repo, e.g., `/src/content/blog/`. Each file has frontmatter with:

- `title`
- `date`
- `category` (e.g., Policy, Data, Stories, Resources) - there can be multiple
- `excerpt`
- `image` (optional, URL to Cloudinary-hosted image)
- `slug`

SvelteKit renders these at build time. No external CMS, no API calls, no database.

### Image Hosting

Blog images are hosted on Cloudinary (free tier) to keep the repo lean. Frontmatter references Cloudinary URLs. The repo stays small and fast to clone regardless of how many posts accumulate.

### Blog Index

The `/blog` page lists all posts in reverse chronological order, with category tag filters. Each post blurb shows the title, date, category tag (color-coded using the accent palette), and excerpt.

### Migration Path

If the writing workflow becomes a bottleneck (multiple contributors, desire for visual editor, scheduling, drafts), the blog can migrate to Ghost as a headless CMS. The page components barely change — the data source switches from "read .md files" to "fetch from Ghost API" at build time.

---

## 6. Community Flower Garden

### User Experience

The flower garden lives at `/garden` as its own dedicated page. The home page has a teaser section that displays approved community flowers and links to `/garden` with a "Draw Your Flower" CTA.

On the `/garden` page, users can:

1. Draw a flower using a simple canvas drawing tool (finger on mobile, mouse on desktop)
2. Optionally write a short text in a "Share your story of inclusion" text box
3. Submit the drawing + story

The page is inviting and low-barrier — it should feel like a creative activity, not a form. The drawing tool is simple: a few color options, brush size, undo, clear — not a full illustration app.

### Submission Flow

Submissions go to **Netlify Forms** (built into the hosting, no backend required). The canvas drawing is exported as a PNG and submitted as a file attachment along with the story text. Netlify sends an email notification on each submission.

### Moderation & Publishing

The site owner (Brianna) reviews submissions in the Netlify Forms dashboard. Approved flowers are manually added to the repo (as image files in `/static/flowers/` or similar) and integrated into the logo or displayed in a gallery section on the home page. A site redeploy makes them live.

### Scope Constraints

- No user accounts or authentication
- No real-time gallery — approved flowers appear after manual review and redeploy
- No voting, commenting, or social features on submissions

---

## 7. Technical Architecture

### Stack

- **SvelteKit** with the **static adapter**
- **Markdown/MDX** for blog content (using mdsvex or similar)
- **D3** for data explorer visualizations (calculations only, Svelte renders)
- **Netlify** free tier for hosting and form submissions
- **Cloudinary** free tier for blog image hosting
- **Google Fonts** for Rubik and DM Sans

### Project Structure

```
/src
  /routes
    +layout.svelte          — shared nav, footer (wraps all pages)
    +page.svelte            — home page
    /explore
      +page.svelte          — data explorer
    /resources
      +page.svelte          — resources and blog index
      /[slug]
        +page.svelte        — individual post
    /about
      +page.svelte          — our mission, story, contact form
    /garden
      +page.svelte          — community flower drawing tool + submission
  /content
    /blog                   — markdown files for posts
  /data
    districts.json          — ODE metrics data
    geography.json          — census adjacency + centroids
    crosswalk.json          — ODE ID ↔ Census GEOID mapping
  /lib
    /components
      Nav.svelte
      Footer.svelte
      DonutChart.svelte
      Beeswarm.svelte
      SparkLine.svelte
      GeoIndicator.svelte
      DistrictSearch.svelte
      NeighborRow.svelte
      FlowerCanvas.svelte
      BlogCard.svelte
    /utils
      districts.js          — data lookup functions
      geography.js          — neighbor + crosswalk lookups
  /static
    /flowers                — approved community flower images
    /images                 — site images (logo, icons)
/scripts
  prepare_districts.py
  prepare_geography.py
  prepare_crosswalk.py
```

### Deployment

Push to GitHub → Netlify auto-builds and deploys. No CI/CD configuration beyond Netlify's default SvelteKit detection. Form submissions are handled by Netlify Forms with no additional setup.

---

## 8. Scope Boundaries — What's Explicitly Out

- **No Ghost CMS at launch.** Markdown in the repo. Migrate later if needed.
- **No user accounts or authentication.** The site is fully public and stateless.
- **No commenting system on blog posts.** Could add later (e.g., Giscus for GitHub-based comments) but not at launch.
- **No real-time flower gallery.** Submissions are manually reviewed and added.
- **No search functionality across the site.** Blog is browsable by category; the explorer has its own district search. Full-site search is a future feature.
- **No multi-language support.** English only for now.
- **No dark mode.** The warm cream + forest palette is designed for light mode. Dark mode is a future consideration.

---

## 9. Relationship to Data Explorer Spec

The data explorer has its own design spec (see: `oregon-inclusion-data-explorer-spec.md`). The two specs relate as follows:

- The **site spec** (this document) defines the container: layout, nav, footer, visual identity, and the overall site structure.
- The **explorer spec** defines the self-contained data exploration component that renders at `/explore`.
- The explorer inherits the site's color palette, typography, and spacing system. It does not define its own visual identity.
- The home page teaser for the explorer is defined in the site spec. The full explorer experience is defined in the explorer spec.
- The "Take Action" section at the bottom of the explorer may link to blog posts or resources defined in the site, creating a natural bridge between data and advocacy content.