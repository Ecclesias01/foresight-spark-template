import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site-data";
import { PageHeader } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Foresight Microfinance Bank" },
      { name: "description", content: "Explore Foresight's micro-loans, savings, group lending, education loans, housing microfinance and business development services." },
      { property: "og:title", content: "Services — Foresight Microfinance Bank" },
      { property: "og:description", content: "A complete range of microfinance products built for individuals, entrepreneurs and small businesses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader eyebrow="Our Services" title="Financial solutions tailored for you" desc="A complete range of microfinance products built for individuals, entrepreneurs and small businesses." />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc, cta, href }) => (
              <div key={title} className="group relative overflow-hidden rounded-2xl border-2 border-border bg-card p-8 transition-all hover:-translate-y-1.5 hover:shadow-elegant">
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-gold transition-transform duration-500 group-hover:scale-x-100" />
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground transition-transform group-hover:rotate-6 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <Link to={href} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2">
                  {cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
