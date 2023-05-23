import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setToken } from "@/store/slices/tokenSlice.slice";
import { useRouter } from "next/router";

const Menu = ({ isOpen, token, openMenu }) => {
  const dispath = useDispatch();
  const router = useRouter();

  const logOut = () => {
    dispath(setToken({ tokenUser: "" }));
    router.push("/");
  };

  return (
    <section className={isOpen ? `menu__open menu` : "menu"}>
      <nav className={isOpen ? `nav__open nav` : "nav"}>
        {/* este div desaparece a los 976px */}
        <div className="w-full flex items-center justify-between pt-8 pl-3 gap-4 lg:hidden">
          {token ? null : (
            <article className="w-4/5 flex flex-wrap items-center justify-start gap-3">
              <Link
                href="/iniciar-sesion"
                className="flex gap-1 text-white text-sm s:text-base"
                onClick={openMenu}
              >
                <i className="fa-solid fa-user mt-0.5"></i>
                Iniciar sesión
              </Link>
              <Link
                href="/registrarse"
                className="flex gap-1 text-white text-sm s:text-base"
                onClick={openMenu}
              >
                <i className="fa-solid fa-user-plus mt-0.5"></i>
                Registrarse
              </Link>
            </article>
          )}
          <i
            className="bx bx-arrow-back absolute right-2 cursor-pointer text-lg text-white s:text-xl"
            onClick={openMenu}
          ></i>
        </div>

        <hr className="w-4/5 border-solid	border-slateGray opacity-25 lg:hidden" />

        <ul className="w-full flex flex-col pl-3 gap-5 mb-1 text-white text-sm s:text-base lg:flex-row">
          <li className="nav__item">
            <Link href="/" className="flex gap-1" onClick={openMenu}>
              Inicio
            </Link>
          </li>
          <li className="nav__item">
            <Link
              href="/productos"
              className="flex items-center gap-1"
              onClick={openMenu}
            >
              Indumentaria
              <i className="bx bx-chevron-right"></i>
            </Link>
          </li>
          <li className="nav__item">
            <Link
              href="/productos"
              className="flex items-center gap-1"
              onClick={openMenu}
            >
              Calzado
              <i className="bx bx-chevron-right"></i>
            </Link>
          </li>
          <li className="nav__item">
            <Link
              href="/productos"
              className="flex items-center gap-1"
              onClick={openMenu}
            >
              Accesorios
              <i className="bx bx-chevron-right"></i>
            </Link>
          </li>
        </ul>
        <hr className="w-4/5 border-solid	border-slateGray opacity-25 lg:hidden" />
      </nav>

      <div className="absolute bottom-2 w-full flex flex-col items-start gap-2 pb-1 text-white font-light text-sm s:text-base lg:w-auto lg:flex-row lg:relative lg:bottom-0 lg:justify-center">
        {" "}
        <hr className="w-4/5 border-solid	border-slateGray opacity-25 mb-1 lg:hidden" />
        <Link
          href="#"
          className="flex pl-3 gap-1 items-center justify-center "
          onClick={openMenu}
        >
          <i className="fa-solid fa-circle-user"></i>
          Mi cuenta
        </Link>
        <Link
          href="#"
          className="flex pl-3 gap-1 items-center justify-center "
          onClick={openMenu}
        >
          <i className="fa-solid fa-boxes-packing"></i>
          Mis compras
        </Link>
        <Link href="#" className="flex pl-3 gap-1 items-center justify-center ">
          <i className="fa-regular fa-circle-question"></i>
          Ayuda
        </Link>
        {token ? (
          <button
            className="border-none flex items-center pl-3 gap-1 outline-none transparent"
            onClick={logOut}
          >
            <i className="fa-solid fa-right-from-bracket"></i> Cerrar sesión
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default Menu;
