import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Sidan hittades inte",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
      <p className="text-5xl font-bold text-brand">404</p>
      <h1 className="mt-4 text-3xl font-bold text-brand-deep">Sidan hittades inte</h1>
      <p className="mt-4 text-lg text-muted">
        Sidan du letar efter finns inte eller har flyttats. Prova att gå tillbaka till
        startsidan eller titta på våra kurser.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/">Till startsidan</Button>
        <Button href="/kurser/" variant="secondary">
          Se kurser
        </Button>
      </div>
    </section>
  );
}
