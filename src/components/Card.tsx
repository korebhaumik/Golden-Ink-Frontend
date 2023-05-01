import { BookType } from "../context/Store.context";
import image_1 from "../assets/book_1.png";
import image_2 from "../assets/book_2.png";
import image_3 from "../assets/book_3.png";
import image_4 from "../assets/book_4.png";
import image_5 from "../assets/book_5.png";
import image_6 from "../assets/book_6.png";
import image_7 from "../assets/book_7.png";
import image_8 from "../assets/book_8.png";
import image_9 from "../assets/book_9.png";
import image_10 from "../assets/book_10.png";
import { StarSVG } from "../assets/svg";
import ItemPreview from "./ItemPreview.store";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  book: BookType;
};

export default function ({ book }: Props) {
  const [bool, setBool] = useState<boolean>(false);
  // const k = Math.floor(Math.random() * 10);
  const imageArr = [image_1, image_2, image_3, image_4, image_5,image_6,image_7,image_8,image_9,image_10];
  return (
    <>
      <div className="my-4 mx-auto md:mx-0">
        <div
          className="py-12 px-[3.05rem] rounded bg-primary-200 w-fit shadow hover:bg-accent-blue-33 hover:rounded-none cursor-pointer"
          onClick={() => {
            setBool((prev) => !prev);
            document.body.style.overflow = "hidden";
          }}
        >
          <img
          //@ts-ignore
            src={imageArr[book.url-1]}
            className="h-44 border-2 border-black"
            alt=""
          />
        </div>
        <h1 className="mt-3 h-10 font-medium w-52 leading-tight ">
          {book.title}
        </h1>
        <p className="text-sm text-primary-400">{book.author}</p>
        <div className="flex">
          <StarSVG className="w-4 text-yellow-400" />
          <StarSVG className="w-4 text-yellow-400" />
          <StarSVG className="w-4 text-yellow-400" />
          <StarSVG className="w-4 text-yellow-400" />
          <StarSVG className="w-4 text-yellow-400" />
        </div>
      </div>
      <AnimatePresence>
        {bool && <ItemPreview setBool={setBool} book={book} />}
      </AnimatePresence>
    </>
  );
}
