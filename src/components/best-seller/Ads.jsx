export default function Ads() {
  return (
    <div className="relative font-inter">
      <div className="absolute top-10 left-10">
        <h3 className="text-white">Bacola Natural Foods</h3>
        <div className="my-5 text-2xl">
          <h2>Special Organic</h2>
          <h2 className="font-bold">Roats Burger</h2>
        </div>
        <p className="text-sm">Only Form</p>
        <p className="text-error text-5xl font-dosis font-bold">$14.99</p>
      </div>
      <img
        className="rounded-lg"
        src="/assets/images/banner-box-1.jpg"
        alt="banner-box"
      />
    </div>
  );
}
