import { MouseEvent, useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { EmptySVG, XMarkSVG } from "../assets/svg";
import { BookType } from "../context/Store.context";
import { ImageContext } from "../context/Image.context";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";

export default function Cart({ setBool, containerRef }: ContainerPropsType) {
  const { session } = useAuth();
  const { cartData, subtotal } = useCart();

  const navigate = useNavigate();
  function handler(event: MouseEvent<HTMLElement>) {
    if (!containerRef.current?.contains(event.target as HTMLElement)) {
      setBool((prev) => !prev);
    }
  }

  let cartDisplay: React.ReactNode[] = [];
  if (cartData?.length) {
    cartDisplay = cartData.map((book) => {
      return <CartUnit book={book} key={Math.random()} />;
    });
  } else {
    cartDisplay = [<EmptyCartUnit key={Math.random()} />];
  }
  let buttonStatus = {
    disabled: true,
    text: "Cart is empty :(",
  };
  if (subtotal) buttonStatus = { disabled: true, text: "Login to Checkout" };
  if (session.email) buttonStatus = { disabled: false, text: "Checkout" };
  if(!subtotal) buttonStatus = { disabled: true, text: "Cart is empty :(" };

  return (
    <motion.div
      className="fixed inset-0 z-10 h-full bg-black bg-opacity-60"
      initial={{
        opacity: 0,
        filter: "blur(0)",
      }}
      animate={{
        opacity: 100,
      }}
      transition={{
        ease: "easeOut",
        duration: 0.3,
      }}
      exit={{
        opacity: 0,
        transition: {
          ease: "easeIn",
          duration: 0.2,
        },
      }}
      onClick={(e: MouseEvent<HTMLElement>) => {
        document.body.style.overflow = "auto";
        handler(e);
      }}
    >
      <motion.div
        ref={containerRef}
        className="absolute top-0 right-0 z-20 h-full bg-white w-full sm:w-[28rem]"
        initial={{
          opacity: 0,
          x: 80,
        }}
        animate={{
          opacity: 100,
          scale: 1,
          x: 0,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.3,
        }}
        exit={{
          opacity: 0,
          x: 80,
          transition: {
            ease: "easeIn",
            duration: 0.2,
          },
        }}
      >
        <div className="h-full px-5 pt-10">
          <XMarkSVG
            className="absolute w-6 h-6 right-3 cursor-pointer top-10"
            onClick={() => {
              setBool(false);
            }}
          />
          <h1 className="text-lg font-medium">Shipping Cart</h1>
          <hr className="border-1 mt-2" />
          <div className=" h-[calc(100%_-_229px)]  overflow-scroll">
            {cartDisplay}
          </div>
        </div>

        {/* Lower */}
        <div className="absolute bottom-0 w-full">
          <hr className="border-1 border-slate-200" />
          <div className="px-5 py-7 ">
            <div className="flex justify-between font-medium">
              <h2>Subtotal</h2>
              <h2> ₹ {subtotal}</h2>
            </div>
            <p className="text-sm mt-1 text-primary-400">
              Shipping and taxes calculated at checkout.{" "}
            </p>
            <button
              className="w-full mt-5 bg-accent-blue-800 text-white rounded py-2 disabled:bg-primary-400 "
              onClick={() => {
                navigate("/checkout");
                setBool(false);
              }}
              disabled={buttonStatus.disabled}
            >
              {buttonStatus.text}
            </button>
            <p
              className="text-accent-blue-800 text-center text-sm mt-2 cursor-pointer"
              onClick={() => {
                navigate("/store");
                setBool(false);
              }}
            >
              of Continue Shopping{" "}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

type ContainerPropsType = {
  setBool: React.Dispatch<React.SetStateAction<boolean>>;
  containerRef: React.RefObject<HTMLDivElement>;
};

function CartUnit({ book }: ICartUnit) {
  const imageArr = useContext(ImageContext);

  const { removeFromCart } = useCart();
  return (
    <>
      <div className="flex mt-5 w-full">
        <img
          src={imageArr[parseInt(book.url)]}
          className="h-24 py-4 px-7 border rounded"
        />
        <div className="flex flex-col justify-between h-24 w-full ml-3">
          <div>
            <div className="flex justify-between">
              <h2 className="leading-tight w-3/5 sm:w-52">{book.title}</h2>
              <h2>₹ 500</h2>
            </div>
            <p className="text-sm  text-primary-400">{book.author}</p>
          </div>
          <div className="flex font-light text-sm justify-between">
            <p className="text-primary-400">Qty 1</p>
            <a
              className="text-accent-blue-800 cursor-pointer"
              onClick={() => removeFromCart(book)}
            >
              Remove
            </a>
          </div>
        </div>
      </div>
      <hr className="border-1 mt-5 " />
    </>
  );
}

function EmptyCartUnit({}) {
  return (
    <>
      <div className="flex mt-5 w-full">
        <EmptySVG />
        <h1>Oops! Your cart looks empty.</h1>
      </div>
      <hr className="border-1 mt-5 " />
    </>
  );
}

interface ICartUnit {
  book: BookType;
}
