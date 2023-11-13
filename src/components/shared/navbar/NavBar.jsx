import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { clearToken } from "@/store/slice/tokenUser.slice";
import axios from "axios";

const NavBar = ({ setViewDataUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [dataUser, setDataUser] = useState({});
  const [aTokenExists, setATokenExists] = useState(false);
  const [nameProductSearch, setNameProductSearch] = useState("");
  const [productsBySearch, setProductsBySearch] = useState([]);
  const token = useSelector((state) => state.tokenUser);
  const dispatch = useDispatch();

  const router = useRouter();

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (token) {
      axios
        .get(`${process.env.DOMAIN_PROD}/usuarios/me`, {
          headers: {
            "x-access-token": token,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setDataUser(res.data[0]);
          setATokenExists(true);
        })
        .catch((err) => console.log(err));
    }
  }, [token]);

  useEffect(() => {
    if (nameProductSearch.length > 0) {
      axios
        .get(
          `${process.env.DOMAIN_PROD}/productos/searchbyname?name=${nameProductSearch}`
        )
        .then((res) => setProductsBySearch(res.data))
        .catch((err) => console.log(err));
    }
  }, [nameProductSearch]);

  const logOut = () => {
    openMenu();
    dispatch(clearToken());
    setATokenExists(false);
    router.push("/");
  };

  return (
    <>
      <article className="w-full h-10 bg-gray flex items-center justify-center gap-2 text-white">
        <i className="bx bxs-truck text-2xl"></i> ENVIÓ GRATIS DESDE{" "}
        <b>$25.000</b>
      </article>
      <header className="w-full flex flex-col gap-y-2 bg-darkSlateGray px-3 py-2 z-10 header lg:absolute lg:top-10 xxl:max-w-[1500px]">
        {/* menu burguer / logo / icono cart */}
        <div className="w-full mb-1 pt-2 flex items-center justify-around">
          <i
            className="bx bx-menu-alt-left cursor-pointer text-white text-lg s:text-3xl lg:hidden"
            onClick={openMenu}
          ></i>

          <figure className="w-[250px]">
            <Link href="/">
              <Image
                width={500}
                height={500}
                src="/logotypes/logo.png"
                alt="imagen logo"
                className="w-full h-full object-contain"
              />
            </Link>
          </figure>
          <div className="hidden lg:flex items-center justify-center gap-1 text-white w-1/3 h-9 relative">
            <input
              type="text"
              name="input_search"
              placeholder="¿Qué estás buscando?"
              onChange={(e) => setNameProductSearch(e.target.value)}
              className="w-full h-full border-none outline-none rounded-lg ps-2 text-fontParagraph text-black"
            />
            <i className="bx bx-search cursor-pointer text-black relative top-0 right-8 font-bold"></i>

            {productsBySearch.length > 0 && nameProductSearch.length > 0 && (
              <div className="absolute top-[2.5em] left-0 w-[390px] h-[200px] p-2 bg-white rounded-lg overflow-x-auto z-[999]">
                <ul className="w-full text-blackMy">
                  {productsBySearch.map((product) => (
                    <Link href={`/product/${product._id}`} key={product._id}>
                      <li
                        onClick={() => {
                          setNameProductSearch("");
                          setProductsBySearch([]);
                        }}
                      >
                        {product.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <article className="flex items-center justify-center gap-2 text-white">
            <Link href="#" className="text-lg s:text-3xl mt-1">
              <i className="bx bx-cart cursor-pointer"></i>
            </Link>
            {aTokenExists !== true && (
              <Link
                href="/auth/iniciar-sesion"
                className="text-lg s:text-2xl mt-1"
              >
                <i className="bx bx-user cursor-pointer"></i>
              </Link>
            )}
            {aTokenExists && (
              <div className="hidden lg:flex pl-4 relative group">
                <figure
                  className="w-[50px] h-[50px] cursor-pointer profileImage"
                  onMouseEnter={() => setIsHovered(true)}
                >
                  <Image
                    width={500}
                    height={500}
                    src={
                      dataUser.profileImage?.imageUrl ||
                      "/Images/not-found.webp"
                    }
                    alt="imagen de perfil"
                    className="w-full h-full object-cover rounded-full shadow-sm shadow-mediumPurple profileImage"
                  />
                </figure>

                {isHovered && (
                  <div
                    onMouseLeave={() => setIsHovered(false)}
                    className="w-[250px] h-[260px] flex flex-col items-center justify-start gap-2 absolute bottom-[-17em] left-[-6em] p-2 rounded-md bg-white z-50 menuUser group-hover:opacity-100"
                  >
                    <p className="text-dimGray flex flex-wrap">
                      {dataUser.email}
                    </p>
                    {dataUser.profileImage?.imageUrl ? (
                      <figure className="w-[80px] rounded-full">
                        <Image
                          width={500}
                          height={500}
                          src={dataUser.profileImage?.imageUrl}
                          alt="imagen de perfil"
                          className="w-full h-full object-cover aspect-square rounded-full shadow-lg shadow-mediumPurple"
                        />
                      </figure>
                    ) : (
                      <figure className="w-[80px] rounded-full">
                        <Image
                          width={500}
                          height={500}
                          src={"/Images/not-found.webp"}
                          alt="imagen de perfil"
                          className="w-full h-full object-cover aspect-square rounded-full shadow-lg shadow-mediumPurple"
                        />
                      </figure>
                    )}
                    <h2 className="text-black">
                      {" "}
                      ¡Hola, {dataUser.full_name}!
                    </h2>
                    <hr className="border border-slateGray w-full mt-2" />
                    <ul className="p-4 w-full flex flex-col items-start justify-start gap-2 text-black">
                      <li
                        className="flex items-center justify-center gap-2 cursor-pointer"
                        onClick={() => setViewDataUser(true)}
                      >
                        {" "}
                        <i className="bx bx-user-circle text-lg"></i>
                        Mi cuenta
                      </li>
                      <li
                        className="flex items-center justify-center gap-2 cursor-pointer"
                        onClick={logOut}
                      >
                        {" "}
                        <i className="bx bx-log-out-circle text-lg"></i>
                        Cerrar sesion
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </article>
        </div>

        <div className="relative w-full flex items-center lg:hidden">
          <input
            type="text"
            name="input_search"
            placeholder="¿Qué estás buscando?"
            onChange={(e) => setNameProductSearch(e.target.value)}
            className="w-full h-7 border-none outline-none rounded-lg ps-2 text-fontParagraph text-black"
          />
          <i className="bx bx-search cursor-pointer text-black relative top-0 right-6 font-bold"></i>
          {productsBySearch.length > 0 && nameProductSearch.length > 0 && (
            <div className="absolute top-[2em] w-full h-[200px] p-2 bg-white rounded-lg overflow-x-auto z-[999]">
              <ul className="w-full">
                {productsBySearch.map((product) => (
                  <Link href={`/product/${product._id}`} key={product._id}>
                    <li
                      onClick={() => {
                        setNameProductSearch("");
                        setProductsBySearch([]);
                      }}
                    >
                      {product.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>

        <Menu
          token={token}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          openMenu={openMenu}
          dataUser={dataUser}
          aTokenExists={aTokenExists}
          setATokenExists={setATokenExists}
          setViewDataUser={setViewDataUser}
        />
      </header>
    </>
  );
};

export default NavBar;
