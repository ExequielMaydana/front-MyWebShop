import Link from "next/link";
import React from "react";
import { itemsMenuAccesories } from "../../../utils/dataSubMenus";
const SubMenuAccessories = ({
  openDropDownAccesories,
  setOpenDropDownAccesories,
  isOpen,
  setIsOpen,
}) => {
  return (
    <ul className={openDropDownAccesories ? "sub__menuOpen" : "sub__menu"}>
      {itemsMenuAccesories.map((item) => (
        <li
          key={item.id}
          onClick={() => {
            setOpenDropDownAccesories(false);
            isOpen && setIsOpen(false);
          }}
        >
          <Link href={`/accesorios/${item.link}`} className="w-full h-full">
            {item.title}
          </Link>
        </li>
      ))}
      <li
        onClick={() => {
          setOpenDropDownAccesories(false);
          isOpen && setIsOpen(false);
        }}
      >
        <Link href="/accesorios" className="w-full h-full">
          Ver todo
        </Link>
      </li>
    </ul>
  );
};

export default SubMenuAccessories;
