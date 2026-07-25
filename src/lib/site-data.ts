import {
  HandCoins,
  PiggyBank,
  Users,
  GraduationCap,
  Home as HomeIcon,
  LineChart,
  Store,
  MapPin,
} from "lucide-react";

export const services = [
  { icon: HandCoins, title: "Micro Loans", desc: "Flexible loans from $100 to $50,000 with fair, transparent rates for entrepreneurs and small businesses.", cta: "Calculate Now", href: "/calculator" },
  { icon: PiggyBank, title: "Savings Accounts", desc: "Grow your future with high-yield savings. Start with as little as $5 and earn from day one.", cta: "Open Account", href: "/contact" },
  { icon: Users, title: "Group Lending", desc: "Join a solidarity group and unlock larger loans through shared trust. Built for community businesses.", cta: "Join a Group", href: "/contact" },
  { icon: GraduationCap, title: "Education Loans", desc: "Invest in tomorrow. Cover tuition, books, and living costs with student-friendly repayment terms.", cta: "Learn More", href: "/calculator" },
  { icon: HomeIcon, title: "Housing Microfinance", desc: "Build, buy, or improve your home with long-term financing designed around your income.", cta: "Get Started", href: "/calculator" },
  { icon: LineChart, title: "Business Development", desc: "Beyond capital — access mentorship, training and networks that grow your enterprise.", cta: "Explore", href: "/contact" },
];

export const steps = [
  { n: 1, title: "Apply Online", desc: "Fill our short application with your basics and loan needs — takes under 5 minutes." },
  { n: 2, title: "Document Review", desc: "Our team reviews your file and reaches out for anything else we need." },
  { n: 3, title: "Get Approved", desc: "Approval in 24 to 48 hours with clear, honest terms — no fine print." },
  { n: 4, title: "Receive Funds", desc: "Funds land in your account. Start building — we stay with you." },
];

export const impact = [
  { icon: Users, value: "50,000+", label: "Active Clients" },
  { icon: HandCoins, value: "$120M", label: "Disbursed to Date" },
  { icon: Store, value: "15,000+", label: "Businesses Supported" },
  { icon: MapPin, value: "45", label: "Branch Locations" },
];

export const testimonials = [
  { name: "Maria Aguilar", role: "Supermarket Owner", initials: "MA", quote: "Foresight helped me turn a corner grocery into a thriving supermarket. Fast, human, and always in my corner." },
  { name: "Jane Osei", role: "Fashion Designer", initials: "JO", quote: "As a single mom I was turned away everywhere. Foresight believed in me. Now I employ five women in my community." },
  { name: "Patrick Kimani", role: "Farm Cooperative Leader", initials: "PK", quote: "Their group lending gave us better seed and tools. Our yield tripled — Foresight truly understands rural life." },
];

export const faqs = [
  { q: "What documents do I need to apply for a loan?", a: "A valid government-issued ID, proof of address, proof of income or business registration, and 3 months of bank statements. Loans under $1,000 use a simplified checklist." },
  { q: "How long does the loan approval process take?", a: "Most applications are decided within 24–48 hours. Small loans under $5,000 can be approved same-day. Larger files may take up to 5 business days." },
  { q: "Do I need collateral to get a loan?", a: "No collateral is required for loans up to $5,000. Larger loans may need collateral or a guarantor. Group lending members guarantee each other." },
  { q: "What are the interest rates and fees?", a: "Annual rates range from 8% to 18% based on amount, term and history. A one-time 1–2% processing fee applies. No hidden fees, no prepayment penalties." },
  { q: "Can I apply if I have no credit history?", a: "Absolutely. We specialize in first-time borrowers — we look at character, capacity and cash flow, not just credit scores." },
  { q: "How can I make loan repayments?", a: "Mobile money, bank deposit, auto-debit from your Foresight savings account, cash at any branch, or through our mobile app 24/7." },
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
