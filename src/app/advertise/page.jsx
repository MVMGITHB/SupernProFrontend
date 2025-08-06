export const metadata = {
  title: "Advertise with Us | SuperNPro",
  description: "Promote your brand across finance, lifestyle, tech & more on SuperNPro. Discover premium advertising opportunities today.",
  alternates: {
    canonical: "https://supernpro.com/advertise",
  },
  openGraph: {
    title: "Advertise with SuperNPro",
    description: "Reach a targeted audience across tech, lifestyle, and finance. Advertise with SuperNPro.",
    url: "https://supernpro.com/advertise",
    siteName: "SuperNPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advertise on SuperNPro",
    description: "SuperNPro offers premium advertising options across multiple categories. Connect with your audience today.",
  },
};

export default function AdvertisePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Advertise with SuperNPro</h1>
      <p className="mb-6">
        SuperNPro connects advertisers with highly engaged readers in India and beyond. With categories ranging from real estate and fashion to technology and finance, we offer tailored advertising solutions to maximize your brand visibility.
      </p>
      <h2 className="text-2xl font-semibold mt-6 mb-2">Why Partner with Us?</h2>
      <ul className="list-disc ml-6 mb-6">
        <li>Targeted category-based placements</li>
        <li>Banner ads, sponsored posts, and newsletter integrations</li>
        <li>High CTR and brand exposure</li>
      </ul>
      <p>
        Contact us at <a href="mailto:ads@supernpro.com" className="text-blue-600 underline">ads@supernpro.com</a> to get started or request a media kit.
      </p>
    </main>
  );
}
