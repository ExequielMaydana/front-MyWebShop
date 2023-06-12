import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

const Products = () => {


  const [products, setProducst] = useState([])

  const getProducts = () => {
    const URL = `${process.env.NEXT_PUBLIC_DOMAIN_DEV}/api/v1/productos`;
    axios
      .get(URL)
      .then((res) => setProducst(res.data.producst))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <section className="w-full h-full flex items-center justify-center">
      <Card products={products}/>
    </section>
  );
};

export default Products;
