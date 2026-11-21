import { FaEnvelope } from "react-icons/fa6";

export default function NewsLetter() {
  return (
    <section className="bg-info ">
      <div className="max-w-360 mx-auto pt-5 px-5 flex max-lg:flex-col gap-5 justify-between lg:items-center">
        <div className="">
          <div className="text-white">
            <h3 className="text-lg">$20 discount for your first order</h3>
            <h2 className=" text-3xl mt-2 mb-5 ">
              Join our newsletter and get...
            </h2>
            <p className="opacity-50 max-w-85">
              Join our email subscription now to get updates on promotions and
              coupons.
            </p>
          </div>
          <label className="flex items-center bg-white gap-5 lg:max-w-120  w-full rounded-box p-1.5 mt-10 ">
            <FaEnvelope className="text-3xl opacity-50 ml-3" />
            <input
              className="w-full outline-0"
              type="email"
              required
              placeholder="Your Email Address"
            />
            <button className="btn btn-info ">Subscribe</button>
          </label>
        </div>
        <img src="/assets/images/coupon.png" alt="coupon img" />
      </div>
    </section>
  );
}
