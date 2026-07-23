import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  
  HandCoins,
  PiggyBank,
  Users,
  GraduationCap,
  Home as HomeIcon,
  LineChart,
  CheckCircle2,
  Percent,
  ArrowRight,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ShieldCheck,
  Sparkles,
  Store,
  Calculator,
  PlayCircle,
} from "lucide-react";
import heroImg from "@/assets/hero-entrepreneur.jpg";
import logoAsset from "@/assets/foresight-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Foresight Microfinance Bank — Vision-Backed Finance for Every Dream" },
      {
        name: "description",
        content:
          "Foresight Microfinance Bank empowers entrepreneurs, families and cooperatives with fast micro-loans, high-yield savings, and community banking built for growth.",
      },
      { property: "og:title", content: "Foresight Microfinance Bank" },
      {
        property: "og:description",
        content: "Vision-backed finance for every dream. Micro-loans, savings and group lending — approved in 24 hours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const services = [
  { icon: HandCoins, title: "Micro Loans", desc: "Flexible loans from $100 to $50,000 with fair, transparent rates for entrepreneurs and small businesses.", cta: "Calculate Now", href: "#calculator" },
  { icon: PiggyBank, title: "Savings Accounts", desc: "Grow your future with high-yield savings. Start with as little as $5 and earn from day one.", cta: "Open Account", href: "#contact" },
  { icon: Users, title: "Group Lending", desc: "Join a solidarity group and unlock larger loans through shared trust. Built for community businesses.", cta: "Join a Group", href: "#contact" },
  { icon: GraduationCap, title: "Education Loans", desc: "Invest in tomorrow. Cover tuition, books, and living costs with student-friendly repayment terms.", cta: "Learn More", href: "#calculator" },
  { icon: HomeIcon, title: "Housing Microfinance", desc: "Build, buy, or improve your home with long-term financing designed around your income.", cta: "Get Started", href: "#calculator" },
  { icon: LineChart, title: "Business Development", desc: "Beyond capital — access mentorship, training and networks that grow your enterprise.", cta: "Explore", href: "#contact" },
];

const steps = [
  { n: 1, title: "Apply Online", desc: "Fill our short application with your basics and loan needs — takes under 5 minutes." },
  { n: 2, title: "Document Review", desc: "Our team reviews your file and reaches out for anything else we need." },
  { n: 3, title: "Get Approved", desc: "Approval in 24 to 48 hours with clear, honest terms — no fine print." },
  { n: 4, title: "Receive Funds", desc: "Funds land in your account. Start building — we stay with you." },
];

const impact = [
  { icon: Users, value: "50,000+", label: "Active Clients" },
  { icon: HandCoins, value: "$120M", label: "Disbursed to Date" },
  { icon: Store, value: "15,000+", label: "Businesses Supported" },
  { icon: MapPin, value: "45", label: "Branch Locations" },
];

const testimonials = [
  { name: "Maria Aguilar", role: "Supermarket Owner", initials: "MA", quote: "Foresight helped me turn a corner grocery into a thriving supermarket. Fast, human, and always in my corner." },
  { name: "Jane Osei", role: "Fashion Designer", initials: "JO", quote: "As a single mom I was turned away everywhere. Foresight believed in me. Now I employ five women in my community." },
  { name: "Patrick Kimani", role: "Farm Cooperative Leader", initials: "PK", quote: "Their group lending gave us better seed and tools. Our yield tripled — Foresight truly understands rural life." },
];

const faqs = [
  { q: "What documents do I need to apply for a loan?", a: "A valid government-issued ID, proof of address, proof of income or business registration, and 3 months of bank statements. Loans under $1,000 use a simplified checklist." },
  { q: "How long does the loan approval process take?", a: "Most applications are decided within 24–48 hours. Small loans under $5,000 can be approved same-day. Larger files may take up to 5 business days." },
  { q: "Do I need collateral to get a loan?", a: "No collateral is required for loans up to $5,000. Larger loans may need collateral or a guarantor. Group lending members guarantee each other." },
  { q: "What are the interest rates and fees?", a: "Annual rates range from 8% to 18% based on amount, term and history. A one-time 1–2% processing fee applies. No hidden fees, no prepayment penalties." },
  { q: "Can I apply if I have no credit history?", a: "Absolutely. We specialize in first-time borrowers — we look at character, capacity and cash flow, not just credit scores." },
  { q: "How can I make loan repayments?", a: "Mobile money, bank deposit, auto-debit from your Foresight savings account, cash at any branch, or through our mobile app 24/7." },
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [amount, setAmount] = useState(5000);
  const [rate, setRate] = useState(12);
  const [months, setMonths] = useState(12);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { monthly, totalInterest, totalPayment } = useMemo(() => {
    const r = rate / 100 / 12;
    const m = (amount * (r * Math.pow(1 + r, months))) / (Math.pow(1 + r, months) - 1);
    const total = m * months;
    return { monthly: m, totalInterest: total - amount, totalPayment: total };
  }, [amount, rate, months]);

  const fmt = (n: number) => `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-primary-dark text-primary-foreground/90 text-sm">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-1 px-6 py-2 sm:flex-row">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-gold" /> +1 (555) 123-4567</span>
            <span className="hidden sm:inline text-primary-foreground/40">|</span>
            <span className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-gold" /> hello@foresightmfb.com</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="flex items-center gap-2 hover:text-gold transition-colors"><ShieldCheck className="h-3.5 w-3.5" /> Internet Banking</a>
            <a href="#" className="hidden sm:flex items-center gap-2 hover:text-gold transition-colors"><Sparkles className="h-3.5 w-3.5" /> Mobile App</a>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className={`sticky top-0 z-40 bg-background/90 backdrop-blur transition-shadow ${scrolled ? "shadow-soft" : ""}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Foresight Microfinance Bank Ltd."
              width={220}
              height={56}
              className="h-12 w-auto object-contain"
            />
          </a>

          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {[
              ["Home", "#home"],
              ["Services", "#services"],
              ["Calculator", "#calculator"],
              ["How it Works", "#how"],
              ["Stories", "#stories"],
              ["FAQ", "#faq"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="relative text-foreground/80 transition-colors hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#contact" className="rounded-lg border-2 border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              Open Account
            </a>
            <a href="#calculator" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5">
              <Calculator className="h-4 w-4" /> Apply Now
            </a>
          </div>

          <button className="lg:hidden text-primary" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-background p-6 lg:hidden">
          <button className="absolute right-6 top-6 text-foreground" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
          <div className="mt-16 flex flex-col gap-1">
            {[["Home", "#home"], ["Services", "#services"], ["Calculator", "#calculator"], ["How it Works", "#how"], ["Stories", "#stories"], ["FAQ", "#faq"], ["Contact", "#contact"]].map(([l, h]) => (
              <a key={h} href={h} onClick={() => setMenuOpen(false)} className="border-b border-border py-4 text-lg font-semibold">
                {l}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-6 inline-flex justify-center rounded-lg bg-gradient-primary px-5 py-3 font-semibold text-primary-foreground">
              Open Account
            </a>
          </div>
        </div>
      )}

      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-gradient-primary">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.06'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <div className="text-primary-foreground">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Vision-backed finance
            </span>
            <h1 className="mt-6 text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
              See further. <span className="text-gold">Build bolder.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-primary-foreground/85">
              Foresight Microfinance Bank funds the entrepreneurs, families and cooperatives that traditional banks overlook — with fair rates, real people, and approvals in 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#calculator" className="inline-flex items-center gap-2 rounded-lg bg-gradient-gold px-6 py-3.5 font-semibold text-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5">
                <HandCoins className="h-5 w-5" /> Get a Loan
              </a>
              <a href="#services" className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/80 px-6 py-3.5 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary">
                <PlayCircle className="h-5 w-5" /> Learn More
              </a>
            </div>
            <div className="mt-12 grid max-w-lg grid-cols-3 gap-6">
              {[["50K+", "Clients Served"], ["$120M", "Disbursed"], ["98%", "Satisfaction"]].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl font-extrabold text-gold">{v}</div>
                  <div className="text-xs uppercase tracking-widest text-primary-foreground/70">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <img
              src={heroImg}
              alt="Small business owner supported by Foresight Microfinance"
              width={1200}
              height={1000}
              className="w-full rounded-3xl shadow-elegant"
            />
            <div className="animate-float absolute -right-6 -top-6 w-56 rounded-2xl bg-card p-5 shadow-elegant">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold text-gold-foreground">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h4 className="mt-3 font-display text-base font-semibold">Instant Approval</h4>
              <p className="text-xs text-muted-foreground">Decisions in under 24 hours</p>
            </div>
            <div className="animate-float absolute -left-8 bottom-10 w-56 rounded-2xl bg-card p-5 shadow-elegant" style={{ animationDelay: "1.5s" }}>
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold text-gold-foreground">
                <Percent className="h-5 w-5" />
              </div>
              <h4 className="mt-3 font-display text-base font-semibold">Low Interest</h4>
              <p className="text-xs text-muted-foreground">Starting from 8% per annum</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Our Services" title="Financial solutions tailored for you" desc="A complete range of microfinance products built for individuals, entrepreneurs and small businesses." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc, cta, href }) => (
              <div key={title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1.5 hover:shadow-elegant">
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-gold transition-transform duration-500 group-hover:scale-x-100" />
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground transition-transform group-hover:rotate-6 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <a href={href} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all hover:gap-2">
                  {cta} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="bg-gradient-to-br from-secondary to-muted py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Loan Calculator</div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Plan your loan with confidence</h2>
            <p className="mt-4 text-muted-foreground">
              Slide to explore your options. See exactly what you'll pay each month — no hidden fees, no surprises.
            </p>
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

          <div className="rounded-3xl bg-card p-8 shadow-elegant">
            <Slider label="Loan Amount" min={100} max={50000} step={100} value={amount} onChange={setAmount} format={(v) => `$${v.toLocaleString()}`} />
            <Slider label="Interest Rate (Annual)" min={8} max={18} step={0.5} value={rate} onChange={setRate} format={(v) => `${v}%`} />
            <Slider label="Loan Term (Months)" min={3} max={36} step={1} value={months} onChange={setMonths} format={(v) => `${v} months`} />

            <div className="mt-6 rounded-2xl bg-gradient-primary p-6 text-primary-foreground">
              <ResultRow label="Monthly Payment" value={fmt(monthly)} />
              <ResultRow label="Total Interest" value={fmt(totalInterest)} />
              <ResultRow label="Total Payment" value={fmt(totalPayment)} emphasize />
            </div>
            <a href="#contact" className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-gradient-gold px-6 py-3.5 font-semibold text-gold-foreground shadow-gold transition-transform hover:-translate-y-0.5">
              <Send className="h-4 w-4" /> Apply for This Loan
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Simple Process" title="How it works" desc="Getting a loan from Foresight is fast, transparent and human. Four steps, no maze." />
          <div className="relative mt-16 grid gap-12 md:grid-cols-4">
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
        </div>
      </section>

      {/* Impact */}
      <section className="bg-gradient-primary py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {impact.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto h-10 w-10 text-gold" />
              <div className="mt-3 font-display text-4xl font-extrabold">{value}</div>
              <div className="mt-1 text-sm uppercase tracking-widest text-primary-foreground/75">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="stories" className="bg-ink py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader eyebrow="Success Stories" title="What our clients say" desc="Real people, real change — powered by capital and community." light />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/10">
                <div className="font-display text-6xl leading-none text-gold">&ldquo;</div>
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

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionHeader eyebrow="Got Questions?" title="Frequently asked questions" desc="Straight answers about our services, process and eligibility." />
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                <button className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left font-semibold transition-colors hover:bg-muted" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  <ChevronDown className={`h-5 w-5 flex-shrink-0 text-primary transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-7 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-muted py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Get In Touch</div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Ready to start your journey?</h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              Questions or ready to apply? Our team is here to help — every step, every stage. Reach out through any of the channels below.
            </p>
            <div className="mt-8 space-y-5">
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
            className="rounded-3xl bg-card p-8 shadow-elegant"
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

      {/* Footer */}
      <footer className="bg-ink text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <img
                  src={logoAsset.url}
                  alt="Foresight Microfinance Bank Ltd."
                  width={220}
                  height={56}
                  className="h-12 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="mt-5 max-w-md text-sm text-primary-foreground/70">
                Empowering individuals and small businesses through accessible, human financial services. Everyone deserves the tools to build a better tomorrow.
              </p>
              <div className="mt-6 flex gap-3">
                {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 transition-all hover:-translate-y-1 hover:bg-primary">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <FooterCol title="Quick Links" items={[["Home", "#home"], ["Services", "#services"], ["Calculator", "#calculator"], ["How It Works", "#how"], ["FAQ", "#faq"]]} />
            <FooterCol title="Services" items={services.slice(0, 5).map((s) => [s.title, "#services"] as [string, string])} />
            <FooterCol title="Legal" items={[["Privacy Policy", "#"], ["Terms of Service", "#"], ["Cookie Policy", "#"], ["AML Policy", "#"], ["Disclosures", "#"]]} />
          </div>
          <div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm text-primary-foreground/50 sm:flex-row">
            <div>© {new Date().getFullYear()} Foresight Microfinance Bank. All rights reserved.</div>
            <div>Licensed and regulated by the Central Bank</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ eyebrow, title, desc, light }: { eyebrow: string; title: string; desc: string; light?: boolean }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className={`text-xs font-semibold uppercase tracking-[0.2em] ${light ? "text-gold" : "text-primary"}`}>{eyebrow}</div>
      <h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${light ? "" : "text-foreground"}`}>{title}</h2>
      <p className={`mt-4 ${light ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{desc}</p>
    </div>
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

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h4 className="mb-5 font-display text-lg font-semibold">{title}</h4>
      <ul className="space-y-3 text-sm">
        {items.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="inline-flex items-center gap-2 text-primary-foreground/60 transition-all hover:pl-1 hover:text-gold">
              <ArrowRight className="h-3 w-3" /> {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
