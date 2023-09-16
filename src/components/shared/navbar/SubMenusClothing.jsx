import Link from "next/link";
import React from "react";

const SubMenusClothing = ({ openDropDownOne }) => {
  return (
    <ul className={openDropDownOne ? "sub__menuOpen" : "sub__menu"}>
      <li>
        <Link href="/products/byPruductType/remera" className="w-full h-full">
          Remeras
        </Link>
      </li>
      <li>
        <Link href="/products/byPruductType/chomba" className="w-full h-full">
          Chombas
        </Link>
      </li>
      <li>
        <Link href="/products/byPruductType/pantalon" className="w-full h-full">
          Pantalones
        </Link>
      </li>
      <li>
        <Link href="/products/byPruductType/buzo" className="w-full h-full">
          Buzos
        </Link>
      </li>
      <li>
        <Link href="/products/byPruductType/campera" className="w-full h-full">
          Camperas
        </Link>
      </li>
      <li>
        <Link href="/indumentaria" className="w-full h-full">
          Ver todo
        </Link>
      </li>
    </ul>
  );
};

export default SubMenusClothing;
