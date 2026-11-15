"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  FiMenu, 
  FiX, 
  FiArrowRight, 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiChevronDown 
} from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Updated navigation to include the Services dropdown
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about-us" },
    {
      name: "SERVICES",
      href: "/services",
      hasDropdown: true,
      subLinks: [
        { name: "Taxation & ERS Compliance", href: "/services/taxation" },
        { name: "Accounting & Reporting", href: "/services/accounting" },
        { name: "Corporate Setup & Licensing", href: "/services/corporate-setup" },
        { name: "Strategic Planning & Financing", href: "/services/strategic-planning" }
      ]
    },
    { name: "INSIGHTS", href: "/blog" },
    { name: "CONTACT", href: "/contact-us" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm font-outfit">
      
      {/* --- TOP BAR (Contact & Socials) - Hidden on Mobile --- */}
      <div className="hidden lg:block bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-xs font-medium text-slate-600">
            
            {/* Contact Info */}
            <div className="flex items-center space-x-4">
              <span className="flex items-center gap-1.5">
                <FiMapPin className="h-3.5 w-3.5 text-brand-navy" />
                <span>Siphofaneni, Eswatini</span>
              </span>
              
              <span className="text-slate-300">|</span>
              
              <span className="flex items-center gap-1.5">
                <FiPhone className="h-3.5 w-3.5 text-brand-navy" />
                <span>7637 2206</span>
              </span>
              
              <span className="text-slate-300">|</span>
              
              <Link href="mailto:info@acumenbusinessconsultancy.com" className="flex items-center gap-1.5 hover:text-[#e6bc21] transition-colors">
                <FiMail className="h-3.5 w-3.5 text-brand-navy" />
                info@acumenbusinessconsultancy.com
              </Link>
            </div>

            {/* Social Icons & Tagline */}
            <div className="flex items-center space-x-4">
              <span className="italic text-slate-500 font-serif hidden xl:block">
                "Let's Build Your Business Together"
              </span>
              <span className="text-slate-300 hidden xl:block">|</span>
              <Link 
                href="https://www.facebook.com/acumenbusinessconsultancy/" 
                target="_blank" 
                rel="noreferrer"
                className="text-brand-navy hover:text-[#e6bc21] transition-colors"
              >
                <FaFacebookF className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVIGATION BAR --- */}
      <div className="border-b-[3px] border-brand-navy">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo (Using your specific SVG logo) */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <Image
                src="/Logo-Main.svg"
                alt="Acumen Business Consultancy"
                className="h-12 w-auto object-contain"
                width={200}
                height={100}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative group"
                  onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    href={link.href}
                    className="flex items-center gap-1 text-[13px] font-light text-slate-700 hover:text-brand-navy transition-colors duration-200 uppercase tracking-wide py-6"
                  >
                    {link.name}
                    {link.hasDropdown && <FiChevronDown className="h-3 w-3 mt-0.5" />}
                  </Link>
                  
                  {/* Services Dropdown */}
                  {link.hasDropdown && activeDropdown === link.name && (
                    <div className="absolute top-full left-0 w-64 bg-white border-t-2 border-brand-accent shadow-xl py-2 rounded-b-md">
                      {link.subLinks?.map((sub) => (
                        <Link 
                          key={sub.name} 
                          href={sub.href} 
                          className="block px-4 py-2.5 text-sm text-slate-700 font-medium hover:bg-slate-50 hover:text-brand-navy transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button (Desktop) */}
            <div className="hidden xl:flex items-center">
              <Link
                href="/contact-us"
                className="group flex items-center gap-2 bg-brand-navy text-white px-6 py-2.5 rounded-full font-medium bg-[#2d2f76] transition-all duration-300 shadow-md hover:shadow-lg hover:bg-[#e6bc21] hover:text-[#2d2f76]"
              >
                Get in Touch
                <FiArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="xl:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-brand-navy hover:text-brand-accent focus:outline-none p-2"
              >
                {isOpen ? <FiX className="h-7 w-7" /> : <FiMenu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- MOBILE NAVIGATION DROPDOWN --- */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => !link.hasDropdown && setIsOpen(false)}
                  className="flex items-center justify-between px-3 py-3 rounded-md text-sm font-light text-slate-800 hover:text-brand-navy hover:bg-slate-50 uppercase"
                >
                  {link.name}
                  {link.hasDropdown && <FiChevronDown className="h-4 w-4" />}
                </Link>
                
                {/* Mobile Sub-links */}
                {link.hasDropdown && (
                  <div className="pl-6 pb-2 space-y-1">
                     {link.subLinks?.map((sub) => (
                        <Link 
                          key={sub.name} 
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-navy"
                        >
                          - {sub.name}
                        </Link>
                      ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4">
              <Link
                href="/contact-us"
                onClick={() => setIsOpen(false)}
                className="w-full flex justify-center items-center gap-2 bg-[#2d2f76] text-white px-6 py-3 rounded-full font-medium"
              >
                Get in Touch
                <FiArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}