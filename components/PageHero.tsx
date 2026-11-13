import type { ReactNode } from "react";
import Image from "next/image";

type PageHeroProps = {
  image: string;
  title: string;
  subtitle: string;
  eyebrow?: ReactNode;
  children?: ReactNode; // buttons
  compact?: boolean; // fixed 400px banner instead of the tall hero
};

// Full-bleed hero: a photo behind a navy overlay, as wide as the screen.
export default function PageHero({ image, title, subtitle, eyebrow, children, compact = false }: PageHeroProps) {
  return (
    <header
      className={`relative isolate flex w-screen ${
        compact ? "min-h-[400px] lg:h-[400px]" : "min-h-[70svh]"
      } items-end overflow-hidden bg-[#2d2f76] font-outfit`}
    >
      {/* Decorative photo: the headline carries the meaning */}
      <Image src={image} alt="" fill priority sizes="100vw" className="-z-10 object-cover object-center" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2d2f76]/95 via-[#2d2f76]/80 to-[#2d2f76]/40" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-[#2d2f76]/60 via-transparent to-transparent" />

      <div
        className={`mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 ${
          compact ? "pb-10 pt-28 lg:pb-12" : "pb-16 pt-40 lg:pb-24"
        }`}
      >
        <div className="max-w-4xl text-white">
          {eyebrow && (
            <div className={`${compact ? "mb-3" : "mb-6"} text-base font-semibold text-[#e6bc21]`}>{eyebrow}</div>
          )}
          <h1
            className={`font-light leading-[1.05] ${
              compact ? "text-3xl sm:text-4xl lg:text-5xl" : "text-4xl sm:text-5xl lg:text-7xl"
            }`}
          >
            {title}
          </h1>
          <p
            className={`max-w-2xl font-light leading-relaxed text-slate-100 ${
              compact ? "mt-4 text-base sm:text-lg" : "mt-6 text-lg sm:text-xl"
            }`}
          >
            {subtitle}
          </p>
          {children && <div className="mt-10 flex flex-col gap-4 sm:flex-row">{children}</div>}
        </div>
      </div>
    </header>
  );
}