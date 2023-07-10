import { useContext } from "react";
import { CartContext } from "../context/Cart.context";

export const useCart = () => {
  const { addToCart, removeFromCart, subtotal, cartData } =
    useContext(CartContext);
  return { addToCart, removeFromCart, subtotal, cartData };
};
