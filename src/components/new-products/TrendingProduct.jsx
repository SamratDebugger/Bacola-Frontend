export default function TrendingProduct({ product }) {
  return (
    <div className="card gap-5 card-side bg-base-100 shadow-sm">
      <figure className="flex-1/3">
        <img
          className="aspect-square object-cover"
          src={product.img}
          alt="beef img"
        />
      </figure>
      <div className="card-body flex-2/3">
        <h2 className="card-title text-sm">{product.title}</h2>
        <div className="flex gap-5 items-center justify-center">
          <span className="text-gray-500 line-through">
            ${product.regularPrice}
          </span>
          <span className="text-error">${product.discountedPrice}</span>
        </div>
      </div>
    </div>
  );
}
