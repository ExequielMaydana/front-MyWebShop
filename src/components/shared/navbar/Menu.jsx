import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import SubMenusClothing from "./SubMenusClothing";
import SubMenuMarkets from "./SubMenuMarkets";
import SubMenuShoes from "./SubMenuShoes";
import SubMenuAccessories from "./SubMenuAccessories";
import Cookies from "js-cookie";
import { useEffect } from "react";
import axios from "axios";

const Menu = ({ isOpen, token, openMenu }) => {
  const [dataUser, setDataUser] = useState([]);
  const [aTokenExists, setATokenExists] = useState(false);
  const [openDropDownOne, setOpenDropDownOne] = useState(false);
  const [openDropDownMarket, setOpenDropDownMarket] = useState(false);
  const [openDropDownShoes, setOpenDropDownShoes] = useState(false);
  const [openDropDownAccesories, setOpenDropDownAccesories] = useState(false);

  const router = useRouter();

  const logOut = () => {
    Cookies.remove("tokenUser");
    router.push("/");
  };

  const getMyUser = async () => {
    try {
      if (token) {
        await axios
          .get(`${process.env.DOMAIN_PROD}/api/v1/usuarios/me`, {
            headers: { "x-access-token": token },
          })
          .then((res) => {
            setDataUser(res.data.myUser);
            setATokenExists(true);
          });
      }
    } catch (error) {
      console.log("error en peticion GET a MyUser", error);
    }
  };

  useEffect(() => {
    getMyUser();
  }, [token]);

  return (
    <section className={isOpen ? `menu__open menu` : "menu"}>
      <nav
        className={
          isOpen ? "w-full relative opacity-100 flex flex-col gap-8" : "menu"
        }
      >
        <i
          className="bx bx-arrow-back text-end p-4 cursor-pointer text-lg text-white s:text-xl lg:hidden"
          onClick={openMenu}
        ></i>
        <ul className="w-full flex flex-col pl-3 gap-5 mb-1 text-white text-sm s:text-base lg:flex-row lg:gap-3">
          <li className="relative cursor-pointer">
            <Link href="/" className="flex gap-1 lg:text-sm" onClick={openMenu}>
              Inicio
            </Link>
          </li>
          <li
            className="relative cursor-pointer overflow-hidden"
            onClick={() => setOpenDropDownOne(!openDropDownOne)}
          >
            <div className="flex items-center gap-1">
              <span className="lg:text-sm"> Indumentaria</span>
              <article
                className={openDropDownOne ? "icon__row-active" : "icon__row"}
              >
                <i className="bx bx-chevron-right"></i>
              </article>
            </div>

            <SubMenusClothing openDropDownOne={openDropDownOne} />
          </li>
          <li
            className="relative cursor-pointer"
            onClick={() => setOpenDropDownShoes(!openDropDownShoes)}
          >
            <div className="flex items-center gap-1">
              <span className="lg:text-sm">Calzado</span>

              <article
                className={openDropDownShoes ? "icon__row-active" : "icon__row"}
              >
                <i className="bx bx-chevron-right"></i>
              </article>
            </div>

            <SubMenuShoes openDropDownShoes={openDropDownShoes} />
          </li>
          <li
            className="relative cursor-pointer"
            onClick={() => setOpenDropDownAccesories(!openDropDownAccesories)}
          >
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="lg:text-sm "> Accesorios</span>
              <article
                className={
                  openDropDownAccesories ? "icon__row-active" : "icon__row"
                }
              >
                <i className="bx bx-chevron-right"></i>
              </article>
            </div>

            <SubMenuAccessories
              openDropDownAccesories={openDropDownAccesories}
            />
          </li>
          <li
            className="relative cursor-pointer"
            onClick={() => setOpenDropDownMarket(!openDropDownMarket)}
          >
            <div className="flex items-center gap-1">
              <span className="lg:text-sm">Marcas</span>
              <article
                className={
                  openDropDownMarket ? "icon__row-active" : "icon__row"
                }
              >
                <i className="bx bx-chevron-right"></i>
              </article>
            </div>

            {/* sub-menu -> Marcas */}
            <SubMenuMarkets openDropDownMarket={openDropDownMarket} />
          </li>
        </ul>
        <hr className="w-4/5 border-solid	border-slateGray opacity-25 lg:hidden" />
      </nav>

      <div className="w-full flex flex-col items-start gap-2 pb-1 text-white font-light text-sm s:text-base lg:absolute top-0 right-0 lg:w-auto lg:flex-row lg:justify-center lg:text-sm">
        {" "}
        <Link
          href="/sobrenosotros"
          className="flex pl-3 gap-1 items-center justify-center"
          onClick={openMenu}
        >
          <i className="fa-solid fa-user-tie"></i>
          Sobre nosotros
        </Link>
        <Link
          href="/ayuda"
          className="flex pl-3 gap-1 items-center justify-center "
        >
          <i className="fa-regular fa-circle-question"></i>
          Ayuda
        </Link>
      </div>
    </section>
  );
};

export default Menu;
