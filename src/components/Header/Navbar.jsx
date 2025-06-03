'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useAuth } from '@/components/context/auth';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({ user: null, token: "" });
    localStorage.removeItem("auth");
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/politics", label: "Politics" },
    { href: "/finance", label: "Finance" },
    { href: "/automobile", label: "Automobile" },
    { href: "/real-estate", label: "Real Estate" },
    { href: "/fashion-lifestyle", label: "Fashion & Lifestyle" },
    { href: "/technology", label: "Technology" },
    { href: "/sports", label: "Sports" },
  ];

  return (
    <nav className="bg-[#f4f4f5] text-gray-600 shadow-lg w-full">
      <div className="max-w-[1440px] mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="flex-shrink-0">
          <img
            src="/Supoernprop_Logo1-removebg-preview.png"
            alt="logo"
            className="h-20 md:h-24 object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-4 text-[16px] font-semibold">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href} className="relative group w-fit">
              {label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#4F1C51] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border rounded-lg text-gray-800 focus:outline-none"
          />

          {auth?.user ? (
            <>
              <span className="text-gray-700">{auth.user.name}</span>
              <button onClick={handleLogout} className="text-gray-700 hover:text-blue-600">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-200">
                Sign In
              </Link>
              <Link href="/register" className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500">
                Sign Up
              </Link>
            </>
          )}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white text-center py-4 px-4 space-y-3 border-t border-gray-200">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href} className="block bg-blue-100 text-black py-2 px-3 rounded-lg hover:bg-blue-200">
              {label}
            </Link>
          ))}

          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 border rounded-lg text-black focus:outline-none"
          />

          {auth?.user ? (
            <>
              <div className="text-gray-700">{auth.user.name}</div>
              <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 w-full">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="block bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500">
                Sign In
              </Link>
              <Link href="/register" className="block bg-yellow-400 text-white px-4 py-2 rounded-lg hover:bg-yellow-500">
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
