import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { PageHeader } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/calculator")({
  head: () => ({
    meta: [
      { title: "Loan Calculator — Foresight Microfinance Bank" },
      { name: "description", content: "Plan your loan with confidence. Slide to explore your options and see your monthly payment, interest and total." },
      { property: "og:title", content: "Loan Calculator — Foresight Microfinance Bank" },
      { property: "og:description", content: "See exactly what you'll pay each month — no hidden fees, no surprises." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CalculatorPage,
});

function CalculatorPage() {
  const [amount, setAmount] = useState(5000);
  const [rate, setRate] = useState(12);
  const [months, setMonths] = useState(12);

  const { monthly, totalInterest, totalPayment } = useMemo(() => {
    const r = rate / 100 / 12;
    const m = (amount * (r * Math.pow(1 + r, months))) / (Math.pow(1 + r, months) - 1);
    const total = m * months;
    return { monthly: m, totalInterest: total - amount, totalPayment: total };
  }, [amount, rate, months]);

  const fmt = (n: number) => `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <>
      <PageHeader eyebrow="Loan Calculator" title="Plan your loan with confidence" desc="Slide to explore your options. See exactly what you'll pay each month — no hidden fees, no surprises." />
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-screen-2xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Why our loans work for you</h2>
            <ul className="mt-6 space-y-3">
              {[
                "No collateral required for loans under $5,000",
                "Flexible terms up to 36 months",
                "Rates from 8% to 18% per annum",
                "Grace period of up to 3 months",
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
            <Slider label="Loan Amount" min={100} max={50000} step={100} value={amount} onChange={setAmount} format={(v) => `$${v.toLocaleString()}`} />
            <Slider label="Interest Rate (Annual)" min={8} max={18} step={0.5} value={rate} onChange={setRate} format={(v) => `${v}%`} />
            <Slider label="Loan Term (Months)" min={3} max={36} step={1} value={months} onChange={setMonths} format={(v) => `${v} months`} />

            <div className="mt-6 rounded-2xl bg-gradient-primary p-6 text-primary-foreground">
              <ResultRow label="Monthly Payment" value={fmt(monthly)} />
              <ResultRow label="Total Interest" value={fmt(totalInterest)} />
              <ResultRow label="Total Payment" value={fmt(totalPayment)} emphasize />
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
