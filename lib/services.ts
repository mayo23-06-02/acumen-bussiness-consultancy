export type Capability = { title: string; text: string };

export type Service = {
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  image: string;
  capabilities: Capability[];
  ctaText: string;
  ctaButton: string;
};

// Swap the images for real photos of the team, offices and clients when you have them.
export const services: Service[] = [
  {
    slug: "taxation",
    title: "Taxation and ERS compliance",
    subtitle:
      "Safeguarding your business through proactive Eswatini Revenue Service (ERS) management and expert tax strategy.",
    intro:
      "Navigating tax laws should not distract you from running your business. We provide end-to-end management of your statutory ERS obligations, ensuring strict compliance while optimising your tax position. From routine filings to resolving complex historical tax disputes, our tax team handles it with you.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2400&auto=format&fit=crop",
    capabilities: [
      {
        title: "e-Tax and routine statutory returns",
        text: "Complete preparation and electronic e-Tax filing of all mandatory ERS returns, to help you meet every critical deadline.",
      },
      {
        title: "VAT management",
        text: "Precise calculation, input and output reconciliation, and timely submission of periodic Value Added Tax (VAT) returns.",
      },
      {
        title: "PAYE administration and reconciliations",
        text: "Accurate monthly PAYE returns alongside comprehensive annual PAYE reconciliations, to maintain full employer compliance.",
      },
      {
        title: "Income tax returns",
        text: "Accurate assessment, calculation and filing of corporate and individual income tax returns.",
      },
      {
        title: "Tax clearance certificates",
        text: "Prompt processing and rigorous follow-up to secure your Tax Clearance, a vital requirement for renewing trading licences and winning commercial tenders.",
      },
      {
        title: "Tax debt negotiation",
        text: "Professional mediation and structuring of tax debt negotiations with the ERS to resolve historical arrears, reduce penalties where possible and set up manageable payment plans.",
      },
      {
        title: "Tax Ease and consulting",
        text: "Forward-looking tax consulting and “Tax Ease” services designed to legally minimise liabilities and streamline your ongoing compliance.",
      },
    ],
    ctaText: "Don’t let tax complexities slow your growth. Speak with our ERS compliance experts today.",
    ctaButton: "Get tax assistance",
  },
  {
    slug: "accounting",
    title: "Accounting and reporting",
    subtitle: "Clear financial visibility to drive confident, data-backed business decisions.",
    intro:
      "Accurate numbers are the foundation of a successful enterprise. We turn raw financial data into actionable intelligence, giving management the clarity to monitor profitability, secure external funding and plan for sustainable expansion.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2400&auto=format&fit=crop",
    capabilities: [
      {
        title: "Comprehensive bookkeeping and accounting",
        text: "Diligent day-to-day transaction recording, bank reconciliations and ledger maintenance to keep your business financially organised.",
      },
      {
        title: "Statutory financial statements",
        text: "Expert preparation of formal, audit-ready financial statements that follow recognised accounting standards.",
      },
      {
        title: "Management accounts",
        text: "Detailed monthly or quarterly management accounts, giving executives real-time insight into departmental performance and operating expenses.",
      },
      {
        title: "Cash flow projections",
        text: "Financial modelling and cash flow projections to forecast liquidity, anticipate capital needs and protect operational continuity.",
      },
      {
        title: "Independent auditing services",
        text: "Rigorous audits that evaluate internal financial controls, verify transaction accuracy and build stakeholder trust.",
      },
    ],
    ctaText: "Upgrade your financial framework and gain total clarity over your business performance.",
    ctaButton: "Speak to an accountant",
  },
  {
    slug: "corporate-setup",
    title: "Corporate setup and licensing",
    subtitle: "Launch legally and operate smoothly with expert administrative facilitation.",
    intro:
      "Establishing a business in Eswatini involves navigating multiple regulatory bodies. We remove the administrative red tape, managing your corporate formation and licensing journey so you can open your doors and begin trading without delay.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop",
    capabilities: [
      {
        title: "Company registration",
        text: "Swift, end-to-end facilitation of new company registrations, securing your Certificate of Incorporation and formalising your legal entity.",
      },
      {
        title: "Trading licence facilitation",
        text: "Expert handling of municipal and governmental applications to secure and renew your standard trading licences.",
      },
      {
        title: "Specialised liquor licences",
        text: "Comprehensive application support for regulated retail, restaurant and wholesale liquor licences.",
      },
      {
        title: "FSRA licences",
        text: "Dedicated regulatory assistance for financial-sector businesses that need compliance approvals and licences from the Financial Services Regulatory Authority (FSRA).",
      },
    ],
    ctaText: "Ready to formalise your business or expand your operations? Let us handle the paperwork.",
    ctaButton: "Start your registration",
  },
  {
    slug: "strategic-planning",
    title: "Strategic planning and financing",
    subtitle: "Turn your business vision into a bankable, scalable reality.",
    intro:
      "Securing capital and attracting premium clients takes more than a good idea; it takes a documented, professionally structured strategy. We help entrepreneurs and established firms position themselves for ambitious growth and investment.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?q=80&w=2400&auto=format&fit=crop",
    capabilities: [
      {
        title: "Bank-ready business plans",
        text: "Comprehensive, well-researched business plans with market analysis, operational strategy and multi-year financial forecasts.",
      },
      {
        title: "Business financing facilitation",
        text: "Strategic guidance and documentation support to help you apply for commercial loans, grants and general business financing.",
      },
      {
        title: "Tailored project financing",
        text: "Specialised financial structuring and feasibility modelling to help source tailored project financing for major capital expansions.",
      },
      {
        title: "Company and business profiles",
        text: "Professional writing and design of high-impact business profiles that strengthen your corporate image and support your tender bids.",
      },
      {
        title: "Business consulting",
        text: "Broad advisory support focused on operational efficiency, cost optimisation and long-term scaling.",
      },
    ],
    ctaText: "Position your company for investment and long-term success. Let’s build your strategy.",
    ctaButton: "Schedule a strategy session",
  },
];

export const getService = (slug: string): Service | undefined => services.find((s) => s.slug === slug);