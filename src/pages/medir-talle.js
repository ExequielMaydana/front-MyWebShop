import Layout from "@/components/Layout";
import {
  dataGuideSizesShoes,
  arrayGuideSizesClothing,
} from "@/utils/arrayDataGuideSizes";
import Image from "next/image";
import React from "react";

const medirTalle = () => {
  console.log(arrayGuideSizesClothing);
  return (
    <Layout subtitle="Como medir tu talle">
      <h2 className="text-2xl p-4 font-semibold lg:text-4xl">Guía de talles</h2>
      {dataGuideSizesShoes.map((data) => (
        <article
          className="flex flex-col gap-4 p-4 lg:items-center justify-center"
          key={data.id}
        >
          <p className="font-medium text-xl lg:text-2xl">{data.title}</p>
          <p className="lg:text-lg lg:w-[80%] lg:text-center">
            {data.description}
          </p>
          <div className="w-full flex flex-wrap lg:items-center lg:justify-center">
            {data.images?.map((img) => (
              <figure className="w-full sm:w-[200px]" key={img.id}>
                <Image
                  src={img.imgUrl}
                  alt="img"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </figure>
            ))}
          </div>
          <ul className="w-full flex flex-col gap-4 lg:text-lg lg:w-[80%] lg:text-center">
            {data.steps?.map((data) => (
              <li key={data.id}>
                <b>{data.title}:</b>
                <p>{data.description}</p>
              </li>
            ))}
          </ul>
        </article>
      ))}
      {arrayGuideSizesClothing.map((data) => (
        <article
          className="flex flex-col gap-4 p-4 lg:items-center justify-center"
          key={data.id}
        >
          <p className="font-medium text-xl lg:text-2xl">{data.title}</p>

          <div className="flex flex-col items-center justify-center lg:text-lg">
            <b>{data.topSide[0]?.title}</b>
            <p className="lg:w-[80%] lg:text-center">
              {data.topSide[0]?.description}
            </p>
          </div>

          <div className="w-full flex flex-wrap lg:items-center justify-center">
            {data.topSide[0]?.images.map((img) => (
              <figure className="w-full sm:w-[200px]" key={img.id}>
                <Image
                  src={img.imgUrl}
                  alt="img"
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </figure>
            ))}
          </div>
          <ul className="w-full flex flex-col gap-4 lg:text-lg lg:w-[80%] lg:text-center">
            {data.topSide[0]?.steps.map((data) => (
              <li key={data.id}>
                <b>{data.title}:</b>
                <p>{data.description}</p>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center justify-center lg:text-lg">
            <b>{data.bottomSide[0]?.title}</b>
            <p className="lg:w-[80%] lg:text-center">
              {data.bottomSide[0]?.description}
            </p>
          </div>

          <div className="w-full flex flex-wrap lg:items-center justify-center">
            {data.bottomSide[0]?.images.map((img) => (
              <figure className="w-full sm:w-[200px]" key={img.id}>
                <Image
                  src={img.imgUrl}
                  alt="img"
                  className="w-full h-full object-contain"
                  width={500}
                  height={500}
                />
              </figure>
            ))}
          </div>
          <ul className="w-full flex flex-col gap-4 lg:text-lg lg:w-[80%] lg:text-center">
            {data.bottomSide[0]?.steps.map((data) => (
              <li key={data.id}>
                <b>{data.title}:</b>
                <p>{data.description}</p>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </Layout>
  );
};

export default medirTalle;
