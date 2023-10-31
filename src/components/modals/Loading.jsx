import React from "react";

const Loading = () => {
  return (
    <div className="w-full h-full fixed top-0 right-0 bottom-0 left-0 m-auto flex flex-col items-center justify-center gap-2 bg-bgOpacityTwo z-50 text-white">
      <span className="loader"></span>
      <p>Espere por favor...</p>
    </div>
  );
};

export default Loading;
