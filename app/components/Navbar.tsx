"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

interface DropdownItem {
  title: string;
  items: { name: string; link: string }[];
}

const menuDropdown: DropdownItem[] = [
  {
    title: "Cakes",
    items: [
      { name: "Birthday Cakes", link: "/menu?category=bakery&sub=cakes" },
      { name: "Wedding Cakes", link: "/menu?category=bakery&sub=cakes" },
      { name: "Photo Cakes", link: "/menu?category=bakery&sub=cakes" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Pastries", link: "/menu?category=bakery&sub=pastry" },
      { name: "Waffles", link: "/menu?category=bakery&sub=desserts" },
      { name: "Donuts", link: "/menu?category=bakery&sub=desserts" },
      { name: "Brownies", link: "/menu?category=bakery&sub=desserts" },
    ],
  },
  {
    title: "Cafe Drinks",
    items: [
      { name: "Hot Beverages", link: "/menu?category=cafe&sub=drinks" },
      { name: "Cold Beverages", link: "/menu?category=cafe&sub=drinks" },
      { name: "Shakes", link: "/menu?category=cafe&sub=drinks" },
    ],
  },
  {
    title: "Fast Food",
    items: [
      { name: "Pizza", link: "/menu?category=cafe&sub=pizza" },
      { name: "Burgers", link: "/menu?category=cafe&sub=burgers" },
      { name: "Sandwich", link: "/menu?category=cafe&sub=sandwich" },
      { name: "Pasta", link: "/menu?category=cafe&sub=pasta" },
      { name: "Snacks", link: "/menu?category=cafe&sub=snacks" },
    ],
  },
];

const productsDropdown: DropdownItem[] = [
  {
    title: "Products",
    items: [
      { name: "Snacks", link: "/products/snacks" },
      { name: "Cookies", link: "/products/cookies" },
      { name: "Accomplishments", link: "/products/accomplishments" },
      { name: "Hampers", link: "/products/hampers" },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null); // ✅ NEW

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu", dropdown: menuDropdown },
    { name: "Products", path: "/products", dropdown: productsDropdown },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
        {/* LOGO */}
        <Link href="/">
          <Image src="/logo.png" alt="Cafe Logo" width={120} height={60} />
        </Link>

        {/* DESKTOP (UNCHANGED) */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.path}
                className="text-gray-700 hover:text-[#5A3E36]"
              >
                {link.name}
              </Link>

              <AnimatePresence>
                {link.dropdown && activeDropdown === link.name && (
                  <motion.div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white shadow-2xl rounded-2xl p-6 w-[450px] border">
                    <div className="grid grid-cols-2 gap-6">
                      {link.dropdown.map((section) => (
                        <div key={section.title}>
                          <h3 className="font-semibold mb-2">
                            {section.title}
                          </h3>
                          {section.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.link}
                              className="block text-sm"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* 🔥 PREMIUM MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            className="md:hidden bg-white/95 backdrop-blur-xl shadow-xl px-5 py-6 space-y-4"
          >
            {navLinks.map((link) => (
              <div key={link.name}>
                {/* MAIN LINK */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() =>
                    link.dropdown
                      ? setOpenAccordion(
                          openAccordion === link.name ? null : link.name,
                        )
                      : setIsMobileMenuOpen(false)
                  }
                >
                  <Link
                    href={link.path}
                    className="text-lg font-medium text-[#5A3E36]"
                  >
                    {link.name}
                  </Link>

                  {link.dropdown && (
                    <ChevronDown
                      size={18}
                      className={`transition ${
                        openAccordion === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* ACCORDION */}
                <AnimatePresence>
                  {link.dropdown && openAccordion === link.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="ml-4 mt-3 space-y-2"
                    >
                      {link.dropdown.map((section) => (
                        <div key={section.title}>
                          <p className="text-sm font-semibold text-gray-500">
                            {section.title}
                          </p>

                          {section.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.link}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block text-sm text-gray-600"
                            >
                              • {item.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
