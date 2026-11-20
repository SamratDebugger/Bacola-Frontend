import { Link } from "react-router";
import CustomerInfo from "../components/product/CustomerInfo";
import Order from "../components/product/Order";
import { useRef } from "react";

export default function Checkout() {
  const formRef = useRef();
  return (
    <main className="bg-base-300">
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
        <div role="alert" className="alert bg-base-100  ">
          <span>Returning Customer?</span>{" "}
          <Link to="/login" className="link link-info">
            Click here to login
          </Link>
        </div>
      </section>
      <section className="mx-auto max-w-360 p-5">
        <div className="grid lg:grid-cols-12 gap-5">
          <div className="lg:col-span-8">
            <CustomerInfo ref={formRef} />
          </div>
          <div className="lg:col-span-4">
            <Order ref={formRef} />
          </div>
        </div>
      </section>
    </main>
  );
}
