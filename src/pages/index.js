import Head from "next/head";
import styles from "@/styles/Home.module.css";
import SliderImagesTop from "@/components/slider/SliderImagesTop";
import WeOffer from "@/components/others/WeOffer";
import NavBar from "@/components/shared/NavBar";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function Home({ imagesSlider }) {
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
        <title>GreedyShop</title>
      </Head>
      <main className={styles.main}>
        <NavBar />
        <section className={styles.contentHome}>
          <SliderImagesTop images={imagesSlider?.images} />
          <WeOffer />
        </section>
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const getImagesSlider = await fetch(
    `${process.env.DOMAIN_PROD}/api/v1/images`
  );
  const imagesSlider = await getImagesSlider.json();

  return { props: { imagesSlider } };
};
