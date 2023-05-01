import { createContext, useState } from "react";
import { BookType } from "./Store.context";

type ContextType = {
  cartData?: BookType[];
  addToCart: (book: BookType) => void;
  removeFromCart: (book: BookType) => void;
  subtotal: number;
};
const CartContext = createContext<ContextType | null>(null);

function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartData, setCartData] = useState<BookType[]>();

  function addToCart(book: BookType) {
    console.log(book);
    setCartData((prev) => {
      if (prev) return [...prev, book];
      return [book];
    });
  }

  function removeFromCart(book: BookType) {
    console.log(book);
    setCartData((prev) => {
      if (prev) {
        return prev.filter((cartBook) => {
          return cartBook.title !== book.title;
        });
      }
      return undefined;
    });
  }

  let subtotal = 0;

  cartData?.forEach((book) => {
    subtotal += 500;
  });

  return (
    <CartContext.Provider
      value={{ cartData, addToCart, removeFromCart, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
