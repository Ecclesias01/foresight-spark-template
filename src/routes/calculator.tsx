import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { PageHeader } from "@/components/site/SiteLayout";
import { loanTypes } from "@/lib/site-data";

export const Route = createFileRoute("/calculator")({
  head: () => ({
    meta: [
      { title: "Loan Calculator — Foresight Microfinance Bank" },
      { name: "description", content: "Plan your Foresight loan in naira. Micro loans at 8% per month and SME / Micro Gold loans at 5% per month — see your monthly repayment instantly." },
      { property: "og:title", content: "Loan Calculator — Foresight Microfinance Bank" },
      { property: "og:description", content: "See exactly what you'll pay each month — no hidden fees, no surprises." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CalculatorPage,
});

const naira = (n: number) =>
  `₦${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
const nairaShort = (n: number) => `₦${n.toLocaleString()}`;

function CalculatorPage() {
  const [typeId, setTypeId] = useState(loanTypes[0].id);
  const product = loanTypes.find((t) => t.id === typeId)!;
  const [amounts, setAmounts] = useState<Record<string, number>>(
    Object.fromEntries(loanTypes.map((t) => [t.id, t.min])),
  );
  const [months, setMonths] = useState(12);

  const amount = amounts[product.id];
  const setAmount = (v: number) => setAmounts((a) => ({ ...a, [product.id]: v }));

  const { monthly, totalInterest, totalPayment } = useMemo(() => {
    const interest = amount * (product.monthlyRate / 100) * months;
    const total = amount + interest;
    return { monthly: total / months, totalInterest: interest, totalPayment: total };
  }, [amount, months, product.monthlyRate]);

  return (
    <>
      <PageHeader eyebrow="Loan Calculator" title="Plan your loan with confidence" desc="Pick your loan product, slide to your amount and see exactly what you repay each month — no hidden fees, no surprises." />
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-screen-2xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Our loan products</h2>
            <div className="mt-6 space-y-4">
              {loanTypes.map((t) => (
                <div key={t.id} className="rounded-2xl border-2 border-border bg-card p-5">
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {t.monthlyRate}% per month · {nairaShort(t.min)} – {nairaShort(t.max)}
                  </div>
                </div>
              ))}
            </div>
            <ul className="mt-8 space-y-3">
              {[
                "Micro / Small Loan: 8% per month from ₦10,000 to ₦1,000,000",
                "SME / Micro Gold Loan: 5% per month from ₦500,000 to ₦10,000,000",
                "Maximum tenor of one year on all loan products",
                "Decisions in 24 – 48 hours",
                "No prepayment penalties, ever",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-card p-6 shadow-elegant sm:p-8">
            <div className="mb-6 grid grid-cols-2 gap-2 rounded-xl bg-muted p-1">
              {loanTypes.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTypeId(t.id)}
                  className={`rounded-lg px-3 py-2.5 text-xs font-semibold transition-colors sm:text-sm ${
                    t.id === typeId ? "bg-gradient-primary text-primary-foreground shadow-elegant" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {t.name}
                </button>
              ))}
            </div>
            <p className="mb-6 text-xs text-muted-foreground">{product.note}</p>

            <Slider
              label="Loan Amount"
              min={product.min}
              max={product.max}
              step={product.min}
              value={amount}
              onChange={setAmount}
              format={nairaShort}
            />
            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold">Interest Rate (Monthly)</label>
              <div className="rounded-xl bg-muted px-4 py-3 text-sm font-bold text-primary">
                {product.monthlyRate}% per month (fixed)
              </div>
            </div>
            <Slider label="Loan Term (Months)" min={1} max={product.maxMonths} step={1} value={months} onChange={setMonths} format={(v) => `${v} ${v === 1 ? "month" : "months"}`} />

            <div className="mt-6 rounded-2xl bg-gradient-primary p-6 text-primary-foreground">
              <ResultRow label="Monthly Repayment" value={naira(monthly)} />
              <ResultRow label="Total Interest" value={naira(totalInterest)} />
              <ResultRow label="Total Repayment" value={naira(totalPayment)} emphasize />
            </div>
            <Link to="/contact" className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-gradient-gold px-6 py-3.5 font-semibold text-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5">
              <Send className="h-4 w-4" /> Apply for This Loan
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Slider({ label, min, max, step, value, onChange, format }: { label: string; min: number; max: number; step: number; value: number; onChange: (v: number) => void; format: (v: number) => string }) {
  return (
    <div className="mb-6">
      <label className="mb-2 block text-sm font-semibold">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-border accent-primary"
      />
      <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
        <span>{format(min)}</span>
        <span className="text-base font-bold text-primary">{format(value)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}

function ResultRow({ label, value, emphasize }: { label: string; value: string; emphasize?: boolean }) {
  return (
    <div className={`flex items-center justify-between border-b border-white/20 py-3 last:border-b-0 ${emphasize ? "text-lg font-bold" : "text-sm"}`}>
      <span className="text-primary-foreground/80">{label}</span>
      <span>{value}</span>
    </div>
  );
}
