import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import { teachers } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Om oss",
  description:
    `Lär känna ${site.name} – vår historia, våra behöriga trafiklärare och vår pedagogik för en trygg och effektiv körkortsutbildning i ${site.city}.`,
  alternates: { canonical: "/om-oss/" },
};

const pedagogy = [
  {
    title: "Individuell plan",
    text: "Alla lär sig olika. Vi börjar med en bedömning av din nivå och bygger sedan en plan som utgår från dig – inte en mall.",
  },
  {
    title: "Trygghet först",
    text: "Du ska känna dig lugn bakom ratten. Vi tar saker i rätt ordning och ökar svårighetsgraden i din takt.",
  },
  {
    title: "Teori och körning ihop",
    text: "Vi kopplar ihop teorin med det du gör i bilen, så att kunskapen fastnar och du förstår varför – inte bara hur.",
  },
];

export default function OmOssPage() {
  return (
    <>
      <PageHeader
        title="Om oss"
        intro={`${site.name} är en trafikskola i ${site.city} med stort engagemang för trygg körning. Hos oss möter du lärare som tar sig tid och ser till att du verkligen lär dig.`}
      />

      {/* Historia */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-brand-deep">Vår historia</h2>
        <p className="mt-4 text-muted">
          [Skriv er historia här – när och varför skolan startade, vad ni vill vara för
          era elever och vad som gör er speciella.] Vår drivkraft är densamma idag som
          när vi började: att utbilda trygga, säkra och självständiga förare.
        </p>
        <p className="mt-4 text-muted">
          Genom åren har vi hjälpt många elever att ta körkort – och vi är stolta över att
          så många rekommenderar oss vidare till vänner och familj.
        </p>
      </section>

      {/* Trafiklärare */}
      <section className="bg-brand-soft">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-bold text-brand-deep">Våra trafiklärare</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {teachers.map((member) => (
              <article
                key={member.name}
                className="rounded-card border border-border bg-surface p-7 shadow-sm"
              >
                {/* Bild-platshållare */}
                <div
                  aria-hidden="true"
                  className="mb-5 flex h-40 w-full items-center justify-center rounded-card bg-brand-soft text-sm text-brand-deep"
                >
                  Foto kommer
                </div>
                <h3 className="text-xl font-semibold text-brand-deep">{member.name}</h3>
                <p className="font-medium text-brand">{member.role}</p>
                <p className="mt-1 text-sm text-muted">{member.credentials}</p>
                <p className="mt-4 text-muted">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pedagogik */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-brand-deep">Vår pedagogik</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Vi tror på en utbildning som bygger självförtroende steg för steg. Så här
          jobbar vi:
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {pedagogy.map((item) => (
            <div key={item.title} className="rounded-card border border-border bg-surface p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand-deep">{item.title}</h3>
              <p className="mt-2 text-muted">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-card bg-brand-deep p-8 text-center">
          <h2 className="text-xl font-semibold text-white">Vill du börja hos oss?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/85">
            Boka en första körlektion så lär vi känna varandra och lägger upp en plan
            för ditt körkort.
          </p>
          <div className="mt-6">
            <Button href="/kontakt/" variant="secondary">
              Boka körlektion
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
