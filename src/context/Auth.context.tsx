import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type ContextType = {
  isAuth: boolean;
  handleLogin: (payload: any) => Promise<void>;
  handleSignup: (payload: any) => Promise<void>;
  handleLogout: () => Promise<void>;
};
const AuthContext = createContext<ContextType | null>(null);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState<boolean>(
    localStorage.getItem("isAuth") === "true" ? true : false
  );

  async function handleLogin(payload: any) {
    try {
      const response = await fetch("http://localhost:1337/loginUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });
      const output = await response.json();
      if (output["_id"]) {
        console.log(output);
        localStorage.setItem("isAuth", "true");
        setIsAuth(true);
        navigate("/store");
      }
    } catch (err: any) {
      console.log(err);
    }
  }

  async function handleLogout() {
    const response = await fetch("http://localhost:1337/logoutUser", {
      credentials: "include",
    });
    localStorage.setItem("isAuth", "false");
    setIsAuth(false);
  }

  async function handleSignup(payload: any) {
    try {
      const response = await fetch("http://localhost:1337/createUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          username: payload.username,
          email: payload.email,
          password: payload.password,
        }),
      });
      const output = await response.json();
      if (output["_id"]) {
        console.log(output);
        localStorage.setItem("isAuth", "true");
        navigate("/store");
      }
    } catch (err: any) {
      console.log(err);
    }
  }

  return (
    <AuthContext.Provider
      value={{ isAuth, handleLogin, handleLogout, handleSignup }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
