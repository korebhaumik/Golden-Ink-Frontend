import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface ISession {
  username: string;
  email: string;
}

type ContextType = {
  isAuth: boolean;
  session: ISession;
  handleLogin: (payload: any) => Promise<void>;
  handleSignup: (payload: any) => Promise<void>;
  handleLogout: () => Promise<void>;
};
const AuthContext = createContext<ContextType>({
  isAuth: false,
  session: { username: "", email: "" },
  handleLogin: async (payload: any) => {},
  handleSignup: async (payload: any) => {},
  handleLogout: async () => {},
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  // JSON.parse(localStorage.getItem("session") as string);

  const [isAuth, setIsAuth] = useState<boolean>(
    localStorage.getItem("isAuth") === "true" ? true : false
  );
  // const [session, setSession] = useState<ISession>(
  //   localStorage.getItem("session")
  //     ? JSON.parse(localStorage.getItem("session") as string)
  //     : { username: "", email: "" }
  // );
  const [session, setSession] = useState<ISession>({ username: "", email: "" });

  useEffect(() => {
    if (isAuth) {
      (async () => {
        try {
          const response = await fetch("http://localhost:1337/getUser", {
            // const response = await fetch("https://b5oz5e5ii3.execute-api.ap-south-1.amazonaws.com/getUser", {
            method: "GET",
            mode: "cors",
            credentials: "include",
          });
          const userInstance = await response.json();
          setSession({
            username: userInstance.username,
            email: userInstance.email,
          });
        } catch (error: any) {
          console.error(error);
        }
      })();
    }
  }, [isAuth]);

  async function handleLogin(payload: any) {
    try {
      // const response = await fetch("http://localhost:1337/loginUser", {
      const response = await fetch("http://159.89.170.119:1338/loginUser", {
      // const response = await fetch(
      //   "https://b5oz5e5ii3.execute-api.ap-south-1.amazonaws.com/loginUser",
        // {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "cors",
          credentials: "include",
          body: JSON.stringify(payload),
        }
      );
      const output = await response.json();
      if (output["_id"]) {
        console.log(output);
        setSession({ username: output.username, email: output.email });
        localStorage.setItem("isAuth", "true");
        localStorage.setItem(
          "session",
          JSON.stringify({ username: output.username, email: output.email })
        );
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
    //  await fetch("http://localhost:1337/logoutUser", {
    await fetch(
      "https://b5oz5e5ii3.execute-api.ap-south-1.amazonaws.com/logoutUser",
      {
        credentials: "include",
      }
    );
    localStorage.removeItem("isAuth");
    localStorage.removeItem("session");
    setIsAuth(false);
    setSession({ username: "", email: "" });
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
        // const response = await fetch("http://localhost:1337/createUser", {
        const response = await fetch(
          "https://b5oz5e5ii3.execute-api.ap-south-1.amazonaws.com/createUser",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({
              username: payload.username,
              email: payload.email,
              password: payload.password,
            }),
          }
        );
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
      value={{ isAuth, session, handleLogin, handleLogout, handleSignup }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
