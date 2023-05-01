import { Outlet } from "react-router-dom";
import { CartSVG, MenuSVG, NotifSVG } from "../assets/svg";
import { useNavigate } from "react-router-dom";
import Cart from "./Sidebar";
import { useState, useRef, useContext } from "react";
import { AnimatePresence } from "framer-motion";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const navigate = useNavigate();
  const [bool, setBool] = useState<boolean>(false);
  const [dbool, setDBool] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="absolute left-0 w-full top-3">
        <div className="flex items-center justify-between max-w-5.5xl mx-4 my-6 sm:mx-20 xl:mx-auto ">
          <h1 className="text-2xl font-medium">Logo</h1>
          <div className="hidden font-medium ml-28 lg:block ">
            <a
              className="mx-3 underline cursor-pointer text-sky-700"
              onClick={() => navigate("/")}
            >
              Home
            </a>
            <a
              className="mx-3 cursor-pointer"
              onClick={() => navigate("/store")}
            >
              Store
            </a>
            <a className="mx-3 cursor-pointer">Random</a>
            <a className="mx-3 cursor-pointer">Contact Us</a>
          </div>
          <div className="flex items-center">
            <button
              className="hidden py-3.5 mx-5 text-white bg-black rounded-full md:block px-9"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <NotifSVG
              onClick={() => {
                setDBool((prev) => !prev);
              }}
            />
            <AnimatePresence>{dbool && <Dropdown />}</AnimatePresence>
            <CartSVG
              onClick={() => {
                setBool(true);
                document.body.style.overflow = "hidden";
              }}
            />
            <MenuSVG />
          </div>
        </div>
        {/* Sidebar */}
        <AnimatePresence>
          {bool && <Cart setBool={setBool} containerRef={containerRef} />}
        </AnimatePresence>
      </div>
      <Outlet />
    </>
  );
}
