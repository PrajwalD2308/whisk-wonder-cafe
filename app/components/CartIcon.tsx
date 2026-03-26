"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { useState } from "react";
import CartPopup from "./CartPopup";

export default function CartIcon() {
  const { totalItems } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen((prev) => !prev)}
          className="relative cursor-pointer"
        >
          <div className="bg-gradient-to-r from-pink-400 to-orange-300 text-white p-4 rounded-full shadow-2xl">
            <ShoppingCart size={22} />
          </div>

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold px-2 py-[4px] rounded-full">
              {totalItems}
            </span>
          )}
        </motion.div>
      </div>

      {open && <CartPopup onClose={() => setOpen(false)} />}
    </>
  );
}
