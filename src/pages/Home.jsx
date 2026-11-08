import BestSeller from "../components/best-seller/BestSeller";
import Hero from "../components/hero/Hero";
import HotProduct from "../components/hot-product/HotProduct";
import NewProducts from "../components/new-products/NewProducts";

export default function Home() {
  const defaultSize = "max-w-360 mx-auto px-5";
  return (
    <>
      <section className={`${defaultSize}`}>
        <Hero />
      </section>
      <section className={`${defaultSize}`}>
        <BestSeller />
      </section>
      <section className={`${defaultSize}`}>
        <HotProduct />
      </section>
      <section className={`${defaultSize}`}>
        <NewProducts />
      </section>
    </>
  );
}
