import {
  FaBottleWater,
  FaDollarSign,
  FaPercent,
  FaTruck,
} from "react-icons/fa6";

export default function TrustBadge() {
  return (
    <section className="bg-base-100 mt-5">
      <div className="flex justify-between items-center max-w-360 mx-auto p-5 gap-5">
        <span className="flex items-center gap-3">
          <FaBottleWater /> Everyday fresh products
        </span>
        <span className="flex items-center gap-3">
          <FaTruck /> delivery for order over $70
        </span>
        <span className="flex items-center gap-3">
          <FaPercent /> Daily Mega Discounts
        </span>
        <span className="flex items-center gap-3">
          <FaDollarSign /> Best price on the market
        </span>
      </div>
      <div className="divider max-w-360 mx-auto p-5"></div>
    </section>
  );
}
