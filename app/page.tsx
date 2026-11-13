import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Insights from "@/components/sections/Insights";
import Contact from "@/components/sections/Contact";

// TODO: Update this to your actual domain name
const baseUrl = "https://acumenbusinessconsultancy.com";

export const metadata: Metadata = {
  title: "Acumen Business Consultancy | Tax, Accounting & Business Setup in Eswatini",
  description:
    "Your trusted partner for ERS tax compliance, accounting, company registration, and business planning in Eswatini. Established 2017, serving 500+ clients across Manzini, Matsapha, and Siphofaneni.",
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: "Acumen Business Consultancy | Tax, Accounting & Business Setup in Eswatini",
    description:
      "Your trusted partner for ERS tax compliance, accounting, company registration, and business planning in Eswatini. Established 2017, serving 500+ clients.",
    url: baseUrl,
    images: [
      {
        url: "/Logo-Main.svg",
        width: 1200,
        height: 630,
        alt: "Acumen Business Consultancy - Tax and Business Services in Eswatini",
      },
    ],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Acumen Business Consultancy",
    description:
      "Expert tax compliance, accounting, corporate setup, and business planning services in Eswatini. Established 2017.",
    url: baseUrl,
    telephone: "+268 7637 2206",
    email: "info@acumenbusinessconsultancy.com",
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Siphofaneni",
        addressCountry: "SZ",
        streetAddress: "Above Fincorp Office, Office 3 (next to Nokuphila Supermarket)",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Matsapha",
        addressCountry: "SZ",
        streetAddress: "Mahhala, Eteteni, above Engine Filling Station",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Manzini",
        addressCountry: "SZ",
        streetAddress: "Bhunu Mall, 2nd Floor, Office 204 C",
      },
    ],
    foundingDate: "2017",
    areaServed: ["Eswatini", "Manzini", "Matsapha", "Siphofaneni"],
    priceRange: "$$",
    openingHours: "Mo-Fr 08:00-17:00",
    sameAs: ["https://facebook.com/acumenbusinessconsultancy"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
        <Insights />
      </main>
    </>
  );
}