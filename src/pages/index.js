import Head from "next/head";
import styles from "@/styles/Home.module.css";
import SliderImagesTop from "@/components/slider/SliderImagesTop";
import WeOffer from "@/components/others/WeOffer";
import NavBar from "@/components/shared/NavBar";
import { useEffect } from "react";
import Cookies from "js-cookie";
import Footer from "@/components/shared/Footer";
import CardStart from "@/components/cards/CardStart";

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
        <title>CloseWithoutGender</title>
      </Head>
      <main className={styles.main}>
        <NavBar />
        <section className={styles.contentHome}>
          <SliderImagesTop images={imagesSlider?.images} />
          <WeOffer />
          <article className="w-full flex flex-wrap items-center justify-around gap-4 p-4 mb-8">
            <CardStart img="/Images/1.png" />
            <CardStart img="/Images/2.png" />
            <CardStart img="/Images/4.png" />
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

  return { props: { imagesSlider } };
};
