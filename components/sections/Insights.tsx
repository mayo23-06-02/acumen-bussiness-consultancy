import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { articles, formatDate } from "@/lib/articles";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6bc21]";

export default function Insights() {
  return (
    <section
      id="insights"
      aria-labelledby="insights-heading"
      className="scroll-mt-20 bg-slate-50 py-20 font-outfit lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="mb-4 flex items-center gap-3 text-base font-semibold text-[#2d2f76]">
              <span aria-hidden="true" className="h-0.5 w-8 bg-[#e6bc21]" />
              Insights and ideas
            </p>
            <h2
              id="insights-heading"
              className="text-3xl font-light leading-[1.1] text-[#2d2f76] sm:text-4xl lg:text-6xl"
            >
              The numbers you need, the strategies that work
            </h2>
          </div>
          <p className="max-w-prose text-lg font-light leading-relaxed text-slate-600 lg:col-span-5">
            Stay up to date with the latest ERS tax regulations, corporate licensing laws and financial strategies in
            Eswatini.
          </p>
        </div>

        {/* Articles */}
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

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className={`inline-flex items-center gap-2 font-light text-[#2d2f76] underline decoration-[#e6bc21] decoration-2 underline-offset-4 hover:decoration-[#2d2f76] ${focusRing}`}
          >
            View all insights
            <FiArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}