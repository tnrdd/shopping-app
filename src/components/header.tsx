import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Cart from "./cart";
import { CartContext } from "../pages/_app";
import styles from "../styles/header.module.css";

export default function Header() {
  const [viewCart, setViewCart] = useState(false);
  const { cart, dispatch } = useContext(CartContext);

  return (
    <header>
      <div className={styles.logo}>
        <Link href="/">
          <h1>SHOP</h1>
        </Link>
      </div>
      <div className={styles.cart} onClick={() => setViewCart(!viewCart)}>
        {cart.reduce((total, current) => total + current.quantity, 0)}
        <Image
          src="/assets/shopping-cart.svg"
          alt="cart icon"
          width={24}
          height={24}
        />
      </div>
      {viewCart && <Cart setViewCart={setViewCart} />}
    </header>
  );
}