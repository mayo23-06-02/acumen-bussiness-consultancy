import Link from "next/link";
import Image from "next/image";
import { FiMapPin, FiPhone, FiMail, FiArrowUp, FiChevronRight } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
    return (
        <footer id="locations" className="bg-[#2d2f76] text-slate-300 pt-16 pb-8 font-outfit border-t-4 border-[#e6bc21]">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* ... (The rest of your footer JSX remains exactly the same) ... */}
                
                {/* Changed grid to 12 columns for better proportion control */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
                    {/* Column 1: Brand & Summary (Spans 4 columns) */}
                    <div className="lg:col-span-4 space-y-6 pr-4">
                        <div className="flex-shrink-0 flex items-center gap-2">
                            <Image
                                src="/Logo-White.svg"
                                alt="Acumen Business Consultancy"
                                className="h-12 w-auto object-contain"
                                width={250}
                                height={100}
                                priority
                            />
                        </div>
                        <p className="text-sm leading-relaxed text-slate-300/80">
                            Your Business, Our Priority. We provide reliable, efficient, and professional
                            consultancy services to help you start, grow, and manage your business operations
                            with absolute confidence.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-white/10 p-2.5 rounded-full hover:bg-[#e6bc21] hover:text-[#2d2f76] transition-all duration-300 flex items-center justify-center"
                                aria-label="Facebook"
                            >
                                <FaFacebookF className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links (Spans 2 columns) */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white font-light text-lg mb-6 tracking-wide">Quick Links</h3>
                        <ul className="space-y-3 text-sm font-medium">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Us", href: "/about-us" },
                                { name: "Our Services", href: "/services" },
                                { name: "Contact Us", href: "/contact-us" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="group flex items-center gap-2 text-slate-300/80 hover:text-[#e6bc21] transition-colors duration-200">
                                        <FiChevronRight className="h-3 w-3 text-[#e6bc21] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Our Services (Spans 3 columns) */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-light text-lg mb-6 tracking-wide">Our Services</h3>
                        <ul className="space-y-3 text-sm font-medium">
                            {[
                                { name: "Taxation & ERS Compliance", href: "/services/taxation" },
                                { name: "Accounting & Reporting", href: "/services/accounting" },
                                { name: "Corporate Setup & Licensing", href: "/services/corporate-setup" },
                                { name: "Strategic Planning & Financing", href: "/services/strategic-planning" }
                            ].map((service) => (
                                <li key={service.name}>
                                    <Link href={service.href} className="group flex items-center gap-2 text-slate-300/80 hover:text-[#e6bc21] transition-colors duration-200">
                                        <FiChevronRight className="h-3 w-3 text-[#e6bc21] opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact & Branches (Spans 3 columns) */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-light text-lg mb-6 tracking-wide">Contact Us</h3>
                        <ul className="space-y-5 text-sm">
                            <li className="flex items-start gap-3">
                                <div className="bg-white/5 p-2 rounded-full mt-0.5">
                                    <FiMapPin className="h-4 w-4 text-[#e6bc21]" />
                                </div>
                                <div className="space-y-2">
                                    <p className="font-semibold text-white">Our Branches:</p>
                                    <div className="text-slate-300/80 space-y-1.5 text-xs leading-relaxed">
                                        <p><span className="text-[#e6bc21] font-medium">Manzini:</span> Bhunu Mall, 2nd Floor, Office 204 C.</p>
                                    </div>
                                </div>
                            </li>

                            <li className="flex items-center gap-3">
                                <div className="bg-white/5 p-2 rounded-full">
                                    <FiPhone className="h-4 w-4 text-[#e6bc21]" />
                                </div>
                                <span className="font-medium text-slate-300/80">7637 2206 / 7937 2206</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <div className="bg-white/5 p-2 rounded-full">
                                    <FiMail className="h-4 w-4 text-[#e6bc21]" />
                                </div>
                                <a href="mailto:info@acumenbusinessconsultancy.com" className="font-medium text-slate-300/80 hover:text-[#e6bc21] transition-colors">
                                    info@acumenbusinessconsultancy.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
                    <p>© 2026 Acumen Business Consultancy. All rights reserved.</p>

                    <div className="flex items-center space-x-6">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>

                        {/* Back to Top Button */}
                        <Link
                            href="#"
                            className="bg-white/10 p-2 rounded-full hover:bg-[#e6bc21] hover:text-[#2d2f76] transition-colors ml-4"
                            aria-label="Back to top"
                        >
                            <FiArrowUp className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}