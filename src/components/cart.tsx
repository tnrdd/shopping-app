import { useState, useContext } from "react";
import { CartContext } from "../pages/_app";
import Head from "next/head";
import Link from "next/link";

export default function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  return (
    <>
      <Head>
        <title>Shop</title>
      </Head>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <br />
            {product.price}
            <br />
            <button onClick={() => dispatch({ type: "ADD", product: product })}>
              +
            </button>
            <button
              onClick={() => dispatch({ type: "SUB", id: product.id })}
            >
              -
            </button>
            <button
              onClick={() => dispatch({ type: "REMOVE", id: product.id })}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
