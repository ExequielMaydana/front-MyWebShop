import React from "react";
import Login from "@/components/auth/Login";

const iniciarSesion = () => {
  return (
    <>
      <div className="pb-20 mt-10 w-full min-h-screen">
        {" "}
        <Login />
      </div>
    </>
  );
};

export default iniciarSesion;
