import { Blog } from "@/components/blog/Blog";
import { Metadata } from "next";

// SEO metadata for /fashion-lifestyle
export const metadata = {
  title: "SuperNPro Fashion & Lifestyle – Culture & Style Trends",
  description:
    "From ethical fashion debates to lifestyle tips and global study guides, stay stylish and informed with SuperNPro Fashion & Lifestyle.",
  alternates: {
    canonical: "https://supernpro.com/fashion-lifestyle",
  },
  openGraph: {
    title: "SuperNPro Fashion & Lifestyle – Culture & Style Trends",
    description:
      "From ethical fashion debates to lifestyle tips and global study guides, stay stylish and informed with SuperNPro Fashion & Lifestyle.",
    url: "https://supernpro.com/fashion-lifestyle",
    siteName: "SuperNPro",
    images: [
      {
        url: "https://supernpro.com/og-fashion.jpg", // ✅ Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "SuperNPro Fashion & Lifestyle",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperNPro Fashion & Lifestyle – Culture & Style Trends",
    description:
      "Dive into trends shaping fashion, culture, and everyday living. Explore ethical fashion, wellness guides, and global lifestyle topics.",
    images: ["https://supernpro.com/og-fashion.jpg"], // ✅ Replace with actual image
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
      <Blog url="fashion-lifestyle" />
    </div>
  );
};

export default Page;
