import Image from "next/image";
import React from "react";
import iconTruck from "../../../public/icons/delivery-truck.webp";
import card from "../../../public/icons/credit-cards.webp";
import security from "../../../public/icons/secure-shield.webp";
import packing from "../../../public/icons/package.webp";

const WeOffer = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-5 mb-8 lg:flex-row xl:justify-evenly md:flex-row md:flex-wrap">
      <article className="w-[80%] flex items-center justify-center gap-2 p-2 border border-darkSlateGray rounded-lg sm:w-[300px]">
        <figure className="w-full h-[90px]">
          <Image
            src={iconTruck || ""}
            loading="lazy"
            alt="delivery truck"
            className="w-full h-full object-contain"
          />
        </figure>
        <div className="w-full flex flex-col justify-start text-xs text-center pr-3">
          <h3 className="font-black uppercase">ENVIÓ GRATIS</h3>
          <p className="text-darkSlateGray">
            En compras iguales o superiores a $25.000 pesos.
          </p>
        </div>
      </article>
      <article className="w-[80%] flex items-center justify-center gap-2 p-2 border border-darkSlateGray rounded-lg sm:w-[300px]">
        <figure className="w-full h-[80px]">
          <Image
            src={card || ""}
            loading="lazy"
            alt="delivery truck"
            className="w-full h-full object-contain"
          />
        </figure>
        <div className="w-full flex flex-col justify-start text-xs text-center pr-3">
          <h3 className="font-black uppercase">Múltiples formas de pago</h3>
          <p className="text-darkSlateGray">
            Tarjetas, efectivo, Mercado Pago.
          </p>
        </div>
      </article>
      <article className="w-[80%] flex items-center justify-center gap-2 p-2 border border-darkSlateGray rounded-lg sm:w-[300px]">
        <figure className="w-full h-[80px]">
          <Image
            src={security || ""}
            loading="lazy"
            alt="delivery truck"
            className="w-full h-full object-contain"
          />
        </figure>
        <div className="w-full flex flex-col justify-start text-xs text-center pr-3">
          <h3 className="font-black uppercase">Compra protegida</h3>
          <p className="text-darkSlateGray">Nosotros te cuidamos. </p>
        </div>
      </article>
      <article className="w-[80%] flex items-center justify-center gap-2 p-2 border border-darkSlateGray rounded-lg sm:w-[300px]">
        <figure className="w-full h-[80px]">
          <Image
            src={packing || ""}
            loading="lazy"
            alt="delivery truck"
            className="w-full h-full object-contain"
          />
        </figure>
        <div className="w-full flex flex-col justify-start text-xs text-center pr-3">
          <h3 className="font-black uppercase">1° cambio gratis</h3>
          <p className="text-darkSlateGray">
            Dentro de los 30 días después de haber recibido su compra.
          </p>
        </div>
      </article>
    </section>
  );
};

export default WeOffer;
