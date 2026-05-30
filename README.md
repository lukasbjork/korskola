# Trafikskola – hemsida

Professionell hemsida för en trafikskola, byggd med **Next.js 16 (App Router)** som
**statisk export** + **Tailwind CSS v4**. Kontaktformuläret använder **Netlify Forms**
(ingen egen backend krävs).

## Kom igång

```bash
npm install
npm run dev      # http://localhost:3000
```

## Bygga & förhandsgranska

```bash
npm run build    # genererar statisk sajt i ./out
npm run preview  # serverar ./out lokalt med "serve"
npm run lint     # ESLint
```

## Var du fyller i dina egna uppgifter

- **`src/lib/site.ts`** – ENDA stället för namn, ort, adress, telefon, e-post, org.nr,
  öppettider, domän-URL, Google Maps-inbäddning, sociala länkar och länken till din
  teorisida (Körkortskollen). Sök efter `[` för att hitta alla platshållare.
- **`src/lib/content.ts`** – kurser, priser (alla `[PRIS] kr` är platshållare), USP:er,
  FAQ och trafiklärar-presentationer.
- **`public/`** – lägg dina bilder här (se `public/README.md`). Kom ihåg alt-texter.

## Innan du publicerar (checklista)

Sajten fungerar direkt, men byt ut platshållarna innan lansering. Sök i koden efter `[`
för att hitta alla.

- [ ] **`src/lib/site.ts`** – skolans namn, gatuadress + postnummer, telefon (både
      `phone` och `phoneHref` i internationellt format), e-post, org.nr.
- [ ] **`site.url`** – byt `https://din-trafikskola.se` till din riktiga domän (används
      för SEO/canonical, OpenGraph och sitemap).
- [ ] **`site.mapEmbedSrc`** – klistra in Google Maps-inbäddning (Maps → Dela → Bädda in
      en karta → kopiera `src`). Tills dess visas en platshållarruta på kontaktsidan.
- [ ] **`site.theoryUrl`** – pekar på `https://korkortskollen.netlify.app`; ändra om du
      flyttar teorisidan till egen domän.
- [ ] **`src/lib/content.ts`** – fyll i alla priser (`[PRIS] kr`) och trafiklärarnas
      namn/presentationer; justera kurstexterna så de stämmer.
- [ ] **`public/`** – lägg in bilder (hero, lärarfoton, `og.jpg`) med beskrivande
      alt-texter. Se `public/README.md`.
- [ ] Kör `npm run build` och `npm run lint` – ska vara grönt – och klicka igenom sidorna.

## Deploy till Netlify

Repot ligger redan på `https://github.com/lukasbjork/korskola` (branch `main`).

1. I Netlify: **Add new site → Import an existing project → GitHub** → välj repot
   `lukasbjork/korskola`. Build-kommandot (`npm run build`) och publiceringsmappen
   (`out`) läses automatiskt från `netlify.toml` – klicka **Deploy**.
2. **Continuous deploy:** varje `git push` till `main` bygger om sajten automatiskt.
3. **Netlify Forms** aktiveras automatiskt tack vare `data-netlify`-attributet. Inskick
   syns under *Forms* i Netlify-dashboarden – ställ in e-postavisering där.

> Statisk sajt utan hemligheter: ingen `.env` krävs för att köra eller deploya. Se
> `.env.example` om du senare lägger till t.ex. analytics eller ett bokningssystem.

## Sidor

Hem · Kurser & paket · Priser · Teori · Om oss · Vanliga frågor · Boka tid/Kontakt
(+ tack-sida, integritetspolicy och 404).
