import ProductCard from "../best-seller/ProductCard";
import View from "../reusable-components/View";
import products from "../../../json/bestSeller.json";
import TrendingProduct from "./TrendingProduct";

export default function NewProducts() {
  const view = {
    title: "New Products",
    description: "New products with updated stocks.",
    button: "View All",
  };
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className=" max-lg:hidden col-span-3">
        <div>
          <h2>Trending Products</h2>
          {products.slice(0, 5).map((product) => (
            <TrendingProduct product={product} key={product.id} />
          ))}
        </div>
      </div>
      <div className="col-span-12 lg:col-span-9 ">
        <View view={view} />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
