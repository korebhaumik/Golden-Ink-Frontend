import { useState } from "react";
import { ChevronDownSVG, SearchSVG } from "../assets/svg";

type Props = {};

export default function QueryBar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className=" bg-slate-100 flex items-center sm:w-[500px] px-6 py-4 justify-between shadow-lg">
        <div className="flex items-center w-96">
          <SearchSVG />
          <input
            type="text"
            placeholder="The Rain Heron..."
            className="bg-inherit border-0 outline-0 w-full ml-3 placeholder-slate-400"
            onChange={() => {
              setIsOpen(true);
            }}
          />
        </div>
        <div className="flex items-center cursor-pointer">
          <hr className="w-0.5 h-6 bg-slate-50 border-0 " />
          <a
            className="mx-2 w-14 text-center font-medium tracking-wide "
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Title
          </a>
          <ChevronDownSVG />
        </div>
      </div>
      {/* {isOpen && <QueryBarDropdown />} */}
    </div>
  );
}

function QueryBarDropdown() {
  return (
    <div className="absolute my-2 bg-slate-100 py-3 px-10 border border-primary-200 shadow-md w-[31.2rem] ">
      <div className="cursor-pointer">
        <p>The Great Circle</p>
        <p>The Rain Heron and the twisted wire</p>
        <p>Random Book Title</p>
        <p>LIDL Long Random Book Title</p>
      </div>
    </div>
  );
}

// Color
// bg-accent-blue-33
// bg-blue-300
