import { createFileRoute } from "@tanstack/react-router";
import { testimonials } from "@/lib/site-data";
import { PageHeader } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — Foresight Microfinance Bank" },
      { name: "description", content: "Real people, real change — powered by capital and community. Meet the entrepreneurs Foresight has helped." },
      { property: "og:title", content: "Success Stories — Foresight Microfinance Bank" },
      { property: "og:description", content: "Meet the entrepreneurs, families and cooperatives building bolder futures with Foresight." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StoriesPage,
});

function StoriesPage() {
  return (
    <>
      <PageHeader eyebrow="Success Stories" title="What our clients say" desc="Real people, real change — powered by capital and community." />
      <section className="bg-ink py-16 text-primary-foreground sm:py-20">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border-2 border-white/10 bg-white/5 p-8 backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/10">
                <div className="font-display text-5xl leading-none text-gold">&ldquo;</div>
                <p className="mt-2 italic text-primary-foreground/85">{t.quote}</p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary to-gold font-bold text-primary-foreground">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-xs text-gold">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
