import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiUsers, FiTarget, FiShield } from "react-icons/fi";
import PageHero from "@/components/PageHero";

// TODO: Update this to your actual domain name
const baseUrl = "https://acumenbusinessconsultancy.com";

export const metadata: Metadata = {
  title: "About Us | Eswatini's Trusted Business Consultancy Since 2017",
  description:
    "Learn about Acumen Business Consultancy, established in 2017. Serving 500+ clients across Eswatini with expert tax compliance, accounting, and business consulting. Offices in Manzini, Matsapha, and Siphofaneni.",
  keywords: [
    "about Acumen Business Consultancy",
    "business consultancy Eswatini",
    "tax experts Eswatini",
    "accounting firm Eswatini",
    "company registration services",
    "business consultants Eswatini",
  ],
  alternates: {
    canonical: `${baseUrl}/about-us`,
  },
  openGraph: {
    title: "About Us | Eswatini's Trusted Business Consultancy Since 2017",
    description:
      "Learn about Acumen Business Consultancy, established in 2017. Serving 500+ clients across Eswatini with expert tax compliance, accounting, and business consulting.",
    url: `${baseUrl}/about-us`,
    images: [
      {
        url: "/Logo-Main.svg",
        width: 1200,
        height: 630,
        alt: "About Acumen Business Consultancy",
      },
    ],
  },
};

const values = [
  {
    icon: FiUsers,
    title: "Client-centric partnership",
    tagline: "Your Business, Our Priority.",
    text: "We view every client relationship as a long-term collaboration. We do not just process paperwork; we invest in your success, guided by one principle: let’s build your business together.",
  },
  {
    icon: FiTarget,
    title: "Uncompromising accuracy",
    tagline: "Precision is non-negotiable.",
    text: "In tax compliance and auditing, small errors become expensive. From VAT and PAYE reconciliations to complex corporate financial statements, we hold ourselves to exact calculations and audit-ready reporting.",
  },
  {
    icon: FiShield,
    title: "Proactive reliability",
    tagline: "Solutions before problems escalate.",
    text: "We deliver dependable, proactive solutions before compliance issues grow. Whether we are expediting Tax Clearance certificates or negotiating tax debt with the ERS, our clients trust us to protect their legal and financial standing.",
  },
];

const strengths = [
  {
    title: "Taxation mastery",
    text: "Deep expertise in e-Tax filing of ERS returns, income tax and strategic Tax Ease consulting.",
  },
  {
    title: "Full-scale accounting",
    text: "Daily bookkeeping, management accounts and cash flow projections, carried out seamlessly.",
  },
  {
    title: "Corporate setup",
    text: "Rapid facilitation of company registration, trading licences, liquor licences and FSRA licences.",
  },
  {
    title: "Strategic growth",
    text: "Bank-ready business plans, professional company profiles and tailored project financing.",
  },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6bc21]";

function Tagline({ children }: { children: string }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-base font-semibold text-[#2d2f76]">
      <span aria-hidden="true" className="h-0.5 w-8 bg-[#e6bc21]" />
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <main className="overflow-x-clip font-outfit">
      {/* Page header: 400px full-width image banner */}
      <PageHero
        compact
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2400&auto=format&fit=crop"
        eyebrow="About us"
        title="Professional business solutions for a brighter future"
        subtitle="Discover the team dedicated to navigating your regulatory complexities, delivering accurate financial insights and accelerating your business growth across Eswatini."
      />

      {/* Who we are */}
      <section aria-labelledby="who-heading" className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-7">
            <h2 id="who-heading" className="mb-8 text-3xl font-light leading-tight text-[#2d2f76] sm:text-4xl">
              Who we are
            </h2>
            <div className="max-w-[65ch] space-y-6 text-lg leading-relaxed text-slate-700">
              <p>
                Acumen Business Consultancy is an Eswatini-based advisory firm specialising in taxation, accounting
                and corporate licensing. We were founded on a single commitment: to provide reliable, efficient and
                professional consultancy services tailored to the regulatory landscape of the Eswatini market.
              </p>
              <p>
                Whether you are a startup taking your first steps or an established enterprise looking to optimise
                your Eswatini Revenue Service (ERS) compliance, our team handles the heavy lifting. By delivering
                expert guidance, accurate solutions and real results, we remove administrative roadblocks so that
                business owners can focus on operational momentum.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
                alt="The Acumen Business Consultancy team at work"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision and mission */}
      <section aria-label="Vision and mission" className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-0 lg:px-8">
          <div className="lg:pr-16">
            <h2 className="mb-5 border-l-4 border-[#e6bc21] pl-4 text-3xl font-light text-[#2d2f76]">Our vision</h2>
            <p className="max-w-[55ch] text-xl font-light leading-relaxed text-slate-700">
              To be Eswatini’s most trusted and accessible partner in corporate growth, creating a brighter financial
              future for enterprises through unwavering accuracy, strategic foresight and comprehensive regulatory
              expertise.
            </p>
          </div>
          <div className="border-t border-slate-300 pt-12 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            <h2 className="mb-5 border-l-4 border-[#e6bc21] pl-4 text-3xl font-light text-[#2d2f76]">Our mission</h2>
            <p className="max-w-[55ch] text-xl font-light leading-relaxed text-slate-700">
              Our mission is to help you start, grow and manage your business with confidence. We do this through
              seamless end-to-end management of ERS statutory returns, strategic business financing facilitation, and
              precise accounting frameworks that empower data-driven decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section aria-labelledby="values-heading" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl lg:mb-16">
            <Tagline>What guides us</Tagline>
            <h2
              id="values-heading"
              className="text-3xl font-light leading-[1.1] text-[#2d2f76] sm:text-4xl lg:text-5xl"
            >
              Our core values
            </h2>
          </div>
          <ul className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            {values.map(({ icon: Icon, title, tagline, text }) => (
              <li key={title} className="border-t-4 border-[#e6bc21] pt-8">
                <Icon aria-hidden="true" className="mb-5 h-8 w-8 text-[#2d2f76]" />
                <h3 className="text-2xl font-light text-[#2d2f76]">{title}</h3>
                <p className="mt-2 font-semibold text-slate-900">{tagline}</p>
                <p className="mt-4 leading-relaxed text-slate-600">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What sets us apart */}
      <section aria-labelledby="apart-heading" className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <Tagline>One team, one place</Tagline>
              <h2
                id="apart-heading"
                className="text-3xl font-light leading-[1.1] text-[#2d2f76] sm:text-4xl lg:text-5xl"
              >
                What sets us apart
              </h2>
              <p className="mt-6 max-w-prose text-lg leading-relaxed text-slate-600">
                Acumen is a one-stop corporate hub. Instead of passing different administrative needs to several
                agencies, our clients work with one team that can handle a broad range of business requirements.
              </p>
            </div>
          </div>
          <ul className="divide-y divide-slate-200 border-y border-slate-200 lg:col-span-7">
            {strengths.map((item) => (
              <li key={item.title} className="py-8 first:pt-6 last:pb-6">
                <h3 className="border-l-4 border-[#e6bc21] pl-4 text-xl font-light text-[#2d2f76]">{item.title}</h3>
                <p className="mt-3 max-w-[60ch] text-lg leading-relaxed text-slate-600">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to action */}
      <section aria-labelledby="cta-heading" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-8 rounded-3xl bg-[#2d2f76] p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between lg:p-16">
            <div>
              <h2 id="cta-heading" className="text-3xl font-light leading-tight text-white sm:text-4xl">
                Let&rsquo;s build your business together
              </h2>
              <p className="mt-4 max-w-xl text-lg text-slate-200">
                Tell us where your business stands today and we will show you the next step.
              </p>
            </div>
            <Link
              href="/contact-us"
              className={`shrink-0 rounded-full bg-[#e6bc21] px-8 py-4 font-light text-[#2d2f76] transition-colors hover:bg-white ${focusRing}`}
            >
              Request a free assessment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}