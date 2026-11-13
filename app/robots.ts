import type { MetadataRoute } from "next";

// TODO: Update this to your actual domain name
const baseUrl = "https://acumenbusinessconsultancy.com";

export default function robots(): MetadataRoute.Robots {

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/private/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
