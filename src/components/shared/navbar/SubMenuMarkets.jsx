import Link from "next/link";
import React from "react";
import { itemsMenuMarket } from "../../../utils/dataSubMenus";
const SubMenuMarkets = ({ openDropDownMarket }) => {
  return (
    <ul className={openDropDownMarket ? "sub__menuOpen" : "sub__menu"}>
      {itemsMenuMarket.map((item) => (
        <li key={item.id}>
          <Link href={`/marcas/${item.link}`} className="w-full h-full">
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

export default SubMenuMarkets;
