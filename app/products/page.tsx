"use client";

import Link from "next/link";
import { productsData } from "../data/productsData";
import { motion } from "framer-motion";

export default function ProductsPage() {
  const categories = Object.keys(productsData);

  return (
    <div className="bg-[#FFF6E5] min-h-screen px-4 py-16">
      {/* HERO */}
      <h1 className="text-4xl font-bold text-center text-[#5A3E36] mb-10">
        Our Products 🎁
      </h1>

      {/* GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link href={`/products/${cat}`}>
              <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition cursor-pointer">
                <h2 className="font-semibold capitalize text-lg">{cat}</h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
