import CardProductHome from "./cards/CardProductHome";
import FilteredProducts from "./others/FilteredProducts";
import React, { useEffect, useState } from "react";
import Pagination from "./others/Pagination";

const LayoutViewAll = ({ products, subRoute }) => {
  const [todoProducts, setTodoProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPages = 9;

  useEffect(() => {
    if (productsFiltered.length > 0) {
      if (productsFiltered.length < productsPerPages) {
        setTodoProducts(productsFiltered);
      } else {
        const lastProducts = currentPage * productsPerPages;
        setTodoProducts(
          productsFiltered.slice(lastProducts - productsPerPages, lastProducts)
        );
      }
    } else {
      if (products.products?.length < productsPerPages) {
        setTodoProducts(products.products);
      } else {
        const lastProducts = currentPage * productsPerPages;
        setTodoProducts(
          products.products?.slice(
            lastProducts - productsPerPages,
            lastProducts
          )
        );
      }
    }
  }, [products, currentPage, productsFiltered]);

  let arrayPages = [];
  let quantityPages = 0;

  if (productsFiltered.length > 0) {
    quantityPages = Math.ceil(productsFiltered.length / productsPerPages); //cantidad de paginas maxima
    const pagesPerBlock = 5; //cantidad de paginas por bloque
    let currentBlock = Math.ceil(currentPage / pagesPerBlock); //bloques

    // analiza si estamos en el ultimo bloque(true) o no (false)
    if (currentBlock * pagesPerBlock >= quantityPages) {
      // este if analiza si me paso de la cantidad de paginas.
      //cuando es el ultimo bloque
      for (
        let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
        i <= quantityPages;
        i++
      ) {
        arrayPages.push(i);
      }
      //cuando no es el ultimo bloque
    } else {
      for (
        let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
        i <= currentBlock * pagesPerBlock;
        i++
      ) {
        arrayPages.push(i);
      }
    }
  } else {
    quantityPages = Math.ceil(products.products?.length / productsPerPages); //cantidad de paginas maxima
    const pagesPerBlock = 5; //cantidad de paginas por bloque
    let currentBlock = Math.ceil(currentPage / pagesPerBlock); //bloques

    // analiza si estamos en el ultimo bloque(true) o no (false)
    if (currentBlock * pagesPerBlock >= quantityPages) {
      // este if analiza si me paso de la cantidad de paginas.
      //cuando es el ultimo bloque
      for (
        let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
        i <= quantityPages;
        i++
      ) {
        arrayPages.push(i);
      }
      //cuando no es el ultimo bloque
    } else {
      for (
        let i = currentBlock * pagesPerBlock - pagesPerBlock + 1;
        i <= currentBlock * pagesPerBlock;
        i++
      ) {
        arrayPages.push(i);
      }
    }
  }

  return (
    <section className="mb-16 ctrPage lg:pt-8">
      <div className="w-full flex flex-col items-center justify-center text-center pt-4 gap-4 mb-8 lg:pl-4 lg:pt-0 lg:gap-8 xl:pl-6">
        <ul className="w-full flex items-center justify-start pl-4 gap-2 lg:pl-0">
          <li className="text-darkGray">Inicio</li>
          <li className="text-darkGray">/</li>
          <li className="">{subRoute ? subRoute : ""}</li>
        </ul>

        <h2 className="lg:hidden flex items-center justify-center text-center gap-2">
          <b>{products.items ? products.items : "0"}</b> Resultados
        </h2>

        <FilteredProducts
          todoProducts={products.products}
          setProductsFiltered={setProductsFiltered}
          setTodoProducts={setTodoProducts}
          subRoute={subRoute}
        />
      </div>

      <>
        {todoProducts === undefined ? (
          <article className="w-full flex flex-col items-center justify-center">
            <h2 className="hidden lg:flex items-center justify-center text-center gap-2 lg:text-xl">
              <b>{products.items ? products.items : "0"}</b> Resultados
            </h2>

            <div className="w-full flex flex-col items-center justify-center lg:p-24 lg:ml-[-24em]">
              <h3 className="text-center w-[90%] lg:text-xl">
                <span className="text-3xl text-darkGray lg:text-6xl">
                  UPS!{" "}
                </span>
                <br /> Aunque no tengamos productos en este momento, puedes
                explorar nuestros otros recursos y contenidos interesantes.
              </h3>
              <p className="text-center text-darkGray w-[90%] text-sm lg:text-base">
                Suscríbete a nuestro boletín para ser el primero en enterarte
                cuando tengamos productos nuevos.
              </p>
            </div>
          </article>
        ) : (
          <article className="w-full flex flex-col items-center justify-center gap-8">
            <h2 className="hidden lg:flex items-center justify-center text-center gap-2 lg:text-xl">
              <b>{products.items ? products.items : "0"}</b> Resultados
            </h2>
            <div className="w-full flex flex-wrap items-center justify-center gap-8">
              {todoProducts?.map((product) => (
                <CardProductHome
                  key={product._id}
                  id={product._id}
                  name={product.name}
                  price_sale={product.price_sale}
                  img={
                    product.images?.length > 0
                      ? product.images[0]?.imageUrl
                      : ""
                  }
                />
              ))}
            </div>
          </article>
        )}
      </>

      <Pagination
        arrayPages={arrayPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        quantityPages={quantityPages}
      />
    </section>
  );
};

export default LayoutViewAll;
