import { createFileRoute, Link } from "@tanstack/react-router";
import {
  HandCoins,
  PlayCircle,
  Sparkles,
  CheckCircle2,
  Percent,
  ArrowRight,
} from "lucide-react";
import heroAsset from "@/assets/foresight-building.png.asset.json";
import { impact, services } from "@/lib/site-data";
import { SectionHeader } from "@/components/site/SiteLayout";

const heroImg = heroAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Foresight Microfinance Bank — Vision-Backed Finance for Every Dream" },
      { name: "description", content: "Foresight Microfinance Bank empowers entrepreneurs, families and cooperatives with fast micro-loans, high-yield savings, and community banking built for growth." },
      { property: "og:title", content: "Foresight Microfinance Bank — Vision-Backed Finance for Every Dream" },
      { property: "og:description", content: "Vision-backed finance for every dream — fair micro-loans, savings and community banking." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero — transparent (no blue background) */}
      <section className="relative overflow-hidden bg-background">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, color-mix(in oklab, var(--primary) 12%, transparent), transparent 55%), radial-gradient(circle at 85% 80%, color-mix(in oklab, var(--gold) 10%, transparent), transparent 55%)",
          }}
        />
        <div className="relative mx-auto grid max-w-screen-2xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Vision-backed finance
            </span>
            <h1 className="mt-6 text-4xl leading-[1.1] font-bold sm:text-5xl lg:text-6xl">
              See further. <span className="text-gold">Build bolder.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
              Foresight Microfinance Bank funds the entrepreneurs, families and cooperatives that traditional banks overlook — with fair rates, real people, and approvals in 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/calculator" className="inline-flex items-center gap-2 rounded-lg bg-gradient-gold px-6 py-3.5 font-semibold text-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5">
                <HandCoins className="h-5 w-5" /> Get a Loan
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-6 py-3.5 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                <PlayCircle className="h-5 w-5" /> Learn More
              </Link>
            </div>
            <div className="mt-12 grid max-w-lg grid-cols-3 gap-6">
              {[["50K+", "Clients Served"], ["$120M", "Disbursed"], ["98%", "Satisfaction"]].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl font-extrabold text-gold sm:text-3xl">{v}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-4 lg:mt-0">
            <img
              src={heroImg}
              alt="Foresight Microfinance Bank branch building"
              width={1386}
              height={1006}
              className="w-full rounded-3xl shadow-elegant"
            />
            <div className="animate-float absolute -right-2 -top-4 w-44 rounded-2xl bg-card p-4 shadow-elegant sm:-right-6 sm:-top-6 sm:w-56 sm:p-5">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold text-gold-foreground">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h4 className="mt-3 font-display text-base font-semibold">Instant Approval</h4>
              <p className="text-xs text-muted-foreground">Decisions in under 24 hours</p>
            </div>
            <div className="animate-float absolute -left-2 bottom-6 w-44 rounded-2xl bg-card p-4 shadow-elegant sm:-left-8 sm:bottom-10 sm:w-56 sm:p-5" style={{ animationDelay: "1.5s" }}>
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold text-gold-foreground">
                <Percent className="h-5 w-5" />
              </div>
              <h4 className="mt-3 font-display text-base font-semibold">Low Interest</h4>
              <p className="text-xs text-muted-foreground">Starting from 8% per annum</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact strip */}
      <section className="bg-gradient-primary py-16 text-primary-foreground">
        <div className="mx-auto grid max-w-screen-2xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {impact.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto h-10 w-10 text-gold" />
              <div className="mt-3 font-display text-3xl font-extrabold">{value}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-primary-foreground/75 sm:text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
          <SectionHeader eyebrow="Our Services" title="Financial solutions tailored for you" desc="A complete range of microfinance products built for individuals, entrepreneurs and small businesses." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group relative overflow-hidden rounded-2xl border-2 border-border bg-card p-8 transition-all hover:-translate-y-1.5 hover:shadow-elegant">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground transition-transform group-hover:rotate-6 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
