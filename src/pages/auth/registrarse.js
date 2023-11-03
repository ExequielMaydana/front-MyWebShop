import Layout from "@/components/Layout";
import SignUp from "@/components/auth/SignUp";
import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";
const Registrarse = () => {
  const token = Cookies.get("tokenUser");
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, []);
  return (
    <Layout>
      <SignUp />
    </Layout>
  );
};

export default Registrarse;
