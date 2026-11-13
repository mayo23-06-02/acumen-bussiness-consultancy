import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { articles, formatDate } from "@/lib/articles";

// TODO: Update this to your actual domain name
const baseUrl = "https://acumenbusinessconsultancy.com";

export const metadata: Metadata = {
  title: "Insights | Tax, Accounting & Business Strategy Articles",
  description:
    "Expert insights on ERS tax compliance, accounting best practices, company registration, and business strategy in Eswatini. Stay informed with our latest articles and guides.",
  keywords: [
    "tax compliance articles",
    "accounting tips Eswatini",
    "business strategy Eswatini",
    "ERS tax regulations",
    "company registration guide",
    "business planning advice",
  ],
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
  openGraph: {
    title: "Insights | Tax, Accounting & Business Strategy Articles",
    description:
      "Expert insights on ERS tax compliance, accounting best practices, company registration, and business strategy in Eswatini.",
    url: `${baseUrl}/blog`,
    images: [
      {
        url: "/Logo-Main.svg",
        width: 1200,
        height: 630,
        alt: "Acumen Business Consultancy Insights",
      },
    ],
  },
};

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6bc21]";

export default function BlogPage() {
  return (
    <main className="overflow-x-clip font-outfit">
      {/* Hero */}
      <section className="bg-[#2d2f76] py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <p className="mb-4 flex items-center gap-3 text-base font-semibold text-[#e6bc21]">
            <span aria-hidden="true" className="h-0.5 w-8 bg-[#e6bc21]" />
            Insights and ideas
          </p>
          <h1 className="text-4xl font-light leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            The numbers you need, the strategies that work
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-slate-200">
            Stay up to date with the latest ERS tax regulations, corporate licensing laws and financial strategies in
            Eswatini.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <li key={article.slug}>
                <article className="group relative flex h-full flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-200">
                    <Image
                      src={article.image}
                      alt={article.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </div>

                  <div className="mt-6 flex items-center gap-3 text-sm">
                    <span className="font-light text-[#2d2f76]">{article.category}</span>
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#e6bc21]" />
                    <time dateTime={article.date} className="text-slate-500">
                      {formatDate(article.date)}
                    </time>
                  </div>

                  <h3 className="mt-3 text-xl font-light leading-snug text-[#2d2f76]">
                    {/* The link's ::after covers the whole card, so the entire card is clickable */}
                    <Link
                      href={`/blog/${article.slug}`}
                      className={`after:absolute after:inset-0 after:content-[''] ${focusRing}`}
                    >
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-slate-600">{article.excerpt}</p>

                  <span className="mt-5 inline-flex items-center gap-1.5 font-light text-[#2d2f76] underline decoration-[#e6bc21] decoration-2 underline-offset-4 group-hover:decoration-[#2d2f76]">
                    Read more
                    <FiArrowUpRight aria-hidden="true" className="h-4 w-4" />
                  </span>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
