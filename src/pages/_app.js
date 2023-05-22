import NavBar from "@/components/shared/NavBar";
import "@/styles/globals.css";

import { persistor, store } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavBar />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}
