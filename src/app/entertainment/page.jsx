import { Blog } from "@/components/blog/Blog";

// SEO metadata for /entertainment
export const metadata = {
  title: "SuperNPro Entertainment – Streaming & Culture News",
  description:
    "Explore entertainment insights from TV hits like Mirzapur Season 4 to India’s amusement park plans on SuperNPro Entertainment.",
  alternates: {
    canonical: "https://supernpro.com/entertainment",
  },
  openGraph: {
    title: "SuperNPro Entertainment – Streaming & Culture News",
    description:
      "Explore entertainment insights from TV hits like Mirzapur Season 4 to India’s amusement park plans on SuperNPro Entertainment.",
    url: "https://supernpro.com/entertainment",
    siteName: "SuperNPro",
    images: [
      {
        url: "https://supernpro.com/og-entertainment.jpg", // ✅ Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "SuperNPro Entertainment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperNPro Entertainment – Streaming & Culture News",
    description:
      "From TV blockbusters to theme parks – follow all things entertainment on SuperNPro.",
    images: ["https://supernpro.com/og-entertainment.jpg"], // ✅ Replace with actual image
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
      <Blog url="entertainment" />
    </div>
  );
};

export default Page;
