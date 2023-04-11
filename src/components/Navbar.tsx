import { Outlet } from "react-router-dom";
import { CartSVG, MenuSVG, NotifSVG } from "../assets/svg";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="absolute top-5 left-0 w-full">
        <div className="flex items-center justify-between max-w-6xl mx-4 my-6 sm:mx-20 xl:mx-auto ">
          <h1 className="text-2xl font-medium">Logo</h1>
          <div className="hidden font-medium ml-28 lg:block ">
            <a className="mx-3 underline cursor-pointer text-sky-700">Home</a>
            <a className="mx-3 cursor-pointer">Store</a>
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
            <NotifSVG />
            <CartSVG />
            <MenuSVG />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
