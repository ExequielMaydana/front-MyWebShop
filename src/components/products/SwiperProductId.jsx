import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import Image from "next/image";

const SwiperProductId = ({ imagesProduct }) => {
  return (
    <div className="relative w-full">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper-product"
      >
        {imagesProduct.map((img) => (
          <SwiperSlide key={img._id}>
            <Image
              width={500}
              height={500}
              src={img.imageUrl}
              alt=""
              className="w-full h-full object-contain rounded-md"
              priority
            />
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg "
            className="w-full h-full object-contain rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            className="w-full h-full object-contain rounded-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            className="w-full h-full object-contain rounded-md"
          />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default SwiperProductId;
