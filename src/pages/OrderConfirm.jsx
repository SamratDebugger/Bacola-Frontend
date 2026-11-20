import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { Link } from "react-router";

export default function OrderConfirm() {
  return (
    <main className="bg-base-300">
      <section className="max-w-360 p-5 mx-auto min-h-[calc(100dvh-156px)] flex justify-center items-center ">
        <div className="card bg-base-100 max-w-96 w-full shadow-sm">
          <div className="card-body text-center">
            <div className="size-10 rounded-full bg-success flex justify-center items-center mx-auto">
              <FaCheck />
            </div>
            <h2 className=" font-bold text-xl">Order Confirmed</h2>
            <p className="">Your Order Successfully Done, Thank you!</p>
            <div className="card-actions ">
              <Link className="w-full" to="/">
                <button className="btn btn-info w-full">
                  Buy More <FaArrowRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
