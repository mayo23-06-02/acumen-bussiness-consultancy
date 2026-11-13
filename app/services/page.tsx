import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { services } from "@/lib/services";

// TODO: Update this to your actual domain name
const baseUrl = "https://acumenbusinessconsultancy.com";

export const metadata: Metadata = {
  title: "Our Services | Tax, Accounting & Business Setup in Eswatini",
  description:
    "Comprehensive business services in Eswatini: ERS tax compliance, VAT & PAYE returns, accounting & auditing, company registration, trading licences, and strategic business planning.",
  keywords: [
    "tax services Eswatini",
    "ERS compliance",
    "accounting services",
    "company registration",
    "trading licence",
    "business planning",
    "tax clearance",
    "VAT returns",
    "corporate setup",
  ],
  alternates: {
    canonical: `${baseUrl}/services`,
  },
  openGraph: {
    title: "Our Services | Tax, Accounting & Business Setup in Eswatini",
    description:
      "Comprehensive business services in Eswatini: ERS tax compliance, VAT & PAYE returns, accounting & auditing, company registration, trading licences, and strategic business planning.",
    url: `${baseUrl}/services`,
    images: [
      {
        url: "/Logo-Main.svg",
        width: 1200,
        height: 630,
        alt: "Acumen Business Consultancy Services",
      },
    ],
  },
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6bc21]";

export default function ServicesPage() {
  return (
    <main className="overflow-x-clip font-outfit">
      <PageHero
        image="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2400&auto=format&fit=crop"
        title="Our services"
        subtitle="Specialised taxation management alongside full-scale accounting, corporate licensing and business financing, all from one team."
        eyebrow="What we do"
      >
        <Link
          href="/contact-us"
          className={`rounded-full bg-[#e6bc21] px-8 py-4 text-center font-light text-[#2d2f76] transition-colors hover:bg-white ${focusRing}`}
        >
          Request a free assessment
        </Link>
      </PageHero>

      <section aria-label="All services" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-x-12 gap-y-16 md:grid-cols-2">
            {services.map((service) => (
              <li key={service.slug} className="border-t-4 border-[#e6bc21] pt-8">
                <h2 className="text-2xl font-light text-[#2d2f76] sm:text-3xl">{service.title}</h2>
                <p className="mt-3 max-w-[55ch] text-lg leading-relaxed text-slate-600">{service.subtitle}</p>
                <ul className="mt-6 space-y-2 text-slate-700">
                  {service.capabilities.slice(0, 4).map((capability) => (
                    <li key={capability.title} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e6bc21]" />
                      {capability.title}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className={`mt-8 inline-block font-light text-[#2d2f76] underline decoration-[#e6bc21] decoration-2 underline-offset-4 hover:decoration-[#2d2f76] ${focusRing}`}
                >
                  View {service.title.toLowerCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}