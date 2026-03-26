"use client";

import { QRCodeCanvas } from "qrcode.react";
import Image from "next/image";

export default function MenuQRPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF6E5] px-4">
      {/* 💎 MAIN CARD */}
      <div className="bg-white rounded-3xl shadow-xl border border-[#F8D7DA] px-6 py-8 w-full max-w-sm text-center">
        {/* 🔥 HEADER */}
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/logo.png"
            alt="Whisk & Wonder Cafe"
            width={120}
            height={80}
            className="mb-3 object-contain"
            priority
          />

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#5A3E36]/70">
            Scan Menu
          </p>

          <h1 className="text-lg font-bold text-[#5A3E36] mt-1">
            Whisk & Wonder Cafe
          </h1>

          <p className="text-xs text-[#5A3E36]/70 mt-1">
            Fresh • Handmade • Delicious
          </p>
        </div>

        {/* 📱 QR CODE */}
        <div className="flex justify-center mb-6 p-4 bg-[#FFF6E5] rounded-2xl border border-[#F8D7DA]">
          <QRCodeCanvas
            value="http://localhost:3000/menuCard" // 🔥 change to domain later
            size={200}
            bgColor="#FFF6E5"
            fgColor="#5A3E36"
            level="H"
          />
        </div>

        {/* ✨ INFO */}
        <div className="space-y-2">
          <p className="text-sm font-semibold text-[#5A3E36]">
            No App Required 📱
          </p>

          <p className="text-xs text-gray-500">
            Scan to explore menu & order instantly
          </p>
        </div>

        {/* 🍰 EXTRA TOUCH */}
        <p className="mt-6 text-[11px] text-gray-400">
          Made with love & fresh ingredients ❤️
        </p>
      </div>
    </div>
  );
}
