import Layout from "@/components/Layout";
import LayoutViewAll from "@/components/LayoutViewAll";
import { useRouter } from "next/router";
import React from "react";

const CalzadoByBrand = ({ products }) => {
  const router = useRouter();
  const { brand } = router.query;
  return (
    <Layout>
      <LayoutViewAll products={products} subRoute={brand}></LayoutViewAll>
    </Layout>
  );
};

export default CalzadoByBrand;

export async function getServerSideProps({ params }) {
  const { brand } = params;
  const apiUrl = `${process.env.DOMAIN_PROD}/productos/search?category=calzado&brand=${brand}`;
  try {
    const response = await fetch(apiUrl);
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
