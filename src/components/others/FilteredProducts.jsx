import React, { useState } from "react";
import { checkboxsStyle, checkboxsBrand } from "./dataFilters";

const FilteredProducts = ({ todoProducts, setProductsFiltered, subRoute }) => {
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [selectedSizes, setSelectedSizes] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const [openList, setOpenList] = useState({
    size: false,
    collections: false,
    price: false,
    brand: false,
  });

  const uniqueSizes = todoProducts.reduce((uniqueSizes, product) => {
    product.sizes.forEach((size) => {
      uniqueSizes[size.size] = size;
    });
    return uniqueSizes;
  }, {});

  const sizesArray = Object.values(uniqueSizes);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const toggleLista = (list) => {
    setOpenList({
      ...openList,
      [list]: !openList[list],
    });
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setPriceRange({
      ...priceRange,
      [name]: value,
    });
  };

  const filterProductsByPrice = () => {
    const productsFiltered = todoProducts.filter(
      (product) =>
        product.price_sale >= priceRange.min &&
        product.price_sale <= priceRange.max
    );
    setProductsFiltered(productsFiltered);
  };

  const toggleSize = (size) => {
    if (selectedSizes === size) {
      setSelectedSizes("");
    } else {
      setSelectedSizes(size);
      const productsFiltered = todoProducts.filter((product) =>
        product.sizes.some((productSize) => productSize.size === size)
      );
      setProductsFiltered(productsFiltered);
    }
  };

  const toggleStyle = (style) => {
    if (selectedStyle === style) {
      setSelectedStyle("");
    } else {
      setSelectedStyle(style);
      const productsFiltered = todoProducts.filter((product) =>
        product.tags.some((productTag) => productTag.tag === style)
      );
      setProductsFiltered(productsFiltered);
    }
  };
  const toggleBrand = (brand) => {
    if (selectedBrand === brand) {
      setSelectedBrand("");
    } else {
      setSelectedBrand(brand);
      const productsFiltered = todoProducts.filter(
        (product) => product.brand === brand
      );
      setProductsFiltered(productsFiltered);
    }
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
        <li className="w-full flex flex-col lg:text-lg">
          <div
            className="w-full flex items-center justify-between cursor-pointer"
            onClick={() => toggleLista("size")}
          >
            <p>Talle</p>
            <i
              className={`bx ${
                openList.size ? "bx-chevron-up" : "bx-chevron-down"
              } text-xl`}
            ></i>
          </div>

          <ul className={openList.size ? "sublistOpen" : "sublist"}>
            {sizesArray.map((item) => (
              <li
                key={item._id}
                className="w-full flex flex-col items-start justify-start"
              >
                <label className="flex items-center justify-center gap-4 cursor-pointer">
                  <input
                    type="radio"
                    value={item.size}
                    checked={selectedSizes === item.size}
                    onChange={() => toggleSize(item.size)}
                    className=" cursor-pointer"
                  />
                  {item.size}
                </label>
              </li>
            ))}
            <li>
              <p
                onClick={() => setProductsFiltered([])}
                className="cursor-pointer border-b"
              >
                Ver todos
              </p>
            </li>
          </ul>
        </li>
        {subRoute === "Calzado" && (
          <li className="w-full flex flex-col lg:text-lg">
            <div
              className="w-full flex items-center justify-between cursor-pointer"
              onClick={() => toggleLista("brand")}
            >
              <p>Marca</p>
              <i
                className={`bx ${
                  openList.brand ? "bx-chevron-up" : "bx-chevron-down"
                } text-xl`}
              ></i>
            </div>

            <ul className={openList.brand ? "sublistOpen" : "sublist"}>
              {checkboxsBrand.map((item) => (
                <li
                  key={item.id}
                  className="w-full flex flex-col items-start justify-start"
                >
                  <label className="flex items-center justify-center gap-4 cursor-pointer">
                    <input
                      type="radio"
                      value={item.filter}
                      checked={selectedBrand === item.filter}
                      onChange={() => toggleBrand(item.filter)}
                      className="cursor-pointer"
                    />
                    {item.title}
                  </label>
                </li>
              ))}
              <li>
                <p
                  onClick={() => setProductsFiltered([])}
                  className="cursor-pointer border-b"
                >
                  Ver todos
                </p>
              </li>
            </ul>
          </li>
        )}
        <li className="w-full flex flex-col lg:text-lg">
          <div
            className="w-full flex items-center justify-between cursor-pointer"
            onClick={() => toggleLista("collections")}
          >
            <p>Estilo</p>
            <i
              className={`bx ${
                openList.collections ? "bx-chevron-up" : "bx-chevron-down"
              } text-xl`}
            ></i>
          </div>

          <ul className={openList.collections ? "sublistOpen" : "sublist"}>
            {checkboxsStyle.map((item) => (
              <li
                key={item.id}
                className="w-full flex flex-col items-start justify-start"
              >
                <label className="flex items-center justify-center gap-4 cursor-pointer">
                  <input
                    type="radio" // Cambiamos el tipo a "radio" para que solo se pueda seleccionar un tamaño
                    value={item.filter}
                    checked={selectedStyle === item.filter} // Marcar el radio si es el tamaño seleccionado
                    onChange={() => toggleStyle(item.filter)}
                    className="cursor-pointer"
                  />
                  {item.title}
                </label>
              </li>
            ))}
            <li>
              <p
                onClick={() => setProductsFiltered([])}
                className="cursor-pointer border-b"
              >
                Ver todos
              </p>
            </li>
          </ul>
        </li>

        <li className="w-full flex flex-col lg:text-lg">
          <div
            className="w-full flex items-center justify-between cursor-pointer"
            onClick={() => toggleLista("price")}
          >
            <p>Precio</p>{" "}
            <i
              className={`bx ${
                openList.price ? "bx-chevron-up" : "bx-chevron-down"
              } text-xl`}
            ></i>
          </div>
          <ul className={openList.price ? "sublistOpen" : "sublist"}>
            <li className="w-full flex flex-col items-start justify-center mb-4 mt-4 gap-4">
              <label
                htmlFor="from"
                className="flex items-center justify-center gap-2"
              >
                Desde:
                <input
                  className="border outline-none w-[100px] rounded-md pl-2"
                  id="from"
                  type="number"
                  name="min"
                  value={priceRange.min}
                  onChange={handlePriceChange}
                />
              </label>
              <label
                htmlFor="to"
                className="flex items-center justify-center gap-3"
              >
                Hasta:
                <input
                  className="border outline-none w-[100px] rounded-md pl-2"
                  id="to"
                  type="number"
                  name="max"
                  value={priceRange.max}
                  onChange={handlePriceChange}
                />
              </label>
            </li>
            <li className="w-full flex flex-col items-center justify-center gap-4">
              <button
                onClick={filterProductsByPrice}
                className="border rounded-md px-4"
              >
                Filtrar
              </button>
              <p
                onClick={() => setProductsFiltered([])}
                className="cursor-pointer border-b"
              >
                Ver todos
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </article>
  );
};

export default FilteredProducts;
