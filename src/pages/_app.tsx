import { createContext, useReducer, useState } from "react";
import reducer from "../reducers/cart";
import Head from "next/head";
import Layout from "../components/layout";
import "../styles/global.css";

export const CartContext = createContext();

export default function App({ Component, pageProps }: AppProps) {
  const [cart, dispatch] = useReducer(reducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      <Layout>
        <Head></Head>
        <Component {...pageProps} />
      </Layout>
    </CartContext.Provider>
  );
}
