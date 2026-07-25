import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { services } from "@/lib/site-data";
import { PageHeader } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Foresight Microfinance Bank" },
      { name: "description", content: "Reach Foresight Microfinance Bank — call, email, visit, or submit an application online. We reply within 24–48 hours." },
      { property: "og:title", content: "Contact — Foresight Microfinance Bank" },
      { property: "og:description", content: "Ready to start your journey? Reach our team through any of the channels below." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Get In Touch" title="Ready to start your journey?" desc="Questions or ready to apply? Our team is here to help — every step, every stage." />
      <section className="bg-muted py-16 sm:py-20">
        <div className="mx-auto grid max-w-screen-2xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <div className="space-y-5">
              {[
                { icon: MapPin, title: "Head Office", value: "123 Financial District, Suite 400, Accra, Ghana" },
                { icon: Phone, title: "Phone", value: "+1 (555) 123-4567 · +1 (555) 987-6543" },
                { icon: Mail, title: "Email", value: "hello@foresightmfb.com · support@foresightmfb.com" },
                { icon: Clock, title: "Business Hours", value: "Mon – Fri: 8:00 AM – 5:00 PM · Sat: 9:00 AM – 1:00 PM" },
              ].map(({ icon: Icon, title, value }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold">{title}</div>
                    <div className="text-sm text-muted-foreground">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            className="rounded-3xl bg-card p-6 shadow-elegant sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Our team will contact you within 24–48 hours.");
              (e.target as HTMLFormElement).reset();
            }}
          >
            <h3 className="font-display text-2xl font-bold">Apply Now</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="First Name" name="first" placeholder="John" required />
              <Field label="Last Name" name="last" placeholder="Doe" required />
              <Field label="Email" name="email" type="email" placeholder="john@example.com" required />
              <Field label="Phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" required />
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-sm font-semibold">Service Interested In</label>
              <select required className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary">
                <option value="">Select a service…</option>
                {services.map((s) => <option key={s.title}>{s.title}</option>)}
              </select>
            </div>
            <div className="mt-4">
              <label className="mb-2 block text-sm font-semibold">Message / Loan Requirements</label>
              <textarea rows={4} placeholder="Tell us about your needs…" className="w-full resize-y rounded-xl border-2 border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary" />
            </div>
            <button type="submit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5">
              <Send className="h-4 w-4" /> Submit Application
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border-2 border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
