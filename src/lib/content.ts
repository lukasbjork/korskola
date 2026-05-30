/**
 * Innehållsdata: kurser, priser, USP:er, FAQ och trafiklärare.
 *
 * Texterna är färdigskrivna men generella — justera dem så att de stämmer för din
 * skola. Alla PRISER är PLATSHÅLLARE ("[PRIS] kr") — fyll i dina egna belopp.
 */

/* ───────────────────────────── Kurser & paket ───────────────────────────── */

export type Course = {
  /** Används som ankare/id på kurssidan. */
  slug: string;
  title: string;
  /** Kort, fångande underrubrik. */
  tagline: string;
  description: string;
  /** Punktlista över vad som ingår / kännetecknar kursen. */
  includes: string[];
  /** Emoji-markör (dekorativ, aria-hidden). */
  icon: string;
};

export const courses: Course[] = [
  {
    slug: "b-korkort",
    title: "B-körkort (grundpaket)",
    tagline: "Vår populäraste väg till körkortet",
    description:
      "Vi lägger upp en individuell plan utifrån din nivå och bygger körningen steg för steg – från de första lektionerna på lugna gator till säker körning i tät trafik och på motorväg. Du varvar körlektioner med teori i din egen takt.",
    includes: [
      "Introduktions- och nivåbedömningslektion",
      "Körlektioner anpassade efter din takt",
      "Tillgång till digitalt teorimaterial",
      "Stöd genom hela körkortsprocessen",
      "Hjälp att boka prov hos Trafikverket",
    ],
    icon: "🚗",
  },
  {
    slug: "intensivkurs",
    title: "Intensivkurs",
    tagline: "Ta körkortet på kortare tid",
    description:
      "För dig som vill ta körkortet snabbt. Vi koncentrerar körlektioner och teori under en kortare period så att du kan göra uppkörning inom några veckor. Passar dig som har lite körvana sedan tidigare eller kan plugga teorin intensivt.",
    includes: [
      "Tätt schemalagda körlektioner",
      "Komprimerad teori med tydligt upplägg",
      "Riskutbildning del 1 och del 2 inplanerade",
      "Förberedelse inför kunskapsprov och uppkörning",
      "Lånebil till uppkörningen (i mån av plats)",
    ],
    icon: "⚡",
  },
  {
    slug: "riskettan",
    title: "Riskutbildning del 1 (Riskettan)",
    tagline: "Obligatorisk teoretisk riskutbildning",
    description:
      "Riskettan handlar om alkohol, droger, trötthet och annat riskfyllt beteende i trafiken. Den är obligatorisk för B-körkort och måste vara genomförd – tillsammans med del 2 – innan du gör uppkörningen. Vi håller utbildningen i grupp.",
    includes: [
      "Cirka 3 timmars utbildning enligt Transportstyrelsens krav",
      "Vi rapporterar din genomförda utbildning till Transportstyrelsen",
      "Gäller tillsammans med riskutbildning del 2",
      "Genomförs på svenska (fråga oss om andra språk)",
    ],
    icon: "🧠",
  },
  {
    slug: "halkbana",
    title: "Riskutbildning del 2 (Halkbana)",
    tagline: "Den praktiska riskutbildningen",
    description:
      "På halkbanan får du känna hur bilen beter sig på halt och löst underlag och lär dig hastighetens betydelse för säkerheten. Risktvåan är obligatorisk för B-körkort och en av de viktigaste lektionerna du gör innan uppkörningen.",
    includes: [
      "Praktisk körning på godkänd halkbana",
      "Insikt i hastighet, krockvåld och säkerhetsmarginaler",
      "Genomförs hos godkänd anläggning",
      "Rapportering till Transportstyrelsen",
    ],
    icon: "❄️",
  },
  {
    slug: "uppkorningspaket",
    title: "Uppkörningspaket",
    tagline: "Finslipa körningen inför provet",
    description:
      "Snart dags för uppkörning? Uppkörningspaketet repeterar och finslipar din körning och ger dig en lånebil till själva provet – så att du kör upp i en bil du känner igen och är trygg i.",
    includes: [
      "Repetitionslektioner inför provet",
      "Genomgång av vanliga misstag vid uppkörning",
      "Lånebil till uppkörningen hos Trafikverket",
      "Sista-minuten-genomgång precis före provet",
    ],
    icon: "🏁",
  },
];

/* ─────────────────────────────────── Priser ─────────────────────────────── */

export type PriceRow = {
  label: string;
  price: string;
  note?: string;
};

/**
 * PLATSHÅLLARE — fyll i dina egna priser.
 * Tips: ange tydligt vad som ingår i paketen i `note`.
 */
export const lessonPrices: PriceRow[] = [
  { label: "Introduktions-/bedömningslektion", price: "[PRIS] kr", note: "Vi bedömer din nivå och planerar upplägget." },
  { label: "Körlektion (40 min)", price: "[PRIS] kr" },
  { label: "Körlektion (80 min)", price: "[PRIS] kr", note: "Dubbellektion – populärast för snabb utveckling." },
];

export const packagePrices: PriceRow[] = [
  { label: "B-körkort grundpaket", price: "[PRIS] kr", note: "Beskriv antal lektioner och vad som ingår." },
  { label: "Intensivkurs", price: "[PRIS] kr", note: "Komprimerat upplägg över några veckor." },
  { label: "Riskutbildning del 1 (Riskettan)", price: "[PRIS] kr" },
  { label: "Riskutbildning del 2 (Halkbana)", price: "[PRIS] kr" },
  { label: "Uppkörningspaket", price: "[PRIS] kr", note: "Inkl. lånebil till uppkörningen." },
  { label: "Lånebil vid uppkörning (separat)", price: "[PRIS] kr" },
];

/* ─────────────────────────────── USP-kort (start) ───────────────────────── */

export type Usp = {
  title: string;
  description: string;
  icon: string;
};

export const usps: Usp[] = [
  {
    title: "Hög godkändgrad",
    description:
      "Strukturerad utbildning och erfarna trafiklärare ger dig de bästa förutsättningarna att klara proven första gången.",
    icon: "🎯",
  },
  {
    title: "Behöriga trafiklärare",
    description:
      "Alla våra lärare är utbildade och godkända av Transportstyrelsen och brinner för att lära ut trygg, defensiv körning.",
    icon: "🚗",
  },
  {
    title: "Flexibla tider",
    description:
      "Boka körlektioner som passar din vardag – vi erbjuder tider på dagtid, kvällar och lördagar.",
    icon: "📅",
  },
  {
    title: "Modern bilpark",
    description:
      "Du övar i välservade, säkra bilar med dubbelkommando så att läraren alltid kan ingripa vid behov.",
    icon: "🛞",
  },
];

/* ─────────────────────────────── Vanliga frågor ─────────────────────────── */

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Hur går körkortsprocessen till?",
    answer:
      "Du ansöker om körkortstillstånd hos Transportstyrelsen och gör ett syntest. Därefter varvar du teori och körlektioner. Innan uppkörning måste du ha genomfört riskutbildning del 1 (riskettan) och del 2 (halkbana) samt klarat kunskapsprovet (teoriprovet). Sist gör du det praktiska provet – uppkörningen – hos Trafikverket.",
  },
  {
    question: "Hur gammal måste jag vara?",
    answer:
      "Du måste ha fyllt 16 år för att få körkortstillstånd och börja övningsköra, och 18 år för att göra uppkörning och få B-körkort. Många börjar utbilda sig runt 17,5 års ålder för att kunna köra upp ungefär när de fyller 18.",
  },
  {
    question: "Vad krävs för att börja hos er?",
    answer:
      "Du behöver ett giltigt körkortstillstånd, ha gjort ett syntest och vara minst 16 år. Har du inte ansökt än hjälper vi dig gärna att komma igång.",
  },
  {
    question: "Måste jag göra riskettan och halkbanan?",
    answer:
      "Ja. Både riskutbildning del 1 (riskettan) och del 2 (halkbanan) är obligatoriska för B-körkort. De ska vara genomförda innan du gör uppkörningen och får inte vara äldre än fem år vid uppkörningstillfället.",
  },
  {
    question: "Hur många körlektioner behöver jag?",
    answer:
      "Det är väldigt individuellt och beror på din tidigare vana. Vi gör en bedömningslektion i början och lägger sedan upp en realistisk plan tillsammans med dig – du betalar för det du faktiskt behöver.",
  },
  {
    question: "Vad kostar det att ta körkort hos er?",
    answer:
      "Se vår prislista för aktuella priser på lektioner och paket. Den totala kostnaden beror främst på hur många körlektioner du behöver. Vi är alltid tydliga med priserna innan du börjar.",
  },
  {
    question: "Hur bokar jag lektioner?",
    answer:
      "Fyll i kontaktformuläret eller ring oss, så bokar vi in en första tid. Därefter planerar vi dina lektioner löpande utifrån ditt schema.",
  },
  {
    question: "Kan jag använda er bil vid uppkörningen?",
    answer:
      "Ja. I vårt uppkörningspaket ingår lånebil till provet så att du kör upp i en bil du är van vid. Fråga oss om tillgängliga tider.",
  },
  {
    question: "Erbjuder ni teori online?",
    answer:
      "Ja. Vi hänvisar till vår digitala teorisida Körkortskollen där du kan öva på riktiga provfrågor, träna på vägmärken och göra hela provsimuleringar. Du hittar länken på vår teori-sida.",
  },
];

/* ─────────────────────────────── Trafiklärare ───────────────────────────── */

export type Teacher = {
  name: string;
  role: string;
  credentials: string;
  bio: string;
};

// PLATSHÅLLARE – fyll i namn, roller och presentationer.
export const teachers: Teacher[] = [
  {
    name: "[TRAFIKLÄRARENS NAMN]",
    role: "Trafiklärare & ägare",
    credentials: "Behörig trafiklärare (Transportstyrelsen)",
    bio: "[Skriv en kort, personlig presentation här – antal år i yrket, vad du brinner för i undervisningen och hur du hjälper elever att känna sig trygga bakom ratten.]",
  },
  {
    name: "[TRAFIKLÄRARENS NAMN]",
    role: "Trafiklärare",
    credentials: "Behörig trafiklärare (Transportstyrelsen)",
    bio: "[Skriv en kort presentation här – erfarenhet och din pedagogiska stil.]",
  },
];
