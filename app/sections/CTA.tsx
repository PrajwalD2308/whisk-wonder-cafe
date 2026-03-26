"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PremiumCTA() {
  return (
    <section className="relative py-32 bg-[#fffaf5] overflow-hidden text-center">
      {/* 🌈 BACKGROUND BLOBS */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-yellow-200 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* 💎 GLASS BOX */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-12 shadow-2xl"
        >
          {/* 🔥 HEADING */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#5A3E36] mb-6 leading-tight">
            Ready to Experience Something Exceptional?
          </h2>

          {/* SUBTEXT */}
          <p className="text-gray-600 mb-10 text-lg md:text-xl">
            Freshly crafted delights, delivered with perfection. Indulge in
            taste that speaks luxury.
          </p>

          {/* 🎯 BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <button className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-400 to-orange-300 text-white font-semibold shadow-lg hover:scale-105 transition">
                Order Now →
              </button>
            </Link>

            <Link href="/contact">
              <button className="px-10 py-4 rounded-full border border-gray-300 text-[#5A3E36] hover:bg-[#5A3E36] hover:text-white transition">
                Visit Us →
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
