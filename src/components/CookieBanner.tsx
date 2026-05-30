"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent";

/**
 * Enkel cookie-/integritetsbanner (GDPR).
 * Sajten sätter inga spårningskakor som standard. Bannern informerar och låter
 * besökaren godkänna eller avböja icke-nödvändiga kakor (t.ex. inbäddad karta).
 * Valet sparas i localStorage så bannern inte visas igen.
 */
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Läs sparat val efter hydrering (undviker hydration mismatch vid statisk export).
    let active = true;
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        // Deferra så vi inte anropar setState synkront i effektkroppen.
        queueMicrotask(() => {
          if (active) setVisible(true);
        });
      }
    } catch {
      // localStorage kan vara blockerat – visa då inte bannern.
    }
    return () => {
      active = false;
    };
  }, []);

  const choose = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Information om kakor"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface shadow-lg"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-foreground">
          Vi använder endast nödvändiga kakor för att sajten ska fungera. Innehåll från
          tredje part (t.ex. inbäddad karta) kan sätta egna kakor. Läs mer i vår{" "}
          <Link href="/integritetspolicy/" className="font-medium text-brand underline underline-offset-2">
            integritetspolicy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("declined")}
            className="rounded-full border border-border px-5 py-2 text-sm font-semibold text-brand-deep hover:bg-brand-soft focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Endast nödvändiga
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white hover:bg-brand-hover focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            Godkänn alla
          </button>
        </div>
      </div>
    </div>
  );
}
