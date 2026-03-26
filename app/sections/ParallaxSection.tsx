"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PremiumStorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 🌊 BACKGROUND PARALLAX
      gsap.to(".bg-layer", {
        scale: 1.1,
        y: 80,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // ✨ TEXT REVEAL
      gsap.from(".text-layer", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // 💎 FLOAT ELEMENTS
      gsap.to(".float-1", {
        y: 40,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
      });

      gsap.to(".float-2", {
        y: -40,
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[110vh] overflow-hidden flex items-center justify-center bg-[#fffaf5]"
    >
      {/* 🌈 BACKGROUND */}
      <div className="bg-layer absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1920"
          alt="Premium Food"
          fill
          className="object-cover opacity-80"
        />
      </div>

      {/* SOFT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent" />

      {/* 🌊 FLOATING BLURS */}
      <div className="float-1 absolute top-20 left-20 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-40"></div>
      <div className="float-2 absolute bottom-20 right-20 w-40 h-40 bg-yellow-200 rounded-full blur-3xl opacity-40"></div>

      {/* 💎 CONTENT */}
      <div className="text-layer relative z-10 text-center px-4 max-w-3xl">
        <h2 className="text-4xl md:text-6xl font-bold text-[#5A3E36] mb-6 leading-tight">
          Crafted With Passion 🍰
        </h2>

        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Every bite tells a story of freshness, elegance, and love. We don’t
          just serve food — we create experiences.
        </p>

        {/* ✨ GLASS BUTTON */}
        <Link href="/menuCard">
          <button className="px-8 py-4 rounded-full bg-white/70 backdrop-blur-xl border border-white/40 text-[#5A3E36] font-medium shadow-lg hover:scale-105 transition">
            Explore Our Menu →
          </button>
        </Link>
      </div>
    </section>
  );
}
