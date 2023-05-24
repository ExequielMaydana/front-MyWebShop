import Link from "next/link";
import React from "react";

const SubMenuOffers = ({ openDropDownOffers }) => {
  return (
    <ul className={openDropDownOffers ? "sub__menu-open" : "sub__menu"}>
      <li>
        <Link href="#" className="w-full h-full">
          Calzado
        </Link>
      </li>
      <li>
        <Link href="#" className="w-full h-full">
          Indumentaria
        </Link>
      </li>
      <li>
        <Link href="#" className="w-full h-full">
          Otros
        </Link>
      </li>
    </ul>
  );
};

export default SubMenuOffers;
