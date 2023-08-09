import React from "react";
import CardProductHome from "../cards/CardProductHome";

const SectionProducts = ({ data }) => {
  console.log(data);
  return (
    <section className="w-full flex flex-col center justify-center gap-4 mb-24 px-4 lg:px-8">
      <header className="w-full items-start justify-center">
        <h2 className="uppercase font-bold sm:text-xl md:text-2xl">
          LANZAMIENTOS
        </h2>
      </header>
      <div className="w-full flex gap-4 overflow-x-scroll scrollNone">
        {data.map((product) => (
          <CardProductHome
            key={product._id}
            name={product.name}
            price_sale={product.price_sale}
            img={product.images?.length > 0 ? product.images[0]?.imageUrl : ""}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionProducts;
