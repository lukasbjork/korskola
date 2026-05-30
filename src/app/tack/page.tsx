import type { Metadata } from "next";
import Button from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tack för din förfrågan",
  description: "Vi har tagit emot din förfrågan och återkommer så snart vi kan.",
  alternates: { canonical: "/tack/" },
  robots: { index: false, follow: true },
};

export default function TackPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <span
        aria-hidden="true"
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft text-3xl text-brand-deep"
      >
        ✓
      </span>
      <h1 className="mt-6 text-3xl font-bold text-brand-deep">Tack för din förfrågan!</h1>
      <p className="mt-4 text-lg text-muted">
        Vi har tagit emot ditt meddelande och återkommer så snart vi kan för att boka in
        en tid. Vill du nå oss snabbare är du välkommen att ringa{" "}
        <a className="font-medium text-brand underline underline-offset-2" href={site.phoneHref}>
          {site.phone}
        </a>
        .
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/">Till startsidan</Button>
        <Button href="/teori/" variant="secondary">
          Öva teori under tiden
        </Button>
      </div>
    </section>
  );
}
