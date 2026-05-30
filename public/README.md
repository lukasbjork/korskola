# Bilder & media

Lägg dina bilder här (de blir tillgängliga från sajtens rot, t.ex. `/hero.jpg`).

## Rekommenderat

- **`hero.jpg`** – bild till startsidans hero (t.ex. en elev/lärare i bil eller en bil
  med skolans dekor). Liggande format, ca 1600×1000 px.
- **`og.jpg`** – delningsbild för sociala medier (1200×630 px). Refereras från
  `src/app/layout.tsx` (OpenGraph) när den finns.
- **`larare-1.jpg`, `larare-2.jpg`** – porträtt av trafiklärarna (kvadratiskt funkar bra).
- **`favicon.ico`** / **`icon.png`** – flytta till `src/app/` om du vill ha en egen
  favikon (Next.js plockar upp `src/app/icon.png` automatiskt).

## Viktigt

- **Alt-text:** alla `<img>`/`<Image>` på sajten ska ha en beskrivande `alt`-text för
  tillgänglighet och SEO. Bildplatshållarna i koden är markerade med "Foto kommer".
- **Optimera:** spara som komprimerad JPG/WebP så att sidorna laddar snabbt.
- Bilder optimeras INTE automatiskt (statisk export, `images.unoptimized`), så
  komprimera dem innan du lägger upp dem.
