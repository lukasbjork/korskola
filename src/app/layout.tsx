import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – Trafikskola i ${site.city}`,
    template: `%s | ${site.name}`,
  },
  description:
    `Ta körkort i ${site.city} hos ${site.name}. B-körkort, intensivkurs, riskutbildning (riskettan & halkbana) och uppkörningspaket – med behöriga trafiklärare och flexibla tider.`,
  keywords: [
    `trafikskola ${site.city}`,
    "körkort",
    "B-körkort",
    "intensivkurs körkort",
    "riskutbildning",
    "riskettan",
    "halkbana",
    "körlektioner",
    "uppkörning",
  ],
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: site.name,
    title: `${site.name} – Trafikskola i ${site.city}`,
    description:
      `B-körkort, intensivkurs, riskutbildning och uppkörningspaket i ${site.city}. Behöriga trafiklärare och flexibla tider.`,
  },
  alternates: {
    canonical: "/",
  },
  robots: { index: true, follow: true },
};

/**
 * Övergripande structured data (LocalBusiness) för hela sajten.
 * Hjälper Google att förstå att detta är en lokal trafikskola.
 */
const organizationLd = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.zip,
    addressLocality: site.address.city,
    addressCountry: "SE",
  },
  areaServed: site.city,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        <a href="#innehall" className="skip-link">
          Hoppa till innehåll
        </a>
        <Header />
        <main id="innehall" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <JsonLd data={organizationLd} />
      </body>
    </html>
  );
}
