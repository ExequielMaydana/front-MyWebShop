import Link from "next/link";
import React from "react";

const SubMenuAccessories = ({ openDropDownAccesories }) => {
  return (
    <ul className={openDropDownAccesories ? "sub__menu-open" : "sub__menu"}>
      <li>
        <Link href="#" className="w-full h-full">
          Mochilas
        </Link>
      </li>
      <li>
        <Link href="#" className="w-full h-full">
        Riñoneras
        </Link>
      </li>
      <li>
        <Link href="#" className="w-full h-full">
          Gorras
        </Link>
      </li>
      <li>
        <Link href="#" className="w-full h-full">
          Medias
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

export default SubMenuAccessories;
