"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  //   Instagram,
  //   Facebook,
  X,
  Send,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#5A3E36] text-white mt-24">
      {/* TOP CTA SECTION */}
      <div className="bg-gradient-to-r from-pink-200 to-pink-100 text-black py-10 text-center px-4">
        <h2 className="text-2xl md:text-4xl font-bold mb-3">
          Craving something delicious? 😋
        </h2>
        <p className="mb-5 text-sm md:text-base">
          Order now and enjoy freshly made treats at your doorstep
        </p>
        <Link href="/menuCard">
          <button className="px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition">
            Explore Menu
          </button>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* LOGO */}
          <div>
            <Image
              src="/logo.png"
              alt="Cafe Logo"
              width={90}
              height={90}
              className="mb-4 bg-white rounded-full "
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              Where every dessert feels like magic ✨ Fresh, delicious & made
              with love.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {["Home", "Menu", "Products", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="text-gray-300 hover:text-pink-300 transition hover:translate-x-1 inline-block"
                  >
                    → {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin size={18} />
                <span>Gadge Nagar, Amravati</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} />
                <span>+91 9923456780</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} />
                <span>info@cafe.com</span>
              </li>
            </ul>
          </div>

          {/* NEWSLETTER + SOCIAL */}
          <div>
            <h3 className="mb-4 font-semibold text-lg">Stay Updated</h3>

            {/* EMAIL INPUT */}
            <div className="flex items-center bg-white/10 rounded-full overflow-hidden mb-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-4 py-2 text-sm w-full outline-none text-white placeholder-gray-300"
              />
              <button className="bg-pink-300 text-black px-4 py-2 hover:bg-white transition">
                <Send size={18} />
              </button>
            </div>

            {/* SOCIAL ICONS */}
            {/* <div className="flex gap-4">
              {[Facebook, Instagram, X].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-white/10 p-3 rounded-full hover:bg-pink-300 hover:text-black transition transform hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div> */}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-1">
          <p>© 2026 Cute Cafe. All rights reserved.</p>

          <div className="flex gap-4">
            <Link href="#" className="hover:text-pink-300 transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-pink-300 transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
