"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    title: "Delicious Cakes & Bakery",
    subtitle: "Freshly baked cupcakes, cakes & desserts made with love",
    image:
      "https://images.unsplash.com/photo-1572978577832-287ca6539e9b?q=80&w=1920",
  },
  {
    title: "Hot & Tasty Fast Food",
    subtitle: "Pizza, burgers & snacks served fresh and hot",
    image:
      "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=1920",
  },
  {
    title: "100% Pure Veg & Handmade",
    subtitle: "Healthy, hygienic and handcrafted with premium ingredients",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1920",
  },
];

export default function PremiumHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 🎥 BACKGROUND */}
      <AnimatePresence>
        {slides.map(
          (slide, index) =>
            current === index && (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0"
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                  }}
                />

                {/* 🌈 PREMIUM OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </motion.div>
            ),
        )}
      </AnimatePresence>

      {/* 💎 CONTENT */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 shadow-xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {slides[current].title}
            </h1>

            <p className="text-lg md:text-xl text-gray-200 mb-8">
              {slides[current].subtitle}
            </p>

            {/* 🎯 BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/menu">
                <button className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-400 to-orange-300 text-white font-semibold shadow-lg hover:scale-105 transition">
                  Explore Menu →
                </button>
              </Link>

              <Link href="/contact">
                <button className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-black transition">
                  Visit Us →
                </button>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 👇 SCROLL INDICATOR */}
      <div className="absolute bottom-8 flex flex-col items-center text-white">
        <span className="text-sm mb-2 opacity-70">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-9 border-2 border-white rounded-full flex justify-center"
        >
          <div className="w-1 h-2 bg-white mt-2 rounded-full"></div>
        </motion.div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 flex gap-3">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
