import React from "react";
import styles from "../../styles/NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import photoPerfil from "../../../public/logotypes/avatarLmeon.jpeg";
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
    <section
      className={`${
        isOpen ? `${styles.menu__open} ${styles.menu}` : styles.menu
      }`}
    >
      <nav
        className={`${
          isOpen ? `${styles.nav__open} ${styles.nav}` : styles.nav
        }`}
      >
        <article className="relative w-full flex items-center justify-start pt-8 pl-3 gap-3">
          {token ? null : (
            <div className="w-4/5 flex flex-wrap items-center justify-start gap-3">
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
            </div>
          )}

          {/* Estos datos se deben mostrar despues de hacer LogIn */}
          {token && (
            <article className="flex items-start justify-start gap-1">
              <figure className="w-13 h-13 grid place-items-center">
                <Image
                  src={photoPerfil}
                  alt="Foto perfil usuario"
                  className="w-full h-full object-cover rounded-full"
                />
              </figure>
              <p className="flex flex-col items-start justify-start text-white text-fontParagraph">
                User user
                <span>correo@corre.com</span>
              </p>
            </article>
          )}

          <i
            className="bx bx-arrow-back text-lg text-white cursor-pointer s:text-xl"
            onClick={openMenu}
          ></i>
        </article>

        <hr className="w-4/5 border-solid	border-slateGray opacity-25" />

        <ul className="w-full flex flex-col pl-3 gap-5 mb-1 text-white text-sm s:text-base">
          <li
            className={`${
              isOpen
                ? `${styles.nav__itemOpen} ${styles.nav__item}`
                : styles.nav__item
            }`}
          >
            <Link href="/" className="flex gap-1" onClick={openMenu}>
              Inicio
            </Link>
          </li>
          <li
            className={`${
              isOpen
                ? `${styles.nav__itemOpen} ${styles.nav__item}`
                : styles.nav__item
            }`}
          >
            <Link
              href="/productos"
              className="flex items-center gap-2"
              onClick={openMenu}
            >
              Indumentaria
              <i className="bx bx-chevron-right"></i>
            </Link>
          </li>
          <li
            className={`${
              isOpen
                ? `${styles.nav__itemOpen} ${styles.nav__item}`
                : styles.nav__item
            }`}
          >
            <Link
              href="/productos"
              className="flex items-center gap-2"
              onClick={openMenu}
            >
              Calzado
              <i className="bx bx-chevron-right"></i>
            </Link>
          </li>
          <li
            className={`${
              isOpen
                ? `${styles.nav__itemOpen} ${styles.nav__item}`
                : styles.nav__item
            }`}
          >
            <Link
              href="/productos"
              className="flex items-center gap-2"
              onClick={openMenu}
            >
              Accesorios
              <i className="bx bx-chevron-right"></i>
            </Link>
          </li>
        </ul>
        <hr className="w-4/5 border-solid	border-slateGray opacity-25" />
      </nav>

      <div className="absolute bottom-2 w-full flex flex-col items-start gap-2 pb-1 text-white text-sm s:text-base">
        {" "}
        <hr className="w-4/5 border-solid	border-slateGray opacity-25 mb-1" />
        {token ? (
          <button
            className="border-none flex items-center pl-3 gap-1 outline-none transparent"
            onClick={logOut}
          >
            <i className="bx bx-log-out-circle"></i>
            Cerrar sesión
          </button>
        ) : null}
        <Link
          href="#"
          className="flex pl-3 gap-1 font-light"
          onClick={openMenu}
        >
          <i className="fa-solid fa-circle-user mt-0.5"></i>
          Mi cuenta
        </Link>
        <Link
          href="#"
          className="flex pl-3 gap-1 font-light"
          onClick={openMenu}
        >
          <i className="fa-solid fa-boxes-packing mt-0.5"></i>
          Mis compras
        </Link>
        <Link href="#" className="flex pl-3 gap-1 font-light">
          <i className="fa-regular fa-circle-question mt-0.5"></i>
          Ayuda
        </Link>
      </div>
    </section>
  );
};

export default Menu;
