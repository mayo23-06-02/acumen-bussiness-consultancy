import { FiStar } from "react-icons/fi";

// Replace these with real client quotes (and names, with permission) before launch.
const testimonials = [
  {
    topic: "Tax and ERS compliance",
    quote:
      "Working with Acumen completely changed how we handle ERS returns. They restructured our historical tax debt through professional negotiation and make sure our VAT and PAYE returns are filed perfectly on time. It is the first time tax season hasn’t felt stressful.",
    attribution: "Eswatini SME owner",
  },
  {
    topic: "Company setup and business plans",
    quote:
      "We needed to register our company and secure a trading licence quickly. The team at Acumen not only handled the entire registration process but also drafted a brilliant business plan that helped us secure our initial financing.",
    attribution: "Local startup founder",
  },
  {
    topic: "Accounting and auditing",
    quote:
      "Their bookkeeping and preparation of financial statements are flawless. With their regular management accounts, we finally have the financial clarity we need to make confident decisions. Highly recommend their Manzini branch!",
    attribution: "Corporate director",
  },
];

function Stars() {
  return (
    <div role="img" aria-label="5 out of 5 stars" className="flex gap-1">
      {[0, 1, 2, 3, 4].map((i) => (
        <FiStar key={i} aria-hidden="true" className="h-5 w-5 fill-[#e6bc21] text-[#e6bc21]" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="scroll-mt-20 bg-slate-50 py-20 font-outfit lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="mb-4 flex items-center gap-3 text-base font-semibold text-[#2d2f76]">
              <span aria-hidden="true" className="h-0.5 w-8 bg-[#e6bc21]" />
              Our impact
            </p>
            <h2
              id="testimonials-heading"
              className="text-3xl font-light leading-[1.1] text-[#2d2f76] sm:text-4xl lg:text-6xl"
            >
              Hear what our clients say about working with us
            </h2>
          </div>
          <p className="max-w-prose text-lg font-light leading-relaxed text-slate-600 lg:col-span-5">
            We measure our success by the growth, compliance and peace of mind we deliver to more than 500 businesses
            across Eswatini.
          </p>
        </div>

        {/* Reviews */}
        <ul className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((t) => (
            <li key={t.attribution} className="flex">
              <figure className="flex w-full flex-col rounded-3xl border border-slate-200 bg-white p-8 lg:p-10">
                <Stars />
                <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-slate-700">
                  <p>“{t.quote}”</p>
                </blockquote>
                <figcaption className="mt-8 border-t border-slate-200 pt-6">
                  <p className="font-light text-[#2d2f76]">{t.attribution}</p>
                  <p className="mt-1 text-sm text-slate-500">{t.topic}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}