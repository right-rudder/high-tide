import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ReviewCard from "./ReviewCard.jsx";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { reviews } from "../data/reviews.js";

const ReviewsCarousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: true,
      }}
      breakpoints={{
        1024: {
          slidesPerView: 2,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="w-full h-[27rem] sm:h-96"
    >
      {reviews.map((review) => (
        <SwiperSlide key={review.name}>
          <ReviewCard
            review={review.review}
            name={review.name}
            title={review.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewsCarousel;
