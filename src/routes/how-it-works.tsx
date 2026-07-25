import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { steps } from "@/lib/site-data";
import { PageHeader } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works — Foresight Microfinance Bank" },
      { name: "description", content: "Getting a loan from Foresight is fast, transparent and human. Four simple steps — no maze." },
      { property: "og:title", content: "How It Works — Foresight Microfinance Bank" },
      { property: "og:description", content: "Apply, review, approve, receive — a simple four-step process for every loan." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HowPage,
});

function HowPage() {
  return (
    <>
      <PageHeader eyebrow="Simple Process" title="How it works" desc="Getting a loan from Foresight is fast, transparent and human. Four steps, no maze." />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
          <div className="relative grid gap-12 md:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-10 hidden h-0.5 bg-gradient-to-r from-primary via-gold to-primary md:block" />
            {steps.map((s) => (
              <div key={s.n} className="relative text-center">
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border-4 border-primary bg-background font-display text-2xl font-extrabold text-primary transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground">
                  {s.n}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5">
              Start Your Application <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
