import type { Metadata } from "next";
import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";
import { courses } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kurser & paket",
  description:
    "B-körkort, intensivkurs, riskutbildning del 1 (riskettan) och del 2 (halkbana) samt uppkörningspaket. Läs om vad som ingår i varje kurs.",
  alternates: { canonical: "/kurser/" },
};

export default function KurserPage() {
  return (
    <>
      <PageHeader
        title="Kurser & paket"
        intro="Vi har kurser för hela vägen till körkortet – från första lektionen till godkänd uppkörning. Välj det som passar dig, eller hör av dig så hjälper vi dig hitta rätt."
      />

      <section className="mx-auto max-w-5xl space-y-8 px-4 py-16 sm:px-6">
        {courses.map((course) => (
          <article
            key={course.slug}
            id={course.slug}
            className="scroll-mt-24 rounded-card border border-border bg-surface p-7 shadow-sm sm:p-9"
          >
            <div className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-soft text-2xl text-brand-deep sm:inline-flex"
              >
                {course.icon}
              </span>
              <div>
                <h2 className="text-2xl font-bold text-brand-deep">{course.title}</h2>
                <p className="font-medium text-brand">{course.tagline}</p>
              </div>
            </div>

            <p className="mt-5 text-muted">{course.description}</p>

            <h3 className="mt-6 font-semibold text-brand-deep">Det här ingår</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {course.includes.map((item) => (
                <li key={item} className="flex gap-2 text-muted">
                  <span aria-hidden="true" className="mt-1 text-brand">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-4">
              <Button href="/kontakt/">Boka denna kurs</Button>
              <Button href="/priser/" variant="ghost">
                Se priser
              </Button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
