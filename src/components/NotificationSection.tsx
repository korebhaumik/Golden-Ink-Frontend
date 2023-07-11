import { MouseEvent, useContext } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { EmptySVG, NotifSVG, XMarkSVG } from "../assets/svg";
import { CartContext } from "../context/Cart.context";
import { BookType } from "../context/Store.context";
import { ImageContext } from "../context/Image.context";

export default function Notifications({
  setBool,
  containerRef,
}: ContainerPropsType) {
  const navigate = useNavigate();
  function handler(event: MouseEvent<HTMLElement>) {
    if (!containerRef.current?.contains(event.target as HTMLElement)) {
      setBool((prev) => !prev);
    }
  }

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
        className="absolute top-0 right-0 z-20 h-full bg-white  w-[20rem]"
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
          <div className="flex items-center">
            <NotifSVG className="w-6 h-6" />
            <h1 className="text-lg font-medium ml-2">Notifications</h1>
          </div>
          <hr className="border-1 mt-2" />
          <div className=" h-[calc(100%_-_229px)]  overflow-scroll">
            {/* <p className="mt-5">{"No Active Notifications"}</p> */}
            <p className="mt-5">Filters are cosmetic.</p>
            <p className="mt-5">User Info button disabled.</p>
            <p className="mt-5">Better session management.</p>
            <p className="mt-5">Search Bar not finished.</p>
            <p className="mt-5">Avator Selector doesnt work.</p>
            <p className="mt-5">Reviews(Home) slider doesnt work.</p>
            <p className="mt-5">Orders Page is static.</p>
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
