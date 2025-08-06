import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <Link href="/" className="flex-shrink-0">
            <img
              src="/SupoernproLogo.webp"
              alt="logo"
              className="h-20 md:h-24 object-contain"
            />
          </Link>
          <a
            href="mailto:contact@supernpro.com"
            className="text-sm text-gray-400 mt-1 hover:underline"
          >
            contact@supernpro.com
          </a>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>

            <li>
              <Link href="/advertise" className="hover:text-white">
                Advertise
              </Link>
            </li>
            <li>
              <Link href="/help" className="hover:text-white">
                Help
              </Link>
            </li>
            <li>
              <Link href="/terms-of-service" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 invisible md:visible">
            &nbsp;
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/finance" className="hover:text-white">
                Finance
              </Link>
            </li>
            <li>
              <Link href="/automobile" className="hover:text-white">
                Automobile
              </Link>
            </li>
            <li>
              <Link href="/real-estate" className="hover:text-white">
                Real Estate
              </Link>
            </li>
            <li>
              <Link href="/fashion-lifestyle" className="hover:text-white">
                Fashion & Lifestyle
              </Link>
            </li>
            <li>
              <Link href="/sports" className="hover:text-white">
                Sports
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/supernproinfo/?next=%2F"
              className="hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SUPERNPRO. All rights reserved.
      </div>
    </footer>
  );
}
