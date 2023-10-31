import Link from "next/link";
import React from "react";
import { itemsMenuAccesories } from "../../../utils/dataSubMenus";
const SubMenuAccessories = ({ openDropDownAccesories }) => {
  return (
    <ul className={openDropDownAccesories ? "sub__menuOpen" : "sub__menu"}>
      {itemsMenuAccesories.map((item) => (
        <li key={item.id}>
          <Link href={`/accesorios/${item.link}`} className="w-full h-full">
            {item.title}
          </Link>
        </li>
      ))}
      <li>
        <Link href="#" className="w-full h-full">
          Ver todo
        </Link>
      </li>
    </ul>
  );
};

export default SubMenuAccessories;
