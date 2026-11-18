# Good News International University — website

Next.js (App Router) + React + TypeScript rebuild of the GNIU Wix site.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # writes a static site to /out
npm run start      # previews /out locally
```

`/out` is plain HTML/CSS/JS. Upload it to any host (Vercel, Netlify, cPanel, S3).

## Where things are

| What | Where |
|---|---|
| All text, links, image lists | `src/content/site.ts` |
| Colours, type, layout | `src/app/globals.css` (tokens at the top) |
| Pages | `src/app/<route>/page.tsx` |
| Page transition (gown-colour curtain) | `src/components/Transition.tsx` |
| Scroll and reveal animations | `src/components/Motion.tsx` |
| Smooth scrolling (Lenis) | `src/components/SmoothScroll.tsx` |
| Photo grids + full-screen viewer | `src/components/Gallery.tsx` |
| Photos and logos | `public/images` |

## Routes (old Wix address → new)

| Wix | New |
|---|---|
| `/` | `/` |
| `/about-us` | `/about/` |
| `/about-5` | `/founder/` |
| `/general-5` | `/statement-of-faith/` |
| `/general-4-1` | `/programs/` |
| `/copy-of-statement-of-faith` | `/admissions/` |
| `/downloads` | `/downloads/` |
| `/file-share` | `/certificates/` |
| `/gallery` | `/gallery/` |
| `/contact-us` | `/contact/` |

## Still to supply

- **Brochure and application form PDFs.** Put them in `public/files/` and set `file` for each item in `downloads` in `site.ts`. Until then those buttons open an email to the admin.
- **Social links.** Fill in `site.social` in `site.ts`; the footer shows them once set.
- **More gallery photos.** Add files to `public/images` and list them in `gallery` in `site.ts`.
- **Certificates.** The Wix File Share app has no static equivalent; `/certificates/` currently points students to the admin.

## Design notes

- Palette is taken from the convocation gowns (saffron, rose, violet, cobalt) and the oxblood of the crest.
- Type: Gloock (headlines) and Hanken Grotesk (text), both self-hosted through `@fontsource`.
- All motion is switched off for visitors who set "reduce motion" on their device.
