import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { images } from "./images_payment";

const Footer = () => {
  const [emailUser, setEmailUser] = useState("");

  return (
    <footer className="w-full flex flex-col gap-8 px-4 py-4 bg-darkSlateGray">
      <div className="w-full flex flex-col gap-8 lg:flex-row lg:pt-4">
        <article className="w-full flex flex-col items-center justify-center gap-2 lg:w-[50%]">
          <figure className="h-[40px]">
            <Image
              width={500}
              height={500}
              src="/logotypes/logo.png"
              alt="logo"
              className="w-full h-full object-cover"
            />
          </figure>
          <p className="text-sm font-semibold text-white sm:w-[70%] smm:text-center">
            Suscríbete para ser el primero en enterarte de nuestras ofertas
            especiales.
          </p>
          <label
            htmlFor="emailUser"
            className="flex relative h-[40px] max-w-[300px] border border-darkGray rounded-md"
          >
            <input
              type="email"
              name="email"
              id="emailUser"
              onChange={(e) => setEmailUser(e.target.value)}
              className="w-full h-full rounded-md outline-none border-none"
            />
            <div className="text-center bg-mediumPurple text-white text-xl rounded-md cursor-pointer absolute right-2 top-1">
              <i className="bx bx-right-arrow-alt p-1"></i>
            </div>
          </label>
          <div className="flex items-center justify-center gap-2">
            <Link href="#" target="_blank">
              <i className="bx bxl-instagram text-white text-2xl"></i>
            </Link>
            <Link href="#" target="_blank">
              <i className="bx bxl-facebook-circle text-white text-2xl"></i>
            </Link>
          </div>
        </article>
        <div className="hidden lg:flex lg:w-[1px] min-h-[100%] bg-slateGray"></div>
        <hr className=" border-slateGray lg:hidden" />

        <article className="w-full flex flex-col">
          <ul className="w-full flex flex-col text-white gap-4 smm:flex-row smm:justify-around">
            <li>
              <span className="">
                <b>Ayuda</b>
              </span>
              <div className="flex flex-col gap-1 mt-2">
                <Link href="#" className="text-xs">
                  FAQ
                </Link>
                <Link href="#" className="text-xs">
                  ¿Cómo comprar?
                </Link>
                <Link href="#" className="text-xs">
                  ¿Cómo medir tu talle?
                </Link>
                <Link href="#" className="text-xs">
                  Envios
                </Link>
                <Link href="#" className="text-xs">
                  Cambios
                </Link>
              </div>
            </li>
            <li>
              <span className="">
                <b>Quiénes somos</b>
              </span>
              <div className="flex flex-col gap-1 mt-2">
                <Link href="#" className="text-xs">
                  Nosotros
                </Link>
                <Link href="#" className="text-xs">
                  Privacidad y Seguridad
                </Link>
                <Link href="#" className="text-xs">
                  Misión y Valores
                </Link>
              </div>
            </li>
            <li>
              <span className="">
                <b>Centro de Atención al Cliente</b>
              </span>
              <p className="text-xxs">
                Lunes a Viernes de 9 a 20 hs / Sábado de 9 a 17 hs
              </p>

              <div className="w-full flex flex-col gap-1 mt-2">
                <Link href="#" className="text-xs flex items-center gap-2">
                  <i className="bx bxl-whatsapp text-base"></i>
                  Whatsapp
                </Link>

                <Link href="#" className="text-xs flex items-center gap-2">
                  <i className="bx bx-phone-outgoing text-base"></i>
                  +54 9 345 4076854
                </Link>
              </div>
            </li>
          </ul>
        </article>
        <hr className=" border-slateGray" />
        <div className="hidden lg:flex lg:w-[1px] min-h-[100%] bg-slateGray"></div>
        <article className="w-full flex flex-col items-center lg:w-[30%]">
          <span className="text-white">
            <b>Metodos de pago</b>
          </span>
          <ul className="mt-4 w-full flex items-center justify-start flex-wrap gap-2 smm:justify-around">
            {images.map((img) => (
              <li key={img.id}>
                <figure className="">
                  <Image
                    width={500}
                    height={500}
                    src={img.imageUrl}
                    alt="logo mercado pago"
                    className="w-[40px]"
                  />
                </figure>
              </li>
            ))}
          </ul>
        </article>
      </div>

      <hr className=" border-slateGray" />
      <p className="text-slateGray text-xs text-center">
        Copyright © 2023 ClosetWithoutGender. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
