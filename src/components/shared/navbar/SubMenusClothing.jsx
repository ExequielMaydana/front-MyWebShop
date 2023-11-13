import Link from "next/link";
import React from "react";
import { itemsMenuClothing } from "../../../utils/dataSubMenus";
const SubMenusClothing = ({
  openDropDownOne,
  setOpenDropDownOne,
  setIsOpen,
  isOpen,
}) => {
  return (
    <ul className={openDropDownOne ? "sub__menuOpen" : "sub__menu"}>
      {itemsMenuClothing.map((item) => (
        <li
          key={item.id}
          onClick={() => {
            setOpenDropDownOne(false);
            isOpen && setIsOpen(false);
          }}
        >
          <Link href={`/indumentaria/${item.link}`} className="w-full h-full">
            {item.title}
          </Link>
        </li>
      ))}
      <li
        onClick={() => {
          setOpenDropDownOne(false);
          isOpen && setIsOpen(false);
        }}
      >
        <Link href="/indumentaria" className="w-full h-full">
          Ver todo
        </Link>
      </li>
    </ul>
  );
};

export default SubMenusClothing;
