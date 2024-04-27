import GuideCard from "../GuideCard/GuideCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./styles.css";

// import required modules
import { Pagination, Mousewheel, Scrollbar } from "swiper/modules";

const GuidesSection = () => {
  return (
    <div className="flex flex-col gap-5 mt-10 mb-10">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Our Guides</h1>
        <p className="text-md mt-3 font-semibold font-montserrat">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum possimus
          culpa repellendus temporibus laboriosam quidem quod natus nostrum
          quisquam quos. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Non deleniti consectetur fugiat consequatur minima debitis aut
          quia eaque, ad aspernatur quis officiis numquam impedit omnis quos
          odit quo necessitatibus sed.
        </p>
      </div>
      <div className="mt-8 w-full">
        <Swiper
          slidesPerView={2}
          mousewheel={true}
          centeredSlides={true}
          spaceBetween={40}
          pagination={{
            type: "fraction",
          }}
          scrollbar={{
            hide: false,
          }}
          modules={[Pagination, Mousewheel, Scrollbar]}
          className="mySwiper"
        >
          <SwiperSlide>
            <GuideCard />
          </SwiperSlide>
          <SwiperSlide>
            <GuideCard />
          </SwiperSlide>
          <SwiperSlide>
            <GuideCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default GuidesSection;
