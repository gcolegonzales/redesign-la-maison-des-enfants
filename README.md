# La Maison Des Enfants — website redesign concept

An unsolicited redesign concept for **La Maison Des Enfants**, an early learning
center in Gonzales, LA that has cared for local families since 1970. This is a
portfolio/pitch piece, not an official site and not affiliated with the business.

## Why a redesign

The business currently has **no real website** — only a Facebook page. That means:

- No searchable, mobile-friendly home for hours, address, programs, and phone.
- No way for a parent to request info or schedule a tour outside Facebook.
- Age groups, transportation, and the 50-year story aren't presented anywhere clearly.

This concept gives them a warm, trustworthy, fast, self-contained site that leads
parents straight to the one action that matters: **scheduling a tour / requesting
enrollment info**, with click-to-call as a shortcut.

## Highlights

- Warm, rounded "house of children" aesthetic — friendly type, soft accents on clean white.
- Editorial, varied sections: story, age-group program spreads, a day-in-the-life
  timeline, a safety/credentials feature, and a real enrollment/tour inquiry form.
- Programs by age (infants → toddlers → pre-K → before/after school with transportation).
- Sticky shrink-on-scroll nav, animated underlines, real mobile menu, scroll-reveal,
  all respecting `prefers-reduced-motion`.
- Fully static: `index.html` + `styles.css` + `script.js`. No build step, no framework.

## View it

Open `index.html` in any browser (double-click works), or serve the folder statically.

## Real data vs. to-confirm

Sourced from public childcare directories (childcarecenter.us, daycare.com, Winnie):
address 41369 Bayou Narcisse Rd, Gonzales LA 70737; phone (225) 647-4501; Mon–Fri
6:00 AM–6:00 PM; ages 6 weeks–11 years; Louisiana Licensed Center (Type II);
transportation and subsidized-care participation. Founding year 1970 per the business's
own Facebook handle (`LaMaison1970`). The daily-schedule times are a plausible
illustration and should be confirmed with the center.

## SEO / deploy note

On-page SEO is wired in: a unique `<title>` + meta description, one `<h1>`,
JSON-LD structured data (`@type: ChildCare`) with the center's real name, phone,
address, hours, area served, and Facebook link, plus complete Open Graph + Twitter
card tags, a `<link rel="canonical">`, `robots.txt`, and `sitemap.xml`.

Because the final domain isn't known yet, every absolute URL (canonical, `og:url`,
`og:image`, sitemap `<loc>`, `robots.txt` Sitemap line, and the JSON-LD `url`/`image`)
uses the literal placeholder **`https://lamaisondesenfants.com/`**. At deploy time,
do a single find-and-replace of that string with the real domain across
`index.html`, `robots.txt`, and `sitemap.xml`.

## Photos

The business's only imagery lives on Facebook, which is token-blocked and cannot be
downloaded. The site ships with tasteful on-brand placeholders and a drop-in photo
folder — see `assets/photos/DROP-PHOTOS-HERE.md`. Add real photos with the listed
filenames and the site uses them automatically.

---

_Redesign concept — unsolicited pitch. Not affiliated with La Maison Des Enfants._
