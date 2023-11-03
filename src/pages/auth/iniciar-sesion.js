import React from "react";
import Login from "@/components/auth/Login";
import Layout from "@/components/Layout";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";
const iniciarSesion = () => {
  const router = useRouter();
  const token = Cookies.get("tokenUser");

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, []);
  return (
    <Layout>
      <Login />
    </Layout>
  );
};

export default iniciarSesion;
