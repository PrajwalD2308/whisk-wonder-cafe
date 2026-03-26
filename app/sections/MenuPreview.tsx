"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const items = [
  {
    id: 1,
    name: "Dutch Truffle Cake",
    price: 499,
    image:
      "https://i.pinimg.com/736x/66/5a/18/665a18c06bd06e51c6f7cd77bc75f896.jpg",
  },
  {
    id: 2,
    name: "Burger Combo",
    price: 149,
    image:
      "https://i.pinimg.com/736x/2c/00/d7/2c00d7c98f6382ba603d56c5969d73ec.jpg",
  },
  {
    id: 3,
    name: "Veg Bowl",
    price: 129,
    image:
      "https://i.pinimg.com/736x/bb/4e/54/bb4e54b99571345ecf383b922b646460.jpg",
  },
  {
    id: 4,
    name: "Sizzling Brownie",
    price: 150,
    image:
      "https://i.pinimg.com/736x/7b/26/a9/7b26a972c8e80794d937da3edbaf6a2f.jpg",
  },
  {
    id: 5,
    name: "Nutella Waffle",
    price: 150,
    image:
      "https://i.pinimg.com/736x/1b/69/9b/1b699b23fefa95c5d7cd0bab4796a7ba.jpg",
  },
  {
    id: 6,
    name: "Oreo Shake",
    price: 160,
    image:
      "https://i.pinimg.com/736x/70/1c/4d/701c4d84e6b75c75029ccbc542f0ea5b.jpg",
  },
];

export default function PremiumMenuPreview() {
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (id: number) => {
    setCart((prev) => [...prev, id]);
  };

  return (
    <section className="relative py-28 bg-[#fffaf5] overflow-hidden">
      {/* 🌈 BACKGROUND BLOBS */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-yellow-200 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* 🔥 HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#5A3E36] mb-4">
            Popular Menu 🍽️
          </h2>
          <p className="text-gray-600 text-lg">
            Discover our signature delights
          </p>
        </motion.div>

        {/* 🎥 HORIZONTAL PREMIUM SCROLL */}
        <div className="flex gap-10 overflow-x-auto no-scrollbar pb-6">
          {items.map((item) => {
            const added = cart.includes(item.id);

            return (
              <motion.div
                key={item.id}
                whileHover={{ rotateY: 8, rotateX: 5, scale: 1.05 }}
                className="min-w-[280px] md:min-w-[320px] perspective"
              >
                {/* 💎 CARD */}
                <div className="group relative rounded-3xl overflow-hidden bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl hover:shadow-2xl transition duration-500">
                  {/* IMAGE */}
                  <div className="h-[260px] relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />

                    {/* PRICE FLOAT */}
                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-sm font-medium shadow">
                      ₹{item.price}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#5A3E36] mb-4">
                      {item.name}
                    </h3>

                    {/* BUTTONS */}
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => addToCart(item.id)}
                        className={`px-4 py-2 rounded-full text-sm transition ${
                          added
                            ? "bg-green-500 text-white"
                            : "bg-gradient-to-r from-pink-400 to-orange-300 text-white hover:scale-105"
                        }`}
                      >
                        {added ? "Added ✓" : "Add"}
                      </button>

                      <Link href="/menu">
                        <button className="text-sm text-gray-600 hover:text-black transition">
                          View →
                        </button>
                      </Link>
                    </div>
                  </div>

                  {/* ✨ GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-yellow-200 to-orange-200 blur-2xl opacity-30"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 🚀 CTA */}
        <div className="mt-20 text-center">
          <Link href="/menu">
            <button className="px-10 py-4 rounded-full bg-gradient-to-r from-black to-gray-800 text-white shadow-lg hover:scale-105 transition">
              Explore Full Menu →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
