import { FaLeaf } from "react-icons/fa";
import { FaTint, FaSun, FaTshirt, FaClock } from "react-icons/fa";

const SummerCareTips = () => {
  return (
    <section className="py-16 rounded-xl bg-orange-50">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl  font-bold text-center text-orange-500 mb-10 flex items-center justify-center gap-2">
          <FaLeaf className="text-green-500" />
          Summer Care Tips
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="p-6 bg-white rounded-xl shadow text-center">
            <FaTint className="text-3xl text-blue-500 mx-auto mb-3" />
            <h3 className="font-bold">Stay Hydrated</h3>
          </div>

          <div className="p-6 bg-white rounded-xl shadow text-center">
            <FaSun className="text-3xl text-yellow-500 mx-auto mb-3" />
            <h3 className="font-bold">Use Sunscreen</h3>
          </div>

          <div className="p-6 bg-white rounded-xl shadow text-center">
            <FaTshirt className="text-3xl text-orange-500 mx-auto mb-3" />
            <h3 className="font-bold">Light Clothing</h3>
          </div>

          <div className="p-6 bg-white rounded-xl shadow text-center">
            <FaClock className="text-3xl text-red-400 mx-auto mb-3" />
            <h3 className="font-bold">Avoid Peak Sun</h3>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SummerCareTips;