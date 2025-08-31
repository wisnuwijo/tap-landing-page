'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-[#181922] border-b border-gray-200 dark:border-gray-800">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">
        <div className="flex items-center">
          <img
            src="/tap-light.png"
            alt="Tap Logo"
            className="h-8 w-auto mr-2"
          />
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/">
            <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer text-gray-700 dark:text-gray-200">Home</span>
          </Link>
          <Link href="/about">
            <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer text-gray-700 dark:text-gray-200">About</span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer text-gray-700 dark:text-gray-200">Contact</span>
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 dark:text-gray-200 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md flex flex-col items-center md:hidden z-50">
          <Link href="/">
            <span className="py-2 w-full text-center hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200">Home</span>
          </Link>
          <Link href="/about">
            <span className="py-2 w-full text-center hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200">About</span>
          </Link>
          <Link href="/contact">
            <span className="py-2 w-full text-center hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200">Contact</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
