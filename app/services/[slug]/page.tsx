import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { getService, services } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export const instant = false;

const SITE_NAME = "Acumen Business Consultancy";
// TODO: Update this to your actual domain name
const baseUrl = "https://acumenbusinessconsultancy.com";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6bc21]";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} | ${SITE_NAME}`,
    description: service.subtitle,
    alternates: {
      canonical: `${baseUrl}/services/${slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.subtitle,
      url: `${baseUrl}/services/${slug}`,
      images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <main className="overflow-x-clip font-outfit">
      <PageHero
        image={service.image}
        title={service.title}
        subtitle={service.subtitle}
        eyebrow={
          <nav aria-label="Breadcrumb">
            <Link href="/services" className={`hover:underline ${focusRing}`}>
              Services
            </Link>
          </nav>
        }
      >
        <Link
          href="/contact-us"
          className={`rounded-full bg-[#e6bc21] px-8 py-4 text-center font-light text-[#2d2f76] transition-colors hover:bg-white ${focusRing}`}
        >
          {service.ctaButton}
        </Link>
        <a
          href="#capabilities"
          className={`rounded-full border-2 border-white px-8 py-4 text-center font-semibold text-white transition-colors hover:bg-white hover:text-[#2d2f76] ${focusRing}`}
        >
          What we handle
        </a>
      </PageHero>

      {/* Intro */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <p className="max-w-4xl border-l-4 border-[#e6bc21] pl-6 text-xl font-light leading-relaxed text-slate-700 sm:text-2xl lg:pl-8">
            {service.intro}
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" aria-labelledby="capabilities-heading" className="scroll-mt-20 bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="mb-12 lg:mb-16">
            <p className="mb-4 flex items-center gap-3 text-base font-semibold text-[#2d2f76]">
              <span aria-hidden="true" className="h-0.5 w-8 bg-[#e6bc21]" />
              What we handle
            </p>
            <h2
              id="capabilities-heading"
              className="text-3xl font-light leading-[1.1] text-[#2d2f76] sm:text-4xl lg:text-5xl"
            >
              Core capabilities
            </h2>
          </div>

          <ul className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {service.capabilities.map((capability) => (
              <li key={capability.title} className="border-t-4 border-[#e6bc21] bg-white p-8">
                <h3 className="text-xl font-light text-[#2d2f76]">{capability.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{capability.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to action */}
      <section aria-labelledby="service-cta-heading" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-8 rounded-3xl bg-[#2d2f76] p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between lg:p-16">
            <h2
              id="service-cta-heading"
              className="max-w-2xl text-2xl font-light leading-snug text-white sm:text-3xl lg:text-4xl"
            >
              {service.ctaText}
            </h2>
            <Link
              href="/contact-us"
              className={`shrink-0 rounded-full bg-[#e6bc21] px-8 py-4 font-light text-[#2d2f76] transition-colors hover:bg-white ${focusRing}`}
            >
              {service.ctaButton}
            </Link>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section aria-labelledby="other-services-heading" className="bg-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <h2 id="other-services-heading" className="text-2xl font-light text-[#2d2f76]">
            Our other services
          </h2>
          <ul className="mt-6 grid gap-8 border-t border-slate-200 pt-8 md:grid-cols-3">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/services/${item.slug}`}
                  className={`text-xl font-light leading-snug text-[#2d2f76] underline decoration-[#e6bc21] decoration-2 underline-offset-4 hover:decoration-[#2d2f76] ${focusRing}`}
                >
                  {item.title}
                </Link>
                <p className="mt-3 leading-relaxed text-slate-600">{item.subtitle}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}