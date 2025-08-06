import { Blog } from "@/components/blog/Blog";
export const metadata = {
  title: "SuperNPro Politics – Latest Political News & Analysis",
  description:
    "Stay informed with timely coverage on Indian & global politics, current affairs, and policy updates on SuperNPro Politics.",
  alternates: {
    canonical: "https://supernpro.com/politics",
  },
  openGraph: {
    title: "SuperNPro Politics – Latest Political News & Analysis",
    description:
      "Stay informed with timely coverage on Indian & global politics, current affairs, and policy updates on SuperNPro Politics.",
    url: "https://supernpro.com/politics",
    siteName: "SuperNPro",
    images: [
      {
        url: "https://supernpro.com/og-politics.jpg", // ✅ Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: "SuperNPro Politics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperNPro Politics – Latest Political News & Analysis",
    description:
      "Timely coverage on Indian and international politics, elections, policy shifts, and government affairs.",
    images: ["https://supernpro.com/og-politics.jpg"], // ✅ Replace with actual image
    site: "@supernpro", // ✅ Replace with actual Twitter handle
    creator: "@supernpro",
  },
  icons: {
    icon: "/favicon.ico",
  },
};
const page = () => {
  return (
    <div>
      <Blog url="politics" />
    </div>
  );
};

export default page;
