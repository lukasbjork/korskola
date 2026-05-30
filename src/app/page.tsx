import Link from "next/link";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { site } from "@/lib/site";
import { courses, usps } from "@/lib/content";

const quickLinks = [
  { href: "/kurser/", label: "Kurser & paket", desc: "B-körkort, intensivkurs, risk 1 & 2." },
  { href: "/priser/", label: "Priser", desc: "Tydlig prislista för lektioner och paket." },
  { href: "/teori/", label: "Teori", desc: "Öva på provfrågor och vägmärken online." },
  { href: "/kontakt/", label: "Boka tid", desc: "Kontakta oss eller boka körlektion." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-soft to-background">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-2">
          <div>
            <p className="font-semibold text-brand">Trafikskola i {site.city}</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-brand-deep sm:text-5xl">
              Ta körkort tryggt – med rätt stöd hela vägen
            </h1>
            <p className="mt-5 text-lg text-muted">
              {site.name} hjälper dig från första körlektionen till godkänd uppkörning.
              Vi erbjuder B-körkort, intensivkurs, riskutbildning och uppkörningspaket –
              med behöriga trafiklärare och flexibla tider.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/kontakt/">Boka körlektion</Button>
              <Button href="/kurser/" variant="secondary">
                Se våra kurser
              </Button>
            </div>
          </div>

          {/* Öppettider-kort */}
          <div className="rounded-card border border-border bg-surface p-7 shadow-sm">
            <h2 className="text-xl font-semibold text-brand-deep">Öppettider</h2>
            <dl className="mt-4 divide-y divide-border">
              <div className="flex items-center justify-between py-3">
                <dt className="font-medium">Vardagar</dt>
                <dd className="text-muted">{site.hours.weekdays}</dd>
              </div>
              <div className="flex items-center justify-between py-3">
                <dt className="font-medium">Lördag</dt>
                <dd className="text-muted">{site.hours.saturday}</dd>
              </div>
            </dl>
            <p className="mt-4 text-sm text-muted">{site.hours.note}</p>
            <p className="mt-4 text-sm text-muted">
              Frågor?{" "}
              <a className="font-medium text-brand underline underline-offset-2" href={site.phoneHref}>
                Ring {site.phone}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Kort presentation / USP */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-brand-deep sm:text-3xl">
            Varför välja oss?
          </h2>
          <p className="mt-3 text-muted">
            Hos {site.name} står du i fokus. Vi lägger upp en plan utifrån din nivå och
            ser till att du känner dig trygg bakom ratten – hela vägen till körkortet.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((usp) => (
            <Card key={usp.title} title={usp.title} icon={usp.icon}>
              {usp.description}
            </Card>
          ))}
        </div>
      </section>

      {/* Kurser i korthet */}
      <section className="bg-brand-soft">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-brand-deep sm:text-3xl">
              Våra kurser & paket
            </h2>
            <Link
              href="/kurser/"
              className="font-semibold text-brand underline underline-offset-4 hover:text-brand-hover"
            >
              Se alla kurser →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.slug} title={course.title} icon={course.icon}>
                {course.tagline}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Snabblänkar */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-brand-deep sm:text-3xl">Snabblänkar</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-card border border-border bg-surface p-6 transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              <span className="text-lg font-semibold text-brand-deep group-hover:text-brand">
                {link.label} →
              </span>
              <p className="mt-1 text-sm text-muted">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA-band */}
      <section className="bg-brand-deep">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-14 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Redo att börja köra?
          </h2>
          <p className="max-w-2xl text-white/85">
            Boka en första körlektion eller hör av dig med dina frågor – vi hjälper dig
            att komma igång med körkortet.
          </p>
          <Button href="/kontakt/" variant="secondary">
            Boka körlektion
          </Button>
        </div>
      </section>
    </>
  );
}
