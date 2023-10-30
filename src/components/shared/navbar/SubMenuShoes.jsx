import Link from "next/link";
import React from "react";

const SubMenuShoes = ({ openDropDownShoes }) => {
  return (
    <ul className={openDropDownShoes ? "sub__menuOpen" : "sub__menu"}>
      <li>
        <Link href="/products/byBrands/nike" className="w-full h-full">
          Nike
        </Link>
      </li>
      <li>
        <Link href="/products/byBrands/adidas" className="w-full h-full">
          Adidas
        </Link>
      </li>
      <li>
        <Link href="/products/byBrands/vans" className="w-full h-full">
          Vans
        </Link>
      </li>
      <li>
        <Link href="/products/byBrands/dcshoes" className="w-full h-full">
          DC Shoes
        </Link>
      </li>
      <li>
        <Link
          href="/products/byPruductType/entrenamiento"
          className="w-full h-full"
        >
          Training
        </Link>
      </li>
      <li>
        <Link href="/calzado" className="w-full h-full">
          Ver todo
        </Link>
      </li>
    </ul>
  );
};

export default SubMenuShoes;
