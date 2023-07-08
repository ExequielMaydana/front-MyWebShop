import React from "react";
import Login from "@/components/auth/Login";
import NavBar from "@/components/shared/NavBar";

const iniciarSesion = () => {
  return (
    <>
      <section className="w-full min-h-screen">
        <NavBar />
        <article className="w-full mt-10">
          <Login />
        </article>
      </section>
    </>
  );
};

export default iniciarSesion;
