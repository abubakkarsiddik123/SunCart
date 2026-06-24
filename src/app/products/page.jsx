
import ProductCard from "@/components/ProductCard";
import { FaShoppingBag } from "react-icons/fa";

export const metadata = {
  title: "Products | SunCart",
  description:
    "Browse all summer essentials including sunglasses, beachwear, skincare products, and accessories.",
};

const ProductsPage = async () => {
  const res = await fetch("https://suncart-server-955i.onrender.com");
  const products = await res.json();
  return (
    <section className="py-16 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500 flex items-center justify-center gap-3">
            <FaShoppingBag className="text-orange-500" />
            All Products
          </h1>

          <p className="text-gray-600 mt-3">
            Discover our latest summer collection with amazing deals
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
