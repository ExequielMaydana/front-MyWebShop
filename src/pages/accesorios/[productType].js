import Layout from "@/components/Layout";
import LayoutViewAll from "@/components/LayoutViewAll";
import { useRouter } from "next/router";
import React from "react";

const ProductByType = ({ products }) => {
  const router = useRouter();
  const { productType } = router.query;
  return (
    <Layout>
      <LayoutViewAll products={products} subRoute={productType}></LayoutViewAll>
    </Layout>
  );
};

export default ProductByType;

export async function getServerSideProps({ params }) {
  const { product_type } = params;
  const apiUrl = `${process.env.DOMAIN_PROD}/productos/search?category=accesorios&product_type=${product_type}`;
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
