import BestSeller from "../components/best-seller/BestSeller";
import Hero from "../components/hero/Hero";

export default function Home() {
  return (
    <>
      <section className="max-w-360 mx-auto px-5 ">
        <Hero />
      </section>
      <section className="max-w-360 mx-auto my-10 px-5 ">
        <BestSeller />
      </section>
    </>
  );
}
