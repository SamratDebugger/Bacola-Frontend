import { Link, useParams } from "react-router";
import productData from "../../json/bestSeller.json";
import ProductInfo from "../components/product/ProductInfo";
import NotFound from "./NotFound";

export default function Product() {
  let params = useParams();
  const singleProduct = productData.find(
    (product) => product.id == params.product,
  );
  if (!singleProduct) {
    return <NotFound />;
  }

  return (
    <div className="bg-base-300">
      <section className="max-w-360 p-5 mx-auto">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={`/${singleProduct.categorySlug}`}>
                {singleProduct.category}
              </Link>
            </li>
            <li>{singleProduct.title}</li>
          </ul>
        </div>
      </section>
      <ProductInfo singleProduct={singleProduct} />
    </div>
  );
}
