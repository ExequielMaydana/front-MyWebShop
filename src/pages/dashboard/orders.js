import React, { useState } from "react";
import NavBarDash from "@/components/dashboard/NavBarDash";
import ListOrders from "@/components/dashboard/orders/ListOrders";

const Orders = () => {
  const [searchProduct, setSearchProduct] = useState("");

  return (
    <>
      <NavBarDash />
      <div className="pb-20 mt-10 w-full min-h-screen">
        <section className="w-full flex flex-col items-center justify-center gap-6">
          <h2 className="font-bold text-xl md:text-start">Pedidos</h2>
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
          </article>
          <ListOrders />
        </section>
      </div>
    </>
  );
};

export default Orders;
