import { FaExpandArrowsAlt } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import Rating from "./Rating";

export default function ProductCard({ product }) {
  const isAvailable = product.isAvailable;
  const discountedPercentage =
    100 - (product.discountedPrice * 100) / product.regularPrice;

  return (
    <div className="card rounded-none bg-base-100 group h-full border-r border-black/10">
      <div className="flex flex-col gap-1 absolute p-5">
        {product.hasDiscount && (
          <div className="badge badge-sm badge-info ">
            {Math.round(discountedPercentage)}%
          </div>
        )}
        {product.isOrganic && (
          <div className="badge badge-sm badge-success badge-soft">Organic</div>
        )}
        {product.isRecommended && (
          <div className="badge badge-sm badge-soft">Recommended</div>
        )}
      </div>

      <div className="absolute group-hover:grid top-5 right-5 hidden gap-2 z-10">
        <button className="btn btn-circle hover:bg-main hover:text-white bg-transparent">
          <FaExpandArrowsAlt className="size-[1.2em]" />
        </button>
        <button className="btn btn-circle hover:bg-main hover:text-white bg-transparent">
          <BsHeart className="size-[1.2em]" />
        </button>
      </div>

      <figure className="">
        <img
          src={product.img}
          alt={product.title || "Product image"}
          className="aspect-square object-cover"
        />
      </figure>

      <div className="card-body p-4">
        <p className="font-inter font-bold line-clamp-2 min-h-12">
          {product.title}
        </p>
        <p
          className={
            isAvailable ? "text-success uppercase" : "text-error uppercase"
          }
        >
          {product.availability}
        </p>

        <Rating />

        <div className="card-actions flex-col items-start gap-3">
          <div className="flex items-center gap-3">
            {product.regularPrice ? (
              <span className="text-gray-500 line-through text-lg">
                ${product.regularPrice}
              </span>
            ) : null}
            <span className="text-error text-xl font-bold">
              ${product.discountedPrice}
            </span>
          </div>

          <button
            className={`btn w-full rounded-full ${isAvailable ? "btn-info btn-outline hover:text-white" : "btn-disabled"}`}
            disabled={!isAvailable}
          >
            {isAvailable ? "Add to cart" : "Out of stock"}
          </button>
        </div>
      </div>
    </div>
  );
}
