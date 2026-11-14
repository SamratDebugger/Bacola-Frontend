import { useParams } from "react-router";
import NotFound from "./NotFound";
import productData from "../../json/bestSeller.json";

export default function Category() {
  //   let { category } = useParams();
  let params = useParams();
  const singleCat = productData.find(
    (product) => product.categorySlug == params.category,
  );

  if (!singleCat) {
    return <NotFound />;
  }
  console.log(singleCat);

  return <div>Category-{params.category}</div>;
}
