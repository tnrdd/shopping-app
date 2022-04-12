import { createContext, useReducer, useState } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import Layout from "../components/layout";
import reducer from "../reducers/cart";
import "../styles/global.css";

export const CartContext: any = createContext([]);

export default function App({ Component, pageProps }: AppProps) {
  const [cart, dispatch]: any = useReducer(reducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContext.Provider>
  );
}
