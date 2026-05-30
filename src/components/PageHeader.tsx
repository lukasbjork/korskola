import type { ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  intro?: ReactNode;
};

/** Återanvändbar sidrubrik för undersidor (rubrik + ingress på mjuk grön bakgrund). */
export default function PageHeader({ title, intro }: PageHeaderProps) {
  return (
    <header className="bg-brand-soft">
      <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-20">
        <h1 className="text-3xl font-bold text-brand-deep sm:text-4xl">{title}</h1>
        {intro && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">{intro}</p>
        )}
      </div>
    </header>
  );
}
