import Layout from "@/components/Layout";
import LayoutViewAll from "@/components/LayoutViewAll";
import React from "react";

const Accesorios = ({ products }) => {
  return (
    <Layout>
      <LayoutViewAll products={products} subRoute="Accesorios"></LayoutViewAll>
    </Layout>
  );
};

export default Accesorios;
export async function getServerSideProps() {
  try {
    const response = await fetch(
      `${process.env.DOMAIN_PROD}/productos/search?category=accesorio`
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
