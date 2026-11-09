import { FaBottleWater, FaDollarSign, FaHeart, FaTruck } from "react-icons/fa6";
import Rating from "../best-seller/Rating";
import Socials from "./Socials";

export default function ProductInfo({ singleProduct }) {
  return (
    <section className="max-w-360 p-5 mx-auto bg-base-100 shadow-sm rounded-box">
      <div>
        <h2 className="text-2xl">{singleProduct.title}</h2>
        <Rating />
      </div>
      <div className="flex gap-5 items-start justify-between">
        <div className="flex-1/3">
          <img
            className="w-full"
            src={singleProduct.img}
            alt={singleProduct.title}
          />
        </div>
        <div className="flex-1/3 space-y-5">
          <div className="flex items-center gap-5">
            <span className="text-gray-500 line-through">
              {singleProduct.regularPrice}
            </span>
            <span className="text-error">{singleProduct.discountedPrice}</span>
          </div>
          <span
            className={`badge  badge-soft ${singleProduct.isAvailable ? "badge-success" : "badge-error"}`}
          >
            {singleProduct.isAvailable ? "IN STOCK" : "OUT OF STOCK"}
          </span>
          <p>
            Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
            malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent
          </p>
          <div className="flex justify-start gap-5 items-center">
            <button className="btn btn-circle">-</button>
            <span>1</span>
            <button className="btn btn-circle">+</button>
            <button
              disabled={!singleProduct.isAvailable}
              className="btn btn-info text-white rounded-full"
            >
              Add To Cart
            </button>
          </div>
          <button className="btn rounded-full">
            <FaHeart /> Add to Wishlist
          </button>
          <div className="divider"></div>
          <p>Category: Meats and seafood</p>
          <Socials />
        </div>
        <div className=" flex-1/3">
          <div className="alert alert-error alert-soft justify-center">
            <span className="">Covid-19 Info: We keep delivering.</span>
          </div>
          <div className="bg-gray-100 flex flex-col gap-5 items-start p-5 mt-5">
            <h3 className="flex gap-5 items-center justify-center">
              <FaTruck />
              <span>Free Shipping apply to all orders over $100</span>
            </h3>
            <h3 className="flex gap-5 items-center justify-center">
              <FaBottleWater />
              <span>Guranteed 100% Organic from natural farmas</span>
            </h3>
            <h3 className="flex gap-5 items-center justify-center">
              <FaDollarSign />
              <span> 1 Day Returns if you change your mind</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
