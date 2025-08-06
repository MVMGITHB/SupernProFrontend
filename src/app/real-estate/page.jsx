import { Blog } from "@/components/blog/Blog";
import { Metadata } from "next";

// SEO metadata for /real-estate
export const metadata = {
  title: "SuperNPro Real Estate – Property Trends & Insights",
  description:
    "Discover real estate news, market trends and property tips tailored for India’s evolving realty landscape on SuperNPro Real Estate.",
  alternates: {
    canonical: "https://supernpro.com/real-estate",
  },
  openGraph: {
    title: "SuperNPro Real Estate – Property Trends & Insights",
    description:
      "Discover real estate news, market trends and property tips tailored for India’s evolving realty landscape on SuperNPro Real Estate.",
    url: "https://supernpro.com/real-estate",
    siteName: "SuperNPro",
    images: [
      {
        url: "https://supernpro.com/og-real-estate.jpg", // ✅ Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "SuperNPro Real Estate",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperNPro Real Estate – Property Trends & Insights",
    description:
      "Latest updates on property prices, new housing projects, rental markets, and policy changes in India’s real estate sector.",
    images: ["https://supernpro.com/og-real-estate.jpg"], // ✅ Replace with actual image
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
      <Blog url="real-estate" />
    </div>
  );
};

export default Page;
