"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import type { KeyboardEvent, TouchEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiPause, FiPlay } from "react-icons/fi";

const INTERVAL = 6000;

const slides = [
  {
    id: 1,
    tagline: "Taxation and ERS compliance",
    title: "Master your tax and ERS compliance",
    description:
      "Stay compliant and stress-free. We handle your e-Tax returns, VAT, PAYE reconciliations and tax debt negotiations with the Eswatini Revenue Service.",
    ctaText: "Resolve your tax debt",
    image: "/Landing-Page/hero-1.jpg",
  },
  {
    id: 2,
    tagline: "Accounting and financial clarity",
    title: "Accounting that moves businesses forward",
    description:
      "Get a clear view of your finances. From daily bookkeeping to financial statements, auditing and cash flow projections, we keep your numbers accurate.",
    ctaText: "Speak to an accountant",
    image: "/Landing-Page/hero-2.jpg",
  },
  {
    id: 3,
    tagline: "Business setup and strategy",
    title: "Professional solutions for a brighter business future",
    description:
      "Launch and scale with confidence. We handle company registration, trading and liquor licences, and bank-ready business plans to help you secure financing.",
    ctaText: "Start your business today",
    image: "/Landing-Page/hero-3.jpg",
  },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e6bc21]";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback((index: number) => setCurrent((index + slides.length) % slides.length), []);

  // Respect "reduce motion": start paused.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setUserPaused(true);
  }, []);

  // Autoplay stops while the user is hovering or focused inside, or has paused it.
  // The timer restarts after any manual change, so a slide never flips right after a click.
  const playing = !userPaused && !interacting;
  useEffect(() => {
    if (!playing) return;
    const timer = setTimeout(() => go(current + 1), INTERVAL);
    return () => clearTimeout(timer);
  }, [playing, current, go]);

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "ArrowLeft") go(current - 1);
    if (e.key === "ArrowRight") go(current + 1);
  };

  const handleTouchEnd = (e: TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) go(current + (dx < 0 ? 1 : -1));
    touchStartX.current = null;
  };

  return (
    <section
      id="home"
      aria-roledescription="carousel"
      aria-label="Our services"
      className="relative h-[85svh] min-h-[620px] w-full overflow-hidden bg-[#2d2f76] font-outfit"
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocus={() => setInteracting(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setInteracting(false);
      }}
      onKeyDown={handleKeyDown}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={handleTouchEnd}
    >
      <div aria-live={playing ? "off" : "polite"}>
        {slides.map((slide, index) => {
          const active = index === current;
          const Heading = active ? "h1" : "h2";
          return (
            <div
              key={slide.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
              aria-hidden={!active}
              className={`absolute inset-0 transition-opacity duration-700 motion-reduce:transition-none ${
                active ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"
              }`}
            >
              {/* Decorative photo: the headline carries the meaning */}
              <Image
                src={slide.image}
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority={index === 0}
              />
              {/* One navy overlay, strongest behind the text */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#2d2f76]/95 via-[#2d2f76]/75 to-[#2d2f76]/25" />

              <div className="relative z-20 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 pb-28 pt-24 sm:px-6 lg:px-8">
                <div className="max-w-3xl text-white">
                  <p className="mb-5 flex items-center gap-3 text-base font-semibold text-[#e6bc21]">
                    <span aria-hidden="true" className="h-0.5 w-8 bg-[#e6bc21]" />
                    {slide.tagline}
                  </p>
                  <Heading className="text-4xl font-light leading-[1.05] sm:text-5xl lg:text-7xl">
                    {slide.title}
                  </Heading>
                  <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-slate-100 sm:text-xl">
                    {slide.description}
                  </p>
                  <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <Link
                      href="/contact-us"
                      tabIndex={active ? 0 : -1}
                      className={`rounded-full bg-[#e6bc21] px-8 py-4 text-center font-light text-[#2d2f76] transition-colors hover:bg-white ${focusRing}`}
                    >
                      {slide.ctaText}
                    </Link>
                    <Link
                      href="/services"
                      tabIndex={active ? 0 : -1}
                      className={`rounded-full border-2 border-white px-8 py-4 text-center font-semibold text-white transition-colors hover:bg-white hover:text-[#2d2f76] ${focusRing}`}
                    >
                      View services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls: one bar, aligned with the content column */}
      <div className="absolute inset-x-0 bottom-0 z-30 pb-6 sm:pb-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center" role="group" aria-label="Choose slide">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => go(index)}
                aria-label={`Go to slide ${index + 1}: ${slide.tagline}`}
                aria-current={index === current}
                className={`group flex h-11 items-center px-1.5 ${focusRing}`}
              >
                <span
                  className={`block h-2.5 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                    index === current ? "w-10 bg-[#e6bc21]" : "w-2.5 bg-white/50 group-hover:bg-white"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {[
              {
                label: userPaused ? "Play slideshow" : "Pause slideshow",
                onClick: () => setUserPaused((p) => !p),
                icon: userPaused ? FiPlay : FiPause,
              },
              { label: "Previous slide", onClick: () => go(current - 1), icon: FiChevronLeft },
              { label: "Next slide", onClick: () => go(current + 1), icon: FiChevronRight },
            ].map(({ label, onClick, icon: Icon }) => (
              <button
                key={label}
                type="button"
                onClick={onClick}
                aria-label={label}
                className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#2d2f76]/60 text-white backdrop-blur-md transition-colors hover:border-[#e6bc21] hover:bg-[#e6bc21] hover:text-[#2d2f76] ${focusRing}`}
              >
                <Icon aria-hidden="true" className="h-5 w-5" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}