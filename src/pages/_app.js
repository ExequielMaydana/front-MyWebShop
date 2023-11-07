import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/bundle";
import Providers from "@/store/provider";
import NavBar from "@/components/shared/navbar/NavBar";
import Footer from "@/components/shared/footer/Footer";
import { useState } from "react";
import DataUser from "@/components/others/DataUser";

export default function App({ Component, pageProps }) {
  const [viewDataUser, setViewDataUser] = useState(false);

  return (
    <>
      <Providers>
        <NavBar setViewDataUser={setViewDataUser} />
        {viewDataUser && (
          <DataUser
            setViewDataUser={setViewDataUser}
            viewDataUser={viewDataUser}
          />
        )}
        <div className="w-full flex-grow">
          <Component {...pageProps} />
        </div>
        <Footer />
      </Providers>
    </>
  );
}
