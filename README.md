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

## Deploy till Netlify

1. `git init && git add . && git commit -m "Initial commit"`
2. Koppla mot `https://github.com/lukasbjork/korskola` och `git push`.
3. I Netlify: **New site from Git** → välj repot. Build-kommandot (`npm run build`) och
   publiceringsmappen (`out`) läses automatiskt från `netlify.toml`.
4. Netlify Forms aktiveras automatiskt tack vare `data-netlify`-attributet i formuläret.

## Sidor

Hem · Kurser & paket · Priser · Teori · Om oss · Vanliga frågor · Boka tid/Kontakt
(+ tack-sida, integritetspolicy och 404).
