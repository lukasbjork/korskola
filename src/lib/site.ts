/**
 * ───────────────────────────────────────────────────────────────────────────
 *  CENTRALA TRAFIKSKOLEUPPGIFTER — FYLL I HÄR
 * ───────────────────────────────────────────────────────────────────────────
 *  Detta är ENDA stället du behöver redigera för att uppdatera namn, ort, adress,
 *  telefon, e-post, org.nr och öppettider. Allt på sajten (header, footer,
 *  kontaktsida, SEO-taggar, sitemap, structured data) hämtar sina värden härifrån.
 *
 *  Sök efter "[" för att hitta alla platshållare som ska ersättas.
 * ───────────────────────────────────────────────────────────────────────────
 */

export const site = {
  // Trafikskolans namn — visas i header, footer, titlar och SEO.
  name: "[TRAFIKSKOLANS NAMN]",

  // Kort slogan/undertitel — visas bl.a. i hero.
  tagline: "Ta körkort i Stockholm – tryggt, flexibelt och med hög godkändgrad",

  // Ort — används i SEO-titlar och rubriker (t.ex. "Trafikskola i Stockholm").
  city: "Stockholm",

  // Produktions-URL — BYT till din riktiga domän när den är klar.
  // Måste vara en giltig URL (används för SEO/canonical, OpenGraph och sitemap).
  url: "https://din-trafikskola.se",

  // Kontaktuppgifter
  phone: "[TELEFONNUMMER]", // t.ex. "08-123 45 67"
  phoneHref: "tel:+46812345678", // internationellt format för klickbar länk
  email: "[E-POST]", // t.ex. "info@dintrafikskola.se"

  // Besöksadress
  address: {
    street: "[GATUADRESS]", // t.ex. "Exempelgatan 12"
    zip: "[POSTNUMMER]", // t.ex. "111 22"
    city: "Stockholm",
  },

  // Organisationsnummer (visas i footer/integritetspolicy)
  orgNumber: "[ORG.NR]",

  // Länk till din SEPARATA teorihemsida (Körkortskollen).
  // Byt om du flyttar teorisidan till en egen domän.
  theoryUrl: "https://korkortskollen.netlify.app",

  // Google Maps-inbäddning för kontaktsidan.
  // Hämta din egen via Google Maps → Dela → Bädda in en karta → kopiera src-URL:en.
  mapEmbedSrc: "",

  // Öppettider
  hours: {
    weekdays: "Mån–Fre 09–18",
    saturday: "Lör 10–14",
    note: "Körlektioner även kvällstid efter överenskommelse.",
  },

  // Sociala länkar (lämna tomt om de inte används)
  social: {
    instagram: "", // t.ex. "https://instagram.com/dintrafikskola"
    facebook: "",
  },
} as const;

/** Huvudnavigation — används av Header och Footer. */
export const nav = [
  { href: "/", label: "Hem" },
  { href: "/kurser/", label: "Kurser & paket" },
  { href: "/priser/", label: "Priser" },
  { href: "/teori/", label: "Teori" },
  { href: "/om-oss/", label: "Om oss" },
  { href: "/faq/", label: "Vanliga frågor" },
  { href: "/kontakt/", label: "Boka tid" },
] as const;

/** Hjälp: hela adressen som en rad. */
export function fullAddress() {
  const { street, zip, city } = site.address;
  return `${street}, ${zip} ${city}`;
}
