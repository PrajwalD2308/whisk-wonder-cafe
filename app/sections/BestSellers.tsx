"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const products = [
  {
    name: "Chocolate Lava Cake",
    price: "₹199",
    image:
      "https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?q=80&w=1200",
  },
  {
    name: "Strawberry Cupcake",
    price: "₹99",
    image:
      "https://images.unsplash.com/photo-1572978577832-287ca6539e9b?q=80&w=1200",
  },
  {
    name: "Loaded Burger",
    price: "₹149",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200",
  },
  {
    name: "Veg Delight Bowl",
    price: "₹129",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200",
  },
];

export default function BestSellers() {
  const ref = useRef(null);

  // 🌊 PARALLAX
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} className="relative py-28 bg-[#fffaf5] overflow-hidden">
      {/* 🌈 PARALLAX BLOBS */}
      <motion.div
        style={{ y }}
        className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-pink-200 rounded-full blur-3xl opacity-40"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 150]) }}
        className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-yellow-200 rounded-full blur-3xl opacity-40"
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* 🔥 HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Best Sellers 🍰
          </h2>
          <p className="text-gray-500 text-lg">
            Crafted with love, served with perfection
          </p>
        </motion.div>

        {/* 🎥 AUTO SCROLL CAROUSEL */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...products, ...products].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ rotateY: 8, rotateX: 5, scale: 1.05 }}
                className="min-w-[280px] md:min-w-[320px] perspective"
              >
                {/* CARD */}
                <div className="group relative rounded-3xl overflow-hidden bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl hover:shadow-2xl transition duration-500">
                  {/* IMAGE */}
                  <div className="h-[300px] relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/10 to-transparent"></div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {item.name}
                    </h3>

                    <p className="text-gray-500 mb-4">{item.price}</p>

                    <button className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-400 to-orange-300 text-white text-sm font-medium shadow-md hover:scale-105 transition">
                      Order Now →
                    </button>
                  </div>

                  {/* ✨ GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-yellow-200 to-orange-200 blur-2xl opacity-30"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
