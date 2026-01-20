"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-8">
      {/* Logo */}
      <Link href="/" className="relative w-15 h-15 md:w-18 md:h-18">
        <Image
          src="/assets/sathwa-short-logo.png"
          alt="Sathwa Logo"
          fill
          className="object-contain"
          priority
        />
      </Link>

      {/* Desktop Links - Centered */}
      <div className="hidden md:flex items-center space-x-12 absolute left-1/2 -translate-x-1/2">
        <Link
          href="/"
          className="text-black hover:opacity-70 transition-opacity font-medium tracking-[0.3em] text-[10px] md:text-sm"
        >
          HOME
        </Link>
        <Link
          href="/tracks"
          className="text-black hover:opacity-70 transition-opacity font-medium tracking-[0.3em] text-[10px] md:text-sm"
        >
          TRACKS
        </Link>
        <Link
          href="/contact"
          className="text-black hover:opacity-70 transition-opacity font-medium tracking-[0.3em] text-[10px] md:text-sm"
        >
          CONTACT
        </Link>
      </div>

      {/* Hamburger Menu Toggle (Visible even on Desktop as per design) */}
      <button
        className="flex flex-col space-y-1.5 focus:outline-none z-50 p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <span
          className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-4 h-0.5 bg-black ml-auto transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2 w-6" : ""
          }`}
        ></span>
      </button>

      {/* Mobile/Overlay Menu */}
      <div
        className={`fixed inset-0 bg-white/95 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link
          href="/"
          className="text-2xl font-['Electroharmonix'] tracking-widest text-black"
          onClick={() => setIsOpen(false)}
        >
          HOME
        </Link>
        <Link
          href="/tracks"
          className="text-2xl font-['Electroharmonix'] tracking-widest text-black"
          onClick={() => setIsOpen(false)}
        >
          TRACKS
        </Link>
        <Link
          href="/contact"
          className="text-2xl font-['Electroharmonix'] tracking-widest text-black"
          onClick={() => setIsOpen(false)}
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
}
