import React, { useEffect, useRef } from "react";
import Swiper from "swiper/bundle";
import Image from "next/image";

const SliderImagesTop = ({ images }) => {
  const filteredImg = images?.filter((img) => img.position === "galery");

  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      direction: "horizontal",
      containerModifierClass: "my-swiperSimilarProd-",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
    });
    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <section className="w-full flex items-center justify-center mb-24">
      <div className="swiper mySwiperTopHome" ref={swiperRef}>
        <div className="swiper-wrapper">
          {filteredImg?.map((img) => (
            <div className="swiper-slide" key={img._id}>
              <figure className="w-full h-full">
                <Image
                  width={1000}
                  height={1000}
                  src={img.imageURL || ""}
                  alt="imagen slider"
                  className="w-full h-full object-contain"
                  priority
                />
              </figure>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <button className="swiper-button-prev"></button>
        <button className="swiper-button-next"></button>
      </div>
    </section>
  );
};

export default SliderImagesTop;
