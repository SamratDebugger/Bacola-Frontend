import { FaExpandArrowsAlt } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import Rating from "./Rating";

export default function ProductCard({ product }) {
  const isAvailable = product.availability?.toLowerCase() !== "out of stock";

  return (
    <div className="card rounded-none bg-base-100 relative group h-full">
      {product.discount ? (
        <div className="badge badge-info mt-5 ml-5">{product.discount}%</div>
      ) : null}
      {product.type ? (
        <div className="badge badge-success badge-soft ml-5 mt-2">{product.type}</div>
      ) : null}

      <div className="absolute group-hover:grid top-5 right-5 hidden gap-2 z-10">
        <button className="btn btn-circle hover:bg-main hover:text-white bg-transparent">
          <FaExpandArrowsAlt className="size-[1.2em]" />
        </button>
        <button className="btn btn-circle hover:bg-main hover:text-white bg-transparent">
          <BsHeart className="size-[1.2em]" />
        </button>
      </div>

      <figure className="overflow-hidden">
        <img src={product.img} alt={product.title || "Product image"} className="w-full h-64 object-cover" />
      </figure>

      <div className="card-body p-4">
        <p className="font-inter font-bold line-clamp-2 min-h-[3rem]">{product.title}</p>
        <p className={isAvailable ? "text-success uppercase" : "text-error uppercase"}>{product.availability}</p>

        <Rating />

        <div className="card-actions flex-col items-start gap-3">
          <div className="flex items-center gap-3">
            {product.regularPrice ? (
              <span className="text-gray-500 line-through text-lg">${product.regularPrice}</span>
            ) : null}
            <span className="text-error text-xl font-bold">${product.discountedPrice}</span>
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
