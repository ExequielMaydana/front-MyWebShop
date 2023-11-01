import CardProductHome from "./cards/CardProductHome";
import FilteredProducts from "./others/FilteredProducts";
import React, { useEffect, useState } from "react";

const LayoutViewAll = ({ products, subRoute }) => {
  const [todoProducts, setTodoProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);

  useEffect(() => {
    if (products) {
      setTodoProducts(products.products);
    }
  });

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
          todoProducts={todoProducts}
          setProductsFiltered={setProductsFiltered}
          subRoute={subRoute}
        />
      </div>
      {productsFiltered.length > 0 ? (
        <article className="w-full flex flex-col items-center justify-center gap-8">
          <h2 className="hidden lg:flex items-center justify-center text-center gap-2 lg:text-xl">
            <b>{productsFiltered ? productsFiltered.length : "0"}</b> Resultados
          </h2>
          <div className="w-full flex flex-wrap items-center justify-center gap-8">
            {productsFiltered?.map((product) => (
              <CardProductHome
                key={product._id}
                id={product._id}
                name={product.name}
                price_sale={product.price_sale}
                img={
                  product.images?.length > 0 ? product.images[0]?.imageUrl : ""
                }
              />
            ))}
          </div>
        </article>
      ) : (
        <>
          {todoProducts === undefined ? (
            <article className="w-full flex flex-col items-center justify-center">
              <h2 className="hidden lg:flex items-center justify-center text-center gap-2 lg:text-xl">
                <b>{products.items ? products.items : "0"}</b> Resultados
              </h2>

              <div className="w-full flex flex-col items-center justify-center absolute top-[6em] right-0 bottom-0 left-0 m-auto lg:top-[6em]">
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
      )}
    </section>
  );
};

export default LayoutViewAll;
