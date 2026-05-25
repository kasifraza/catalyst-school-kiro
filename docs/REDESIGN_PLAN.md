# Catalyst Public School — Redesign, SEO & Performance Plan

> Living document. Authoritative source for the redesign of the Catalyst
> Public School Next.js 16 + React 19 + Tailwind v4 marketing site.
> All implementing agents must read this before touching code.

---

## 0. Project facts implementers must respect

- Framework: **Next.js 16.2** (App Router, Turbopack), **React 19.2**, **Tailwind CSS v4**, **framer-motion 12**.
- The `AGENTS.md` rule still applies: this Next.js has breaking changes — read
  `node_modules/next/dist/docs/` for any unfamiliar API before assuming.
- Custom palette in `app/globals.css` defines `teal`, `champagne`, `khaki`,
  `sky` with **inverted shades**: `*-100` is **dark**, `*-900` is **light**.
  Stick to defaults (`rose`, `amber`, `violet`, `emerald`, `cyan`, `slate`,
  `green`, `red`) when you need a normal `*-50/100/700/800` scale.
- Material Icons Round font is loaded globally via `<link>` in `app/layout.tsx`
  and used as `<span className="material-icons-round">name</span>`. Do **not**
  migrate icons in this round of work.
- AOS is installed but is being phased out. Do not introduce new AOS usage.
- Two components were just rebuilt and **must not be modified**:
  - `components/AdmissionProcess.tsx`
  - `components/AcademicCalendar.tsx`
- Bilingual support comes from `context/LanguageContext.tsx`. After Phase 1 it
  is mounted in `app/layout.tsx` exactly once. Use `useLanguage()` to read
  `language` and `t(en, hi)`.

---

## 1. Diagnostic snapshot

### SEO blockers (severe)
1. Every `app/*/page.tsx` is `"use client"` at the top — `export const metadata`
   does not work, all pages share the layout's title/description.
2. No Open Graph, Twitter Card, canonical URL, `alternates.languages`.
3. No `app/sitemap.ts`, no `app/robots.ts`, no JSON-LD.
4. Hindi content is JS-toggled at the same URL, invisible to crawlers.
5. `<img src="https://images.unsplash…">` everywhere — no `next/image`, no real
   photos, generic alt text.
6. Render-blocking external CSS (`fonts.googleapis.com`, `unpkg.com/aos.css`).
7. Footer Google Maps iframe loads on every page (~600 KB initial JS).
8. Phone/email rendered as plain text, not `tel:` / `mailto:`.

### Content gaps
1. No fee structure, age criteria, seat availability, dates table.
2. No board results, achievements, faculty profiles.
3. No notices/news/events page.
4. No **Mandatory Public Disclosure** page (CBSE requirement).
5. No anti-ragging / POCSO / grievance / privacy / terms pages.
6. Stock Unsplash heroes — no actual campus photography.
7. `LanguageProvider` is re-mounted in every page (state resets on navigation).

### Page design
Every page uses the same template: 60vh stock-photo hero → 2–3 plain cards
→ footer. Visually flat, no depth, no interactive sections beyond the home
page additions.

---

## 2. Phased plan

### Phase 1 — SEO foundations (highest priority)

**Owner:** `stage_seo`

- Convert every page in `app/*` to a **server component** with
  `export const metadata` (`generateMetadata` where dynamic). Extract the
  existing client UI to a `*Content.tsx` file that is `"use client"` and
  imported by the server page.
- **Move `LanguageProvider` and `ThemeProvider` into `app/layout.tsx`** so they
  mount once. Remove the per-page `LanguageProvider` wrappers.
- **Add per-page metadata**:
  - Home: `Catalyst Public School | Best CBSE School in West Champaran, Bihar`
  - About: `About Us — Catalyst Public School, Bettiah | Mission, Vision, History`
  - Academics: `CBSE Curriculum (Nursery–XII) | Catalyst Public School`
  - Admissions: `Admissions 2025–26 | Apply Online | Catalyst Public School`
  - Contact: `Contact — Catalyst Public School, West Champaran (845101)`
  - Gallery: `Campus Gallery | Catalyst Public School`
  Each metadata entry: title, description (≤ 160 chars), keywords array,
  `openGraph`, `twitter`, `alternates.canonical`,
  `alternates.languages: { 'en-IN': '...', 'hi-IN': '...' }`.
- Create `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`,
  `app/not-found.tsx` (branded 404).
- Add JSON-LD in `app/layout.tsx`:
  - `EducationalOrganization` (school name, logo, URL, address, phone, sameAs)
  - `WebSite` with `potentialAction` SearchAction (optional)
- Add `metadataBase` (use `https://catalystpublicschool.in` as canonical host;
  pull from `process.env.NEXT_PUBLIC_SITE_URL` with a sane default).
- Replace the Google Fonts `<link>` with `next/font/google` for Noto Sans
  + Noto Sans Devanagari, subsetting `latin` + `devanagari`,
  `display: 'swap'`. Material Icons font stays via `<link>` for now.
- Remove the `unpkg.com/aos.css` link and all `import("aos")` calls in pages.
- `next.config.ts`: add `images.remotePatterns` for `images.unsplash.com` and
  `i.pravatar.cc` (interim — replace pravatar later); set `compress: true`.
- Convert every `<img>` in existing pages to `next/image` with explicit
  `width`/`height`, `sizes`, `priority` only on hero images, descriptive alt.

**Acceptance:** `npx next build` and `npx eslint .` pass with zero errors;
sitemap.xml renders at `/sitemap.xml`; `view-source` shows distinct titles
and JSON-LD on every route.

---

### Phase 2 — Content scaffolding

**Owner:** `stage_content` (depends on `stage_seo`)

Create new routes with **rich, locally-relevant, bilingual** copy. Every new
page is a server component with its own metadata and a brief client subcomponent
for animations only when needed.

**New routes:**

| Route                                     | Purpose                                                |
| ----------------------------------------- | ------------------------------------------------------ |
| `/mandatory-public-disclosure`            | CBSE-mandated disclosures (general info, documents, staff, infrastructure, fees, results, self-cert) |
| `/notices` and `/notices/[slug]`          | Listing + detail pages, ≥ 6 sample notices, dated      |
| `/admissions/fee-structure`               | Class-wise fee table, transport fee, optional fees     |
| `/academics/results`                      | Class X + XII results last 3 sessions, top scorers     |
| `/faculty`                                | 8–12 teacher cards (subject, qualification, photo)     |
| `/achievements`                           | Sports, olympiads, academic, cultural — tag by year    |
| `/alumni`                                 | 5–10 alumni testimonial cards                          |
| `/policies/anti-ragging`                  | Policy text + grievance contact                        |
| `/policies/grievance`                     | Grievance redressal mechanism                          |
| `/policies/privacy`                       | Privacy policy                                         |
| `/blog` and `/blog/[slug]`                | Index + 3 sample posts (CBSE in West Champaran etc.)   |

**Common requirements per page:**
- Server component, exports `metadata` with unique title, description,
  canonical, OG, Twitter, language alternates.
- Breadcrumbs at top via shared `components/Breadcrumbs.tsx`.
- JSON-LD where appropriate: `BreadcrumbList` always; `FAQPage` for fee
  structure FAQ; `NewsArticle` for notices/blog detail; `Person` for faculty;
  `Course` for academics/results.
- Bilingual content using `useLanguage()` from inside a small client wrapper
  if the page needs `t()`. Pages that contain only static prose can use
  the `LanguageProvider`'s `t` via a thin client section.
- Animations via framer-motion, consistent with site style (`fade-up`,
  stagger, `viewport={{ once: true }}`).
- Use existing palette (`bg-champagne-900`, `bg-white`, `text-black-700`,
  `from-teal-400 to-teal-600`).

**Acceptance:** every new route returns 200; `npx next build` includes them
as static; sitemap.ts (from Phase 1) is amended to enumerate them.

---

### Phase 3 — Existing page redesigns

**Owner:** `stage_redesign` (depends on `stage_seo`)

Refresh the existing five pages to feel modern and content-rich. Stay within
file ownership (see § 3).

**About**
- Principal's message section (portrait + signature image, multi-paragraph).
- Trust/Society block with registration number, established year, code.
- CBSE affiliation card (number, school code, board).
- Awards & milestones grid.
- Replace `pravatar.cc` random avatars with neutral SVG silhouettes.

**Academics**
- Curriculum tabs per stage (Pre-primary / Primary / Middle / Secondary /
  Senior Sec) with subjects, pedagogy approach, sample weekly schedule.
- Cross-link cards to `/academics/results` and `/faculty`.
- Co-curricular grid (sports / arts / clubs).
- Assessment & exam pattern explanation.

**Admissions**
- Keep the new `AdmissionProcess` curved-path component as is.
- Add **Admissions At-a-Glance** card (open dates · age criteria · classes ·
  fee starts at ₹X · last date).
- Embedded fee summary linking to `/admissions/fee-structure`.
- Dates timeline.
- FAQ accordion (12+ entries) — expandable, keyboard accessible. Emit
  `FAQPage` JSON-LD.
- Brochure download CTA.
- Replace the `setSubmitted(true)` placeholder with a proper Next 16 server
  action route (`app/api/admissions/route.ts`) that just logs to console
  for now (production wiring is out of scope).

**Contact**
- Department-wise contacts (Principal, Admissions, Accounts, Transport).
- Office hours table with current-status indicator (open/closed) using
  client-side time check.
- Click-to-call / WhatsApp / mailto buttons (large mobile targets).
- Form → server action with honeypot anti-spam.
- (Lazy-map static placeholder is implemented by `stage_perf` in the Footer;
  Contact page keeps inline iframe but wrap in lazy-load via
  `<iframe loading="lazy">` plus on-click reveal pattern using the same
  shared `LazyMap` component if it exists, else inline iframe.)

**Gallery**
- Masonry layout (CSS columns) with album grouping
  (Annual Day · Sports Day · Independence Day · Foundation Day · Daily Life).
- Real captions per image (date + event).
- `ImageGallery` JSON-LD.
- Lazy-loaded with blur placeholder via `next/image`.
- Date filter chips alongside category filter.

**Acceptance:** each existing route renders without regression, framer-motion
animations work, build/lint pass.

---

### Phase 4 — Performance, a11y, and polish

**Owner:** `stage_perf` (depends on `stage_seo`)

**Footer**
- Replace the inline Google Maps iframe with a static placeholder image (or
  CSS-rendered map preview) that swaps to the live iframe on click.
  Implement as `components/LazyMap.tsx`; reuse on Contact page if practical.
- Convert phone to `tel:` link, email to `mailto:` link.
- Add link block to all new policy pages from Phase 2.
- Add Notices, Faculty, Achievements links.

**Navbar**
- Skip-to-main-content link visible on focus.
- Add `aria-current="page"` to the active link.
- Ensure focus-visible styling.

**globals.css**
- `:focus-visible { outline: 2px solid var(--color-champagne-300); outline-offset: 2px; }`
- `@media (prefers-reduced-motion: reduce) { ... }` block that disables
  large transforms and the auto-traveling animation in `AdmissionProcess`.
- Bump body text contrast where `text-teal-500` on white is used as paragraph
  text (≤ 4.5:1) — replace with `text-black-700` or `text-teal-200`.

**`next.config.ts`**
- `compress: true`.
- `experimental.optimizePackageImports: ['framer-motion']`.
- Strict response headers: `X-Content-Type-Options: nosniff`,
  `Referrer-Policy: strict-origin-when-cross-origin`.

**Bundle hygiene**
- Remove `aos` from `package.json` if no longer referenced.
- Dynamic-import the lightbox in `app/gallery/page.tsx` if size-significant.

**Acceptance:** Lighthouse perf ≥ 90 on home in `npx next build && npx next start`
local run; LCP improvement vs. baseline.

---

## 3. File ownership matrix (parallel safety)

To allow Phases 2/3/4 to run in parallel after Phase 1, ownership is strict.

| File / dir                                            | Phase 1 | Phase 2 | Phase 3 | Phase 4 |
| ----------------------------------------------------- | :-----: | :-----: | :-----: | :-----: |
| `app/layout.tsx`                                      | ✓       |         |         |         |
| `app/page.tsx` + `app/HomeContent.tsx`                | ✓       |         |   ✓ (additions) |  |
| `app/about/**`                                        | ✓ (split) |       |   ✓     |         |
| `app/academics/**` (existing files)                   | ✓ (split) |       |   ✓     |         |
| `app/admissions/page.tsx` + extracted Content         | ✓ (split) |       |   ✓     |         |
| `app/contact/**`                                      | ✓ (split) |       |   ✓     |         |
| `app/gallery/**`                                      | ✓ (split) |       |   ✓     |         |
| `app/sitemap.ts`, `robots.ts`, `manifest.ts`, `not-found.tsx` | ✓ |   |         |         |
| `app/mandatory-public-disclosure/**`                  |         |   ✓     |         |         |
| `app/notices/**`                                      |         |   ✓     |         |         |
| `app/admissions/fee-structure/**`                     |         |   ✓     |         |         |
| `app/academics/results/**`                            |         |   ✓     |         |         |
| `app/faculty/**`                                      |         |   ✓     |         |         |
| `app/achievements/**`                                 |         |   ✓     |         |         |
| `app/alumni/**`                                       |         |   ✓     |         |         |
| `app/policies/**`                                     |         |   ✓     |         |         |
| `app/blog/**`                                         |         |   ✓     |         |         |
| `app/api/admissions/route.ts`                         |         |         |   ✓     |         |
| `app/api/contact/route.ts`                            |         |         |   ✓     |         |
| `components/AdmissionProcess.tsx`                     | DO NOT MODIFY |    |         |         |
| `components/AcademicCalendar.tsx`                     | DO NOT MODIFY |    |         |         |
| `components/Footer.tsx`                               |         |         |         |   ✓     |
| `components/Navbar.tsx`                               |         |         |         |   ✓     |
| `components/BookLoader.tsx`                           | (leave as-is) |   |         |         |
| `components/Breadcrumbs.tsx` (NEW)                    |         |   ✓     |         |         |
| `components/FAQ.tsx` (NEW)                            |         |         |   ✓     |         |
| `components/LazyMap.tsx` (NEW)                        |         |         |         |   ✓     |
| `components/StickyApplyCTA.tsx` (NEW)                 |         |         |   ✓     |         |
| `components/JsonLd.tsx` (NEW)                         | ✓       |         |         |         |
| `app/globals.css`                                     |         |         |         |   ✓     |
| `next.config.ts`                                      | ✓ (images, metadataBase) |  | | ✓ (compress, headers) |
| `package.json` removal of `aos`                       |         |         |         |   ✓     |

If a stage discovers it must edit a file outside its ownership column, it
must abort and surface that conflict, not silently overwrite.

---

## 4. Acceptance criteria (every stage)

Each stage MUST:
1. Investigate before changing — read existing components and use the project's
   patterns and palette.
2. Run `npx next build` and report the result. Build must succeed.
3. Run `npx eslint .` and fix any issues introduced; warnings on lines you
   touched should be zero.
4. List all files created/modified at the end.
5. NOT modify files outside its ownership column. If blocked, stop and report.

---

## 5. Roll-back / safety notes

- All current code is committed to git on `main`. New work is unstaged.
- Each subagent should leave the working tree in a buildable state at every
  exit point — no partial refactor that breaks `next build`.
- If a subagent fails build, it must roll back its changes via best effort
  before reporting.
