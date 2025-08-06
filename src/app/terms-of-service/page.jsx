export const metadata = {
  title: "Terms of Service | SuperNPro",
  description: "Review SuperNPro’s terms and conditions. By using our platform, you agree to these terms.",
  alternates: {
    canonical: "https://supernpro.com/terms-of-service",
  },
  openGraph: {
    title: "SuperNPro Terms & Conditions",
    description: "Read our terms of service, usage policies, and legal agreements.",
    url: "https://supernpro.com/terms-of-service",
    siteName: "SuperNPro",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Terms of Use - SuperNPro",
    description: "Understand your rights and responsibilities when using SuperNPro.",
  },
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Last updated: August 6, 2025</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">By accessing SuperNPro, you agree to abide by our terms and all applicable laws.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. User Responsibilities</h2>
      <p className="mb-4">Users are responsible for the accuracy of any information submitted to SuperNPro.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Intellectual Property</h2>
      <p className="mb-4">All content published on SuperNPro is protected and may not be reused without permission.</p>
    </main>
  );
}
