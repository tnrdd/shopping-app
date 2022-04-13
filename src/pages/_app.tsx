import { createContext, useReducer, useState } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import Layout from "../components/layout";
import reducer from "../reducers/cart";
import "../styles/global.css";
import {Product} from "../types/product";
export const CartContext: any = createContext([]);
const initialState: Product[] = []

export default function App({ Component, pageProps }: AppProps) {
  const [cart, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContext.Provider>
  );
}
