import Link from "next/link";
import { FiClipboard, FiSettings, FiTrendingUp, FiChevronRight } from "react-icons/fi";

const steps = [
  {
    number: "01",
    icon: FiClipboard,
    label: "Comprehensive assessment and strategy",
    title: "Build the financial framework",
    description:
      "Every successful partnership begins with clarity. We review your current standing, including your ERS compliance, historical tax debt and existing financial records. For new ventures, we map out the company registration and trading licence requirements you need to launch legally.",
  },
  {
    number: "02",
    icon: FiSettings,
    label: "Precision execution and compliance",
    title: "Precision execution",
    description:
      "Our experts take over your administrative burden and carry out the plan. We file your e-Tax returns, submit VAT and PAYE reconciliations, mediate tax debt negotiations with the revenue authority, and set up reliable daily accounting systems.",
  },
  {
    number: "03",
    icon: FiTrendingUp,
    label: "Ongoing reporting and growth",
    title: "Deliver reports and optimise",
    description:
      "Compliance is an ongoing commitment, not a one-time event. We provide regular management accounts, detailed cash flow projections and proactive “Tax Ease” consulting, so you can make data-driven decisions and scale with confidence.",
  },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6bc21]";

export default function Process() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="scroll-mt-20 bg-white py-20 font-outfit lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 grid gap-6 lg:mb-20 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="mb-4 flex items-center gap-3 text-base font-semibold text-[#2d2f76]">
              <span aria-hidden="true" className="h-0.5 w-8 bg-[#e6bc21]" />
              How we work
            </p>
            <h2
              id="process-heading"
              className="text-3xl font-light leading-[1.1] text-[#2d2f76] sm:text-4xl lg:text-6xl"
            >
              Behind every great business is a powerful process
            </h2>
          </div>
          <p className="max-w-prose text-lg font-light leading-relaxed text-slate-600 lg:col-span-5">
            We have streamlined our approach so your move to full ERS compliance and financial clarity is as smooth
            and efficient as possible.
          </p>
        </div>

        {/* Steps: a real sequence, so numbered and connected */}
        <ol className="grid gap-12 lg:grid-cols-3 lg:gap-x-12">
          {steps.map(({ number, icon: Icon, label, title, description }, index) => {
            const isLast = index === steps.length - 1;
            return (
              <li key={number} className="relative pl-20 lg:pl-0">
                
                {/* Vertical connector on small screens */}
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-12 left-7 top-16 border-l-2 border-dashed border-slate-300 lg:hidden"
                  />
                )}

                <div className="lg:mt-8">
                  <p className="text-6xl font-light tabular-nums leading-none text-[#2d2f76] lg:text-7xl">
                    <span className="sr-only">Step </span>
                    {number}
                  </p>
                  <span aria-hidden="true" className="mt-4 block h-1 w-12 bg-[#e6bc21]" />
                  <p className="mt-5 text-sm font-medium text-slate-500">{label}</p>
                  <h3 className="mt-1 text-2xl font-light text-[#2d2f76]">{title}</h3>
                  <p className="mt-4 leading-relaxed text-slate-600">{description}</p>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Next step */}
        <div className="mt-16 flex flex-col items-start gap-6 border-t border-slate-200 pt-10 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
          <p className="max-w-xl text-xl font-light text-[#2d2f76] sm:text-2xl">
            Not sure where your business stands with ERS? Start with an assessment.
          </p>
          <Link
            href="/contact-us"
            className={`rounded-full bg-[#e6bc21] px-8 py-4 font-light text-[#2d2f76] transition-colors hover:bg-[#2d2f76] hover:text-white ${focusRing}`}
          >
            Book your assessment
          </Link>
        </div>
      </div>
    </section>
  );
}