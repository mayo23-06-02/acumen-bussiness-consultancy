import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

// TODO: Update this to your actual domain name
const baseUrl = "https://acumenbusinessconsultancy.com";

export const metadata: Metadata = {
  title: "Contact Us | Get Expert Tax & Business Advice in Eswatini",
  description:
    "Contact Acumen Business Consultancy for professional tax compliance, accounting, company registration, and business planning services. Offices in Manzini, Matsapha, and Siphofaneni. Call +268 7637 2206.",
  keywords: [
    "contact Acumen Business Consultancy",
    "tax consultation Eswatini",
    "business advice Eswatini",
    "accounting services contact",
    "company registration help",
    "tax clearance assistance",
  ],
  alternates: {
    canonical: `${baseUrl}/contact-us`,
  },
  openGraph: {
    title: "Contact Us | Get Expert Tax & Business Advice in Eswatini",
    description:
      "Contact Acumen Business Consultancy for professional tax compliance, accounting, company registration, and business planning services. Offices in Manzini, Matsapha, and Siphofaneni.",
    url: `${baseUrl}/contact-us`,
    images: [
      {
        url: "/Logo-Main.svg",
        width: 1200,
        height: 630,
        alt: "Contact Acumen Business Consultancy",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main className="overflow-x-clip font-outfit">
      <PageHero
        image="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2400&auto=format&fit=crop"
        title="Contact us"
        subtitle="Whether you need tax assistance, accounting services, or business consulting, our team is ready to help you succeed."
        eyebrow="Get in touch"
      />
      <ContactForm />
    </main>
  );
}
