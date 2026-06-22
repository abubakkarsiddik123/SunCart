"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src="/navlogo.png"
            alt="logo"
            loading="eager"
            width={40}
            height={40}
            className="object-cover h-auto w-auto"
          />

          <h1 className="text-lg md:text-2xl font-extrabold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent">
            SunCart
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-5 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/product">Products</Link>
            </li>
            <li>
              <Link href="/profile">My Profile</Link>
            </li>
          </ul>

          <ul className="flex items-center gap-4 text-sm">
            <li>
              <Link href="/signup">SignUp</Link>
            </li>
            <li>
              <Link href="/signin">SignIn</Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t py-4">
          <ul className="flex flex-col items-center gap-4 text-sm">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link href="/product" onClick={() => setIsOpen(false)}>
                Products
              </Link>
            </li>

            <li>
              <Link href="/profile" onClick={() => setIsOpen(false)}>
                My Profile
              </Link>
            </li>

            <li>
              <Link href="/signup" onClick={() => setIsOpen(false)}>
                SignUp
              </Link>
            </li>

            <li>
              <Link href="/signin" onClick={() => setIsOpen(false)}>
                SignIn
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;