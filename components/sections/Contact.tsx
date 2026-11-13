"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

type Status = "idle" | "sending" | "success" | "error";

const phones = [
  { label: "+268 7637 2206", href: "tel:+26876372206" },
  { label: "+268 7937 2206", href: "tel:+26879372206" },
  { label: "+268 7906 3722", href: "tel:+26879063722" },
  { label: "+268 7851 3109", href: "tel:+26878513109" },
];

const offices = [
  { town: "Siphofaneni", address: "Above Fincorp Office, Office 3 (next to Nokuphila Supermarket)" },
];

const serviceOptions = [
  "Tax clearance and returns",
  "Accounting",
  "Company registration",
  "Business plans",
  "Other",
];

const labelClass = "mb-2 block text-sm font-semibold text-[#2d2f76]";
const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-[#2d2f76] focus:outline-none focus:ring-2 focus:ring-[#e6bc21]";
const linkClass =
  "hover:text-[#e6bc21] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e6bc21]";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Spam trap: a real person never fills this in. Pretend it worked and send nothing.
    if (data.get("website")) {
      form.reset();
      setStatus("success");
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS is not configured. Set the NEXT_PUBLIC_EMAILJS_* environment variables.");
      setStatus("error");
      return;
    }

    const field = (name: string) => String(data.get(name) ?? "").trim();

    setStatus("sending");
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          first_name: field("firstName"),
          last_name: field("lastName"),
          reply_to: field("email"),
          phone: field("phone"),
          service: field("service"),
          message: field("message"),
        },
        { publicKey },
      );
      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-20 overflow-hidden bg-[#2d2f76] py-20 font-outfit lg:py-28"
    >
      {/* Background photo under a heavy navy overlay */}
      <Image
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2d2f76]/95 via-[#2d2f76]/90 to-[#2d2f76]/80" />

      <div className="relative mx-auto grid max-w-[1400px] gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        {/* Left: pitch and details */}
        <div className="text-white lg:col-span-6">
          <p className="mb-4 flex items-center gap-3 text-base font-semibold text-[#e6bc21]">
            <span aria-hidden="true" className="h-0.5 w-8 bg-[#e6bc21]" />
            Contact us today
          </p>
          <h2 id="contact-heading" className="text-3xl font-light leading-[1.1] sm:text-4xl lg:text-6xl">
            Ready to take control of your finances?
          </h2>
          <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-slate-100">
            Whether you need to resolve ERS tax debt, streamline your bookkeeping or register a new company, we are
            ready to move your business forward. Let&rsquo;s build your business together.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e6bc21]">
                <FiMail aria-hidden="true" className="h-5 w-5 text-[#2d2f76]" />
              </span>
              <div>
                <p className="font-light">Email</p>
                <a href="mailto:info@acumenbusinessconsultancy.com" className={`text-slate-100 ${linkClass}`}>
                  info@acumenbusinessconsultancy.com
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e6bc21]">
                <FiPhone aria-hidden="true" className="h-5 w-5 text-[#2d2f76]" />
              </span>
              <div>
                <p className="font-light">Call or WhatsApp</p>
                <ul className="mt-1 flex flex-wrap gap-x-5 gap-y-1 text-slate-100">
                  {phones.map((phone) => (
                    <li key={phone.href}>
                      <a href={phone.href} className={linkClass}>
                        {phone.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <h3 className="mb-5 mt-12 text-xl font-light">Our offices</h3>
          <ul className="space-y-5">
            {offices.map((office) => (
              <li key={office.town} className="flex gap-4">
                <FiMapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-[#e6bc21]" />
                <p className="text-slate-100">
                  <span className="font-light text-white">{office.town}.</span> {office.address}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: form */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-10">
            <h3 className="text-2xl font-light text-[#2d2f76]">Request a free assessment</h3>
            <p className="mt-2 text-slate-600">Tell us what you need and we will get back to you.</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className={labelClass}>
                    First name
                  </label>
                  <input id="firstName" name="firstName" type="text" required autoComplete="given-name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClass}>
                    Last name
                  </label>
                  <input id="lastName" name="lastName" type="text" required autoComplete="family-name" className={inputClass} />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email address
                  </label>
                  <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone number
                  </label>
                  <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="service" className={labelClass}>
                  Service required
                </label>
                <select id="service" name="service" required defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Your message
                </label>
                <textarea id="message" name="message" rows={4} required className={`${inputClass} resize-y`} />
              </div>

              {/* Spam trap: hidden from people, filled in by bots */}
              <div aria-hidden="true" className="absolute -left-[9999px]">
                <label htmlFor="website">Leave this field empty</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-full bg-[#e6bc21] px-8 py-4 font-light text-[#2d2f76] transition-colors hover:bg-[#f2cc3d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d2f76] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>

              <div aria-live="polite" className="min-h-6 text-sm">
                {status === "success" && (
                  <p className="font-semibold text-emerald-700">
                    Thank you. We have your message and will reply soon.
                  </p>
                )}
                {status === "error" && (
                  <p className="font-semibold text-red-700">
                    Your message did not send. Please try again, or email us at info@acumenbusinessconsultancy.com.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}