import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Products from "@/components/products/Products";

export default function Home() {

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
        <Products/>
      </main>
    </>
  );
}
