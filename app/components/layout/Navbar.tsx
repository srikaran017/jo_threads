"use client";

import Link from "next/link";
import {
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
} from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Products",
    href: "/products",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link href="/" className="group">
          <h1 className="text-xl font-semibold tracking-[0.15em] text-black transition duration-300 group-hover:opacity-80 sm:text-2xl">
            Jo Threads
          </h1>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="group relative text-[11px] font-medium uppercase tracking-[0.25em] text-black/70 transition hover:text-black"
              >
                {item.name}

                <span className="absolute -bottom-2 left-0 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-1 sm:gap-2">

          {/* SEARCH */}
          <button className="rounded-full p-2.5 text-black/70 transition duration-300 hover:bg-black/5 hover:text-black">
            <Search className="h-5 w-5" />
          </button>

          {/* CART */}
          <button className="relative rounded-full p-2.5 text-black/70 transition duration-300 hover:bg-black/5 hover:text-black">
            <ShoppingBag className="h-5 w-5" />

            <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white">
              0
            </span>
          </button>

          {/* WISHLIST */}
          <button className="hidden rounded-full p-2.5 text-black/70 transition duration-300 hover:bg-black/5 hover:text-black sm:flex">
            <Heart className="h-5 w-5" />
          </button>

          {/* USER */}
          <button className="hidden rounded-full p-2.5 text-black/70 transition duration-300 hover:bg-black/5 hover:text-black md:flex">
            <User className="h-5 w-5" />
          </button>

          {/* MOBILE MENU */}
          <button className="rounded-full p-2.5 text-black/70 transition duration-300 hover:bg-black/5 hover:text-black lg:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>
    </header>
  );
}
