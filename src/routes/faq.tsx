import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site-data";
import { PageHeader } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Foresight Microfinance Bank" },
      { name: "description", content: "Straight answers about Foresight's services, loan process, eligibility and repayment options." },
      { property: "og:title", content: "FAQ — Foresight Microfinance Bank" },
      { property: "og:description", content: "Frequently asked questions about loans, savings, group lending and more." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <>
      <PageHeader eyebrow="Got Questions?" title="Frequently asked questions" desc="Straight answers about our services, process and eligibility." />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="overflow-hidden rounded-2xl border-2 border-border bg-card shadow-soft">
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-semibold transition-colors hover:bg-muted sm:px-7 sm:py-6"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>{f.q}</span>
                  <ChevronDown className={`h-5 w-5 flex-shrink-0 text-primary transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-6 text-sm leading-relaxed text-muted-foreground sm:px-7">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
