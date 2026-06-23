import Image from "next/image";
import { FaStar, FaBox, FaTag, FaShoppingCart } from "react-icons/fa";


export async function generateMetadata({ params }) {
  const { id } = await params;

  const res = await fetch("http://localhost:3000/data.json");
  const products = await res.json();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return {
      title: "Product Not Found | SunCart",
      description: "Product not found",
    };
  }

  return {
    title: `${product.name} | SunCart`,
    description: product.description,
  };
}


const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("http://localhost:3000/data.json");
  const products = await res.json();

  const product = products.find((item) => item.id === Number(id));

  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative w-full aspect-square">
                <Image
                  src={product.image}
                 fill
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={product.name}
                  className=" object-cover rounded-xl"
                />
              </div>

        {/* Content */}
        <div>
          <h1 className="text-4xl font-bold text-orange-500">{product.name}</h1>

          <p className="text-gray-600 mt-4 leading-relaxed">
            {product.description}
          </p>

          {/* Info Cards */}
          <div className="mt-6 space-y-3">
            <p className="flex items-center gap-2 text-lg">
              <FaStar className="text-yellow-500" />
              Rating: <span className="font-semibold">{product.rating}</span>
            </p>

            <p className="flex items-center gap-2 text-lg">
              <FaTag className="text-orange-500" />
              Brand: <span className="font-semibold">{product.brand}</span>
            </p>

            <p className="flex items-center gap-2 text-lg">
              <FaBox className="text-blue-500" />
              Stock: <span className="font-semibold">{product.stock}</span>
            </p>
          </div>

          {/* Price */}
          <div className="mt-6">
            <span className="text-3xl font-bold text-orange-500">
              ${product.price}
            </span>
          </div>

          {/* Button */}
          <button className="mt-8 w-full md:w-auto px-8 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold hover:scale-105 transition flex items-center justify-center gap-2">
            <FaShoppingCart className="text-white" />
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
