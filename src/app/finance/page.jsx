import { Blog } from "@/components/blog/Blog";
import { Metadata } from "next";

// SEO metadata for /finance
export const metadata = {
  title: "SuperNPro Finance – Tax, EPFO & Banking Updates",
  description:
    "Expert insights on finance: new tax rules, EPFO updates, SBI interest changes and investment news on SuperNPro Finance.",
  alternates: {
    canonical: "https://supernpro.com/finance",
  },
  openGraph: {
    title: "SuperNPro Finance – Tax, EPFO & Banking Updates",
    description:
      "Expert insights on finance: new tax rules, EPFO updates, SBI interest changes and investment news on SuperNPro Finance.",
    url: "https://supernpro.com/finance",
    siteName: "SuperNPro",
    images: [
      {
        url: "https://supernpro.com/og-finance.jpg", // ✅ Replace with real OG image
        width: 1200,
        height: 630,
        alt: "SuperNPro Finance",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperNPro Finance – Tax, EPFO & Banking Updates",
    description:
      "Stay informed on India's financial news – tax updates, EPFO rules, SBI rates, and investment trends.",
    images: ["https://supernpro.com/og-finance.jpg"], // ✅ Replace with actual image
    site: "@supernpro", // Replace with your real Twitter handle
    creator: "@supernpro",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <div>
      <Blog url="finance" />
    </div>
  );
};

export default Page;
