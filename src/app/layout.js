import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://supernpro.com"),
  title:
    "SuperNPro – Insights in Entertainment, Tech, Lifestyle, Sports & More",
  description:
    "SuperNPro is your go-to destination for insightful and engaging blogs across entertainment, real estate, fashion, technology, and sports.",
  keywords: [
    "SuperNPro",
    "entertainment news",
    "real estate tips",
    "fashion trends",
    "lifestyle blog",
    "tech insights",
    "sports updates",
    "India blogs",
  ],
  openGraph: {
    title: "SuperNPro – Culture, Trends, and Insights",
    description:
      "Explore culture, tech, fashion, sports, and more with SuperNPro. Your daily fix of smart, curated news and guides.",
    url: "https://supernpro.com",
    siteName: "SuperNPro",
    images: [
      {
        url: "https://supernpro.com/og-image.jpg", // Replace with your OG image
        width: 1200,
        height: 630,
        alt: "SuperNPro – Your Insight Hub",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperNPro",
    description:
      "Smart reads on entertainment, fashion, real estate, sports, and tech in India – only on SuperNPro.",
    images: ["https://supernpro.com/og-image.jpg"], // Replace
  },
  alternates: {
    canonical: "https://supernpro.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="SuperNPro Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Google Fonts Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WWMXEYD53X"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WWMXEYD53X');
            `,
          }}
        />

        {/* Favicon (if any) */}
        <link rel="icon" href="/favicon.ico" />

        {/* Optional: Schema JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "SuperNPro",
              url: "https://supernpro.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://supernpro.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
          {children}

      </body>
    </html>
  );
}
