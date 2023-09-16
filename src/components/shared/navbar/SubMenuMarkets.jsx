import Link from "next/link";
import React from "react";

const SubMenuMarkets = ({ openDropDownMarket }) => {
  return (
    <ul className={openDropDownMarket ? "sub__menuOpen" : "sub__menu"}>
      <li>
        <Link href="#" className="w-full h-full">
          Nike
        </Link>
      </li>
      <li>
        <Link href="#" className="w-full h-full">
          Adidas
        </Link>
      </li>
      <li>
        <Link href="#" className="w-full h-full">
          Thrasher
        </Link>
      </li>
      <li>
        <Link href="#" className="w-full h-full">
          Vans
        </Link>
      </li>
      <li>
        <Link href="#" className="w-full h-full">
          Santa Cruz
        </Link>
      </li>
      <li>
        <Link href="#" className="w-full h-full">
          Rip Curl
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

export default SubMenuMarkets;
