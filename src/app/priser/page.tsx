import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import PriceTable from "@/components/PriceTable";
import { lessonPrices, packagePrices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Priser",
  description:
    "Prislista för körlektioner, B-körkortspaket, intensivkurs, riskutbildning (riskettan & halkbana) och uppkörningspaket. Tydliga priser utan dolda avgifter.",
  alternates: { canonical: "/priser/" },
};

export default function PriserPage() {
  return (
    <>
      <PageHeader
        title="Priser"
        intro="Tydliga priser utan dolda avgifter. Den totala kostnaden beror främst på hur många körlektioner du behöver – vi gör alltid en plan tillsammans med dig."
      />

      <section className="mx-auto max-w-4xl space-y-10 px-4 py-16 sm:px-6">
        <PriceTable
          caption="Körlektioner"
          rows={lessonPrices}
          footnote="Vi börjar gärna med en bedömningslektion för att se var du står och hur många lektioner du kan behöva."
        />

        <PriceTable
          caption="Paket & utbildningar"
          rows={packagePrices}
          footnote="Paketpriser kan variera utifrån ditt upplägg. Kontakta oss för en kostnadsfri genomgång."
        />

        <div className="rounded-card bg-brand-soft p-7">
          <h2 className="text-xl font-semibold text-brand-deep">
            Vill du veta din totalkostnad?
          </h2>
          <p className="mt-3 text-muted">
            Hör av dig så går vi igenom dina förutsättningar och ger dig en realistisk
            uppskattning av vad ditt körkort kommer att kosta. Inga överraskningar.
          </p>
          <div className="mt-6">
            <Button href="/kontakt/">Begär prisuppgift</Button>
          </div>
        </div>
      </section>
    </>
  );
}
