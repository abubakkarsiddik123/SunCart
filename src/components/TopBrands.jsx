import { FaTags } from "react-icons/fa";
import { FaSun, FaUmbrellaBeach, FaSpa, FaShoppingBag } from "react-icons/fa";

const TopBrands = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold text-center text-orange-500 mb-10 flex items-center justify-center gap-2">
          <FaTags className="text-orange-500" />
          Top Brands
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="p-6 border rounded-xl text-center">
            <FaSun className="text-3xl text-yellow-500 mx-auto mb-3" />
            <h3 className="font-bold">SunShade</h3>
          </div>

          <div className="p-6 border rounded-xl text-center">
            <FaUmbrellaBeach className="text-3xl text-blue-500 mx-auto mb-3" />
            <h3 className="font-bold">BeachLife</h3>
          </div>

          <div className="p-6 border rounded-xl text-center">
            <FaSpa className="text-3xl text-pink-500 mx-auto mb-3" />
            <h3 className="font-bold">CoolSkin</h3>
          </div>

          <div className="p-6 border rounded-xl text-center">
            <FaShoppingBag className="text-3xl text-orange-500 mx-auto mb-3" />
            <h3 className="font-bold">SunnyWear</h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TopBrands;