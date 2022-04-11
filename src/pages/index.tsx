import { useState, useContext } from "react";
import { GetStaticProps } from "next";
import { CartContext } from "./_app";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  return { props: { products } };
};

export default function Home({
  products,
}: {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}[]) {
  const { dispatch } = useContext(CartContext);

  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <a>{product.title}</a>
            </Link>
            <br />
            {product.price}
            <br />
            <button onClick={() => dispatch({ type: "ADD", product: product })}>
              Buy
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
