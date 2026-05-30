import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Teori – öva inför kunskapsprovet",
  description:
    "Plugga teorin inför körkortet. Öva på riktiga provfrågor, vägmärken och hela provsimuleringar på vår teorisida Körkortskollen.",
  alternates: { canonical: "/teori/" },
};

const topics = [
  "Vägmärken, vägmarkeringar och trafiksignaler",
  "Trafikregler och samspel i trafiken",
  "Miljö, bränsleförbrukning och sparsam körning",
  "Fordonskännedom, däck och säkerhet",
  "Risker: hastighet, alkohol, trötthet och väglag",
];

export default function TeoriPage() {
  return (
    <>
      <PageHeader
        title="Teori"
        intro="Teorin är halva körkortet. När du pluggar teori parallellt med körlektionerna förstår du varför du gör som du gör i trafiken – och du klarar kunskapsprovet lättare."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-brand-deep">Öva på vår teorisida</h2>
            <p className="mt-4 text-muted">
              Vi har en egen, kostnadsfri teorisida – <strong>Körkortskollen</strong> – där
              du kan träna på riktiga provfrågor för B-körkort, plugga vägmärken och göra
              hela provsimuleringar i provläge. Perfekt att använda mellan körlektionerna.
            </p>
            <p className="mt-4 text-muted">
              Vi rekommenderar att du övar lite varje dag och kombinerar teorin med dina
              körlektioner – då sitter kunskapen när det är dags för kunskapsprovet.
            </p>
            <div className="mt-8">
              <Button href={site.theoryUrl} external>
                Öppna Körkortskollen →
              </Button>
              <p className="mt-2 text-sm text-muted">Öppnas i en ny flik.</p>
            </div>
          </div>

          <div className="rounded-card border border-border bg-surface p-7 shadow-sm">
            <h2 className="text-lg font-semibold text-brand-deep">
              Det här tränar du på
            </h2>
            <ul className="mt-4 space-y-3">
              {topics.map((topic) => (
                <li key={topic} className="flex gap-2 text-muted">
                  <span aria-hidden="true" className="mt-1 text-brand">
                    ✓
                  </span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-card bg-brand-soft p-7 text-center">
          <h2 className="text-xl font-semibold text-brand-deep">
            Vill du ha hjälp med teorin?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            Behöver du stöd för att komma igång eller känner du dig osäker inför provet?
            Vi går gärna igenom teorin tillsammans med dig på en lektion.
          </p>
          <div className="mt-6">
            <Button href="/kontakt/">Kontakta oss</Button>
          </div>
        </div>
      </section>
    </>
  );
}
