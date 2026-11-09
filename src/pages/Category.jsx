import { useParams } from "react-router";

export default function Category() {
  //   let { category } = useParams();
  let params = useParams();
  return <div>Category-{params.category}</div>;
}
