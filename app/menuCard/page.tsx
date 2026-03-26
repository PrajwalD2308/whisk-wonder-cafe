"use client";

import { useState } from "react";
import Image from "next/image";
import { menuData } from "../data/menuData";

// ✅ TYPES
type MenuItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  desc: string;
  features?: string[];
};

export default function MenuCardPage() {
  const [search, setSearch] = useState("");

  // ✅ RECURSIVE FUNCTION (TYPED)
  const extractItems = (data: unknown): MenuItem[] => {
    let result: MenuItem[] = [];

    if (!data) return result;

    if (Array.isArray(data)) {
      return data as MenuItem[];
    }

    if (typeof data === "object") {
      Object.values(data).forEach((value) => {
        result.push(...extractItems(value));
      });
    }

    return result;
  };

  const allItems: MenuItem[] = extractItems(menuData);

  // ✅ SEARCH FILTER (SAFE)
  const filtered = allItems.filter(
    (item) =>
      item?.name && item.name.toLowerCase().includes(search.toLowerCase()),
  );

  const displayItems = search ? filtered : allItems;

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#FFF6E5] px-4 py-6">
      <div className="w-full max-w-md rounded-3xl bg-white shadow-xl border border-[#F8D7DA] p-5">
        {/* HEADER */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <Image
              src="/logo.png"
              alt="Cafe"
              width={160}
              height={100}
              className="object-contain"
            />
          </div>

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#5A3E36]/70">
            Menu
          </p>

          <h1 className="text-2xl font-bold text-[#5A3E36] mt-1">
            Whisk & Wonder Cafe
          </h1>

          <p className="text-sm text-[#5A3E36]/70 mt-1">
            Fresh • Handmade • Delicious
          </p>
        </div>

        {/* SEARCH */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search cakes, coffee..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full px-4 py-2 text-sm bg-[#FFF6E5] border border-[#F8D7DA] outline-none focus:ring-2 focus:ring-pink-200"
          />
        </div>

        {/* MENU LIST */}
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
          {displayItems.length === 0 ? (
            <p className="text-center text-sm text-gray-500">
              No items found 😕
            </p>
          ) : (
            displayItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex justify-between items-center gap-3 bg-[#FFF6E5] border border-[#F8D7DA] rounded-xl p-3 hover:shadow-md transition"
              >
                {/* LEFT */}
                <div className="flex gap-3 items-center">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#5A3E36]">
                      {item.name}
                    </p>

                    <p className="text-[11px] text-gray-500">{item.desc}</p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="text-right">
                  <p className="text-sm font-bold text-[#5A3E36]">
                    ₹{item.price}
                  </p>

                  <button className="text-xs bg-pink-200 text-[#5A3E36] px-3 py-1 rounded-full hover:bg-pink-300 transition">
                    Add
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* FOOTER */}
        <p className="mt-6 text-center text-[11px] text-gray-500">
          * Made with love & fresh ingredients ❤️
        </p>
      </div>
    </section>
  );
}
