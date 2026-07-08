import Banner from "@/components/Banner";
import PopularProducts from "@/components/PopularProducts";
import SummerCareTips from "@/components/SummerCareTips";
import TopBrands from "@/components/TopBrands";


export const metadata = {
  title: "Home | SunCart",
  description:
    "Discover hot summer deals, top brands, and trending summer essentials.",
};

export default function Home() {
  return (
      <div>
        <Banner/>
        <PopularProducts/>
        <SummerCareTips/>
        <TopBrands/>
      </div>
  );
}
