import Layout from "@/components/Layout";
import LayoutViewAll from "@/components/LayoutViewAll";
import React from "react";

const Indumentaria = ({ products }) => {
  return (
    <Layout>
      <LayoutViewAll
        products={products}
        subRoute="Indumentaria"
      ></LayoutViewAll>
    </Layout>
  );
};

export default Indumentaria;

export async function getServerSideProps() {
  try {
    const response = await fetch(
      `${process.env.DOMAIN_PROD}/productos/search?category=indumentaria`
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
