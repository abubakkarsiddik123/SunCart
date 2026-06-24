"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-2">
      <nav className="flex justify-between items-center py-3 container mx-auto w-full">
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
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <ul className="flex items-center gap-5 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/profile">My Profile</Link>
            </li>
          </ul>
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex gap-4">
          {!user && (
            <ul className="flex items-center gap-4 text-sm">
              <li>
                <Link href="/logout">Register</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
            </ul>
          )}
          {user && (
            <div className="flex gap-2">
              <Link href="/profile">
                <Avatar size="sm">
                  <Avatar.Image
                    alt={user?.name}
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
              </Link>
              <Button onClick={handleSignOut} size="sm" variant="danger">
                Logout
              </Button>
            </div>
          )}
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
