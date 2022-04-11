import { GetStaticProps, GetStaticPaths } from "next";
import { useContext } from "react";
import { CartContext } from "../_app";
import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../styles/products.module.css";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  const paths = products.map((product) => {
    return {
      params: {
        id: product.id.toString(),
      },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.id as string}`
  );
  const product = await res.json();
  return { props: { product } };
};

export default function Product({
  product,
}: {
  product: {
    id: string;
    name: string;
    category: string;
    price: number;
    description: string;
    image: string;
  };
}) {
  const { dispatch } = useContext(CartContext);
  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={`${product.description}`} />
      </Head>
      {product.id}
      <br />
      {product.title}
      <br />
      {product.price}
      <br />
      <button
        onClick={() => dispatch({ type: "ADD", product: product })}
      >Buy</button>
    </>
  );
}
