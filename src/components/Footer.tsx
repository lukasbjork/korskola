import Link from "next/link";
import { fullAddress, nav, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-brand-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        {/* Kontakt */}
        <div>
          <h2 className="text-lg font-semibold">{site.name}</h2>
          <p className="mt-2 text-white/80">{site.tagline}</p>
          <address className="mt-4 not-italic text-white/90">
            <p>{fullAddress()}</p>
            <p className="mt-2">
              <a className="underline-offset-2 hover:underline" href={site.phoneHref}>
                {site.phone}
              </a>
            </p>
            <p>
              <a className="underline-offset-2 hover:underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </address>
        </div>

        {/* Öppettider */}
        <div>
          <h2 className="text-lg font-semibold">Öppettider</h2>
          <dl className="mt-4 space-y-1 text-white/90">
            <div className="flex justify-between gap-4">
              <dt>Vardagar</dt>
              <dd>{site.hours.weekdays}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Lördag</dt>
              <dd>{site.hours.saturday}</dd>
            </div>
          </dl>
          <p className="mt-3 text-sm text-white/70">{site.hours.note}</p>
        </div>

        {/* Snabblänkar */}
        <div>
          <h2 className="text-lg font-semibold">Genvägar</h2>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link className="text-white/90 underline-offset-2 hover:underline" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="text-white/90 underline-offset-2 hover:underline" href="/integritetspolicy/">
                Integritetspolicy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5 text-sm text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {year} {site.name}. Org.nr {site.orgNumber}.
          </p>
          <p>Trafikskola i {site.city} – körkort för bil (B).</p>
        </div>
      </div>
    </footer>
  );
}
