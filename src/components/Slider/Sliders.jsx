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
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";

const Slider = () => {
  const { data } = useContext(AuthContext);
  const filter = data.slice(0, 8);
  console.log(filter);
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
        {filter.map((item) => (
          <SwiperSlide key={item._id}>
            <SliderCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
