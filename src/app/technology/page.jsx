import { Blog } from "@/components/blog/Blog";
import { Metadata } from "next";

// SEO metadata for /technology
export const metadata = {
  title: "SuperNPro Technology – E‑Passports, Google SEO & More",
  description:
    "Get up‑to‑date on India’s Aadhaar app, e‑passports, SEO tech guides and indexing trends in SuperNPro Technology.",
  alternates: {
    canonical: "https://supernpro.com/technology",
  },
  openGraph: {
    title: "SuperNPro Technology – E‑Passports, Google SEO & More",
    description:
      "Get up‑to‑date on India’s Aadhaar app, e‑passports, SEO tech guides and indexing trends in SuperNPro Technology.",
    url: "https://supernpro.com/technology",
    siteName: "SuperNPro",
    images: [
      {
        url: "https://supernpro.com/og-technology.jpg", // ✅ Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "SuperNPro Technology",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperNPro Technology – E‑Passports, Google SEO & More",
    description:
      "Explore digital India – from Aadhaar updates to SEO tools and search engine indexing tips on SuperNPro Technology.",
    images: ["https://supernpro.com/og-technology.jpg"], // ✅ Replace with actual image
    site: "@supernpro",
    creator: "@supernpro",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <div>
      <Blog url="technology" />
    </div>
  );
};

export default Page;
