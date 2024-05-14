import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image1 from "../assets/N4457S.jpg";

const PlaneCarousel = ({ imagesArray }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="inline lg:h-[27rem] lg:flex-[4_4_0] w-full"
      >
        {imagesArray.map((image) => (
          <SwiperSlide key={image}>
            <img
              src={image}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PlaneCarousel;
