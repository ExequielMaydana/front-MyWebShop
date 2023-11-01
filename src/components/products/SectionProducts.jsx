import React, { useEffect, useRef, useState } from "react";
import CardProductHome from "../cards/CardProductHome";
import Swiper from "swiper/bundle";
import Loading from "../modals/Loading";

const SectionProducts = ({ data }) => {
  const [onLoading, setOnLoading] = useState(false);
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      direction: "horizontal",
      loop: true,
      containerModifierClass: "my-swiperSimilarProd-",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: "auto",
      spaceBetween: 20,
    });
    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <>
      {onLoading && <Loading />}
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
                    setOnLoading={setOnLoading}
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
    </>
  );
};

export default SectionProducts;
