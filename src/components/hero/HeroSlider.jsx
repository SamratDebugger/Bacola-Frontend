// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa6";

import sliderTexts from "../../../json/sliderTexts.json";

export default function HeroSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {sliderTexts.map((sliderText) => (
          <SwiperSlide key={sliderText.id}>
            <img src={sliderText.img} alt="slider-img-1" />
            <div className="absolute left-0 top-0 bottom-0 text-left max-w-1/2 font-inter flex flex-col items-start justify-between p-5 sm:p-10 lg:p-20 xl:p-30">
              <h3 className="max-md:hidden text-xs">
                EXCLUSIVE OFFER{" "}
                <span className="badge badge-success badge-soft">
                  {sliderText.discount}% OFF
                </span>
              </h3>
              <h2 className="text-lg sm:text-3xl lg:text-5xl font-bold ">
                {sliderText.title}
              </h2>
              <p className="max-md:hidden text-lg">{sliderText.description}</p>
              <p className="text-sm sm:text-lg">
                From{" "}
                <span className="text-error text-lg sm:text-xl lg:text-3xl xl:text-4xl font-dosis  font-bold">
                  ${sliderText.price}
                </span>
              </p>
              <button className="btn max-sm:btn-xs max-md:btn-sm btn-info rounded-full text-white">
                Shop now <FaArrowRight />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
