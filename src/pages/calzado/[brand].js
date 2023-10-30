import React from "react";

const CalzadoByBrand = () => {
  return <div></div>;
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
