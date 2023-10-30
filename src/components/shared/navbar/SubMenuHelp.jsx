import Link from "next/link";
import React from "react";

const SubMenuHelp = ({ openDropHelp }) => {
  return (
    <ul className={openDropHelp ? "sub__menuOpen" : "sub__menu"}>
      <li>
        <Link href="/como-comprar">¿Cómo comprar?</Link>
      </li>
      <li>
        <Link href="/medir-talle">¿Cómo medir tu talle?</Link>
      </li>
      <li>
        <Link href="/envios">Envios</Link>
      </li>
      <li>
        <Link href="/contacto">Contactate</Link>
      </li>
    </ul>
  );
};

export default SubMenuHelp;
