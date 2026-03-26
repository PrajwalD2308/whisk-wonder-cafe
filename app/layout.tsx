"use client";

import "./globals.css";
import { usePathname } from "next/navigation";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartIcon from "./components/CartIcon";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // 👇 Routes where you DON'T want navbar/footer
  const hideLayout =
    pathname === "/menu/qr" || pathname.startsWith("/menuCard");

  return (
    <html lang="en">
      <body>
        <CartProvider>
          {!hideLayout && <CartIcon />}
          {!hideLayout && <Navbar />}

          {children}

          {!hideLayout && <Footer />}
        </CartProvider>
      </body>
    </html>
  );
}
