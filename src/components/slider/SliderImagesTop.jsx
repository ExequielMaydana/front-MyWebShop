import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const SliderImagesTop = ({ images }) => {
  const filteredImg = images?.filter((img) => img.position === "galery");
  return (
    <section className="w-full flex items-center justify-center mb-24">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {filteredImg?.map((img) => (
          <SwiperSlide key={img._id}>
            <figure className="w-full h-full">
              <img
                src={img.imageURL || ""}
                alt="imagen slider"
                className="object-cover"
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SliderImagesTop;
