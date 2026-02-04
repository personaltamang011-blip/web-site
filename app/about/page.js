"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="pt-24 flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-gray-600 text-lg max-w-xl">
       हामी आधुनिक, उत्तरदायी, र प्रयोगकर्ता-मैत्री वेब अनुप्रयोगहरू सिर्जना गर्न उत्साहित छौं।
      </p>

      <Link
        href="/"
        className="mt-6 text-green-600 hover:text-pink-600 font-medium"
      >
        ← Back to Home
      </Link>
    </main>
  );
}
