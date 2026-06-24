import React from "react";
import ProductCard from "./ProductCard";
import { FaFire } from "react-icons/fa";

const PopularProducts = async () => {
  const res = await fetch("https://suncart-server-955i.onrender.com");
  const products = await res.json();
  const topProducts = products.slice(0, 3);
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-orange-500 flex items-center justify-center gap-2">
            <FaFire className="text-red-500 text-3xl" />
            Popular Products
          </h2>

          <p className="text-gray-600 mt-2">
            Trending summer essentials loved by our customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {topProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
