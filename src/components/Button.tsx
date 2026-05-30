import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-hover focus-visible:outline-brand-deep",
  secondary:
    "bg-brand-soft text-brand-deep hover:bg-white border border-border focus-visible:outline-brand",
  ghost:
    "bg-transparent text-brand-deep underline underline-offset-4 hover:text-brand px-2 py-1",
};

type ButtonProps = {
  /** Renderas som <Link> om href anges, annars som <button>. */
  href?: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  /** Sätt till true för externa länkar (öppnar i ny flik på ett säkert sätt). */
  external?: boolean;
  "aria-label"?: string;
};

/** Återanvändbar knapp/länk med konsekvent stil. */
export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  type = "button",
  onClick,
  external = false,
  ...aria
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...aria}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick} {...aria}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...aria}>
      {children}
    </button>
  );
}
