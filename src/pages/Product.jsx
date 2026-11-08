import { Link } from "react-router";

import ProductInfo from "../components/product/ProductInfo";

export default function Product() {
  return (
    <div className="bg-base-300">
      <section className="max-w-360 p-5 mx-auto">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a>Documents</a>
            </li>
            <li>Add Document</li>
          </ul>
        </div>
      </section>
      <ProductInfo />
    </div>
  );
}
