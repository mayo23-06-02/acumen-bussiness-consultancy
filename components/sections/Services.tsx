import Link from "next/link";
import type { IconType } from "react-icons";
import { FiShield, FiBarChart2, FiBriefcase, FiCheckCircle, FiTrendingUp } from "react-icons/fi";

type TaxService = { title: string; text: string };

type SecondaryService = {
  icon: IconType;
  title: string;
  tagline: string;
  items: [name: string, text: string][];
  cta: string;
  href: string;
};

const taxServices: TaxService[] = [
  {
    title: "e-Tax and routine filing",
    text: "Seamless e-Tax filing of ERS returns to keep your business up to date.",
  },
  {
    title: "VAT management",
    text: "Precise calculation, input and output reconciliation, and timely submission of VAT returns.",
  },
  {
    title: "PAYE and payroll",
    text: "Monthly PAYE returns and complete annual PAYE reconciliations for employer compliance.",
  },
  {
    title: "Income tax",
    text: "Accurate corporate and individual income tax returns.",
  },
  {
    title: "Tax clearance",
    text: "Fast facilitation of tax clearance certificates for tenders and day-to-day operations.",
  },
  {
    title: "Tax debt and Tax Ease",
    text: "Professional tax debt negotiation to restructure arrears with the revenue authority, plus Tax Ease consulting.",
  },
];

const secondaryServices: SecondaryService[] = [
  {
    icon: FiBarChart2,
    title: "Accounting and auditing",
    tagline: "Clear numbers for confident decisions.",
    items: [
      ["Financial statements", "Statutory financial statements and routine management accounts."],
      ["Bookkeeping and cash flow", "Daily accounting and detailed cash flow projections to monitor liquidity."],
      ["Auditing", "Independent audits that verify financial accuracy and controls."],
    ],
    cta: "Explore accounting",
    href: "/services/accounting",
  },
  {
    icon: FiBriefcase,
    title: "Company setup and licensing",
    tagline: "Launch legally and operate without interruption.",
    items: [
      ["Registration", "Full company registration services."],
      ["Regulatory licences", "Municipal trading licences, liquor licences and specialised FSRA licences."],
      ["Company profiles", "Professional company and business profiles."],
    ],
    cta: "Explore licensing",
    href: "/services/corporate-setup",
  },
  {
    icon: FiTrendingUp,
    title: "Business strategy and financing",
    tagline: "Turn your vision into a bankable reality.",
    items: [
      ["Business plans", "Comprehensive, bank-ready business plans."],
      ["Capital sourcing", "Business financing and tailored project financing."],
      ["Advisory", "General business consulting to streamline operations and strategy."],
    ],
    cta: "Explore consulting",
    href: "/services/strategic-planning",
  },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6bc21]";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-slate-50 py-20 font-outfit lg:py-28">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="mb-4 flex items-center gap-3 text-base font-semibold text-[#2d2f76]">
              <span aria-hidden="true" className="h-0.5 w-8 bg-[#e6bc21]" />
              What we do
            </p>
            <h2 id="services-heading" className="text-3xl font-light leading-[1.1] text-[#2d2f76] sm:text-4xl lg:text-6xl">
              Expert ERS compliance and business solutions
            </h2>
          </div>
          <p className="max-w-prose text-lg font-light leading-relaxed text-slate-600 lg:col-span-5">
            We offer specialised taxation management alongside full-scale accounting and corporate licensing, to keep
            your business compliant and ready to grow.
          </p>
        </div>

        {/* Featured: Taxation */}
        <div className="grid overflow-hidden rounded-3xl bg-[#2d2f76] lg:grid-cols-5">
          <div className="p-8 sm:p-10 lg:col-span-3 lg:p-14">
            <div className="mb-6 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e6bc21]">
                <FiShield aria-hidden="true" className="h-6 w-6 text-[#2d2f76]" />
              </span>
              <h3 className="text-2xl font-light text-white sm:text-3xl">Taxation and ERS compliance</h3>
            </div>
            <p className="mb-10 max-w-[60ch] text-lg leading-relaxed text-slate-200">
              Don&rsquo;t let tax disputes or filing deadlines slow you down. We manage your complete Eswatini Revenue
              Service profile so you can focus on the business.
            </p>
            <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {taxServices.map((service) => (
                <li key={service.title} className="flex gap-3">
                  <FiCheckCircle aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#e6bc21]" />
                  <div>
                    <h4 className="font-light text-white">{service.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300">{service.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center border-t border-[#e6bc21]/40 bg-white/5 p-8 sm:p-10 lg:col-span-2 lg:border-l lg:border-t-0 lg:p-14">
            <div>
              <p className="text-3xl font-light leading-tight text-white sm:text-4xl">
                One team for your whole ERS profile.
              </p>
              <p className="mt-4 text-slate-300">
                From a single VAT return to clearing years of arrears, tell us where you are and we will take it from
                there.
              </p>
              <Link
                href="/contact-us"
                className={`mt-8 inline-block rounded-full bg-[#e6bc21] px-8 py-4 font-light text-[#2d2f76] transition-colors hover:bg-white ${focusRing}`}
              >
                Get tax assistance now
              </Link>
              <Link
                href="/services/taxation"
                className={`mt-6 block font-light text-white underline decoration-[#e6bc21] decoration-2 underline-offset-4 hover:decoration-white ${focusRing}`}
              >
                See all tax services
              </Link>
            </div>
          </div>
        </div>

        {/* Secondary services */}
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {secondaryServices.map(({ icon: Icon, title, tagline, items, cta, href }) => (
            <article key={title} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8">
              <Icon aria-hidden="true" className="mb-5 h-7 w-7 text-[#2d2f76]" />
              <h3 className="text-xl font-light text-[#2d2f76]">{title}</h3>
              <p className="mt-1 text-slate-500">{tagline}</p>
              <ul className="mt-6 flex-1 space-y-4 border-t border-slate-200 pt-6">
                {items.map(([name, text]) => (
                  <li key={name} className="text-sm leading-relaxed text-slate-600">
                    <span className="font-light text-[#2d2f76]">{name}.</span> {text}
                  </li>
                ))}
              </ul>
              <Link
                href={href}
                className={`mt-8 font-light text-[#2d2f76] underline decoration-[#e6bc21] decoration-2 underline-offset-4 hover:decoration-[#2d2f76] ${focusRing}`}
              >
                {cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}