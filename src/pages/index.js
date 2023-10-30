import SliderImagesTop from "@/components/slider/SliderImagesTop";
import WeOffer from "@/components/others/WeOffer";
import CardStart from "@/components/cards/CardStart";
import SectionProducts from "@/components/products/SectionProducts";
import CardBrand from "@/components/cards/CardBrand";
import Layout from "@/components/Layout";
import { imagesCardStart, imagesBrands } from "@/utils/arrayImages";
import DataUser from "@/components/others/DataUser";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export default function Home({ imagesSlider, products }) {
  const [dataMyUser, setDataMyUser] = useState([]);
  const [viewDataUser, setViewDataUser] = useState(false);
  const [dataUser, setDataUser] = useState([]);
  const [aTokenExists, setATokenExists] = useState(false);

  const token = Cookies.get("tokenUser");

  const getMyUser = async () => {
    try {
      await axios
        .get(`${process.env.DOMAIN_PROD}/usuarios/me`, {
          headers: {
            "x-access-token": token,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setDataMyUser(res.data[0]);
          setDataUser(res.data[0]);
          setATokenExists(true);
        });
    } catch (error) {
      console.log("error en peticion GET a MyUser", error);
    }
  };

  useEffect(() => {
    if (token) getMyUser();
  }, []);

  return (
    <>
      <Layout
        aTokenExists={aTokenExists}
        setATokenExists={setATokenExists}
        dataUser={dataUser}
        setViewDataUser={setViewDataUser}
      >
        {viewDataUser && (
          <DataUser
            dataMyUser={dataMyUser}
            setViewDataUser={setViewDataUser}
            viewDataUser={viewDataUser}
            getMyUser={getMyUser}
          />
        )}
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
