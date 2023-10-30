import React from "react";
import Login from "@/components/auth/Login";
import NavBar from "@/components/shared/navbar/NavBar";
import Layout from "@/components/Layout";

const iniciarSesion = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  );
};

export default iniciarSesion;
