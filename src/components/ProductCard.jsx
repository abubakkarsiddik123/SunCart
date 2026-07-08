import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300">
      <div className="relative w-full aspect-square">
        <Image
          src={product.image}
         fill
         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={product.name}
          className=" object-cover rounded-xl"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">
          {product.name}
        </h3>

        <div className="flex items-center gap-2 mb-2">
          <FaStar className="text-yellow-500" />
          <span>{product.rating}</span>
        </div>

        <p className="text-2xl font-bold text-orange-500 mb-4">
          ${product.price}
        </p>

        <Link
          href={`/products/${product.id}`}
          className="block text-center bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;