import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { fullAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description:
    `Information om hur ${site.name} behandlar dina personuppgifter enligt GDPR.`,
  alternates: { canonical: "/integritetspolicy/" },
};

export default function IntegritetspolicyPage() {
  return (
    <>
      <PageHeader title="Integritetspolicy" />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        {/* Notis till ägaren – ta bort innan publicering */}
        <p className="mb-8 rounded-card border-l-4 border-accent bg-brand-soft p-4 text-sm text-muted">
          <strong className="text-brand-deep">Att göra:</strong> Denna policy är en allmän
          mall. Se över innehållet, fyll i platshållare och stäm av med jurist vid behov
          innan publicering.
        </p>

        <div className="space-y-8 text-muted [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-brand-deep [&_a]:text-brand [&_a]:underline">
          <div>
            <h2>Personuppgiftsansvarig</h2>
            <p className="mt-2">
              {site.name}, org.nr {site.orgNumber}, {fullAddress()}, är personuppgifts­ansvarig
              för behandlingen av dina personuppgifter. Kontakt:{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>, {site.phone}.
            </p>
          </div>

          <div>
            <h2>Vilka uppgifter vi behandlar</h2>
            <p className="mt-2">
              När du fyller i kontaktformuläret behandlar vi de uppgifter du lämnar: namn,
              e-postadress, telefonnummer, vald kurs och ditt meddelande. När du blir elev
              hanterar vi även de uppgifter som krävs för att administrera din utbildning.
            </p>
          </div>

          <div>
            <h2>Ändamål och rättslig grund</h2>
            <p className="mt-2">
              Uppgifter från formuläret används för att besvara din förfrågan och boka tid
              (berättigat intresse/förberedelse av avtal). Som elev behandlas uppgifter för
              att fullgöra utbildningsavtalet och eventuella rättsliga skyldigheter.
            </p>
          </div>

          <div>
            <h2>Lagring och gallring</h2>
            <p className="mt-2">
              Kontaktförfrågningar sparas endast så länge det behövs för att hantera ditt
              ärende. Elevuppgifter sparas så länge det krävs för utbildningen och enligt
              gällande lagkrav, därefter gallras de.
            </p>
          </div>

          <div>
            <h2>Mottagare av uppgifter</h2>
            <p className="mt-2">
              Formulärinskick hanteras via vår webbplatsleverantör (Netlify) som
              personuppgiftsbiträde. Vi säljer aldrig dina uppgifter vidare.
            </p>
          </div>

          <div>
            <h2>Cookies</h2>
            <p className="mt-2">
              Vi använder endast nödvändiga kakor för att webbplatsen ska fungera. Innehåll
              från tredje part, som en inbäddad karta, kan sätta egna kakor. Du kan styra
              kakor via inställningarna i din webbläsare.
            </p>
          </div>

          <div>
            <h2>Dina rättigheter</h2>
            <p className="mt-2">
              Du har rätt att begära tillgång till, rättelse eller radering av dina
              personuppgifter, samt att invända mot eller begära begränsning av behandlingen.
              Kontakta oss för att utöva dina rättigheter. Du har även rätt att lämna klagomål
              till Integritetsskyddsmyndigheten (IMY).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
