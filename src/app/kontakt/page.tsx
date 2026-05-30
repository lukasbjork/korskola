import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import PageHeader from "@/components/PageHeader";
import { courses } from "@/lib/content";
import { fullAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Boka tid & kontakt",
  description:
    `Boka körlektion eller kontakta ${site.name} i ${site.city}. Fyll i formuläret eller ring oss – vi återkommer så snart vi kan.`,
  alternates: { canonical: "/kontakt/" },
};

/*
 * ───────────────────────────────────────────────────────────────────────────
 *  OM FORMULÄRET (Netlify Forms)
 * ───────────────────────────────────────────────────────────────────────────
 *  Formuläret använder Netlify Forms och skickar inskick till Netlify-dashboarden
 *  + e-post (ingen egen backend krävs). Det är en BOKNINGSFÖRFRÅGAN, inte en
 *  bekräftad tid – ni återkommer manuellt för att boka in lektionen.
 *
 *  Vill ni ha "riktig" onlinebokning i framtiden kan ni integrera ett
 *  bokningssystem (t.ex. en inbäddad kalender) eller en serverless function.
 * ───────────────────────────────────────────────────────────────────────────
 */

// Lokal-SEO: structured data för trafikskolan.
const localBusinessLd = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: site.name,
  url: `${site.url}/kontakt/`,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressCountry: "SE",
  },
  openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-14:00"],
};

const inputClass =
  "mt-1 w-full rounded-lg border border-border bg-surface px-4 py-3 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand";

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        title="Boka tid & kontakt"
        intro="Skicka en förfrågan så hör vi av oss för att boka in en tid. Du är även välkommen att ringa oss direkt."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2">
        {/* Formulär (Netlify Forms) */}
        <div>
          <h2 className="text-2xl font-bold text-brand-deep">Skicka en förfrågan</h2>
          <p className="mt-2 text-muted">
            Fält markerade med <span aria-hidden="true">*</span> är obligatoriska.
          </p>

          <form
            name="kontakt"
            method="POST"
            action="/tack/"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="mt-6 space-y-5"
          >
            {/* Krävs av Netlify Forms för att koppla inskick till rätt formulär */}
            <input type="hidden" name="form-name" value="kontakt" />
            {/* Honeypot – dolt för människor, fångar bottar */}
            <p className="hidden">
              <label>
                Fyll inte i detta fält: <input name="bot-field" />
              </label>
            </p>

            <div>
              <label htmlFor="namn" className="block font-medium text-brand-deep">
                Namn <span aria-hidden="true">*</span>
              </label>
              <input id="namn" name="namn" type="text" required autoComplete="name" className={inputClass} />
            </div>

            <div>
              <label htmlFor="epost" className="block font-medium text-brand-deep">
                E-post <span aria-hidden="true">*</span>
              </label>
              <input id="epost" name="epost" type="email" required autoComplete="email" className={inputClass} />
            </div>

            <div>
              <label htmlFor="telefon" className="block font-medium text-brand-deep">
                Telefon <span aria-hidden="true">*</span>
              </label>
              <input id="telefon" name="telefon" type="tel" required autoComplete="tel" className={inputClass} />
            </div>

            <div>
              <label htmlFor="kurs" className="block font-medium text-brand-deep">
                Vilken kurs är du intresserad av? <span aria-hidden="true">*</span>
              </label>
              <select id="kurs" name="kurs" required defaultValue="" className={inputClass}>
                <option value="" disabled>
                  Välj kurs …
                </option>
                {courses.map((course) => (
                  <option key={course.slug} value={course.title}>
                    {course.title}
                  </option>
                ))}
                <option value="Vet inte / vill ha rådgivning">
                  Vet inte / vill ha rådgivning
                </option>
              </select>
            </div>

            <div>
              <label htmlFor="meddelande" className="block font-medium text-brand-deep">
                Meddelande <span aria-hidden="true">*</span>
              </label>
              <textarea id="meddelande" name="meddelande" rows={5} required className={inputClass} />
            </div>

            <p className="text-sm text-muted">
              Genom att skicka godkänner du att vi behandlar dina uppgifter enligt vår{" "}
              <a className="font-medium text-brand underline underline-offset-2" href="/integritetspolicy/">
                integritetspolicy
              </a>
              .
            </p>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-hover focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-deep"
            >
              Skicka förfrågan
            </button>
          </form>
        </div>

        {/* Kontaktuppgifter + karta */}
        <div>
          <h2 className="text-2xl font-bold text-brand-deep">Hitta hit</h2>
          <dl className="mt-6 space-y-4">
            <div>
              <dt className="font-medium text-brand-deep">Adress</dt>
              <dd className="text-muted">{fullAddress()}</dd>
            </div>
            <div>
              <dt className="font-medium text-brand-deep">Telefon</dt>
              <dd>
                <a className="text-brand underline underline-offset-2" href={site.phoneHref}>
                  {site.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-brand-deep">E-post</dt>
              <dd>
                <a className="text-brand underline underline-offset-2" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-brand-deep">Öppettider</dt>
              <dd className="text-muted">{site.hours.weekdays}</dd>
              <dd className="text-muted">{site.hours.saturday}</dd>
              <dd className="text-sm text-muted">{site.hours.note}</dd>
            </div>
          </dl>

          {/* Karta – bädda in via site.mapEmbedSrc */}
          <div className="mt-8 overflow-hidden rounded-card border border-border">
            {site.mapEmbedSrc ? (
              <iframe
                src={site.mapEmbedSrc}
                title={`Karta till ${site.name}`}
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            ) : (
              <div className="flex h-80 items-center justify-center bg-brand-soft p-6 text-center text-sm text-muted">
                Karta visas här när <code>site.mapEmbedSrc</code> har fyllts i (Google Maps →
                Dela → Bädda in en karta).
              </div>
            )}
          </div>
        </div>
      </section>

      <JsonLd data={localBusinessLd} />
    </>
  );
}
