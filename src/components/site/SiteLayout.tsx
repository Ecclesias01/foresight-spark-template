import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  Phone,
  Mail,
  Menu,
  X,
  ShieldCheck,
  Sparkles,
  Calculator,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import logoAsset from "@/assets/foresight-logo.png.asset.json";
import { navLinks, services } from "@/lib/site-data";

export function SiteLayout({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-primary-dark text-primary-foreground/90 text-xs sm:text-sm">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-1 px-4 py-2 sm:flex-row sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <span className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-gold" /> +1 (555) 123-4567</span>
            <span className="hidden sm:inline text-primary-foreground/40">|</span>
            <span className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-gold" /> hello@foresightmfb.com</span>
          </div>
          <div className="hidden sm:flex items-center gap-5">
            <a href="#" className="flex items-center gap-2 hover:text-gold transition-colors"><ShieldCheck className="h-3.5 w-3.5" /> Internet Banking</a>
            <a href="#" className="flex items-center gap-2 hover:text-gold transition-colors"><Sparkles className="h-3.5 w-3.5" /> Mobile App</a>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className={`sticky top-0 z-40 bg-background/90 backdrop-blur transition-shadow ${scrolled ? "shadow-soft" : ""}`}>
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src={logoAsset.url}
              alt="Foresight Microfinance Bank Ltd."
              width={220}
              height={56}
              className="h-9 w-auto object-contain sm:h-12"
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map(([label, href]) => (
              <li key={href}>
                <Link
                  to={href}
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "text-primary after:w-full" }}
                  className="relative text-foreground/80 transition-colors hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/contact" className="rounded-lg border-2 border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              Open Account
            </Link>
            <Link to="/calculator" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5">
              <Calculator className="h-4 w-4" /> Apply Now
            </Link>
          </div>

          <button className="lg:hidden text-primary" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-background p-6 lg:hidden overflow-y-auto">
          <button className="absolute right-6 top-6 text-foreground" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
          <div className="mt-16 flex flex-col gap-1">
            {navLinks.map(([label, href]) => (
              <Link
                key={href}
                to={href}
                onClick={() => setMenuOpen(false)}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-primary" }}
                className="border-b border-border py-4 text-lg font-semibold"
              >
                {label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMenuOpen(false)} className="mt-6 inline-flex justify-center rounded-lg bg-gradient-primary px-5 py-3 font-semibold text-primary-foreground">
              Open Account
            </Link>
          </div>
        </div>
      )}

      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-ink text-primary-foreground">
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-12">
            <div>
              <img
                src={logoAsset.url}
                alt="Foresight Microfinance Bank Ltd."
                width={220}
                height={56}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
              <p className="mt-5 max-w-md text-sm text-primary-foreground/70">
                Empowering individuals and small businesses through accessible, human financial services. Everyone deserves the tools to build a better tomorrow.
              </p>
              <div className="mt-6 flex gap-3">
                {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                  <a key={i} href="#" aria-label="Social link" className="grid h-10 w-10 place-items-center rounded-xl bg-white/10 transition-all hover:-translate-y-1 hover:bg-primary">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <FooterCol title="Quick Links" items={navLinks} />
            <FooterCol title="Services" items={services.slice(0, 5).map((s) => [s.title, "/services"] as [string, string])} />
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

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <h4 className="mb-5 font-display text-lg font-semibold">{title}</h4>
      <ul className="space-y-3 text-sm">
        {items.map(([label, href]) => {
          const isInternal = href.startsWith("/");
          const content = (
            <>
              <ArrowRight className="h-3 w-3" /> {label}
            </>
          );
          const cls = "inline-flex items-center gap-2 text-primary-foreground/60 transition-all hover:pl-1 hover:text-gold";
          return (
            <li key={label + href}>
              {isInternal ? (
                <Link to={href} className={cls}>{content}</Link>
              ) : (
                <a href={href} className={cls}>{content}</a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function SectionHeader({ eyebrow, title, desc, light }: { eyebrow: string; title: string; desc: string; light?: boolean }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className={`text-xs font-semibold uppercase tracking-[0.2em] ${light ? "text-gold" : "text-primary"}`}>{eyebrow}</div>
      <h2 className={`mt-3 text-2xl font-bold sm:text-3xl ${light ? "" : "text-foreground"}`}>{title}</h2>
      <p className={`mt-4 ${light ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{desc}</p>
    </div>
  );
}

export function PageHeader({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-screen-2xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</div>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h1>
          {desc && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{desc}</p>}
        </div>
      </div>
    </section>
  );
}
