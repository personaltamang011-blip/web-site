"use client";
import Image from "next/image";
import Link from "next/link";

export default function CardsPage() {
  const cards = [
    {
      id: 1,
      title: "Gaming Laptop",
      image: "/images/laptop.jpg",
      description: "High performance laptop for gamers.",
    },
    {
      id: 2,
      title: "Graphics Card",
      image: "/images/gpu.jpg",
      description: "Powerful GPU for rendering and gaming.",
    },
    {
      id: 3,
      title: "Mechanical Keyboard",
      image: "/images/keyboard.jpg",
      description: "Durable keyboard with RGB backlight.",
    },
  ];

  return (
    <main className="pt-24 pb-10 bg-gray-50 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Computer Parts</h1>
        <p className="text-gray-600 text-lg">
          Browse through our high-quality computer components.
        </p>
      </div>

      {/* === Cards Grid === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={400}
              height={250}
              className="rounded-t-2xl object-cover w-full h-52"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* === Back Button === */}
      <div className="flex justify-center mt-10">
        <Link
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
