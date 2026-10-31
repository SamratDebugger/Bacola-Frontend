import { Swiper, SwiperSlide } from "swiper/react";
import products from "../../../json/bestSeller.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";

export default function ProductCarousel() {
  return (
    <div className="relative">
      <button className="custom-prev absolute left-2 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-2xl shadow-md transition hover:bg-main hover:text-white">
        ‹
      </button>

      <Swiper
        loop={true}
        loopedSlides={products.length}
        slidesPerView={4}
        spaceBetween={20}
        navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
        modules={[Navigation]}
        className="mySwiper"
        speed={800}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="!h-auto">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="custom-next absolute right-2 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-2xl shadow-md transition hover:bg-main hover:text-white">
        ›
      </button>
    </div>
  );
}
