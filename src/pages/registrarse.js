import SignUp from "@/components/auth/SignUp";
import NavBar from "@/components/shared/NavBar";
import React from "react";

const Registrarse = () => {
  return (
    <>
      <div className="pb-20 w-full min-h-screen">
        <NavBar/>
        <article className="w-full mt-10">
          <SignUp />
        </article>
      </div>
    </>
  );
};

export default Registrarse;
