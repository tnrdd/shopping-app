import { useContext, useState } from "react";
import { CartContext } from "../pages/_app";
import Cart from "./cart"

export default function Header() {
  const { cart, dispatch } = useContext(CartContext);
  const [toggleCart, setToggleCart] = useState(false);

  return (
    <header>
      <h1>SHOP</h1>
      <div onClick={()=> setToggleCart(!toggleCart)}>{cart.reduce((total, current)=>total + current.quantity, 0)}</div>
      {toggleCart && <div>
        <Cart/>
      </div>}
    </header>
  );
}
