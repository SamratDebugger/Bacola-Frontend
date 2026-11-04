import Ads from "../reusable-components/Ads";
import View from "../reusable-components/View";
import Offer from "./Offer";
import Safety from "./Safety";

export default function HotProduct() {
  const content = {
    subtitle: "Best Bakery Products",
    isDark: true,
    title1: "Freshest Products",
    title2: "Every Hour.",
    price: 24.99,
    hasButton: true,
    btn: "Shop Now",
    img: "/assets/images/banner-box-2.jpg",
  };
  const view = {
    title: "HOT PRODUCT FOR THIS WEEK",
    description:
      "Don't miss this opportunity at a special discount just for this week.",
    button: "View All",
  };
  return (
    <div className="grid grid-cols-12">
      <div className="lg:col-span-3 max-lg:hidden">
        <Ads content={content} />
      </div>
      <div className="col-span-12 lg:col-span-9">
        <div>
          <Safety />
        </div>
        <div className="my-10">
          <View view={view} />
        </div>
        <div>
          <Offer />
        </div>
      </div>
    </div>
  );
}
