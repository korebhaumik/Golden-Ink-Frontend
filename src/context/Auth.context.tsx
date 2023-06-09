import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

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
      const response = await fetch("https://b5oz5e5ii3.execute-api.ap-south-1.amazonaws.com/loginUser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        credentials: "include",
        body: JSON.stringify(payload),
      });
      const output = await response.json();
      if (output["_id"]) {
        console.log(output);
        localStorage.setItem("isAuth", "true");
        setIsAuth(true);
        navigate("/store");
      } else {
        console.log(output);
        if (output.type) {
          toast.error(`${output.message} Pls try again! `, {
            duration: 2000,
            position: "top-center",
            ariaProps: {
              role: "status",
              "aria-live": "polite",
            },
          });
        }
      }
    } catch (err: any) {
      console.log(err);
      toast.error(`${err.message} Pls try again! `, {
        duration: 2000,
        position: "top-center",
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
    }
  }

  async function handleLogout() {
    const response = await fetch("https://b5oz5e5ii3.execute-api.ap-south-1.amazonaws.com/logoutUser", {
      credentials: "include",
    });
    localStorage.setItem("isAuth", "false");
    setIsAuth(false);
  }

  async function handleSignup(payload: any) {
    try {
      if (payload["confirm password"] !== payload.password) {
        toast.error(`Passwords do not match.`, {
          duration: 2000,
          position: "top-center",
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        });
      } else {
        const response = await fetch("https://b5oz5e5ii3.execute-api.ap-south-1.amazonaws.com/createUser", {
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
          setIsAuth(true);
          navigate("/store");
        } else {
          console.log(output);
          toast.error(`${output.message} Pls try again! `, {
            duration: 2000,
            position: "top-center",
            ariaProps: {
              role: "status",
              "aria-live": "polite",
            },
          });
        }
      }
    } catch (err: any) {
      console.log(err);
      toast.error(`${err.message} Pls try again! `, {
        duration: 2000,
        position: "top-center",
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
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
