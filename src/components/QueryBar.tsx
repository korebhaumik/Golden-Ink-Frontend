import { useState } from "react";
import { ChevronDownSVG, SearchSVG } from "../assets/svg";

type Props = {};

export default function QueryBar({}: Props) {
  const [selectorIsOpen, setSelectorIsOpen] = useState(false);
  const [querySuggestionsIsOpen, setQuerySuggestionsIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className=" bg-slate-100 flex items-center sm:w-[500px] px-6 py-4 justify-between shadow-lg relative">
        <div className="flex items-center w-96">
          <SearchSVG />
          <input
            type="text"
            placeholder="The Rain Heron..."
            className="bg-inherit border-0 outline-0 w-full ml-3 placeholder-slate-400"
            onChange={(e) => {
              if (e.target.value) setQuerySuggestionsIsOpen(true);
              else setQuerySuggestionsIsOpen(false);
              
            }}
          />
        </div>
        <div className="flex items-center cursor-pointer">
          <hr className="w-0.5 h-6 bg-slate-50 border-0 " />
          <a
            className="mx-2 w-14 text-center font-medium tracking-wide "
            onClick={() => {
              setSelectorIsOpen((prev) => !prev);
            }}
          >
            Author
          </a>
          <ChevronDownSVG />
        </div>
        {selectorIsOpen && (
          <ParamSelectorDropdown setIsOpen={setSelectorIsOpen} />
        )}
      </div>
      {/* {querySuggestionsIsOpen && (
        <QueryBarDropdown setIsOpen={setQuerySuggestionsIsOpen} />
      )} */}
    </div>
  );
}

function ParamSelectorDropdown({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="absolute right-0 top-14 bg-primary-0 z-10 py-3 px-5 border border-primary-200 shadow-md w-28 ">
      <div className="cursor-pointer">
        <p
          onClick={() => {
            setIsOpen(false);
          }}
          className="mb-1"
        >
          Book
        </p>
        <p
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Author
        </p>
      </div>
    </div>
  );
}

function QueryBarDropdown({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="absolute my-2 z-10 bg-primary-0 py-3 px-10 border border-primary-200 shadow-md w-[31.2rem] ">
      <div className="cursor-pointer">
        <p
          onClick={() => {
            setIsOpen(false);
          }}
        >
          The Great Circle
        </p>
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
