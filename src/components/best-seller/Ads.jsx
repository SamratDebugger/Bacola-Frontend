export default function Ads({ content }) {
  return (
    <div className="relative font-inter">
      <div className="absolute top-10 left-10">
        <h3 className={`${content.isDark ? "text-gray-500" : "text-white"}`}>
          {content.subtitle}
        </h3>
        <div className="my-5 text-2xl">
          <h2>{content.title1}</h2>
          <h2 className="font-bold">{content.title2}</h2>
        </div>
        <p className="text-sm">Only From</p>
        <p className="text-error text-5xl font-dosis font-bold">
          ${content.price}
        </p>
        {content.hasButton && (
          <button className="btn btn-info rounded-full mt-5 text-white">
            {content.btn}
          </button>
        )}
      </div>
      <img className="rounded-lg" src={content.img} alt="banner-box" />
    </div>
  );
}
