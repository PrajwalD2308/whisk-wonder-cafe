"use client";

import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

export default function CartPopup({ onClose }: any) {
  const { cart, totalPrice, increaseQty, decreaseQty, removeFromCart } =
    useCart();

  const phoneNumber = "919876543210"; // 🔥 change

  const generateMessage = () => {
    let msg = "🛒 Order:%0A";

    cart.forEach((item: any) => {
      msg += `${item.name} x${item.quantity} = ₹${
        item.price * item.quantity
      }%0A`;
    });

    msg += `%0ATotal: ₹${totalPrice}`;
    return msg;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0 }}
      className="fixed bottom-24 right-4 md:right-8 w-[90%] max-w-sm bg-white/90 backdrop-blur-xl border border-white/40 rounded-2xl shadow-2xl p-4 z-50"
    >
      {/* HEADER */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-[#5A3E36]">Your Cart</h3>
        <button onClick={onClose} className="text-gray-500 text-sm">
          ✕
        </button>
      </div>

      {/* EMPTY */}
      {cart.length === 0 ? (
        <p className="text-sm text-gray-500 text-center py-4">
          Cart is empty 😔
        </p>
      ) : (
        <>
          {/* ITEMS */}
          <div className="space-y-3 max-h-[200px] overflow-y-auto">
            {cart.map((item: any) => (
              <div
                key={item.id}
                className="flex justify-between items-center text-sm"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-500 text-xs">₹{item.price}</p>
                </div>

                {/* CONTROLS */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-2 bg-gray-200 rounded"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-2 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* TOTAL */}
          <div className="mt-4 border-t pt-2 text-sm font-semibold">
            Total: ₹{totalPrice}
          </div>

          {/* BUTTON */}
          <a
            href={`https://wa.me/${phoneNumber}?text=${generateMessage()}`}
            target="_blank"
            className="block mt-3 w-full text-center bg-green-500 text-white py-2 rounded-full text-sm"
          >
            Order on WhatsApp
          </a>
        </>
      )}
    </motion.div>
  );
}
