import type { Metadata } from "next";
import Button from "@/components/Button";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Vanliga frågor",
  description:
    "Svar på vanliga frågor om körkortsprocessen, krav och ålder, riskutbildning, priser och hur du bokar körlektioner.",
  alternates: { canonical: "/faq/" },
};

// FAQPage structured data (rich results i Google).
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        title="Vanliga frågor"
        intro="Här svarar vi på det som elever oftast undrar över. Hittar du inte svaret? Hör av dig så hjälper vi dig."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Faq items={faqs} />

        <div className="mt-12 rounded-card bg-brand-soft p-7 text-center">
          <h2 className="text-xl font-semibold text-brand-deep">Har du fler frågor?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Vi svarar gärna på allt du undrar om körkort och vår utbildning.
          </p>
          <div className="mt-6">
            <Button href="/kontakt/">Kontakta oss</Button>
          </div>
        </div>
      </section>

      <JsonLd data={faqLd} />
    </>
  );
}
