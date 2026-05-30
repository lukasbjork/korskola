import type { PriceRow } from "@/lib/content";

type PriceTableProps = {
  caption: string;
  rows: PriceRow[];
  /** Valfri fotnot under tabellen. */
  footnote?: string;
};

/**
 * Återanvändbar, tillgänglig pristabell med riktig <caption> och <th scope>.
 */
export default function PriceTable({ caption, rows, footnote }: PriceTableProps) {
  return (
    <div className="overflow-hidden rounded-card border border-border bg-surface">
      <table className="w-full border-collapse text-left">
        <caption className="bg-brand-deep px-5 py-3 text-left text-lg font-semibold text-white">
          {caption}
        </caption>
        <thead>
          <tr className="border-b border-border bg-brand-soft text-sm uppercase tracking-wide text-brand-deep">
            <th scope="col" className="px-5 py-3 font-semibold">
              Tjänst
            </th>
            <th scope="col" className="px-5 py-3 text-right font-semibold">
              Pris
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-border last:border-0">
              <th scope="row" className="px-5 py-3 font-normal text-foreground">
                {row.label}
                {row.note && (
                  <span className="block text-sm text-muted">{row.note}</span>
                )}
              </th>
              <td className="whitespace-nowrap px-5 py-3 text-right font-medium text-foreground">
                {row.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {footnote && (
        <p className="px-5 py-3 text-sm text-muted">{footnote}</p>
      )}
    </div>
  );
}
