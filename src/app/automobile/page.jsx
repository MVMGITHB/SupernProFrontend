import { Blog } from "@/components/blog/Blog";


// SEO metadata for /automobile
export const metadata= {
  title: "SuperNPro Automobile – Car & Transport News India",
  description:
    "Get updates on Delhi Metro expansions, FASTag passes, auto trends, toll innovations and transportation news at SuperNPro Automobile.",
  alternates: {
    canonical: "https://supernpro.com/automobile",
  },
  openGraph: {
    title: "SuperNPro Automobile – Car & Transport News India",
    description:
      "Get updates on Delhi Metro expansions, FASTag passes, auto trends, toll innovations and transportation news at SuperNPro Automobile.",
    url: "https://supernpro.com/automobile",
    siteName: "SuperNPro",
    images: [
      {
        url: "https://supernpro.com/og-automobile.jpg", // ✅ Replace with actual OG image
        width: 1200,
        height: 630,
        alt: "SuperNPro Automobile",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperNPro Automobile – Car & Transport News India",
    description:
      "Explore the latest in India's transport sector: Metro updates, FASTag rules, toll news, and auto industry trends.",
    images: ["https://supernpro.com/og-automobile.jpg"], // ✅ Replace with actual image
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
      <Blog url="automobile" />
    </div>
  );
};

export default Page;
