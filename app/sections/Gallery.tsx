"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200",
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1200",
  "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200",
  "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200",
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200",
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1200",
];

export default function PremiumGallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="relative py-28 bg-[#fffaf5] overflow-hidden">
      {/* 🌈 BACKGROUND BLOBS */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-yellow-200 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        {/* 🔥 HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#5A3E36] mb-4">
          Our Gallery 📸
        </h2>
        <p className="text-gray-600 mb-16 text-lg">
          A glimpse of our delicious creations
        </p>

        {/* 🎥 MASONRY GRID */}
        <div className="columns-2 md:columns-3 gap-6 space-y-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl break-inside-avoid"
              onClick={() => setSelected(img)}
            >
              <Image
                src={img}
                alt="gallery"
                width={500}
                height={600}
                className="w-full h-auto object-cover group-hover:scale-110 transition duration-700"
              />

              {/* ✨ PREMIUM OVERLAY */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-[#5A3E36] font-medium">View Image →</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🚀 CTA */}
        <div className="mt-20">
          <a
            href="#"
            className="px-10 py-4 rounded-full bg-gradient-to-r from-black to-gray-800 text-white shadow-lg hover:scale-105 transition"
          >
            Follow us on Instagram →
          </a>
        </div>
      </div>

      {/* 🔍 MODAL VIEW */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div className="relative w-[90%] max-w-4xl">
            <Image
              src={selected}
              alt="preview"
              width={1200}
              height={800}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}
