export const metadata = {
  title: "Help Center | SuperNPro Support",
  description: "Need help using SuperNPro? Explore our FAQs and support channels to find answers quickly.",
  alternates: {
    canonical: "https://supernpro.com/help",
  },
  openGraph: {
    title: "SuperNPro Help & Support",
    description: "Find answers to your questions about SuperNPro, accounts, and services.",
    url: "https://supernpro.com/help",
    siteName: "SuperNPro",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "SuperNPro Support",
    description: "Get support for your SuperNPro experience.",
  },
};

export default function HelpPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Help & Support</h1>
      <p className="mb-6">We're here to assist you. Explore common issues and find quick solutions below.</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Frequently Asked Questions</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>How do I submit a blog?</strong> – Visit our contact page to pitch your idea.</li>
        <li><strong>Having login issues?</strong> – Try resetting your password via the login page.</li>
        <li><strong>Want to advertise?</strong> – Email <a href="mailto:ads@supernpro.com">ads@supernpro.com</a>.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Need More Help?</h2>
      <p>
        Contact our support team at <a href="mailto:support@supernpro.com" className="text-blue-600 underline">support@supernpro.com</a>.
      </p>
    </main>
  );
}
