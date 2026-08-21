# PanoPros — SEO & GEO Audit and Implementation Plan

**Audited:** 21 August 2026 · **Site:** panopros.bh · **Stack:** Next.js 16.2.5 (App Router) on Vercel, behind Cloudflare
**Scope:** full codebase at `Website/panopros/` plus live-site verification via HTTP.

> **Status:** Tier 0 has shipped. Everything in Tier 1–3 is outstanding. Items marked ✅ were
> fixed in the Tier 0 PR; the "before" state is preserved so the reasoning stays auditable.

---

## Executive summary

The site was carrying **two production bugs that suppressed indexation outright**. Neither was a
content problem — both were single-line configuration mistakes, and until they were fixed no
amount of keyword or content work could have moved rankings.

1. **Every page canonicalised to the homepage.** A hardcoded canonical in the root layout was
   inherited by all seven routes, telling Google the entire site was a duplicate of one page — a
   page that had no `<h1>` and 338 characters of text. ✅ *Fixed in Tier 0.*
2. **Cloudflare was blocking the AI crawlers.** A managed `robots.txt` injected ahead of the
   app's own disallowed `GPTBot`, `ClaudeBot`, `Google-Extended`, `CCBot` and others.
   ✅ *Fixed by Hassan in the Cloudflare dashboard.*

The third problem is real but slower to solve: **there is almost no content**. Not one of the six
target keyword phrases appeared anywhere on the site as an exact phrase, and there is no blog, no
FAQ, and no service-level pages.

What is genuinely strong: page performance, semantic HTML quality, and the meta descriptions.

---

## Why ChatGPT found PanoPros

This was the question worth answering, and the answer is specific.

The bots Cloudflare was blocking are **training and grounding-corpus** crawlers. The bots that
actually power live answer citations were **never on the block list**:

| Bot | Purpose | Was it blocked? |
|---|---|---|
| `GPTBot` | OpenAI model training | **Blocked** |
| `OAI-SearchBot` | ChatGPT Search index | Allowed |
| `ChatGPT-User` | ChatGPT live user-triggered fetch | Allowed |
| `PerplexityBot` / `Perplexity-User` | Perplexity index + live fetch | Allowed |
| `ClaudeBot` | Anthropic training | **Blocked** |
| `Google-Extended` | Google AI Overviews / Gemini grounding | **Blocked** |
| `Googlebot` / `Bingbot` | Classic search | Allowed |

So ChatGPT could reach the site through `OAI-SearchBot` while Google's entire AI layer could not.
The discovery wasn't luck — it was the one AI channel that happened to be open, finding a site
whose `LocalBusiness` JSON-LD made it trivially machine-readable.

**The lesson:** the existing structured data did real work. Expanding it (Tier 1) is the highest-
confidence GEO investment available, because there is now direct evidence it converts.

---

## Part 1 — Audit findings

### 1.1 Technical SEO

| Item | State at audit |
|---|---|
| **Canonical** | 🔴 `alternates: { canonical: "https://panopros.bh" }` hardcoded at `app/[locale]/layout.tsx:37`. Next.js metadata inherits down the segment chain and no child overrode it. Verified live: `/media`, `/packages` and `/ar/media` all emitted `<link rel="canonical" href="https://panopros.bh"/>`. ✅ Fixed. |
| **Titles** | 🔴 Present but one word each — `"Media"`, `"Development"`, `"Packages"`, `"Portfolio"`, `"About"`, `"Contact Us"` — rendering via the `%s \| PanoPros` template. Zero target keywords in any title. ✅ Fixed. |
| **Descriptions** | 🟢 Present, unique, and well written on all six routes. `app/[locale]/media/page.tsx` already named Matterport, floor plans and Bahrain. The best-executed thing on the site. |
| **Hostname** | 🔴 Apex and `www` both returned HTTP 200 with no redirect — a full duplicate site. `app/sitemap.ts` declared `www`, the canonical declared apex. ✅ Fixed (Cloudflare 301 + code fallbacks). |
| **robots.txt** | 🔴 Overridden by Cloudflare's managed block. ✅ Fixed. |
| **sitemap.xml** | 🟡 Generated and served correctly, 7 URLs. But `lastModified: new Date()` churns on every build (Google discounts volatile `lastmod`), no `changeFrequency`, and no locale alternates. Outstanding — Tier 1. |
| **Open Graph / Twitter** | 🟡 Set once in the root layout with a valid 1200×630 image, but **never overridden per route** — every page shares the homepage card. `locale: "en_US"` is wrong for Bahrain. Outstanding — Tier 1. |
| **Search Console** | 🔴 No verification token anywhere in the repo. No evidence the sitemap has ever been submitted. Outstanding — Tier 1. |
| **Analytics** | 🔴 None. No `gtag`, no GTM, no Vercel Analytics. Outstanding — Tier 3. |
| **Metadata API usage** | 🟢 Correct Next.js 16 pattern (static `metadata` export per route segment), just under-filled. |

### 1.2 Structured data

One JSON-LD block existed, at `app/[locale]/layout.tsx:72-110`: a `LocalBusiness` with name,
telephone, email, `areaServed: "Bahrain"` and a 13-item `hasOfferCatalog`. Materially better than
nothing, and very likely what made the ChatGPT citation possible.

What is still missing:

- Emitted **identically on every page**, including `/ar`. No `@id`, so there is no entity graph — just repetition.
- `PostalAddress` carries only `addressCountry: "BH"`. **No `streetAddress`, no `addressLocality`.** Google's local algorithm cannot place the business.
- Absent: `geo`, `openingHoursSpecification`, `priceRange`, `sameAs`, `founder`, `logo`.
  The Instagram account is linked in the header and footer but never declared as an entity link.
- Type is the generic `LocalBusiness`; `ProfessionalService` is the correct narrower type.
- **Zero** `Service`, `BreadcrumbList`, `FAQPage`, `ImageObject`, or `WebSite` schema.
- Uses bare `JSON.stringify` — the Next.js 16 guide (`node_modules/next/dist/docs/01-app/02-guides/json-ld.md`) recommends escaping `<` as `\u003c` to close off an XSS vector.

### 1.3 Content and keyword coverage

The weakest area by a wide margin. Measured against the live site:

| Route | `<h1>` at audit | Visible text | Bahrain / keyword signal |
|---|---|---|---|
| `/` | **none — zero `<h1>`** | **338 chars** | none |
| `/media` | `"Media"` | ~900 chars | "Bahrain" appeared **zero times in body copy** |
| `/development` | `"Development"` | ~800 chars | none |
| `/packages` | `"Packages"` | richest page on the site | "Bahraini businesses" once |
| `/portfolio` | `"Portfolio"` | image grid, no prose | only inside project `client` strings |
| `/about` | `"About"` | 3 sentences | "Manama, Bahrain" — the only correct locality mention anywhere |

The homepage was a two-word splash screen (`Media` / `Development` as `<h2>`s) — a deliberate and
attractive design decision, and an SEO catastrophe: the strongest ranking asset on the domain had
no heading and nothing to rank. ✅ Fixed in Tier 0 with a deliberately quiet `<h1>` and one
paragraph of copy, leaving the split-screen as the visual centrepiece.

**Not one of the six target phrases appeared on the site as an exact phrase.** The component words
existed but never adjacent to "Bahrain" — `"Matterport Virtual Tours"` at `lib/data/services.ts:65`,
`"2D Floor Plans"` at `:95` — and the query is the adjacency.

**Image alt text** is mostly auto-derived. `alt={title}` at `components/ServiceCard.tsx:138` yields
`"Photography"` rather than `"Real estate photography in Bahrain"`; the slideshow alts at `:77`
(`` `${title} - slide ${i+1}` ``) are pure noise. By contrast the eleven hand-written portfolio alts
at `lib/data/portfolio.ts:72-82` are genuinely good and location-aware ("Marassi Bay furnished
living room") — that is the pattern to copy everywhere else. Outstanding — Tier 1.

**URLs** are clean and short but carry no keyword signal. Not worth changing (redirect risk);
worth *supplementing* with service pages — Tier 2.

**Blog: none.** There is no content surface of any kind.

### 1.4 Local SEO / GEO signals

NAP is **partially consistent, and was partly crawler-invisible**:

- **Name** — "PanoPros" everywhere. Consistent.
- **Address** — `"MANAMA, BAHRAIN · CR 197430-1"` at `components/Footer.tsx:41`. No street address, and the JSON-LD address does not even include Manama.
- **Phone** — `+973 3333 0340` at `components/Footer.tsx:25` and `components/CTAStrip.tsx:15`. Consistent.
- **Email** — 🔴 Cloudflare Email Obfuscation was rewriting `info@panopros.bh` into `[email protected]` with a JS decoder. Crawlers and LLMs could not read the contact address at all. ✅ Fixed in the Cloudflare dashboard.

No Google Business Profile link, no Maps embed, no `g.page` reference — grepped the entire tree,
zero hits. No location pages (Manama / Seef / Amwaj / Riffa / Muharraq). No GCC signalling beyond
the word "Bahrain". **CR 197430-1 is a genuine trust asset** currently rendered as 10px grey footer
text and present in no structured data.

### 1.5 AI search / GEO readiness

**Strong foundations.** Content is server-rendered semantic HTML with real `<article>`/`<h3>`
structure (`components/ServiceCard.tsx`), nothing is JS-gated, and pages are small (~50KB). An LLM
crawler can read everything it can reach.

**But there is very little to extract.** GEO rewards content that answers a question in a citable,
self-contained paragraph, and the site had **zero question-format content** — grepping for
`FAQ`, `how much`, `how long`, `what is a` returned no matches anywhere. The closest thing is the
"Good to Know" list at `components/PackagesClient.tsx:134-147`, which contains the single most
citable fact on the entire site: *"Domain and hosting fees are separate (typically BD 15–25/year)."*
Specific, local, priced — exactly the shape an LLM quotes. There is one of them.

**`llms.txt`** did not exist (404). ✅ Added in Tier 0.

### 1.6 Performance and Core Web Vitals

Genuinely strong, and it helps rather than hurts. Cloudflare caching confirmed live. Immutable
one-year image caching (`next.config.ts:14-17`) paired with the `ASSET_VERSION` cache-bust
(`lib/utils.ts:5`). Blur placeholders, `priority` on above-fold cards, IntersectionObserver-deferred
video (`components/ServiceCard.tsx:32-47`), lazy-loaded lightbox, latin-only font subsets, full
security header set. Pages are 50–62KB.

Two things to be aware of, neither worth acting on now:

- `images.unoptimized: true` (`next.config.ts:9`) disables responsive `srcset`. This is a deliberate trade given the pre-compressed WebP pipeline and constrained upload bandwidth — **leave it**. The cost is that mobile devices download desktop-sized files.
- The `?v=ASSET_VERSION` query string (`lib/utils.ts:10`) is correct for browser cache-busting but splits Google Images' canonical view of each asset.

**Verdict: performance is an asset. Nothing here needs fixing before content and indexing.**

---

## Part 2 — Ranked implementation plan

Ordered by impact ÷ effort.

### ✅ Tier 0 — shipped

| # | Change | Files |
|---|---|---|
| 1 | **Removed the global canonical**; added a self-referencing canonical to all 7 routes. Relative paths resolve against `metadataBase`, so they survive a hostname change. | `app/[locale]/layout.tsx`, all 7 `page.tsx` |
| 2 | **Rewrote every title** to lead with a target keyword phrase (table below). Uses `title.absolute` to bypass the `%s \| PanoPros` template, which is retained for future routes. | all 7 `page.tsx` |
| 3 | **Homepage `<h1>` + intro copy.** Raised visible text from 338 → 549 chars and gave the page its first-ever heading. | `app/[locale]/page.tsx` |
| 4 | **Pointed `sitemap.ts` / `robots.ts` at the apex host**, so the sitemap stops advertising URLs that now 301. | `app/sitemap.ts`, `app/robots.ts` |
| 5 | **Added `public/llms.txt`** — services, NAP, CR number, package contents, priced facts, per-page links, and explicit guidance not to invent prices. | `public/llms.txt` |
| 6 | *(Hassan, Cloudflare)* Disabled AI Crawl Control / managed robots.txt, disabled Email Obfuscation, added `www` → apex 301. | dashboard |

**Titles now live:**

| Route | Title | Primary phrase |
|---|---|---|
| `/` | Photography, Virtual Tours & Web Development in Bahrain \| PanoPros | photography bahrain |
| `/media` | Real Estate Photography & Videography in Bahrain \| PanoPros | real estate photography bahrain, videography bahrain |
| `/development` | Web & Mobile App Development in Bahrain \| PanoPros | web development bahrain |
| `/packages` | Photography & Virtual Tour Pricing in Bahrain \| PanoPros | price-intent — high AI citation value |
| `/portfolio` | Property Photography & Web Design Portfolio — Bahrain | — |
| `/about` | About PanoPros — Media & Development Studio in Manama | manama |
| `/contact-us` | Contact PanoPros — Photography & Web Development in Bahrain | — |

### Tier 1 — next (schema, local signals, measurement)

**1. Rebuild the structured data** · ~2 hrs · *highest remaining impact*

Create `lib/schema.ts` with typed builders; keep a root organisation block and add page-level graphs.

- `ProfessionalService` with `@id: "https://panopros.bh/#organization"`, full `PostalAddress`
  (street + `addressLocality: "Manama"`), `geo`, `openingHoursSpecification`, `priceRange: "$$"`,
  `sameAs: ["https://www.instagram.com/panopros.bh/"]`, `founder`, and CR 197430-1 as `identifier`.
- `Service` schema per offering on `/media` and `/development`, each with
  `provider: { "@id": "…#organization" }` and `areaServed: { "@type": "Country", name: "Bahrain" }`.
  Drive it off the existing `lib/data/services.ts` array so it cannot drift.
- `BreadcrumbList` on all non-home routes.
- `FAQPage` on `/packages` (see item 2).
- `WebSite` + `Organization` on `/`.
- Apply `.replace(/</g, "\\u003c")` per the Next.js 16 JSON-LD guide.

Example shape:

```ts
export const organization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://panopros.bh/#organization",
  name: "PanoPros",
  url: "https://panopros.bh",
  logo: "https://panopros.bh/favicon-512x512.png",
  image: "https://panopros.bh/og-image.jpg",
  telephone: "+97333330340",
  email: "info@panopros.bh",
  priceRange: "$$",
  identifier: { "@type": "PropertyValue", name: "Commercial Registration", value: "197430-1" },
  founder: { "@type": "Person", name: "Hassan Alnajjar" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "<street>",         // needed from Hassan
    addressLocality: "Manama",
    addressCountry: "BH",
  },
  areaServed: { "@type": "Country", name: "Bahrain" },
  sameAs: ["https://www.instagram.com/panopros.bh/"],
};
```

**2. FAQ sections on `/packages` and `/media`** · ~2 hrs · *highest-value GEO content move*

Real, priced, Bahrain-specific Q&A as semantic HTML **and** `FAQPage` JSON-LD:

- How much does real estate photography cost in Bahrain?
- What is a Matterport virtual tour and how does it work?
- How long does a property shoot take in Bahrain?
- Do you cover Manama, Seef, Amwaj Islands and Riffa?
- What is the difference between a 2D and a 3D floor plan?
- How fast do I get my photos back? *(already answered — 24–48hr, `lib/data/packages.ts:130`)*
- Do you shoot commercial and hospitality, or only residential?

Answer each in 40–60 self-contained words containing a concrete number. That is what gets quoted
verbatim. Most of the raw material already exists in `lib/data/packages.ts`; it just isn't in
question form.

**3. Google Search Console + Google Business Profile** · ~1 hr, mostly off-site
Verify the apex via `verification.google` in the layout metadata; submit `https://panopros.bh/sitemap.xml`.
Create/claim the GBP as a service-area business in Manama with NAP matching the footer **exactly**,
then link it from the footer and add it to `sameAs`. GBP is the single largest lever for
`photography bahrain` map-pack rankings and is currently entirely absent.

**4. Per-route OG/Twitter + `en_BH`** · ~45 min
Override `openGraph.title/description/url` per page; fix `locale: "en_US"` → `"en_BH"` at
`app/[locale]/layout.tsx:52`.

**5. Keyword-rich alt text and intro copy** · ~1 hr
Add an `alt` field to the `Service` interface (`lib/data/services.ts:1-12`) and use it in
`ServiceCard.tsx:138`. Remove the `- slide N` alts at `:77`. Add one keyword-bearing intro
paragraph to `/media`, `/development` and `/portfolio`.

**6. Park `/ar` cleanly** · ~30 min
`next-intl` is fully wired (`i18n/routing.ts`, `proxy.ts`, `messages/ar.json`) but **no component
calls `useTranslations`** — every page is hardcoded English, so `/ar/media` serves byte-identical
English at a duplicate URL while next-intl advertises it via `Link:` hreflang headers. Until real
Arabic copy exists, set `robots: { index: false }` for the `ar` locale and suppress the hreflang
alternates. Keep all plumbing intact for a proper phase 2 — bilingual is a service PanoPros sells,
and `تصوير عقاري البحرين` is a real GCC opportunity.

**7. Sitemap hygiene** · ~15 min
Replace `new Date()` (`app/sitemap.ts:5`) with stable per-route dates; add `changeFrequency`.

### Tier 2 — the content engine

**8. Service landing pages** · ~1 day · *where the target keywords are actually won*

`/media` cannot rank for six different phrases simultaneously. Add dedicated routes, each with its
own `<h1>`, ~600 words, `Service` + `FAQPage` schema, and real portfolio imagery:

- `/services/real-estate-photography-bahrain`
- `/services/matterport-virtual-tours-bahrain`
- `/services/videography-bahrain`
- `/services/floor-plans-bahrain`
- `/services/virtual-staging-bahrain`

Reuses `ServiceCard`, `ScrollReveal` and the `lib/data/services.ts` shape — a content lift, not an
architecture lift.

**9. Blog — recommendation: YES, via MDX, not a CMS** · ~1 day setup

GEO runs on citable long-form answers and there are currently none. But a CMS is the wrong tool:
add `app/[locale]/blog/[slug]/page.tsx` plus `content/*.mdx` with `@next/mdx`. Statically
generated, zero runtime cost, no database, no new infrastructure, and nothing extra to upload —
which matters on a constrained uplink. Frontmatter drives `generateMetadata` and `BlogPosting`
schema; `app/sitemap.ts` reads the same directory.

Launch set — each is a real query with commercial intent that no Bahraini competitor currently owns:

1. *How much does real estate photography cost in Bahrain? (2026 pricing guide)* — draws on `lib/data/packages.ts`; highest citation potential of anything you could write
2. *What is a Matterport virtual tour, and is it worth it for Bahrain property listings?*
3. *2D vs 3D floor plans: which one sells a property faster?*
4. *Virtual staging vs physical staging — a cost comparison for Bahrain agents*
5. *What to prepare before a property photoshoot (agent checklist)*
6. *How much does a business website cost in Bahrain?* — feeds the development side

Two posts a month sustains it. **Every post needs at least one specific number and "Bahrain" in the
`<h1>`** — that combination is the citation trigger.

### Tier 3 — nice to have

10. Location pages (`/bahrain/manama`, `/bahrain/seef`, `/bahrain/amwaj`) — only once the service pages prove out. Thin location pages actively hurt if done lazily. ~half day
11. Vercel Analytics or Plausible — none of this is currently measurable. ~30 min
12. `ImageObject` schema on portfolio images for Google Images. ~1 hr
13. Testimonials with `Review` / `AggregateRating` schema — strong for rich results and AI trust signals. Blocked on collecting real reviews.
14. Remove the duplicate contact route: both `app/api/contact/route.ts` and `app/[locale]/api/contact/route.ts` exist. Housekeeping, not SEO.
15. Fix the pre-existing lint error at `components/Footer.tsx:10` (raw `<a href="/">` should be `next/link`). Unrelated to SEO but it is the only hard error in the codebase.

---

## Keyword → page map

| Target phrase | Owning page | Status |
|---|---|---|
| photography bahrain | `/` and `/media` | Title ✅, needs body copy + `Service` schema |
| real estate photography bahrain | `/media`, later `/services/real-estate-photography-bahrain` | Title ✅, needs dedicated page |
| videography bahrain | `/media`, later `/services/videography-bahrain` | Title ✅, needs dedicated page |
| 3d virtual tours bahrain | later `/services/matterport-virtual-tours-bahrain` | Not yet targeted |
| matterport bahrain | later `/services/matterport-virtual-tours-bahrain` | Not yet targeted |
| floor plans bahrain | later `/services/floor-plans-bahrain` | Not yet targeted |
| how much does real estate photography cost in bahrain | `/packages` FAQ + blog post 1 | Not yet targeted — **highest AI-citation value** |
| web development bahrain | `/development` | Title ✅, needs body copy |

---

## Measuring whether this worked

Baseline these now, before Tier 1, so there is something to compare against:

1. **Google Search Console** — after the canonical fix, confirm all 7 URLs move from *"Duplicate, Google chose a different canonical"* to *Indexed*. Allow 2–6 weeks.
2. **AI answer engines** — run these prompts monthly in ChatGPT, Perplexity and Gemini and record whether panopros.bh is cited:
   - "who does real estate photography in Bahrain"
   - "matterport virtual tour bahrain"
   - "how much does property photography cost in Bahrain"
3. **Crawler logs** — watch for `OAI-SearchBot`, `PerplexityBot`, `GPTBot` and `Google-Extended` hits in Cloudflare analytics. `Google-Extended` and `GPTBot` appearing for the first time confirms the unblock landed.

Search rankings move slowly; AI engines with live retrieval reflect changes within days.
