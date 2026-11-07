import Ads from "../reusable-components/Ads";
import View from "../reusable-components/View";
import List from "./List";
import Offer from "./Offer";
import Safety from "./Safety";
import { Link } from "react-router";

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
    <div className="grid grid-cols-12 gap-5">
      <div className="lg:col-span-3 max-lg:hidden grid gap-5">
        <Ads content={content} />
        <List />
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
        <div className=" my-10 p-10 bg-red-100 rounded-xl flex flex-col md:flex-row justify-center gap-5 items-center">
          <span className="text-error">
            Super discount fir your{" "}
            <Link className="link link-hover underline text-red-500">
              first purchase
            </Link>
          </span>
          <span className="rounded-full border border-error border-dotted py-2 px-5 text-red-500">
            fREE25BAC
          </span>
          <span className="text-gray-500">Use discount code in checkout!</span>
        </div>
      </div>
    </div>
  );
}
