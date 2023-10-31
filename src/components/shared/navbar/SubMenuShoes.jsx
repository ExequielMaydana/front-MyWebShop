import Link from "next/link";
import React from "react";
import { itemsMenuShoes } from "../../../utils/dataSubMenus";
const SubMenuShoes = ({ openDropDownShoes }) => {
  return (
    <ul className={openDropDownShoes ? "sub__menuOpen" : "sub__menu"}>
      {itemsMenuShoes.map((item) => (
        <li key={item.id}>
          <Link href={`/calzado/${item.link}`} className="w-full h-full">
            {item.title}
          </Link>
        </li>
      ))}
      <li>
        <Link href="/calzado" className="w-full h-full">
          Ver todo
        </Link>
      </li>
    </ul>
  );
};

export default SubMenuShoes;
