"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ChevronDown } from "lucide-react";

export default function ContactPage() {
  const [open, setOpen] = useState<number | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactInfo = [
    { icon: MapPin, title: "Location", value: "Gadge Nagar, Amravati" },
    { icon: Phone, title: "Phone", value: "+91 9923456780" },
    { icon: Mail, title: "Email", value: "info@cafe.com" },
    { icon: Clock, title: "Open", value: "9 AM - 9 PM" },
  ];

  return (
    <div className="bg-[#FFF6E5] text-[#5A3E36]">
      {/* 🔥 HERO */}
      <section className="relative h-[70vh] flex items-center justify-center text-center">
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
            Get in Touch ☕
          </motion.h1>
          <p className="mt-4">We’d love to hear from you</p>
        </div>
      </section>

      {/* 💎 CONTACT CARDS */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
        {contactInfo.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-3xl p-6 text-center shadow-md hover:shadow-xl transition"
          >
            <c.icon className="mx-auto mb-3" size={28} />
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-sm text-gray-500">{c.value}</p>
          </motion.div>
        ))}
      </section>

      {/* ✨ FORM + MAP */}
      <section className="py-20 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-3xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6">Send Message</h2>

          <form className="space-y-5">
            <input
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-[#FFF6E5] outline-none"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Email"
              className="w-full px-4 py-3 rounded-xl bg-[#FFF6E5] outline-none"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <textarea
              rows={5}
              placeholder="Message"
              className="w-full px-4 py-3 rounded-xl bg-[#FFF6E5] outline-none"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            <button className="w-full bg-[#5A3E36] text-white py-3 rounded-full hover:bg-pink-300 hover:text-[#5A3E36] transition">
              Send Message
            </button>
          </form>
        </motion.div>

        {/* MAP */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="rounded-3xl overflow-hidden shadow-lg"
        >
          <iframe
            src="https://www.google.com/maps?q=Gadge%20Nagar%20Amravati&output=embed"
            className="w-full h-[400px]"
          />
        </motion.div>
      </section>

      {/* ❓ FAQ (ACCORDION 🔥) */}
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">FAQs</h2>

        {[
          {
            q: "Do you take custom cake orders?",
            a: "Yes! Order 3–5 days in advance.",
          },
          {
            q: "Do you offer delivery?",
            a: "Yes within Amravati.",
          },
          {
            q: "Are items vegetarian?",
            a: "Mostly yes, we mark egg items.",
          },
        ].map((item, i) => (
          <div key={i} className="mb-4">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex justify-between items-center bg-white p-4 rounded-xl shadow"
            >
              {item.q}
              <ChevronDown
                className={`transition ${open === i ? "rotate-180" : ""}`}
              />
            </button>

            {open === i && (
              <div className="bg-[#FFF6E5] p-4 rounded-b-xl text-sm text-gray-600">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
