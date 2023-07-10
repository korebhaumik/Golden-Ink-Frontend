import {
  ChevronDownSVG,
  ExclusiveSVG,
  FilterSVG,
  GenreSVG,
  RatingSVG,
  StarSVG,
} from "../assets/svg";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useFilters } from "../hooks/useFilters";

export default function Filter() {
  const { handleSelectorStatus, selectorIsOpen, filters } = useFilters();
  const elementRef = useRef<HTMLDivElement>(null);

  function handler(event: any) {
    if (!elementRef.current?.contains(event.target as Element)) {
      handleSelectorStatus(false);
    }
  }
  useEffect(() => {
    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  const BajJSX = filters.map((filter) => {
    // console.log(filter);
    if (filter.isChecked) {
      return (
        <Baj key={Math.random()} type={filter.type} label={filter.label} />
      );
    }
  });

  return (
    <div className="relative my-5">
      <div className="relative flex-wrap md:flex ">
        {/* Button */}
        <div ref={elementRef}>
          <button
            className="flex items-center justify-between px-6 py-4 bg-white border shadow-lg h-fit w-fit border-slate-200 "
            onClick={() => {
              handleSelectorStatus(!selectorIsOpen);
            }}
          >
            <FilterSVG />
            <a className="mx-1.5 w-14 text-center font-medium tracking-wide">
              Filter
            </a>
            <ChevronDownSVG />
          </button>
          <AnimatePresence>
            {selectorIsOpen && <FilterSelector />}
          </AnimatePresence>
        </div>
        <div className="flex flex-wrap mx-0 my-2 md:my-0 md:mx-4">{BajJSX}</div>
      </div>
    </div>
  );
}

function Baj({ type, label }: BajPropType) {
  const colorVariants = {
    genre: "bg-blue-100 text-blue-900",
    exclusive: "bg-red-100 text-red-900",
    rating: "bg-yellow-100 text-yellow-900",
  };

  return (
    <div
      className={`${colorVariants[type]} px-4 h-fit py-2 rounded font-medium mr-3 mt-3 flex items-center`}
    >
      {type == "genre" && (
        <GenreSVG className={`w-5 h-5 mr-1 ${colorVariants[type]}`} />
      )}
      {type == "rating" && (
        <RatingSVG className={`w-5 h-5 mr-1 ${colorVariants[type]}`} />
      )}
      {type == "exclusive" && (
        <ExclusiveSVG className={`w-5 h-5 mr-1 ${colorVariants[type]}`} />
      )}
      <p className="text-sm">{label}</p>
    </div>
  );
}

type BajPropType = {
  type: "genre" | "exclusive" | "rating";
  label: string;
};

interface IFilterSelector {
  setFilters: React.Dispatch<React.SetStateAction<any[]>>;
}

function FilterSelector() {
  return (
    <motion.div
      className="absolute h-fit w-fit sm:flex flex-wrap justify-between my-2 top-14 bg-white py-6 px-10  border border-slate-200 rounded shadow-md sm:w-[31.2rem]"
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 100,
        scale: 1,
      }}
      transition={{
        ease: "easeOut",
        duration: 0.2,
      }}
      exit={{
        opacity: 0,
        scale: 0.95,
        transition: {
          ease: "easeIn",
          duration: 0.1,
        },
      }}
    >
      {/* Genre */}
      <div className="">
        <div className="flex">
          <GenreSVG className="w-5 h-5 mr-1.5 -ml-0.5 text-accent-blue-800" />
          <h1 className="font-medium">Genre</h1>
        </div>
        <div className="flex justify-between w-60">
          {/* left */}
          <div className="w-24">
            <FormUnit label="Fiction" />
            <FormUnit label="Fantasy" />
            <FormUnit label="Horror" />
            <FormUnit label="Literature" />
            <FormUnit label="Philosophy" />
          </div>
          {/* right */}
          <div>
            <FormUnit label="Romance" />
            <FormUnit label="Self-Help" />
            <FormUnit label="Comedy" />
            <FormUnit label="Poetry" />
            <FormUnit label="Comic" />
          </div>
        </div>
      </div>
      {/* Rating */}
      <div className="mt-3 sm:mt-0 ">
        <div className="flex">
          <RatingSVG className="w-5 h-5 mr-1.5 -ml-0.5 text-yellow-900" />
          <h1 className="font-medium">Rating</h1>
        </div>
        <div className="flex flex-col justify-between w-32">
          <FormUnit children={<Stars num={5} />} label="5 stars" />
          <FormUnit children={<Stars num={4} />} label="4 stars" />
          <FormUnit children={<Stars num={3} />} label="3 stars" />
          <FormUnit children={<Stars num={2} />} label="2 stars" />
          <FormUnit children={<Stars num={1} />} label="1 star" />
        </div>
      </div>
      {/* Exclusive */}
      <div className="mt-3 sm:mt-3">
        <div className="flex">
          <ExclusiveSVG className="w-5 h-5 mr-1.5 -ml-0.5 text-red-900" />
          <h1 className="font-medium">Exclusives</h1>
        </div>
        <div className="sm:flex flex-wrap justify-between sm:w-80 ">
          <div className="w-36">
            <FormUnit label="New Arrivals" />
            <FormUnit label="Top Picks" />
          </div>
          <div className="w-40">
            <FormUnit label="Classics" />
            <FormUnit label="Popular with Kids" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FormUnit({ label, children }: IFormUnit) {
  const { handleFilters, filters } = useFilters();
  let indexTBU = filters.findIndex((filter) => filter.label === label);

  const [temp, setTemp] = useState<boolean>(false);
  const handleCheckFilter = (
    e: React.ChangeEvent<HTMLInputElement>,
    label: React.ReactNode
  ) => {
    handleFilters(label as string);
  };

  return (
    <label className="flex h-7 items-center">
      <input
        type="checkbox"
        className="border-slate-200 outline-slate-200"
        onChange={(e) => handleCheckFilter(e, label)}
        checked={filters[indexTBU].isChecked}
        // checked={temp}
      />
      {children ? null : <span className="ml-2 text-sm">{label}</span>}
      <span className="ml-2 text-sm">{children}</span>
    </label>
  );
}

function Stars({ num }: { num: number }) {
  const StarsArrJSX: JSX.Element[] = [];
  for (let i = 0; i < num; i++) {
    StarsArrJSX.push(<StarSVG className="w-4 h-4 text-yellow-500" key={i} />);
  }
  return <div className="flex">{StarsArrJSX}</div>;
}

interface IFormUnit {
  labelClassName?: string;
  label: string;
  children?: React.ReactNode;
}
