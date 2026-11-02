import Ads from "../best-seller/Ads";

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
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3">
        <Ads content={content} />
      </div>
      <div className="col-span-9">
        <div className="flex justify-between bg-[url(/assets/images/safety-banner.jpg)] ...">
          <div className="m-5">
            <h4 className="text-gray-500">Always Taking Care</h4>
            <h3 className="text-xl">
              In store or online your health,safety is our top priority.
            </h3>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
