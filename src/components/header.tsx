import { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "../types/product";
import { CartContext } from "../pages/_app";
import Cart from "./cart";
import styles from "../styles/header.module.css";

export default function Header() {
  const [viewCart, setViewCart] = useState(false);
  const { cart, dispatch }: any = useContext(CartContext);

  return (
    <header>
      <div className={styles.logo}>
        <Link href="/">
          <h1>SHOP</h1>
        </Link>
      </div>
      <div className={styles.cart} onClick={() => setViewCart(!viewCart)}>
        {cart.reduce(
          (total: number, current: Product) => total + current.quantity,
          0
        )}
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
