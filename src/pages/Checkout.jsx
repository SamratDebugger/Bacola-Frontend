import { Link } from "react-router";

export default function Checkout() {
  return (
    <>
      <section className="mx-auto max-w-360 px-5">
        <div className="breadcrumbs text-sm ">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <div>Checkout</div>
            </li>
          </ul>
        </div>
      </section>
      <section className="mx-auto max-w-360 p-5">
        <div role="alert" className="alert border-base-300  alert-outline">
          <span>Returning Customer?</span>{" "}
          <Link to="/login" className="link link-info">
            Click here to login
          </Link>
        </div>
      </section>
      <section>
        <div className="grid">
          <div className="col-span-9"></div>
          <div className="col-span-3"></div>
        </div>
      </section>
    </>
  );
}
