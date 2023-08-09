import Head from "next/head";
import styles from "@/styles/Home.module.css";
import SliderImagesTop from "@/components/slider/SliderImagesTop";
import WeOffer from "@/components/others/WeOffer";
import NavBar from "@/components/shared/NavBar";
import { useEffect } from "react";
import Cookies from "js-cookie";
import Footer from "@/components/shared/Footer";
import CardStart from "@/components/cards/CardStart";
import SectionProducts from "@/components/products/SectionProducts";
import CardBrand from "@/components/cards/CardBrand";

export default function Home({ imagesSlider, products }) {
  // Cookies.remove("tokenUser");

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Tienda de semillas de colección, las marcas más importantes del mercado, las más confiables, seguras y sobre todo de calidad."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="semillas de marihuana, cannabis seeds, el troyano seeds"
        />
        <meta name="author" content="ExeDev" />
        <link rel="icon" href="" />
        <title>CloseWithoutGender</title>
      </Head>
      <main className={styles.main}>
        <NavBar />
        <section className={styles.contentHome}>
          <SliderImagesTop images={imagesSlider?.images} />
          <WeOffer />
          <article className="w-full flex flex-wrap items-center justify-around gap-4 px-4 mb-24 lg:px-8">
            <CardStart img="/Images/1.png" />
            <CardStart img="/Images/2.png" />
            <CardStart img="/Images/4.png" />
          </article>
          <SectionProducts data={products.producst} />
          <article className="w-full flex gap-4 overflow-x-scroll scrollNone px-4 lg:px-8 mb-24 xlmy:justify-center">
            <CardBrand img="/logotypes_brands/logo_nike.png" />
            <CardBrand img="/logotypes_brands/logo_adidas.png" />
            <CardBrand img="/logotypes_brands/logo_vans.png" />
            <CardBrand img="/logotypes_brands/logo_ripcurl.png" />
            <CardBrand img="/logotypes_brands/logo_santacruz.png" />
            <CardBrand img="/logotypes_brands/logo_trasher.png" />
          </article>
        </section>
        <Footer />
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const getImagesSlider = await fetch(
    `${process.env.DOMAIN_PROD}/api/v1/images`
  );
  const imagesSlider = await getImagesSlider.json();

  const getProducts = await fetch(
    `${process.env.DOMAIN_PROD}/api/v1/productos`
  );
  const products = await getProducts.json();

  return { props: { imagesSlider, products } };
};
