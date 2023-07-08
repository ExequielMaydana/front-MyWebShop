import React, { useState } from "react";
import NavBarDash from "@/components/dashboard/NavBarDash";
import { useRouter } from "next/router";
import FormAddProduct from "@/components/dashboard/products/FormAddProduct";

const AddProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const goBackProducts = () => {
    router.push("/dashboard/products");
  };

  return (
    <>
      <NavBarDash isOpen={isOpen} openMenu={openMenu} />
      <div className="pb-20 mt-10 w-full min-h-screen">
        <section className="w-full flex flex-col items-center justify-center gap-6">
          <article className="w-full flex flex-col items-center justify-center">
            <p
              className="flex items-center justify-center gap-1 text-darkSlateGray text-sm font-medium cursor-pointer smm:text-base"
              onClick={goBackProducts}
            >
              <i className="bx bx-left-arrow-alt"></i>Productos
            </p>
            <h2 className="text-darkSlateGray font-semibold	smm:text-lg">
              Nuevo Producto
            </h2>
          </article>
        </section>

        <FormAddProduct />
      </div>
    </>
  );
};

export default AddProduct;
