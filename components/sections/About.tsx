import Image from "next/image";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";

const storyBlocks = [
  {
    title: "Our foundation",
    lead: "Established in 2017 to help Eswatini businesses start, grow and manage with confidence.",
    content:
      "We have worked with more than 500 clients across many sectors, giving each the clarity and strategy to compete.",
  },
  {
    title: "Our core focus: tax and compliance",
    lead: "Tax is the most stressful part of running a business, so it is where most of our expertise goes.",
    content:
      "Our consultants handle your Eswatini Revenue Service (ERS) obligations, from e-Tax filing and VAT to tax debt negotiation, so you stay compliant and penalty-free.",
  },
  {
    title: "Our philosophy",
    lead: "“Your Business, Our Priority.” We are strategic partners, not just accountants.",
    content:
      "We turn your financial data into practical plans for growth, whether that is a bank-ready business plan or your trading and liquor licences.",
  },
];

const offices = ["Siphofaneni", "Matsapha", "Manzini"];

const stats = [
  { value: "2017", label: "Established", description: "Nearly a decade serving Eswatini’s business community." },
  { value: "500+", label: "Clients served", description: "Entrepreneurs, SMEs and established enterprises." },
  { value: "80%", label: "Audit success rate", description: "Independent reviews that build accuracy and stakeholder confidence." },
  { value: "3", label: "Offices", description: "Siphofaneni, Matsapha and Manzini." },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6bc21]";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-20 bg-white py-20 font-outfit lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 grid gap-6 lg:mb-20 lg:grid-cols-12 lg:items-end lg:gap-16">
          <h2
            id="about-heading"
            className="text-3xl font-light leading-[1.1] text-[#2d2f76] sm:text-4xl lg:col-span-7 lg:text-6xl"
          >
            Accounting and tax support that keeps your business moving
          </h2>
          <p className="max-w-prose text-lg font-light leading-relaxed text-slate-600 lg:col-span-5">
            We handle the regulatory and financial work so you can focus on running and growing your business.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image: below the text on mobile so the story comes first */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-slate-100 lg:sticky lg:top-24">
              <Image
                src="/Landing-Page/about.jpg"
                alt="The Acumen Business Consultancy team at work"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d2f76]/70 via-transparent to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-[#2d2f76]/60 p-5 backdrop-blur-md sm:inset-x-6 sm:bottom-6">
                <p className="text-xl font-light text-white">Let&rsquo;s build your business together</p>
                <p className="mt-1 text-sm text-slate-200">Strategic partners committed to your long-term success.</p>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {storyBlocks.map((block) => (
                <article key={block.title} className="py-8 first:pt-6">
                  <h3 className="mb-3 border-l-4 border-[#e6bc21] pl-4 text-xl font-light text-[#2d2f76]">
                    {block.title}
                  </h3>
                  <p className="max-w-[60ch] text-lg font-medium leading-snug text-slate-900">{block.lead}</p>
                  <p className="mt-2 max-w-[60ch] leading-relaxed text-slate-600">{block.content}</p>
                </article>
              ))}
            </div>

            {/* Next step */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="/contact-us"
                className={`rounded-full bg-[#2d2f76] px-8 py-4 font-light text-white transition-colors hover:bg-[#e6bc21] hover:text-[#2d2f76] ${focusRing}`}
              >
                Talk to our team
              </Link>
              <Link
                href="/services"
                className={`font-light text-[#2d2f76] underline decoration-[#e6bc21] decoration-2 underline-offset-4 hover:decoration-[#2d2f76] ${focusRing}`}
              >
                See our services
              </Link>
            </div>
            <p className="mt-8 flex items-center gap-2 text-slate-600">
              <FiMapPin aria-hidden="true" className="h-4 w-4 shrink-0 text-[#2d2f76]" />
              <span>Offices in {offices.join(", ")}</span>
            </p>
          </div>
        </div>

        {/* Stats */}
        <ul className="mt-20 grid gap-px overflow-hidden rounded-3xl bg-[#4a4c94] sm:grid-cols-2 lg:mt-28 lg:grid-cols-4">
          {stats.map((stat) => (
            <li key={stat.label} className="bg-[#2d2f76] p-8">
              <p className="text-5xl font-light tabular-nums text-[#e6bc21]">{stat.value}</p>
              <p className="mt-2 font-light text-white">{stat.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{stat.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}