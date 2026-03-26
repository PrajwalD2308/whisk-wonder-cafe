"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    title: "Cakes & Bakery",
    icon: "🍰",
    desc: "Fresh cakes & desserts",
    link: "/menu?category=bakery",
  },
  {
    title: "Fast Food",
    icon: "🍕",
    desc: "Hot & crispy fast food",
    link: "/menu?category=fastfood",
  },
  {
    title: "Pure Veg",
    icon: "🥗",
    desc: "Healthy & hygienic meals",
    link: "/menu?category=veg",
  },
];

export default function Categories() {
  return (
    <section className="py-24 bg-[#FFF6E5]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#5A3E36] mb-4">
          Explore Our Categories
        </h2>
        <p className="text-gray-600 mb-16">
          Premium taste, crafted for every craving
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10">
          {categories.map((item, index) => (
            <TiltCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ item }: any) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={item.link}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.05 }}
        className="relative bg-white rounded-3xl p-8 shadow-xl cursor-pointer transition"
      >
        {/* FLOATING ICON */}
        <motion.div
          style={{ transform: "translateZ(50px)" }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="text-6xl mb-6"
        >
          {item.icon}
        </motion.div>

        {/* TEXT */}
        <div style={{ transform: "translateZ(40px)" }}>
          <h3 className="text-2xl font-semibold text-[#5A3E36] mb-2">
            {item.title}
          </h3>

          <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
        </div>

        {/* MAGNETIC BUTTON */}
        <motion.div
          whileHover={{ x: 5 }}
          style={{ transform: "translateZ(30px)" }}
          className="inline-block text-pink-500 font-medium"
        >
          Explore →
        </motion.div>

        {/* GLOW */}
        <div className="absolute inset-0 rounded-3xl bg-pink-200 opacity-0 hover:opacity-20 blur-2xl transition"></div>
      </motion.div>
    </Link>
  );
}
