export default function Rating() {
  return (
    <div className="rating rating-xs">
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400 size-5"
        aria-label="1 star"
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400 size-5"
        aria-label="2 star"
        defaultChecked
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400 size-5"
        aria-label="3 star"
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400 size-5"
        aria-label="4 star"
      />
      <input
        type="radio"
        name="rating-2"
        className="mask mask-star-2 bg-orange-400 size-5"
        aria-label="5 star"
      />
    </div>
  );
}
