import React, { useState } from "react";
import logoType from "../../../public/logotypes/greedy-logotype.webp";
import Link from "next/link";
import Image from "next/image";

const NavBarDash = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full h-[80px] bg-darkSlateGray flex items-center justify-around px-2">
      <i
        className="bx bx-menu-alt-left cursor-pointer text-white text-3xl"
        onClick={openMenu}
      ></i>
      <h1 className="text-whiteSmoke text-xl pl-3 text-center uppercase font-bold">
        PANEL
      </h1>
      <article className="w-[40px] h-[40px] rounded-full bg-darkGray flex items-center justify-center">
        <p className="text-black font-semibold">M</p>
      </article>
      <article className={isOpen ? `menu__open menuDash` : "menuDash"}>
        <nav className={isOpen ? `nav__open navDash` : "navDash"}>
          <div className="w-full flex items-center justify-between">
            <Link href="/">
              <Image
                src={logoType}
                alt="imagen logo"
                className="w-[150px] h-full pt-6 pl-5 object-contain"
              />
            </Link>
            <i
              className="bx bx-arrow-back pt-6 pr-5 cursor-pointer text-lg text-end text-white s:text-xl"
              onClick={openMenu}
            ></i>
          </div>

          <div className="w-full flex flex-col gap-1">
            <hr className="w-fill border-solid	border-slateGray opacity-25" />

            <ul className="w-full flex flex-col items-start justify-start gap-5 pt-3 pl-3 text-white">
              <li className="w-full flex items-center justify-start gap-2 cursor-pointer">
                <i className="fa-solid fa-chart-pie"></i>
                Análisis
              </li>
              <li className="w-full flex items-center justify-start gap-2 cursor-pointer">
                <i className="fa-solid fa-sack-dollar"></i>
                Finanzas
              </li>
              <li className="w-full flex items-center justify-start gap-2 cursor-pointer">
                <Link
                  className="w-full flex items-center justify-start gap-2 cursor-pointer"
                  href="/dashboard/products"
                >
                  <i className="fa-solid fa-boxes-stacked"></i>
                  Productos
                </Link>
              </li>
              <li className="w-full flex items-center justify-start gap-2 cursor-pointer">
                <Link
                  href="/dashboard/orders"
                  className="w-full flex items-center justify-start gap-2 cursor-pointer"
                >
                  <i className="fa-solid fa-people-carry-box"></i>
                  Pedidos
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </article>
    </header>
  );
};

export default NavBarDash;
