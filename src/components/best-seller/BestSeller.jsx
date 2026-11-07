import ProductCarousel from "./ProductCarousel";
import Ads from "../reusable-components/Ads";
import View from "../reusable-components/View";

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
  const view = {
    title: "Best Sellers",
    description: " Do not miss the current offers until the end of March.",
    button: " View All ",
  };
  return (
    <div className="grid grid-cols-12 font-dosis my-15 gap-5">
      <div className="col-span-3 max-lg:hidden">
        <Ads content={content} />
      </div>

      <div className="col-span-12 lg:col-span-9  ">
        <View view={view} />
        <div className="border border-black/10 overflow-hidden rounded-xl">
          <ProductCarousel />
        </div>
      </div>
    </div>
  );
}
