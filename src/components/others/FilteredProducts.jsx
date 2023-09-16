import React, { useState } from "react";

const FilteredProducts = ({ todoProducts }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [openList, setOpenList] = useState({
    categori: false,
    size: false,
    color: false,
    price: false,
  });
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const toggleLista = (list) => {
    setOpenList({
      ...openList,
      [list]: !openList[list],
    });
  };

  return (
    <article
      className={
        todoProducts === undefined
          ? "hidden"
          : "w-full lg:p-4 lg:shadow-lg lg:shadow-lightSlateBlue lg:rounded-md"
      }
    >
      <div className="w-full items-start justify-start">
        <p
          onClick={toggleFilters}
          className="flex items-center justify-center text-center gap-2 text-lg cursor-pointer lg:hidden"
        >
          Filtros <i className="bx bx-filter"></i>
        </p>
        <p className="hidden lg:flex items-center justify-center text-center gap-2 text-lg cursor-pointer lg:justify-start lg:text-xl">
          Filtros <i className="bx bx-filter"></i>
        </p>
      </div>
      <ul className={`filters-container ${showFilters ? "active" : ""}`}>
        <li
          onClick={toggleFilters}
          className="flex items-center justify-center text-center gap-2 cursor-pointer lg:hidden"
        >
          <i className="bx bx-x text-xl"></i> Ocultar filtros
        </li>
        <li
          onClick={() => toggleLista("categori")}
          className="w-full flex flex-col  cursor-pointer lg:text-lg"
        >
          <div className="w-full flex items-center justify-between ">
            <p>Categoria</p>
            <i
              className={`bx ${
                openList.categori ? "bx-chevron-up" : "bx-chevron-down"
              } text-xl`}
            ></i>
          </div>

          <ul className={openList.categori ? "sublistOpen" : "sublist"}></ul>
        </li>
        <li
          onClick={() => toggleLista("size")}
          className="w-full flex flex-col  cursor-pointer lg:text-lg"
        >
          <div className="w-full flex items-center justify-between ">
            <p>Talle</p>
            <i
              className={`bx ${
                openList.size ? "bx-chevron-up" : "bx-chevron-down"
              } text-xl`}
            ></i>
          </div>

          <ul className={openList.size ? "sublistOpen" : "sublist"}></ul>
        </li>
        <li
          onClick={() => toggleLista("color")}
          className="w-full flex flex-col  cursor-pointer lg:text-lg"
        >
          <div className="w-full flex items-center justify-between ">
            <p>Color</p>
            <i
              className={`bx ${
                openList.color ? "bx-chevron-up" : "bx-chevron-down"
              } text-xl`}
            ></i>
          </div>{" "}
          <ul className={openList.color ? "sublistOpen" : "sublist"}></ul>
        </li>
        <li
          onClick={() => toggleLista("price")}
          className="w-full flex flex-col  cursor-pointer lg:text-lg"
        >
          <div className="w-full flex items-center justify-between ">
            <p>Precio</p>{" "}
            <i
              className={`bx ${
                openList.price ? "bx-chevron-up" : "bx-chevron-down"
              } text-xl`}
            ></i>
          </div>
          <ul className={openList.price ? "sublistOpen" : "sublist"}></ul>
        </li>
      </ul>
    </article>
  );
};

export default FilteredProducts;
