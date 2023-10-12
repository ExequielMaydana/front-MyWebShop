import React, { useEffect, useRef } from "react";
import CardProductHome from "../cards/CardProductHome";
import Swiper from "swiper/bundle";

const SectionProducts = ({ data }) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      autoHeight: true,
      direction: "horizontal",
      containerModifierClass: "my-swiperSimilarProd-",
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
      breakpoints: {
        380: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
      // pagination: {
      //   el: ".swiper-pagination",
      // },
      // scrollbar: {
      //   el: ".swiper-scrollbar",
      // },
    });
    return () => {
      swiper.destroy();
    };
  }, []);
  return (
    <section className="w-full flex flex-col center justify-center gap-4 mb-24 px-4 lg:px-8">
      <header className="w-full items-start justify-center">
        <h2 className="uppercase font-bold sm:text-xl md:text-2xl">
          LANZAMIENTOS
        </h2>
      </header>
      <div className="w-full">
        <div className="swiper swiperSimilar" ref={swiperRef}>
          <div className="swiper-wrapper">
            {data.map((product) => (
              <article className="swiper-slide" key={product._id}>
                <CardProductHome
                  id={product._id}
                  name={product.name}
                  price_sale={product.price_sale}
                  img={
                    product.images?.length > 0
                      ? product.images[0]?.imageUrl
                      : ""
                  }
                />
              </article>
            ))}
          </div>
          {/* <div className="swiper-pagination"></div> */}

          <button className="swiper-button-prev"></button>
          <button className="swiper-button-next"></button>

          {/* <div class="swiper-scrollbar"></div> */}
        </div>
      </div>
    </section>
  );
};

export default SectionProducts;
