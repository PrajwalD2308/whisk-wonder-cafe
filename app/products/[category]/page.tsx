"use client";

import { useParams } from "next/navigation";
import { productsData } from "../../data/productsData";
import Image from "next/image";
import { motion } from "framer-motion";

// ✅ TYPES
type ProductsData = typeof productsData;
type Category = keyof ProductsData;

type ProductItem = {
  id: number;
  name: string;
  image: string;
};

export default function ProductCategoryPage() {
  const params = useParams();

  // ✅ SAFE CATEGORY
  const categoryParam = params.category as string;

  let items: ProductItem[] = [];

  if (categoryParam && categoryParam in productsData) {
    const category = categoryParam as Category;
    items = productsData[category];
  }

  return (
    <div className="bg-[#FFF6E5] min-h-screen">
      {/* HERO */}
      <div className="h-[200px] bg-gradient-to-r from-pink-200 to-pink-100 flex items-center justify-center">
        <h1 className="text-3xl font-bold capitalize text-[#5A3E36]">
          {categoryParam}
        </h1>
      </div>

      {/* EMPTY STATE */}
      {items.length === 0 && (
        <p className="text-center mt-10 text-gray-500">No items found 😔</p>
      )}

      {/* ITEMS */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <div className="relative h-40">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4 text-center">
              <h3 className="font-medium">{item.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
