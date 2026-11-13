export type ListItem = { term?: string; text: string };

export type Block =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: ListItem[] };

export type Article = {
  slug: string;
  category: string;
  date: string; // ISO date (YYYY-MM-DD)
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  intro: string;
  body: Block[];
  ctaTitle: string;
};

// Swap the images for photos that match each article.
export const articles: Article[] = [
  {
    slug: "prepare-your-business-for-ers-tax-season",
    category: "Taxation",
    date: "2026-10-12",
    title: "How to prepare your Eswatini business for ERS tax season",
    excerpt:
      "Discover the essential documents and proactive steps you need to take to ensure your income tax and VAT returns are filed flawlessly.",
    image: "/Landing-Page/hero-1.jpg",
    imageAlt: "A professional reviewing tax documents",
    ctaTitle: "Not sure your ERS filings are in order?",
    intro:
      "Navigating the Eswatini Revenue Service (ERS) tax season can be a daunting experience for business owners, but proactive preparation eliminates the stress and financial risks associated with non-compliance. Tax season is not merely an annual event; it is the culmination of your year-round financial discipline. Understanding the specific returns required by the ERS and organising your records early is the most effective way to protect your business’s cash flow and legal standing.",
    body: [
      { type: "heading", text: "1. Understand your mandatory filing obligations" },
      {
        type: "paragraph",
        text: "Before organising your paperwork, you must know exactly which returns apply to your business structure. In Eswatini, corporate entities and registered businesses typically face several key tax obligations:",
      },
      {
        type: "list",
        items: [
          {
            term: "Income tax returns:",
            text: "Every registered business must calculate and declare its annual profit or loss to determine its corporate income tax liability.",
          },
          {
            term: "VAT returns:",
            text: "If your business is registered for Value Added Tax, you must track all input and output VAT and calculate the net amount owed or refundable for each filing period.",
          },
          {
            term: "PAYE returns and annual reconciliation:",
            text: "Employers are legally required to withhold tax from employee salaries, submit monthly PAYE returns and finalise the year with a comprehensive PAYE reconciliation.",
          },
          {
            term: "e-Tax filing of ERS returns:",
            text: "Eswatini has modernised its tax collection, making the electronic submission of these returns mandatory for most businesses.",
          },
        ],
      },
      { type: "heading", text: "2. Reconcile your accounts early" },
      {
        type: "paragraph",
        text: "Never wait until the filing deadline to balance your books. Ensure your bank statements match your internal ledger, and verify that all invoices and receipts are accurately categorised. Clean accounting data is the foundation of accurate ERS return filing.",
      },
      { type: "heading", text: "3. Address historical liabilities proactively" },
      {
        type: "paragraph",
        text: "If your business has fallen behind on tax obligations in previous years, ignoring the problem will only compound the penalties. Engaging a professional consultancy for tax debt negotiation allows you to communicate formally with the ERS to structure manageable payment plans for historic arrears.",
      },
      {
        type: "paragraph",
        text: "Resolving these issues is critical for obtaining a Tax Clearance certificate, which is frequently required to renew operating licences or bid on public and private tenders. Using tax consulting services and adopting proactive “Tax Ease” strategies will help prevent future debt accumulation.",
      },
    ],
  },
  {
    slug: "bookkeeping-systems-that-scale",
    category: "Accounting",
    date: "2026-10-28",
    title: "Bookkeeping systems that scale with your business",
    excerpt:
      "Why upgrading your accounting systems is the secret to accurate cash flow projections and securing tailored project financing.",
    image: "/Landing-Page/hero-2.jpg",
    imageAlt: "An accounting dashboard open on a laptop",
    ctaTitle: "Ready to upgrade your accounting?",
    intro:
      "Many entrepreneurs launch their businesses using simple spreadsheets or manual ledgers. While these basic systems may suffice for a startup’s first few months, they quickly become a liability as transaction volumes grow. Upgrading your accounting infrastructure is not just an administrative task; it is a strategic business decision that directly influences your ability to secure funding and manage rapid growth.",
    body: [
      { type: "heading", text: "From bookkeeping to strategic accounting" },
      {
        type: "paragraph",
        text: "Basic bookkeeping tracks daily income and expenses. Scalable accounting systems transform that raw data into actionable financial intelligence. As your operations expand, your financial framework must be capable of generating formal financial statements, including balance sheets and income statements.",
      },
      {
        type: "paragraph",
        text: "Instead of looking at your finances once a year during tax season, a scalable system allows for monthly or quarterly management accounts, giving executives real-time insight into departmental profitability and operational inefficiencies.",
      },
      { type: "heading", text: "Mastering liquidity with forecasting" },
      {
        type: "paragraph",
        text: "Cash flow is the lifeblood of any growing enterprise. A robust financial system does more than record past transactions; it predicts future financial health. With detailed cash flow projections, businesses can anticipate seasonal revenue dips, plan for major capital expenditure, and make sure they have the liquidity to meet payroll and supplier obligations.",
      },
      { type: "heading", text: "Preparing for audits and external financing" },
      {
        type: "paragraph",
        text: "When you approach a bank for business financing or seek capital for tailored project financing, financial institutions will demand proof of your financial stability. A scalable accounting system ensures your records are always audit-ready.",
      },
      {
        type: "paragraph",
        text: "Engaging independent auditing services gives lenders and investors verified assurance that your financial statements are accurate and that your internal fiscal controls are sound.",
      },
    ],
  },
  {
    slug: "guide-to-securing-a-trading-licence-in-eswatini",
    category: "Business strategy",
    date: "2026-11-05",
    title: "The ultimate guide to securing a trading licence in Eswatini",
    excerpt:
      "Navigating municipal requirements can be tricky. Here is what every startup needs to know before opening their doors.",
    image: "/Landing-Page/hero-3.jpg",
    imageAlt: "Two business owners shaking hands",
    ctaTitle: "Need help getting licensed?",
    intro:
      "Operating a business without the correct regulatory approvals exposes your company to severe fines, forced closures and reputational damage. In Eswatini, securing a trading licence is a mandatory step that validates your legal right to operate within a specific municipality or region. The process requires careful administrative navigation, starting from the moment you formally establish your entity.",
    body: [
      { type: "heading", text: "Step 1: Formal legal establishment" },
      {
        type: "paragraph",
        text: "Before you can apply for a trading licence, your business must legally exist. This begins with formal company registration through the Registrar of Companies. During this phase, you will secure your Certificate of Incorporation and founding company documents, which are prerequisites for all subsequent licensing applications.",
      },
      { type: "heading", text: "Step 2: Prepare your operational documentation" },
      {
        type: "paragraph",
        text: "Licensing boards need to understand exactly what your business does and how it intends to operate. Professional business profiles and comprehensive business plans show that your enterprise is structured, credible and economically viable. These documents are vital for licensing, and they are also required when applying for commercial business financing.",
      },
      { type: "heading", text: "Step 3: Navigate your specific licence categories" },
      {
        type: "paragraph",
        text: "Depending on your industry, a standard trading licence may not be enough. It is crucial to identify exactly which regulatory bodies govern your sector:",
      },
      {
        type: "list",
        items: [
          {
            term: "General trading licence:",
            text: "Required for standard retail, service and commercial operations within municipal boundaries.",
          },
          {
            term: "Liquor licences:",
            text: "Businesses intending to manufacture, distribute or sell alcohol must go through a highly scrutinised application process to secure a specialised liquor licence.",
          },
          {
            term: "FSRA licences:",
            text: "If your business operates in the non-bank financial sector (such as insurance, micro-lending or investment advisory), you must meet strict compliance standards to secure approval from the Financial Services Regulatory Authority (FSRA).",
          },
        ],
      },
      { type: "heading", text: "Step 4: Secure tax clearance" },
      {
        type: "paragraph",
        text: "The Eswatini government closely links municipal licensing with national tax compliance. Before a trading licence is granted or renewed, authorities typically require proof that your business is in good standing with the Eswatini Revenue Service. An up-to-date Tax Clearance certificate is a critical final step before you submit your licensing application.",
      },
    ],
  },
];

export const getArticle = (slug: string): Article | undefined => articles.find((a) => a.slug === slug);

export const formatDate = (iso: string): string =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

export const readingMinutes = (article: Article): number => {
  const words = [article.intro, ...article.body.flatMap((b) => (b.type === "list" ? b.items.map((i) => `${i.term ?? ""} ${i.text}`) : [b.text]))]
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
};