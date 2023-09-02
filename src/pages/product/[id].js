import Layout from "@/components/Layout";
import React, { useEffect, useRef, useState } from "react";
import { imagesRedes } from "@/utils/arrayImages";
import Image from "next/image";
import CardProductHome from "@/components/cards/CardProductHome";
import Swiper from "swiper/bundle";

import { SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
const ProductById = ({ entries, productsByCategory }) => {
  const swiperRef = useRef(null);
  const swiperProduct = useRef(null);

  const [sizeSelected, setSizeSelected] = useState("");

  const sizeArray = entries.sizes[0]?.split(",").map((item) => item.trim());
  const colorsArray = entries.colors[0]?.split(",").map((item) => item.trim());
  const selectedSize = (index) => {
    setSizeSelected(index === sizeSelected ? null : index);
  };

  useEffect(() => {
    const swiper1 = new Swiper(swiperProduct.current, {
      direction: "horizontal",
      containerModifierClass: "my-swiper1-", // Agrega un prefijo para las clases CSS

      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    // Limpia el Swiper cuando el componente se desmonte
    return () => {
      swiper1.destroy();
    };
  }, []);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      autoHeight: true,
      direction: "horizontal",
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
    // Limpia el Swiper cuando el componente se desmonte
    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <>
      <Layout subtitle={entries?.name.toString()}>
        <article className="w-full flex flex-col gap-4 pt-12 px-4 lg:flex-row mb-24">
          <div className="w-full">
            <div className="my-swiper1" ref={swiperProduct}>
              <div className="swiper-wrapper flex items-center justify-center">
                {entries.images?.map((img) => (
                  <article className="swiper-slide" key={img._id}>
                    <figure className="w-full flex items-center justify-center">
                      <Image
                        width={500}
                        height={500}
                        src={img.imageUrl || ""}
                        alt="imagen product"
                        className="w-full h-full object-contain"
                      />
                    </figure>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col lg:w-[50%]">
            <h2 className="text-2xl font-medium text-start smm:text-4xl">
              {entries.name}
            </h2>
            <p className="text-start font-bold text-xl smm:text-2xl">
              ${entries.price_sale}
            </p>
            <article className="flex flex-col pt-12 gap-2">
              <div className="w-full flex items-center justify-between font-medium text-sm sm:text-base">
                <span className="">Seleccionar Talle (US)</span>
                <span className="">Guía de talles</span>
              </div>
              <ul className="w-full flex flex-wrap items-center justify-center gap-2">
                {sizeArray.map((items, index) => (
                  <li
                    key={index}
                    className={`px-4 py-2 text-center border border-darkGray rounded-md shadow-lg cursor-pointer ${
                      sizeSelected === items ? "bg-black text-white" : ""
                    }`}
                    onClick={() => selectedSize(items)}
                  >
                    {items}
                  </li>
                ))}
              </ul>
              <button className="border py-2 rounded-3xl mt-8 bg-black text-white">
                Agregar al carrito
              </button>
            </article>
            <div className="w-full flex flex-col mt-8">
              <p className="">{entries.description}</p>
              <ul className="w-full flex flex-col mt-4">
                <li>color: {colorsArray[1]}</li>
                <li className="mt-4">
                  <b className="text-xl">Devoluciones y envios</b>{" "}
                  <p>
                    Entregas a todo el país. Consultá la fecha estimada de
                    entrega al realizar la compra. Podés devolver tu pedido por
                    cualquier motivo, sin cargo, dentro de un plazo de 30 días.
                  </p>
                </li>
                <li className="mt-2">
                  <b className="text-xl">Métodos de pago</b>{" "}
                  <p>
                    Aceptamos las siguientes opciones de pago: Tarjetas de
                    Crédito, Tarjetas de Débito y Mercado Pago.
                  </p>
                </li>
                <li className="flex items-center justify-between mt-2">
                  <b className="text-xl">Comparte</b>
                  <div className="flex items-center justify-center gap-4">
                    {imagesRedes.map((img) => (
                      <figure key={img.id} className="w-[30px] cursor-pointer">
                        <Image
                          width={500}
                          height={500}
                          src={img.imgUrl}
                          alt="icon"
                          className="w-full h-full object-cover"
                        />
                      </figure>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article className="w-[100%] flex flex-col px-4 gap-4 mb-16 pr-8">
          <h3 className="text-xl font-medium uppercase lg:text-2xl">
            Tambien te podrian interesar.
          </h3>

          <div className="swiper" ref={swiperRef}>
            <div className="swiper-wrapper">
              {productsByCategory.products?.map((product) => (
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
        </article>
      </Layout>
    </>
  );
};

export default ProductById;

export async function getStaticPaths() {
  const url = `${process.env.DOMAIN_PROD}/productos`;
  const response = await fetch(url);
  const entries = await response.json();
  const paths = entries.products?.map((e) => ({
    params: { id: e._id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const url = `${process.env.DOMAIN_PROD}/productos/${id}`;
  const response = await fetch(url);
  const entries = await response.json();

  const resProductByCategory = await fetch(
    `${process.env.DOMAIN_PROD}/productos/search?category=${entries?.category}`
  );
  const productsByCategory = await resProductByCategory.json();
  return {
    props: {
      entries,
      productsByCategory,
    },
  };
}
