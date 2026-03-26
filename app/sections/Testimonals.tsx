"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rohit Patil",
    text: "Best cakes in Amravati, taste is just amazing!",
  },
  {
    name: "Sneha Deshmukh",
    text: "Loved the ambience and desserts, totally worth it ❤️",
  },
  {
    name: "Amit Wankhede",
    text: "Burger and pizza both were fresh and tasty!",
  },
  {
    name: "Pooja Kale",
    text: "Pure veg options are really good and hygienic.",
  },
  {
    name: "Rahul Shinde",
    text: "Fast service and great quality, highly recommend.",
  },
  {
    name: "Neha Joshi",
    text: "Cupcakes are my favorite here, super soft and fresh!",
  },
];

export default function PremiumTestimonials() {
  return (
    <section className="relative py-28 bg-[#fffaf5] overflow-hidden">
      {/* 🌈 BACKGROUND BLOBS */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-yellow-200 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        {/* 🔥 HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#5A3E36] mb-4">
          What Our Customers Say 💬
        </h2>
        <p className="text-gray-600 mb-16 text-lg">
          Real love from our happy customers
        </p>

        {/* 🎥 AUTO SCROLL */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...reviews, ...reviews].map((review, index) => (
              <div key={index} className="group min-w-[280px] md:min-w-[340px]">
                {/* 💎 CARD */}
                <div className="relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition duration-500">
                  {/* ⭐ STARS */}
                  <div className="flex mb-3 text-yellow-400 text-sm">
                    ⭐⭐⭐⭐⭐
                  </div>

                  {/* TEXT */}
                  <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                    “{review.text}”
                  </p>

                  {/* USER */}
                  <div className="flex items-center gap-3">
                    {/* AVATAR */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-300 to-orange-200 flex items-center justify-center text-white font-bold">
                      {review.name.charAt(0)}
                    </div>

                    {/* NAME */}
                    <h4 className="text-[#5A3E36] font-semibold">
                      {review.name}
                    </h4>
                  </div>

                  {/* ✨ GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-yellow-200 to-orange-200 blur-2xl opacity-30"></div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
