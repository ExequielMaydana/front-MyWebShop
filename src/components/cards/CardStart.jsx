import Image from "next/image";
import React from "react";

const CardStart = ({ img }) => {
  return (
    <article className="shadow shadow-lg">
      <figure className="w-full h-full">
        <Image
          width={900}
          height={900}
          src={img || ""}
          alt="img"
          className="min-w-[100px] max-w-[300px] rounded-md shadow shadow-lg"
        />
      </figure>
    </article>
  );
};

export default CardStart;
