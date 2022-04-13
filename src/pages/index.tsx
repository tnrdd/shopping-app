import { useState, useContext } from "react";
import { GetStaticProps } from "next";
import { CartContext } from "./_app";
import { Product } from "../types/product";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/products.module.css";

export const getStaticProps: GetStaticProps = async () => {
  const res: Response = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();
  return { props: { products } };
};

export default function Home({ products }: { products: Product[] }) {
  const { dispatch } = useContext(CartContext);

  return (
    <>
      <Head>
        <title>Shop</title>
        <meta 
        name="description"
        content="Shopping app"
        />
      </Head>
      <div className={styles.products}>
        {products.map((product) => (
          <div className={styles.card} key={product.id}>
            <Image
              src={product.image}
              alt={product.title}
              width={600}
              height={600}
            />
            <div className={styles.name}>
              <Link href={`/products/${product.id}`}>
                <a>{product.title}</a>
              </Link>
              <span className={styles.price}>${product.price}</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch({ type: "ADD", product: product });
              }}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
