import { motion } from "framer-motion";
import {
  LogOutSVG,
  NotifSVG,
  ShoppingBagSVG,
  UserCircleSVG,
} from "../assets/svg";
import { AuthContext } from "../context/Auth.context";
import { useContext } from "react";

type Props = {
  setDBool: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Dropdown({ setDBool }: Props) {
  const authRelated = useContext(AuthContext);

  if (!authRelated) return null;

  const { handleLogout } = authRelated;

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
      <div className="cursor-pointer flex items-center">
        <UserCircleSVG />
        <p className="ml-2 text-sm">Account Info</p>
      </div>
      <div className="mt-2 cursor-pointer flex items-center">
        <ShoppingBagSVG />
        <p className="ml-2 text-sm">Orders</p>
      </div>
      <div className="mt-2 cursor-pointer flex items-center">
        <NotifSVG className="w-6 h-6 cursor-pointer" />
        <p className="ml-2 text-sm">Notifications</p>
      </div>
      <div
        className="mt-2 text-red-600 cursor-pointer flex items-center"
        onClick={() => {
          handleLogout();
          setDBool(false);
        }}
      >
        <LogOutSVG />
        <p className="ml-2 text-sm ">Logout</p>
      </div>
    </motion.div>
  );
}
