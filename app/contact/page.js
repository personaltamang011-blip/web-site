"use client";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="pt-24 flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
      <p className="text-gray-600 text-lg max-w-xl">
        Feel free to reach out to us for collaborations, questions, or project inquiries.tamangmani012@gmail.com
      </p>

      <Link
        href="/"
        className="mt-6 text-gray-600 hover:text-blue-800 font-medium"
      >
        ← Back to Home
      </Link>
    </main>
  );
}
