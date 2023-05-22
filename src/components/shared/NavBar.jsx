import React, { useState } from "react";
import Image from "next/image";
import logoType from "../../../public/logotypes/greedy-logotype.webp";
import Link from "next/link";
import Menu from "./Menu";
import { useSelector } from "react-redux";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = useSelector((state) => state.credential.tokenUser);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full flex flex-col gap-y-2 bg-darkSlateGray px-3 py-2 z-10">
      {/* menu burguer / logo / icono cart */}
      <div className="w-full mb-1 pt-2 flex items-center justify-around">
        <i
          className="bx bx-menu-alt-left cursor-pointer text-white text-lg s:text-3xl"
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

        <i className="bx bx-cart cursor-pointer text-white text-lg s:text-3xl"></i>
      </div>

      <div className="w-full flex items-center content-center">
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
  );
};

export default NavBar;
