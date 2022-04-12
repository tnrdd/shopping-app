import { useContext } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import { Product } from "../../types/product";
import { CartContext } from "../_app";
import Head from "next/head";
import Layout from "../../components/layout";
import styles from "../../styles/products.module.css";

export const getStaticPaths: GetStaticPaths = async () => {
  const res: Response = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();
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
  const res: Response = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  );
  const product = await res.json();
  return { props: { product } };
};

export default function ProductPage({ product }: { product: Product }) {
  const { dispatch } = useContext(CartContext);
  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={`${product.description}`} />
      </Head>
      <div className={styles.product}>
        {
        <Image
          src={product.image}
          alt={product.title}
          width={600}
          height={600}
          />}
        <div className={styles.info}>
          <div className={styles.name}>
            {product.title}
            <span className={styles.price}>${product.price}</span>
          </div>
          <button onClick={() => dispatch({ type: "ADD", product: product })}>
            Add to cart
          </button>
          <h2>Description</h2>
          <span>{product.description}</span>
        </div>
      </div>
    </>
  );
}
