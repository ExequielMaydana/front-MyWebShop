import Image from "next/image";
import React from "react";

const CardStart = ({ img }) => {
  return (
    <article className="w-[min(100%, 400px)] shadow shadow-lg">
      <figure className="w-full h-full">
        <Image
          width={900}
          height={900}
          src={img || ""}
          alt="img"
          className="min-w-[100px] max-w-[400px] rounded-md shadow shadow-lg"
        />
      </figure>
    </article>
  );
};

export default CardStart;
