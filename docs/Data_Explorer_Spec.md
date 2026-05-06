# Oregon Inclusion Data Explorer — Design Spec

## 1. Overview & Purpose

The Oregon Inclusion Data Explorer is a mobile-first web application that makes federal IDEA data and Oregon Department of Education data visible and understandable at the district level. Its primary audience is parents of students with IEPs who may have limited experience reading data visualizations or navigating education policy terminology.

The tool is not an advocacy platform itself — it doesn't editorialize or argue for particular policies. Instead, it presents the data clearly and then serves as a jumping-off point, linking users to advocacy resources, guides, and specific questions they can bring to their district or school board. The implicit message is: "Here's what the numbers say. Here's what they don't say. Here's what to do next."

The initial version covers Oregon only, but the data architecture (file structure, naming conventions, component design) should be state-agnostic so that adding another state later means adding a data folder and a configuration file, not rewriting components.

The explorer is one piece of a larger SvelteKit site that includes a CMS-driven blog (Markdown/MDX or Ghost as headless CMS). A preview/teaser appears on the home page (e.g., the district search input with a headline like "How inclusive is your district?") linking to the full explorer at its own route (e.g., `/explore`).

---

## 2. Data Model

The data lives as flat JSON files in `/src/data/`. Three files.

### `districts.json`

All district-level metrics from ODE Report Card Media download files. Flat array, one row per district per year. Keyed on the ODE district ID. Fields include:

- ODE district ID
- District name
- Year
- LRE placement percentages (four categories: 80%+ in regular classrooms, 40–79%, <40%, separate settings)
- IEP percentage (students with IEPs as a percentage of total enrollment)
- Other SPP/APR indicators (graduation rate, dropout rate, suspension/expulsion rates for students with disabilities, etc.)
- Disability category counts or percentages (e.g., autism, SLD, intellectual disability, speech/language, etc.) — used to compute high/medium/low cost support tier groupings at runtime
- Disproportionality metrics: discipline disproportionality by race, identification disproportionality by race (Indicators 4 and 9/10)
- Contextual fields (total enrollment, special education child count, demographic breakdowns)

### `geography.json`

Derived from US Census TIGER/Line shapefiles for Oregon school district boundaries. Each entry contains:

- Census GEOID
- District name
- County
- Centroid latitude and longitude (for the geo indicator)
- List of neighboring district GEOIDs (computed via geographic adjacency)

No geometries are shipped to the client — just the adjacency list and centroids. The Oregon state outline is stored separately as a simplified GeoJSON feature or SVG path for the geo indicator.

### `crosswalk.json`

Maps ODE district IDs to Census GEOIDs. One row per district with three fields:

- ODE district ID
- Census GEOID
- District name (human-readable sanity check)

There are roughly 200 districts in Oregon, so this is a manageable hand-verification task. It only changes if a district merges or is created.

### Runtime data flow

When a user selects a district:

1. Look up ODE district ID in `districts.json` → metrics
2. Map ODE ID → Census GEOID via `crosswalk.json`
3. Look up GEOID in `geography.json` → centroid + neighbor GEOIDs
4. Map neighbor GEOIDs back through `crosswalk.json` → neighbor ODE IDs
5. Pull neighbor metrics from `districts.json`

This is a few array lookups — no joins, no query language, nothing clever.

---

## 3. User Flow

The data explorer is a self-contained component that renders at its own route (e.g., `/explore`), with a teaser on the home page linking to it. The explorer does not own the site's layout, header, or footer — it slots into the larger SvelteKit site.

Everything happens in a single scrollable view that progressively reveals detail as the user makes choices.

### Step 1: District Selection

A search input with a prompt like "Find your school district." The user types, gets a filtered dropdown, taps their district. This is the only required interaction.

### Step 2: District Snapshot

The district's most recent year of data appears. The hero visual is a **donut chart** showing LRE placement percentages. The donut shape carries an intentional message — every student is part of the whole — with four segments representing the federal LRE categories. The center of the donut displays a headline number (e.g., "68% in regular classrooms most of the day").

A small **geo indicator** — a static SVG map of Oregon's outline with a dot marking the selected district's centroid — appears next to or above the district name. Sized small (120–150px wide), for orientation, not exploration.

Three secondary metrics appear below the donut as compact numerical displays with plain-language labels:

1. **IEP percentage** — what proportion of the district's students have IEPs, along with the state average
2. **Graduation rate** — for students with IEPs, along with the state average

**"More details" expandable section**: A tap target below the secondary metrics (e.g., "See more about this district") reveals additional data, collapsed by default:

- **Disproportionate discipline** — whether students with disabilities are disciplined at disproportionate rates
- **Identification disproportionality by race** — whether students from certain racial groups are identified as having a disability at disproportionate rates.
- **Support needs profile** — three horizontal percentage bars for high, medium, and low support tiers, with specific IEP categories listed under each bar. A brief disclaimer notes: "These groupings are approximate. Individual student support needs vary widely within each category." The tier grouping logic lives in a utility function.
- Any additional metrics added in the future.

Every metric has a one-sentence explanation available on tap. The disproportionate discipline and identification disproportionality metrics have an additional **visible inline caveat** (e.g., "Data may not be available for smaller districts") because of n-size reporting thresholds, plus a fuller explanation on tap.

### Step 3: State Context

A toggle or tap target (e.g., "How does this compare statewide?") reveals a **beeswarm or dot strip plot** showing every district in the state as a dot, with the selected district highlighted. Focused on the primary LRE metric (percent of students in regular classrooms 80%+ of the time). Answers "is my district typical or an outlier?" at a glance.

### Step 4: Neighbors

Neighboring districts appear automatically below — no second search required. Each neighbor gets its own **mini donut chart** for LRE, so the user can visually scan comparisons. The user's district is visually distinguished (slightly larger, bolder outline, or labeled differently).

### Step 5: Trends

A section shows a single **sparkline** showing the district's 80%+ LRE percentage (the most inclusive placement category) over available years. This is the one trend line that matters most.

An **"Expand trends"** tap target below the sparkline reveals additional trend lines: the other three LRE categories, IEP percentage, and graduation rate for students with IEPs. Collapsed by default - only for users who want the full picture.

### Step 6: Take Action

A persistent section at the bottom links to advocacy resources:

- Questions to ask your school board about inclusion
- Guides for understanding IEP placement
- Links to Oregon-specific advocacy organizations

This section does not interpret the data — it equips the user.

---

## 4. Content & Language

Every piece of text must pass a simple test: would a parent at a school board meeting for the first time understand this without Googling anything?

### Metric labels

Plain language, not policy jargon. "In regular classrooms most of the day" instead of "Indicator 5A — 80%+ placement in regular education environment." Federal category names are available on tap for anyone who wants them, but not the default.

### One-sentence explanations

Available for every metric via a tap target (info icon or expandable text). Explains what's being measured and where the data comes from, in one sentence. Example: "This is the percentage of students with IEPs who spend 80% or more of their school day in regular classrooms, as reported to the federal government by the district."

### Donut chart labels

Same plain language. The four segments: "In regular classes most of the day," "In regular classes part of the day," "Mostly in separate classes," "In separate settings."

### Source attribution

Small text below visualizations: "Data from the Oregon Department of Education, [year]. Federal IDEA reporting."

---

## 5. Technical Architecture

### Stack

- **SvelteKit** with the **static adapter**
- **D3** for calculations only (scales, arc generators, beeswarm layout) — no DOM manipulation
- **Svelte** handles all rendering via `{#each}` blocks and reactive declarations
- **Netlify** free tier for hosting

At build time, SvelteKit pre-renders everything into plain HTML, CSS, and JS. No server functions, no API routes, no serverless anything.

### Project structure

```
/src/data/              — districts.json, geography.json, crosswalk.json
/src/lib/components/    — DistrictSearch, DonutChart, Beeswarm, SparkLine,
                          NeighborRow, GeoIndicator, TakeAction, MetricCard, MoreDetails, SupportNeedsProfile
/src/lib/utils/         — Pure functions: get district by ID, get neighbors,
                          get state distribution, crosswalk lookups, compute support tier groupings
/src/routes/            — Site pages (home with teaser, /explore for full explorer,
                          blog routes)
/scripts/               — Python data prep scripts
```

### State management

No state management library. A couple of Svelte writable stores:

- Selected district ID
- Whether trend view is expanded
- Whether expanded trends are showing
- Whether state context view is showing
- Whether "more details" section is expanded

When the user picks a district, one store updates and everything reactive downstream re-renders.

### Geo indicator

A small static SVG map of Oregon's outline with a dot at the selected district's centroid. D3 geo projection functions convert lat/lon to pixel positions. The Oregon outline is a single static path checked into the repo. Not interactive — just orientation. The projection and geography data are available for future interactive map features.

### D3 usage

D3 is a calculation library in this project:

- `d3.arc()` for donut chart segments
- `d3.scaleLinear()` / `d3.scaleBand()` for positioning
- `d3.forceSimulation()` for beeswarm layout
- `d3.geoMercator()` or `d3.geoAlbers()` for the geo indicator projection

No `d3.select()`, no `enter/exit/update`. Svelte owns the DOM.

### Mobile-first visualization approach

- Donut chart sized for phone screens without zooming
- Small multiples (mini donuts for neighbors) for compact comparison
- Sparklines for trends — minimal space, maximum information
- Beeswarm for state distribution — visually intuitive even for non-data-literate users
- Horizontal percentage bars for support needs tiers — simple, scannable, visually lightweight
- All touch targets sized for thumbs, not cursors

---

## 6. Data Prep Pipeline

Python scripts in `/scripts/` that transform raw source data into the three JSON files. Run manually. No dependencies on the SvelteKit app.

### `prepare_districts.py`

- Input: ODE Report Card Media download files (CSV)
- Process: Read with pandas, filter columns to match plain-language field names, normalize district IDs
- Output: `districts.json`
- Frequency: Once a year when new data is published

### `prepare_geography.py`

- Input: US Census TIGER/Line shapefiles for Oregon school district boundaries
- Process: Compute adjacency (shared borders) using GeoPandas, extract centroids, extract Oregon state outline as simplified GeoJSON/SVG path
- Output: `geography.json` + Oregon outline file
- Frequency: Once, or when district boundaries change (rare)

### `prepare_crosswalk.py`

- Input: ODE district list + Census district list
- Process: Match ODE district IDs to Census GEOIDs (partly automatable via fuzzy name matching, hand-verified)
- Output: `crosswalk.json`
- Frequency: Once, maintained manually if districts merge or split

---

## 7. Scope Boundaries — What's Explicitly Out

- **No interactive map exploration.** The geo indicator is static "you are here." Clickable map comes later if ever.
- **No filtering or search by metric.** Users find districts by name only. No "show me all districts below X%."
- **No school-level data.** Everything is district-level, matching IDEA reporting granularity.
- **No user accounts, saved views, or personalization.** Stateless — every visit starts from search.
- **No admin panel for content.** Take Action links and metric descriptions are hardcoded or in a static JSON file. Updates mean editing a file and redeploying.
- **No multi-state support yet.** Architecture supports it (state-prefixed data, crosswalk expansion). UI assumes Oregon only.
- **No automated data pipeline.** Python scripts run manually. GitHub Actions or similar is a future optimization.

---

## 8. Integration with Larger Site

The data explorer lives within a SvelteKit site that also includes:

- A CMS-driven blog (Markdown/MDX files or Ghost as headless CMS)
- A home page with a teaser/preview of the explorer (search input + headline) linking to `/explore`

The explorer component does not own the site shell (header, footer, navigation). It renders within the site's layout. The site is deployed as a single SvelteKit app to Netlify.

The blog and explorer share a visual identity but are functionally independent — blog posts don't pull live data from the explorer, and the explorer doesn't reference blog content. The Take Action section in the explorer may link to relevant blog posts where appropriate.