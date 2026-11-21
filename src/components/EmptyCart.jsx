import { FaCartFlatbed } from "react-icons/fa6";
import { Link } from "react-router";

export default function EmptyCart() {
  return (
    <section className="max-w-360 mx-auto p-5">
      <div className="card max-w-100 w-full bg-base-100 mx-auto">
        <div className="card-body text-center">
          <div className="size-15 bg-error mx-auto flex justify-center items-center rounded-full text-xl">
            <FaCartFlatbed />
          </div>
          <p>Your Cart Is Empty</p>
          <div className="card-action">
            <Link to="/">
              <button className="btn btn-info">Back To Home</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
