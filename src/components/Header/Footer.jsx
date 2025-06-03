import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Contact */}
        <div>
          <Link href="/" className="inline-block mb-4">
            <img src="/Supoernprop Logo1.png" alt="logo" className="h-14" />
          </Link>
          <p className="text-sm text-gray-400">123 Business Street, City, Country</p>
          <p className="text-sm text-gray-400 mt-1">Email: contact@yourcompany.com</p>
          <p className="text-sm text-gray-400 mt-1">Phone: +123 456 7890</p>
        </div>

        {/* Quick Links Column 1 */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="#" className="hover:text-white">News</Link></li>
            <li><Link href="#" className="hover:text-white">India Global</Link></li>
            <li><Link href="#" className="hover:text-white">Politics</Link></li>
          </ul>
        </div>

        {/* Quick Links Column 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-3 invisible md:visible">&nbsp;</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="#" className="hover:text-white">Finance</Link></li>
            <li><Link href="#" className="hover:text-white">Automobile</Link></li>
            <li><Link href="#" className="hover:text-white">Real Estate</Link></li>
            <li><Link href="#" className="hover:text-white">Fashion & Lifestyle</Link></li>
            <li><Link href="#" className="hover:text-white">Sports</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SUPERNPRO. All rights reserved.
      </div>
    </footer>
  );
}
