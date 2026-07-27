import {
  HandCoins,
  PiggyBank,
  Users,
  GraduationCap,
  Building2,
  Briefcase,
  Wallet,
  Store,
  FileText,
} from "lucide-react";

export const company = {
  name: "Foresight Microfinance Bank Ltd.",
  rc: "RC: 716052",
  tagline: "…more about your future",
  mission:
    "To deliver sustainable Micro Financial services to the people with a view of thinking more about their future.",
  vision: "To Be The Leading Microfinance Bank Nationwide",
  headOffice: "45, Opeilu Road, Agbado (Railway Station), Agbado, Ogun State.",
  postal: "P. O. Box 2401, Ikeja, Lagos.",
  businessLocation: "Ifo: New Plaza, Ifo Central Market, Ifo, Ogun State.",
  phones: ["08034738566", "08035755115", "08033797632", "08023985239"],
  emails: ["Foresightmfbltd@gmail.com"],
  website: "www.foresightmfb.com",
  hours: "Mon – Fri: 8:00 AM – 4:00 PM · Sat: 9:00 AM – 1:00 PM",
};

export const accountTypes = [
  "Regular Savings Account",
  "Target Savings Account",
  "Children Savings Account",
  "Double Edge Account",
  "Education Plus Account",
  "Entrepreneurial Development Account",
  "Fed Daily Contribution Account",
  "Esusu Contribution Account",
  "Personal Current Account",
  "Corporate Current Account",
  "School Current Account",
  "Fixed / Call Deposit Account",
];

export const loanProducts = [
  "Special FED Loan",
  "Micro-Loans",
  "School / Colleges Loan",
  "Micro-FED Loan",
  "SME Micro Enterprise Loan",
  "LPO Financing",
  "Group Lending",
];

export const services = [
  { icon: HandCoins, title: "Micro-Loans", desc: "Small business loans from ₦10,000 to ₦1,000,000 at 8% per month, for a one-year tenor.", cta: "Calculate Now", href: "/calculator" },
  { icon: Briefcase, title: "SME / Micro Gold Loan", desc: "Enterprise finance from ₦500,000 up to ₦10,000,000 at 5% per month for growing businesses.", cta: "Calculate Now", href: "/calculator" },
  { icon: PiggyBank, title: "Savings & Current Accounts", desc: "Regular, Target, Children, Double Edge, Education Plus, Esusu, Personal, Corporate and School accounts.", cta: "Open Account", href: "/contact" },
  { icon: GraduationCap, title: "School / Colleges Loan", desc: "Finance tuition, school projects and running costs with terms built around the academic calendar.", cta: "Learn More", href: "/contact" },
  { icon: FileText, title: "LPO Financing", desc: "Turn a confirmed purchase order into working capital and deliver on contracts without delay.", cta: "Get Started", href: "/contact" },
  { icon: Users, title: "Group Lending", desc: "Solidarity groups and Fed Daily Contribution members unlock larger facilities through shared trust.", cta: "Join a Group", href: "/contact" },
  { icon: Wallet, title: "Special FED & Micro-FED Loan", desc: "Daily-contribution backed facilities for traders and artisans in our markets and business locations.", cta: "Learn More", href: "/contact" },
  { icon: Store, title: "Entrepreneurial Development", desc: "Beyond capital — advisory, record-keeping support and networks that grow your enterprise.", cta: "Explore", href: "/contact" },
  { icon: Building2, title: "Fixed / Call Deposits", desc: "Place idle funds on fixed or call deposit and earn competitive returns with full flexibility.", cta: "Talk to Us", href: "/contact" },
];

export const loanTypes = [
  {
    id: "micro",
    name: "Micro / Small Loan",
    monthlyRate: 8,
    min: 10000,
    max: 1000000,
    maxMonths: 12,
    note: "8% per month · ₦10,000 – ₦1,000,000 · one year maximum",
  },
  {
    id: "gold",
    name: "SME / Micro Gold Loan",
    monthlyRate: 5,
    min: 500000,
    max: 10000000,
    maxMonths: 12,
    note: "5% per month · ₦500,000 – ₦10,000,000 · one year maximum",
  },
];

export const steps = [
  { n: 1, title: "Apply Online", desc: "Fill our short application with your basics and loan needs — takes under 5 minutes." },
  { n: 2, title: "Document Review", desc: "Our team reviews your file and reaches out for anything else we need." },
  { n: 3, title: "Get Approved", desc: "Approval in 24 to 48 hours with clear, honest terms — no fine print." },
  { n: 4, title: "Receive Funds", desc: "Funds land in your account. Start building — we stay with you." },
];

export const impact = [
  { icon: Users, value: "50,000+", label: "Active Clients" },
  { icon: HandCoins, value: "₦12B+", label: "Disbursed to Date" },
  { icon: Store, value: "15,000+", label: "Businesses Supported" },
];

export const testimonials = [
  { name: "Maria Aguilar", role: "Supermarket Owner", initials: "MA", quote: "Foresight helped me turn a corner grocery into a thriving supermarket. Fast, human, and always in my corner." },
  { name: "Jane Osei", role: "Fashion Designer", initials: "JO", quote: "As a single mom I was turned away everywhere. Foresight believed in me. Now I employ five women in my community." },
  { name: "Patrick Kimani", role: "Farm Cooperative Leader", initials: "PK", quote: "Their group lending gave us better seed and tools. Our yield tripled — Foresight truly understands rural life." },
];

export const faqs = [
  { q: "What documents do I need to apply for a loan?", a: "A valid government-issued ID, proof of address, proof of income or business registration, passport photographs and 3 months of bank/account statements." },
  { q: "How long does the loan approval process take?", a: "Most applications are decided within 24–48 hours once your documentation is complete. Larger facilities may take up to 5 working days." },
  { q: "How much can I borrow and at what rate?", a: "Micro / Small Loans run from ₦10,000 to ₦1,000,000 at 8% per month. SME / Micro Gold Loans run from ₦500,000 to ₦10,000,000 at 5% per month. Both are for a maximum tenor of one year." },
  { q: "Do I need collateral to get a loan?", a: "Small facilities are typically secured with a guarantor and your daily/target contribution history. Larger SME and LPO facilities may require collateral." },
  { q: "Can I apply if I have no credit history?", a: "Yes. We specialise in first-time borrowers — we look at character, capacity and cash flow, not just credit scores." },
  { q: "How can I make loan repayments?", a: "Bank transfer, cash at our Agbado head office or Ifo business location, standing order, or direct debit from your Foresight account." },
];

export const navLinks: [string, string][] = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Calculator", "/calculator"],
  ["How it Works", "/how-it-works"],
  ["Stories", "/stories"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
];
