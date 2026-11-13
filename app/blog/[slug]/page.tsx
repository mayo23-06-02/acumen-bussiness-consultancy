import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { articles, formatDate, getArticle, readingMinutes } from "@/lib/articles";
import type { Block } from "@/lib/articles";

type Props = { params: Promise<{ slug: string }> };

export const instant = false;

const SITE_NAME = "Acumen Business Consultancy";
const baseUrl = "https://acumenbusinessconsultancy.com";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6bc21]";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | ${SITE_NAME}`,
    description: article.excerpt,
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
      url: `${baseUrl}/blog/${slug}`,
      images: [{ url: article.image, width: 1200, height: 630, alt: article.imageAlt }],
      authors: [SITE_NAME],
    },
  };
}

function renderBlock(block: Block, index: number) {
  switch (block.type) {
    case "heading":
      return (
        <h2 key={index} className="mb-4 mt-12 text-2xl font-light leading-snug text-[#2d2f76] sm:text-3xl">
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <p key={index} className="mt-5 text-lg leading-relaxed text-slate-700">
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul key={index} className="mt-6 space-y-4">
          {block.items.map((item) => (
            <li key={item.text} className="flex gap-4 text-lg leading-relaxed text-slate-700">
              <span aria-hidden="true" className="mt-3 h-2 w-2 shrink-0 rounded-full bg-[#e6bc21]" />
              <span>
                {item.term && <strong className="font-light text-[#2d2f76]">{item.term} </strong>}
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      );
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug);

  // Lets search engines understand the page as an article.
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.date,
    author: { "@type": "Organization", name: SITE_NAME },
    publisher: { "@type": "Organization", name: SITE_NAME },
  }).replace(/</g, "\\u003c");

  return (
    <main className="bg-white pb-20 pt-28 font-outfit sm:pt-32 lg:pb-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <article className="mx-auto max-w-3xl px-4 sm:px-6">
        {/* Header */}
        <Link
          href="/blog"
          className={`inline-flex items-center gap-2 font-semibold text-[#2d2f76] hover:underline ${focusRing}`}
        >
          <FiArrowLeft aria-hidden="true" className="h-4 w-4" />
          All insights
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
          <span className="font-light text-[#2d2f76]">{article.category}</span>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#e6bc21]" />
          <time dateTime={article.date} className="text-slate-500">
            {formatDate(article.date)}
          </time>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#e6bc21]" />
          <span className="text-slate-500">{readingMinutes(article)} min read</span>
        </div>

        <h1 className="mt-4 text-4xl font-light leading-[1.1] text-[#2d2f76] sm:text-5xl">{article.title}</h1>
        <p className="mt-6 border-l-4 border-[#e6bc21] pl-5 text-xl font-light leading-relaxed text-slate-700">
          {article.intro}
        </p>
      </article>

      <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-slate-200">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="-mt-5">{article.body.map(renderBlock)}</div>

        {/* Call to action */}
        <aside className="mt-16 rounded-3xl bg-[#2d2f76] p-8 text-white sm:p-10">
          <h2 className="text-2xl font-light sm:text-3xl">{article.ctaTitle}</h2>
          <p className="mt-3 max-w-xl text-slate-200">
            Request a free assessment and our team will tell you where your business stands and what to do next.
          </p>
          <Link
            href="/contact-us"
            className="mt-6 inline-block rounded-full bg-[#e6bc21] px-8 py-4 font-light text-[#2d2f76] transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6bc21]"
          >
            Request a free assessment
          </Link>
        </aside>
      </div>

      {/* Keep reading */}
      <section aria-labelledby="related-heading" className="mx-auto mt-20 max-w-5xl px-4 sm:px-6">
        <h2 id="related-heading" className="text-2xl font-light text-[#2d2f76]">
          Keep reading
        </h2>
        <ul className="mt-6 grid gap-6 border-t border-slate-200 pt-6 md:grid-cols-2">
          {related.map((item) => (
            <li key={item.slug}>
              <p className="text-sm">
                <span className="font-light text-[#2d2f76]">{item.category}</span>
                <span className="text-slate-500"> · </span>
                <time dateTime={item.date} className="text-slate-500">
                  {formatDate(item.date)}
                </time>
              </p>
              <Link
                href={`/blog/${item.slug}`}
                className={`mt-2 block text-xl font-light leading-snug text-[#2d2f76] underline decoration-[#e6bc21] decoration-2 underline-offset-4 hover:decoration-[#2d2f76] ${focusRing}`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}