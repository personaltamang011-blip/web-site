"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // ✅ Automatically close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* === Navbar === */}
      <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-3">
          <Link href="/" className="text-2xl font-bold text-gray-600">
            Mani<span className="text-gray-800">Sarmi</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/services" className="nav-link">Services</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden bg-white shadow-md flex flex-col items-center space-y-4 py-4">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/services" className="nav-link">Services</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
          </nav>
        )}
      </header>

      {/* === Main Content === */}
      <main className="pt-24 flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Mani Sarmi
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Explore our modern, responsive web components below.
        </p>

        {/* === Button to Cards Page === */}
        <Link
          href="/cards"
          className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-pink-700 transition-all"
        >
          View Cards
        </Link>

        {/* === External Link Button === */}
        <a
          href="https://responsive-form-demo.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-pink-700 transition-all"
        >
          Manual Form
        </a>

        <a
          href="https://comp-form-demo.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-pink-700 transition-all"
        >
          Automatic Form
        </a>

        <a
          href="https://church-inventory-pwa.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-pink-700 transition-all"
        >
          church Form 
        </a>

        <a
          href="https://responsive-form-demo.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-pink-700 transition-all"
        >
           Responsive Form
        </a>
      </main>
    </>
  );
}
