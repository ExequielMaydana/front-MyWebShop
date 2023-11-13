import React from "react";

const Pagination = ({
  setCurrentPage,
  arrayPages,
  currentPage,
  quantityPages,
}) => {
  const prevPages = () => {
    if (currentPage - 1 === 0) {
      setCurrentPage(quantityPages);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPages = () => {
    if (currentPage + 1 > quantityPages) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const changePageTo = (n) => setCurrentPage(n);
  return (
    <article className="w-full flex items-center justify-center gap-4 pt-8">
      {" "}
      <div
        onClick={prevPages}
        className="text-2xl border px-2 rounded-lg cursor-pointer"
      >
        &#60;
      </div>
      <ul className="flex items-center justify-center gap-4">
        {arrayPages?.map((num) => (
          <li
            onClick={() => changePageTo(num)}
            key={num}
            className={
              currentPage === num
                ? `text-lg border px-2 rounded-lg bg-mediumPurple text-white shadow-xl cursor-pointer`
                : `text-lg border px-2 rounded-lg  cursor-pointer`
            }
          >
            {num}
          </li>
        ))}
      </ul>
      <div
        onClick={nextPages}
        className="text-2xl border px-2 rounded-lg cursor-pointer"
      >
        &#62;
      </div>
    </article>
  );
};

export default Pagination;
