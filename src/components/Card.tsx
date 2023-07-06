import { BookType } from "../context/Store.context";
import { StarSVG } from "../assets/svg";
import ItemPreview from "./ItemPreview.store";
import { useContext, useState } from "react";
import { AnimatePresence} from "framer-motion";
import { ImageContext } from "../context/Image.context";

type Props = {
  book: BookType;
};

export default function ({ book }: Props) {
  const [bool, setBool] = useState<boolean>(false);
  const imageArr = useContext(ImageContext)
  return (
    <>
      <div className="my-4 mx-auto md:mx-0">
        <div
          className="py-12 px-[3.05rem] w-[13.75rem] rounded bg-primary-200 shadow hover:bg-accent-blue-33 hover:rounded-none cursor-pointer"
          onClick={() => {
            setBool((prev) => !prev);
            document.body.style.overflow = "hidden";
          }}
        >
          <img
          //@ts-ignore
            src={imageArr[book.url]}
            className="h-44 border-2 w-[120px] border-black"
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
