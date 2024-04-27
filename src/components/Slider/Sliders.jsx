// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./slider.css";
import "../../styles.css";
// import required modules
import { Pagination, Mousewheel } from "swiper/modules";
import SliderCard from "../SliderCard/SliderCard";

const Slider = () => {
  return (
    <div className="h-[520px] w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
