import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Configure Outfit font
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// TODO: Update this to your actual domain name
const baseUrl = "https://acumenbusinessconsultancy.com";

export const metadata: Metadata = {
  title: {
    default: "Acumen Business Consultancy | Your Business, Our Priority",
    template: "%s | Acumen Business Consultancy",
  },
  description:
    "Established in 2017, Acumen Business Consultancy provides reliable, efficient, and professional services to help you start, grow, and manage your business operations in Eswatini. Expert tax compliance, accounting, corporate setup, and business planning.",
  keywords: [
    "Eswatini business consultancy",
    "tax compliance Eswatini",
    "ERS tax services",
    "accounting services Eswatini",
    "company registration Eswatini",
    "trading licence Eswatini",
    "business plans Eswatini",
    "corporate setup",
    "tax clearance certificate",
    "VAT returns",
    "PAYE reconciliation",
    "financial consulting",
    "business financing",
  ],
  authors: [{ name: "Acumen Business Consultancy" }],
  creator: "Acumen Business Consultancy",
  publisher: "Acumen Business Consultancy",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: baseUrl,
    siteName: "Acumen Business Consultancy",
    title: "Acumen Business Consultancy | Your Business, Our Priority",
    description:
      "Expert tax compliance, accounting, corporate setup, and business planning services in Eswatini. Established 2017.",
    images: [
      {
        url: "/Logo-Main.svg",
        width: 1200,
        height: 630,
        alt: "Acumen Business Consultancy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acumen Business Consultancy | Your Business, Our Priority",
    description:
      "Expert tax compliance, accounting, corporate setup, and business planning services in Eswatini. Established 2017.",
    images: ["/Logo-Main.svg"],
    creator: "@acumenconsult",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when you get them from:
    // - Google Search Console
    // - Bing Webmaster Tools
    // google: "your-google-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      {/* Apply the font variable here */}
      <body className={`${outfit.variable} font-sans font-outfit antialiased bg-white text-slate-800`}>
        <Header />
        <main className="pt-20" id="home">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}