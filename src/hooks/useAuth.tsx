import { useContext } from "react";
import { AuthContext } from "../context/Auth.context";

export const useAuth = () => {
  const { session, handleLogout, handleLogin, handleSignup, isAuth } =
    useContext(AuthContext);
  console.log(session);
  return { session, handleLogout, handleLogin, handleSignup, isAuth };
};
