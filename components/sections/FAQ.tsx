"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "We partner with a wide range of clients across Eswatini, from solo entrepreneurs who need company registration and trading licences to established corporations that need independent auditing and monthly management accounts.",
  },
  {
    question: "Can you help us resolve existing debt with the Eswatini Revenue Service (ERS)?",
    answer:
      "Yes. We specialise in professional tax debt negotiation. We mediate directly with the ERS to restructure historical liabilities, minimise penalties where possible, and put proactive “Tax Ease” strategies in place to keep you compliant going forward.",
  },
  {
    question: "How long does it take to get a Tax Clearance Certificate?",
    answer:
      "Timelines depend on your current compliance status. Our tax team speeds up the process by making sure your routine statutory returns (VAT, PAYE and income tax) are accurate and fully up to date.",
  },
  {
    question: "Where are your offices located?",
    answer:
      "We operate from three locations: Siphofaneni (above Fincorp Office).",
  },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e6bc21]";

// Lets search engines read the questions and answers.
const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
}).replace(/</g, "\\u003c");

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-20 bg-white py-20 font-outfit lg:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        {/* Header */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24">
            <p className="mb-4 flex items-center gap-3 text-base font-semibold text-[#2d2f76]">
              <span aria-hidden="true" className="h-0.5 w-8 bg-[#e6bc21]" />
              FAQ
            </p>
            <h2 id="faq-heading" className="text-3xl font-light leading-[1.1] text-[#2d2f76] sm:text-4xl lg:text-5xl">
              Got questions? We&rsquo;ve got straight answers.
            </h2>
            <p className="mt-6 max-w-prose text-lg font-light leading-relaxed text-slate-600">
              We believe clarity creates confidence, especially when it comes to your ERS obligations and corporate
              finances.
            </p>
            <p className="mt-8 text-slate-600">
              Still not sure?{" "}
              <Link
                href="/contact-us"
                className={`font-light text-[#2d2f76] underline decoration-[#e6bc21] decoration-2 underline-offset-4 hover:decoration-[#2d2f76] ${focusRing}`}
              >
                Ask our team directly
              </Link>
            </p>
          </div>
        </div>

        {/* Accordion */}
        <div className="border-t border-slate-200 lg:col-span-7">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={faq.question} className="border-b border-slate-200">
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${index}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${index}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className={`flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-light text-[#2d2f76] sm:text-xl ${focusRing}`}
                  >
                    {faq.question}
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors motion-reduce:transition-none ${
                        isOpen ? "border-[#e6bc21] bg-[#e6bc21]" : "border-slate-300"
                      }`}
                    >
                      <FiChevronDown
                        aria-hidden="true"
                        className={`h-5 w-5 transition-transform duration-300 motion-reduce:transition-none ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-a-${index}`}
                  role="region"
                  aria-labelledby={`faq-q-${index}`}
                  className={`grid transition-[grid-template-rows,visibility] duration-300 motion-reduce:transition-none ${
                    isOpen ? "visible grid-rows-[1fr]" : "invisible grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[65ch] pb-6 leading-relaxed text-slate-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}