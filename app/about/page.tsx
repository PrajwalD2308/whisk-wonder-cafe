"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Award, Coffee, Users } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Made with Love",
      desc: "Every item is crafted with passion and care",
    },
    {
      icon: Award,
      title: "Quality First",
      desc: "Only premium ingredients used",
    },
    {
      icon: Coffee,
      title: "Cozy Experience",
      desc: "Warm & welcoming vibe",
    },
    {
      icon: Users,
      title: "Community",
      desc: "Loved by Amravati locals",
    },
  ];

  return (
    <div className="bg-[#FFF6E5] text-[#5A3E36]">
      {/* 🔥 HERO */}
      <section className="relative h-[80vh] flex items-center justify-center text-center">
        <Image
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600"
          alt="Cafe"
          fill
          className="object-cover brightness-[0.6]"
        />

        <div className="relative z-10 text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Our Story 🍰
          </motion.h1>

          <p className="mt-4 text-lg">Where every bite feels like home</p>
        </div>
      </section>

      {/* 🧁 STORY */}
      <section className="py-20 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1200"
            alt="Bakery"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-4xl font-bold mb-4">Welcome to Whisk & Wonder</h2>

          <p className="text-gray-600 mb-4">
            Founded in Amravati, our journey started with a simple dream — to
            create desserts that feel magical.
          </p>

          <p className="text-gray-600">
            From handcrafted cakes to cozy coffee moments, every experience here
            is made with love ❤️
          </p>
        </motion.div>
      </section>

      {/* 💎 VALUES */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Our Values</h2>
          <p className="text-gray-500">What makes us special</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#FFF6E5] p-6 rounded-3xl shadow-md hover:shadow-xl transition text-center"
            >
              <v.icon className="mx-auto mb-4" size={32} />
              <h3 className="font-semibold text-lg">{v.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✨ MISSION */}
      <section className="py-20 px-4 text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-6"
        >
          Our Mission
        </motion.h2>

        <p className="text-gray-600 mb-8">
          To bring people together through delicious food and warm experiences.
        </p>

        <div className="bg-gradient-to-r from-[#F8D7DA] to-[#FFF6E5] p-8 rounded-3xl shadow-md">
          <p className="text-xl italic">
            `&quot;`Baking is love made visible.`&quot;`
          </p>
        </div>
      </section>

      {/* 👩‍🍳 TEAM */}
      <section className="py-20 px-4 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our Team</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              name: "Chef Priya",
              role: "Head Baker",
              img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800",
            },
            {
              name: "Rahul",
              role: "Pastry Chef",
              img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800",
            },
            {
              name: "Anjali",
              role: "Manager",
              img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800",
            },
          ].map((m, i) => (
            <motion.div
              key={m.name}
              whileHover={{ scale: 1.05 }}
              className="rounded-3xl overflow-hidden shadow-lg text-center"
            >
              <div className="relative h-72">
                <Image src={m.img} alt={m.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{m.name}</h3>
                <p className="text-sm text-gray-500">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
