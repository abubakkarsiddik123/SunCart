"use client";

import Link from "next/link";
import Lottie from "lottie-react";
import summerAnimation from "@/assets/lottie/summer-sale.json";
import { FaHotjar, FaShoppingCart, FaSun } from "react-icons/fa";

const Banner = () => {
  return (
    <section className=" bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Content */}
          <div>
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span className="flex items-center gap-1">
                <FaHotjar />
                Hot Deals
              </span>
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="flex items-center gap-2"><FaSun className="text-yellow-500" />
              Summer Sale</span>
              <span className="block text-orange-500">50% OFF</span>
            </h1>

            <p className="mt-5 text-gray-600 text-lg">
              Discover trendy sunglasses, beach accessories, summer outfits,
              skincare products and more.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                href="/product"
                className="px-6 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:scale-105 transition"
              >
                <span className="flex items-center gap-1.5"><FaShoppingCart/> Shop Summer Essentials</span>
              </Link>

              <Link
                href="/"
                className="px-6 py-3 border border-orange-500 text-orange-500 rounded-xl font-semibold"
              >
                Explore Deals
              </Link>
            </div>
          </div>

          {/* Animation */}
          <div className="max-w-md mx-auto">
            <Lottie animationData={summerAnimation} loop />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
