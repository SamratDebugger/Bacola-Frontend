import { FaArrowRightLong } from "react-icons/fa6";
import ProductCarousel from "./ProductCarousel";
import Ads from "./Ads";

export default function BestSeller() {
  const content = {
    subtitle: "Bacola Natural Foods",
    isDark: false,
    title1: "Special Organic",
    title2: "Roats Burger.",
    price: 14.99,
    hasButton: false,
    img: "/assets/images/banner-box-1.jpg",
  };
  return (
    <div className="grid grid-cols-12 font-dosis my-15 ">
      <div className="col-span-3 max-lg:hidden">
        <Ads content={content} />
      </div>

      <div className="col-span-12 lg:col-span-9  ">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-xl font-bold uppercase">Best Sellers</h2>
            <p className="opacity-50 font-inter text-sm">
              Do not miss the current offers until the end of March.
            </p>
          </div>
          <button className="btn  btn-outline rounded-full">
            View All <FaArrowRightLong />
          </button>
        </div>
        <div className="border border-black/10 overflow-hidden rounded-xl">
          <ProductCarousel />
        </div>
      </div>
    </div>
  );
}
