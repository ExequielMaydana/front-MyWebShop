import Link from 'next/link'
import React from 'react'

const SubMenuShoes = ({openDropDownShoes}) => {
  return (
    <ul className={openDropDownShoes ? "sub__menu-open" : "sub__menu"}>
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
          Vans
        </Link>
      </li>
      <li>
        <Link href="#" className="w-full h-full">
          DC Shoes
        </Link>
      </li>
    </ul>
  )
}

export default SubMenuShoes