import Link from "next/link";
import React from "react";
import { itemsHelp } from "../../../utils/dataSubMenus";

const SubMenuHelp = ({ openDropHelp, setOpenDropHelp, isOpen, setIsOpen }) => {
  return (
    <ul className={openDropHelp ? "sub__menuOpen" : "sub__menu"}>
      {itemsHelp.map((item) => (
        <li
          key={item.id}
          onClick={() => {
            setOpenDropHelp(false);
            isOpen && setIsOpen(false);
          }}
        >
          <Link href={`/${item.link}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default SubMenuHelp;
