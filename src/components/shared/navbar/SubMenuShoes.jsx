import Link from "next/link";
import React from "react";
import { itemsMenuShoes } from "../../../utils/dataSubMenus";
const SubMenuShoes = ({
  openDropDownShoes,
  setOpenDropDownShoes,
  isOpen,
  setIsOpen,
}) => {
  return (
    <ul className={openDropDownShoes ? "sub__menuOpen" : "sub__menu"}>
      {itemsMenuShoes.map((item) => (
        <li
          key={item.id}
          onClick={() => {
            setOpenDropDownShoes(false);
            isOpen && setIsOpen(false);
          }}
        >
          <Link href={`/calzado/${item.link}`} className="w-full h-full">
            {item.title}
          </Link>
        </li>
      ))}
      <li
        onClick={() => {
          setOpenDropDownShoes(false);
          isOpen && setIsOpen(false);
        }}
      >
        <Link href="/calzado" className="w-full h-full">
          Ver todo
        </Link>
      </li>
    </ul>
  );
};

export default SubMenuShoes;
