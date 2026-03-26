"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  animate,
  useScroll,
  useTransform,
} from "framer-motion";
import { Heart, Award, Users, Sparkles, LucideIcon } from "lucide-react";

// ✅ TYPE
type StatItem = {
  label: string;
  value: number;
  icon: LucideIcon;
};

const stats: StatItem[] = [
  { label: "Happy Customers", value: 5000, icon: Users },
  { label: "Orders Delivered", value: 12000, icon: Award },
  { label: "5 Star Reviews", value: 3500, icon: Heart },
  { label: "Years Experience", value: 5, icon: Sparkles },
];

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement | null>(null);

  // 🌊 PARALLAX
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 100]);

  return (
    <section
      ref={ref}
      className="relative py-28 bg-gradient-to-b from-white to-[#FFF6E5] overflow-hidden"
    >
      {/* BLOBS */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-pink-200 rounded-full blur-3xl opacity-40"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-yellow-200 rounded-full blur-3xl opacity-40"
      />

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#5A3E36] mb-4">
            Why Choose Us ✨
          </h2>
          <p className="text-gray-600 text-lg">
            Trusted by thousands, loved for quality & taste
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
        >
          {stats.map((item, index) => (
            <StatCard key={index} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ================= STAT CARD ================= */

type StatCardProps = {
  item: StatItem;
};

function StatCard({ item }: StatCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, item.value, {
        duration: 2.2,
        ease: "easeOut",
      });

      const unsubscribe = count.on("change", (latest) => {
        setDisplay(Math.floor(latest));
      });

      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isInView, item.value, count]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
      }}
      transition={{ duration: 0.5 }}
      className="relative group perspective"
    >
      {/* GLOW */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-300 via-orange-200 to-yellow-200 blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* CARD */}
      <div className="relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500">
        {/* ICON */}
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="mb-4 flex justify-center"
        >
          <item.icon className="text-[#5A3E36]" size={42} />
        </motion.div>

        {/* NUMBER */}
        <h3 className="text-3xl font-bold text-[#5A3E36]">{display}+</h3>

        {/* LABEL */}
        <p className="text-gray-600 text-sm mt-2">{item.label}</p>
      </div>
    </motion.div>
  );
}
