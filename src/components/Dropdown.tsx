import { motion } from "framer-motion";
import {
  LogOutSVG,
  NotifSVG,
  ShoppingBagSVG,
  UserCircleSVG,
} from "../assets/svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

type Props = {
  setDropdownIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Dropdown({ setDropdownIsOpen }: Props) {
  const navigate = useNavigate();
  const { handleLogout } = useAuth();

  return (
    <motion.div
      className="absolute w-40 px-4 py-2 z-10 border rounded shadow-sm bg-white top-12 right-0  border-slate-200 "
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
      <div
        className="cursor-pointer flex items-center"
        onClick={() => {
          setDropdownIsOpen(false);
        }}
      >
        <UserCircleSVG />
        <p className="ml-2 text-sm">Account Info</p>
      </div>
      <div
        className="mt-2 cursor-pointer flex items-center"
        onClick={() => {
          navigate("/orders");
          setDropdownIsOpen(false);
        }}
      >
        <ShoppingBagSVG />
        <p className="ml-2 text-sm">Orders</p>
      </div>
      <div
        className="mt-2 cursor-pointer flex items-center"
        onClick={() => {
          setDropdownIsOpen(false);
        }}
      >
        <NotifSVG className="w-6 h-6 cursor-pointer" />
        <p className="ml-2 text-sm">Notifications</p>
      </div>
      <div
        className="mt-2 text-red-600 cursor-pointer flex items-center"
        onClick={() => {
          handleLogout();
          setDropdownIsOpen(false);
        }}
      >
        <LogOutSVG />
        <p className="ml-2 text-sm ">Logout</p>
      </div>
    </motion.div>
  );
}
