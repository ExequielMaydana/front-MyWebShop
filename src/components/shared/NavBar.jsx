import React, { useState } from "react";
import Image from "next/image";
import logoType from "../../../public/logotypes/greedy-logotype.webp";
import Link from "next/link";
import Menu from "./Menu";
import Cookies from "js-cookie";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = Cookies.get("tokenUser");

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <article className="w-full h-10 bg-gray flex items-center justify-center gap-2 text-white">
        <i className="fa-solid fa-truck-arrow-right"></i> ENVIÓ GRATIS DESDE{" "}
        <b>$25.000</b>
      </article>
      <header className="w-full flex flex-col gap-y-2 bg-darkSlateGray px-3 py-2 z-10 header lg:relative">
        {/* menu burguer / logo / icono cart */}
        <div className="w-full mb-1 pt-2 flex items-center justify-around">
          <i
            className="bx bx-menu-alt-left cursor-pointer text-white text-lg s:text-3xl lg:hidden"
            onClick={openMenu}
          ></i>

          <figure className="w-48">
            <Link href="/">
              <Image
                src={logoType}
                alt="imagen logo"
                className="w-full h-full object-contain"
              />
            </Link>
          </figure>
          <div className="hidden lg:flex items-center justify-center gap-1 text-white w-1/3 h-9">
            <input
              type="text"
              name="input_search"
              placeholder="¿Qué estás buscando?"
              className="w-full h-full border-none outline-none rounded-lg ps-2 text-fontParagraph text-black"
            />
            <i className="bx bx-search p-2 grid items-center text-center cursor-pointer bg-mediumPurple rounded-lg text-lg"></i>
          </div>
          <article className="flex items-center justify-center gap-2 text-white">
            <Link href="/iniciar-sesion" className="hidden lg:block">
              <i className="bx bx-user-circle cursor-pointe text-base s:text-2xl lg:mt-1 lg:text-3xl"></i>
            </Link>
            <Link href="/carrito" className="text-lg s:text-3xl mt-1">
              <i className="bx bx-cart cursor-pointer"></i>
            </Link>
          </article>
        </div>

        <div className="w-full flex items-center lg:hidden">
          <input
            type="text"
            name="input_search"
            placeholder="¿Qué estás buscando?"
            className="w-full h-7 border-none outline-none rounded-lg ps-2 text-fontParagraph text-black"
          />
          <i className="bx bx-search cursor-pointer text-black relative top-0 right-6 font-bold"></i>
        </div>

        <Menu token={token} isOpen={isOpen} openMenu={openMenu} />
      </header>
    </>
  );
};

export default NavBar;
