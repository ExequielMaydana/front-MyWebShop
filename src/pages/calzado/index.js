import Layout from "@/components/Layout";
import LayoutViewAll from "@/components/LayoutViewAll";
import React from "react";

const Calzado = ({ products }) => {
  return (
    <Layout>
      <LayoutViewAll products={products} subRoute="Calzado"></LayoutViewAll>
    </Layout>
  );
};

export default Calzado;
export async function getServerSideProps() {
  try {
    const response = await fetch(
      `${process.env.DOMAIN_PROD}/productos/search?category=calzado`
    );
    const data = await response.json();
    return {
      props: {
        products: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}
