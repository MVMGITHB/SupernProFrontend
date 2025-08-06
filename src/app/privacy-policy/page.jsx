export const metadata = {
  title: "Privacy Policy | SuperNPro",
  description: "Understand how SuperNPro collects, uses, and protects your data. Your privacy matters to us.",
  alternates: {
    canonical: "https://supernpro.com/privacy-policy",
  },
  openGraph: {
    title: "SuperNPro Privacy Policy",
    description: "Review SuperNPro’s policies on data protection, cookies, and GDPR compliance.",
    url: "https://supernpro.com/privacy-policy",
    siteName: "SuperNPro",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - SuperNPro",
    description: "Your privacy is our priority. Learn how your data is used at SuperNPro.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: August 6, 2025</p>

      <p className="mb-4">
        SuperNPro respects your privacy. This policy outlines the types of personal information we collect and how we use it.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Data Collection</h2>
      <p className="mb-4">We collect information such as your name, email, and browsing behavior via cookies and analytics tools.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. Use of Information</h2>
      <p className="mb-4">Your data is used to personalize your experience and provide targeted content or ads.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Your Rights</h2>
      <p className="mb-4">You may request data deletion or export at any time. Email <a href="mailto:privacy@supernpro.com">privacy@supernpro.com</a>.</p>
    </main>
  );
}
