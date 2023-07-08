import ListProducs from "@/components/dashboard/products/ListProducs";
import React, { useState } from "react";
import NavBarDash from "@/components/dashboard/NavBarDash";
import { useRouter } from "next/router";

const Products = () => {
  const [searchProduct, setSearchProduct] = useState("");

  const router = useRouter()

  const goToCreateProducto = () => {
    router.push("/dashboard/addProduct");
  };

  return (
    <>
      <NavBarDash />
      <div className="pb-20 mt-10 w-full min-h-screen">
        <section className="w-full flex flex-col items-center justify-center gap-6">
          <h2 className="font-bold text-xl md:text-start">Productos</h2>
          <article className="w-full flex flex-col items-center justify-center gap-6">
            <div className="w-[90%] h-[30px] flex items-center justify-center gap-1 rounded-lg bg-whiteSmoke shadow md:w-[600px] md:h-[40px]">
              <i className="bx bx-search cursor-pointer pl-2 text-lg text-darkGray"></i>
              <input
                type="text"
                placeholder="Buscar productos"
                value={searchProduct}
                onChange={(e) => setSearchProduct(e.target.value)}
                className="w-full h-full pl-2 bg-tras outline-none"
              />
            </div>
            <button
              className="py-1 px-3 rounded-lg text-darkSlateGray bg-mediumPurple font-semibold shadow cursor-pointer uppercase"
              onClick={goToCreateProducto}
            >
              + Añadir producto
            </button>
          </article>
          <ListProducs />
        </section>
      </div>
    </>
  );
};

export default Products;
