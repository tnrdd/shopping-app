import { useState, useContext } from "react";
import { CartContext } from "../pages/_app";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/cart.module.css";

export default function Cart({ setViewCart }) {
  const { cart, dispatch } = useContext(CartContext);

  const calcTotal = (cart) => {
    let total: number = 0;
    cart.forEach((product) => (total += product.price * product.quantity));
    return total;
  };

  return (
    <>
      <Head>
        <title>Shopping Cart</title>
      </Head>
      <div className={styles.cart}>
        <div className={styles.back} onClick={() => setViewCart(false)}>
          <Image
            src="/assets/arrow-left.svg"
            alt="back icon"
            width={48}
            height={48}
          />
        </div>
        {cart.length !== 0 ? (
          cart.map((product) => (
            <div className={styles.product} key={product.id}>
              <div className={styles.name}>
                <Link href={`/products/${product.id}`}>
                  <a>{product.title}</a>
                </Link>
                <span className={styles.price}>${product.price}</span>
              </div>
              <br />
              <div className={styles.actions}>
                <div class={styles.update}>
                  <button
                    onClick={() => dispatch({ type: "SUB", id: product.id })}
                  >
                    -
                  </button>
                  {product.quantity}
                  <button
                    onClick={() => dispatch({ type: "ADD", product: product })}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => dispatch({ type: "REMOVE", id: product.id })}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <span className={styles.empty}> Cart is empty!</span>
        )}
        {cart.length! !== 0 && (
          <span className={styles.total}>Total: ${calcTotal(cart as [])}</span>
        )}
      </div>
    </>
  );
}
