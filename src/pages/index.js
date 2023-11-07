import SliderImagesTop from "@/components/slider/SliderImagesTop";
import WeOffer from "@/components/others/WeOffer";
import CardStart from "@/components/cards/CardStart";
import SectionProducts from "@/components/products/SectionProducts";
import CardBrand from "@/components/cards/CardBrand";
import Layout from "@/components/Layout";
import { imagesCardStart, imagesBrands } from "@/utils/arrayImages";

export default function Home({ imagesSlider, products }) {
  return (
    <>
      <Layout>
        <SliderImagesTop images={imagesSlider?.images} />
        <WeOffer />
        <article className="w-full flex flex-wrap items-center justify-around gap-8 px-4 mb-24 lg:px-8">
          {imagesCardStart.map((i) => (
            <CardStart img={i.imgUrl} key={i.id} title={i.title} />
          ))}
        </article>
        <SectionProducts data={products.products} />
        <article className="w-full flex gap-4 overflow-x-scroll scrollNone px-4 lg:px-8 mb-24 xlmy:justify-center">
          {imagesBrands.map((i) => (
            <CardBrand img={i.imgUrl} key={i.id} />
          ))}
        </article>
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  const getImagesSlider = await fetch(`${process.env.DOMAIN_PROD}/images`);
  const imagesSlider = await getImagesSlider.json();

  const getProducts = await fetch(`${process.env.DOMAIN_PROD}/productos`);
  const products = await getProducts.json();

  return { props: { imagesSlider, products } };
};
