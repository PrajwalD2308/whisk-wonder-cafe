"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { menuData } from "../data/menuData";
import Image from "next/image";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import toast from "react-hot-toast";

export default function MenuPage() {
  const params = useSearchParams();

  const [main, setMain] = useState("bakery");
  const [sub, setSub] = useState("");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<any>(null);

  const { addToCart } = useCart();

  // ✅ ROUTE HANDLING
  useEffect(() => {
    const category = params.get("category");
    const subCategory = params.get("sub");

    if (category && menuData[category]) {
      setMain(category);
    }

    if (subCategory) {
      setSub(subCategory);
    }
  }, [params]);

  // ✅ FLATTEN (WORKS FOR ALL LEVELS)
  const flatten = (obj: any): any[] => {
    if (!obj) return [];
    return Object.values(obj).flatMap((val: any) =>
      Array.isArray(val) ? val : flatten(val),
    );
  };

  const allItems = flatten(menuData);

  // ✅ SAFE SEARCH
  const searchResults = allItems.filter(
    (item: any) =>
      item?.name && item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const currentSections = menuData[main] || {};
  const subCategories = Object.keys(currentSections || {});

  const getItems = () => {
    if (search) return searchResults;

    if (!currentSections) return [];

    if (sub && currentSections[sub]) {
      const section = currentSections[sub];
      return Array.isArray(section) ? section : flatten(section);
    }

    return flatten(currentSections);
  };

  const items = getItems();

  return (
    <div className="bg-[#fffaf5] min-h-screen">
      {/* 🔥 PREMIUM HERO */}
      <section className="relative py-20 text-center overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-yellow-200 rounded-full blur-3xl opacity-40"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-3xl mx-auto px-4"
        >
          <div className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-10 shadow-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#5A3E36]">
              Explore Our Menu
            </h1>
            <p className="text-gray-600 mt-3 text-lg">
              Freshly made • Premium taste • Crafted with love
            </p>
          </div>
        </motion.div>
      </section>

      {/* 🔍 SEARCH */}
      <div className="max-w-4xl mx-auto px-4 mt-6">
        <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2">
          <Search size={18} className="text-gray-400" />
          <input
            placeholder="Search cakes, coffee, pizza..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 outline-none"
          />
        </div>
      </div>

      {/* 🍰 MAIN CATEGORY */}
      {!search && (
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          {["bakery", "cafe"].map((c) => (
            <button
              key={c}
              onClick={() => {
                setMain(c);
                setSub("");
              }}
              className={`px-5 py-2 rounded-full transition ${
                main === c ? "bg-[#5A3E36] text-white" : "bg-white border"
              }`}
            >
              {c === "bakery" ? "🍰 Bakery" : "☕ Cafe"}
            </button>
          ))}
        </div>
      )}

      {/* 🧁 SUB CATEGORY */}
      {!search && (
        <div className="flex justify-center gap-3 mt-4 flex-wrap">
          {subCategories.map((s) => (
            <button
              key={s}
              onClick={() => setSub(s)}
              className={`px-4 py-1 rounded-full text-sm capitalize ${
                sub === s ? "bg-pink-300 text-[#5A3E36]" : "bg-white border"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* 💎 TITLE */}
      <h2 className="text-center text-2xl font-bold mt-10 text-[#5A3E36] capitalize">
        {search ? "Search Results" : sub || main}
      </h2>

      {/* ❌ EMPTY */}
      {items.length === 0 && (
        <p className="text-center mt-10 text-gray-500">No items found 😔</p>
      )}

      {/* 🔥 GRID */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((item: any, i: number) => (
          <motion.div
            key={`${item.id}-${i}`} // ✅ FIXED
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="group relative rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            {/* IMAGE */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />

              {/* BUTTONS */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                <button
                  onClick={() => {
                    addToCart(item);
                    toast.success(`${item.name} added`);
                  }}
                  className="bg-white text-black px-4 py-1 rounded-full text-sm"
                >
                  Add
                </button>

                <button
                  onClick={() => setSelected(item)}
                  className="bg-pink-400 text-white px-4 py-1 rounded-full text-sm"
                >
                  View
                </button>
              </div>
            </div>

            {/* INFO */}
            <div className="p-4 text-center">
              <h3 className="font-semibold text-[#5A3E36] text-lg">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">{item.desc}</p>

              <p className="font-bold mt-2 text-[#5A3E36]">₹{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🔥 MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-md w-full p-6"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold mb-2">{selected.name}</h2>

              <p className="text-gray-600 mb-3">{selected.desc}</p>

              <ul className="text-sm mb-4">
                {selected.features?.map((f: string, i: number) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>

              <p className="font-bold mb-4">₹{selected.price}</p>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    addToCart(selected);
                    toast.success(`${selected.name} added`);
                  }}
                  className="flex-1 bg-[#5A3E36] text-white py-2 rounded-full"
                >
                  Add to Cart
                </button>

                <button
                  onClick={() => setSelected(null)}
                  className="flex-1 border py-2 rounded-full"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
