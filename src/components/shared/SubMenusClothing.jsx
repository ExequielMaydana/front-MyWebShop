import Link from "next/link";
import React, { useState } from "react";

const SubMenusClothing = ({ openDropDownOne }) => {

  return (
    <ul className={openDropDownOne ? "sub__menu-open" : "sub__menu"}>
    <li>
      <Link href="#" className="w-full h-full">
        Remeras
      </Link>
    </li>
    <li>
      <Link href="#" className="w-full h-full">
        Chombas
      </Link>
    </li>
    <li>
      <Link href="#" className="w-full h-full">
        Bermudas y shorts
      </Link>
    </li>
    <li>
      <Link href="#" className="w-full h-full">
        Trajes de baño
      </Link>
    </li>
    <li>
      <Link href="#" className="w-full h-full">
        Jeans
      </Link>
    </li>
    <li>
      <Link href="#" className="w-full h-full">
        Pantalones
      </Link>
    </li>
    <li>
      <Link href="#" className="w-full h-full">
        joggings
      </Link>
    </li>
    <li>
      <Link href="#" className="w-full h-full">
        Camisas
      </Link>
    </li>
    <li>
      <Link href="#" className="w-full h-full">
        Buzos
      </Link>
    </li>
    <li>
      <Link href="#" className="w-full h-full">
        Camperas
      </Link>
    </li>
    <li>
      <Link href="#" className="w-full h-full">
        Ver todo
      </Link>
    </li>
  </ul>
  );
};

export default SubMenusClothing;
