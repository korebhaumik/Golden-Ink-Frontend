import { Outlet } from "react-router-dom";
import { CartSVG, MenuSVG, NotifSVG } from "../assets/svg";
import { useNavigate } from "react-router-dom";
import Cart from "./Sidebar";
import { useState, useRef, useContext } from "react";
import { AnimatePresence } from "framer-motion";
import Dropdown from "./Dropdown";
import { Avatar_1 } from "../assets/avatar";
import { AuthContext } from "../context/Auth.context";
import Logo from "../assets/Logo.svg";
import Notifications from "./NotificationSection";
import MobileMenu from "./Menu.navbar";

export default function Navbar() {
  const navigate = useNavigate();
  // const [logBool, setLogBool] = useState<boolean>(false);
  const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false);
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
  const [notificationsIsOpen, setNotificationsCartIsOpen] =
    useState<boolean>(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const authRelated = useContext(AuthContext);
  if (!authRelated) return null;
  const { isAuth } = authRelated;
  return (
    <>
      <div className="absolute left-0 w-full top-3">
        <div className="flex items-center justify-between max-w-5.5xl mx-4 my-6 sm:mx-20 xl:mx-auto ">
          {/* <h1 className="text-2xl font-medium">Logo</h1> */}
          <div className="flex items-center tracking-wide ">
            <img src={Logo} className="h-10" alt="" />
            <div className="relative z-10">
              <h1 className="z-20 ml-1 text-xl font-medium">Golden Ink</h1>
              <div className="absolute right-0 w-8 h-2 bg-yellow-300 top-4 -z-10"></div>
            </div>
          </div>
          <div className="hidden ml-12 font-medium lg:block ">
            <a
              className="mx-3 transition cursor-pointer hover:text-accent-blue-600"
              onClick={() => navigate("/")}
            >
              Home
            </a>
            <a
              className="mx-3 transition cursor-pointer hover:text-accent-blue-600"
              onClick={() => navigate("/store")}
            >
              Store
            </a>
            <a
              className="mx-3 transition cursor-pointer hover:text-accent-blue-600"
              onClick={() => navigate("/orders")}
            >
              Orders
            </a>
            <a
              className="mx-3 transition cursor-pointer hover:text-accent-blue-600"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </a>
          </div>
          <div className="flex items-center">
            {!isAuth ? (
              <button
                className="hidden py-3.5 mx-5 text-white bg-black rounded-full md:block px-9"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            ) : (
              <div className="relative">
                <Avatar_1
                  className="w-8 h-8 mr-1 border-2 rounded-full cursor-pointer sm:mr-4 border-accent-blue-800 sm:w-11 sm:h-11 sm:my-1 "
                  onClick={() => {
                    setDropdownIsOpen((prev) => !prev);
                  }}
                />
                <AnimatePresence>
                  {dropdownIsOpen && (
                    <Dropdown setDropdownIsOpen={setDropdownIsOpen} />
                  )}
                </AnimatePresence>
              </div>
            )}

            <NotifSVG
              onClick={() => {
                setNotificationsCartIsOpen(true);
                // setDropdownIsOpen((prev) => !prev);
                document.body.style.overflow = "hidden";
              }}
            />

            <CartSVG
              onClick={() => {
                setCartIsOpen(true);
                document.body.style.overflow = "hidden";
              }}
            />
            <MenuSVG
              onClick={() => {
                setMobileMenuIsOpen(true);
              }}
            />
          </div>
        </div>
        {/* Sidebar */}
        <AnimatePresence>
          {cartIsOpen && (
            <Cart setBool={setCartIsOpen} containerRef={cartRef} />
          )}
          {notificationsIsOpen && (
            <Notifications
              setBool={setNotificationsCartIsOpen}
              containerRef={notificationsRef}
            />
          )}
          {mobileMenuIsOpen && (
            <MobileMenu
              setBool={setMobileMenuIsOpen}
              containerRef={mobileMenuRef}
            />
          )}
        </AnimatePresence>
      </div>
      <Outlet />
    </>
  );
}
