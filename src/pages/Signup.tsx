import { TRArrowSVG, RArrowSVG } from "../assets/svg";
import {
  Avatar_1,
  Avatar_2,
  Avatar_3,
  Avatar_4,
  Avatar_5,
  Avatar_6,
  Avatar_7,
  Avatar_8,
  Avatar_9,
  Avatar_10,
  Avatar_11,
  Avatar_12,
  Avatar_13,
  Avatar_14,
  Avatar_15,
  Avatar_16,
  Avatar_17,
  Avatar_18,
  Avatar_19,
  Avatar_20,
} from "../assets/avatar";
import { useNavigate } from "react-router-dom";
import { useState,useContext } from "react";
import { AuthContext } from "../context/Auth.context";

interface IForm {
  username: string;
  email: string;
  password: string;
  "confirm password": string;
  avatar: number;
}

export default function Signup() {
  const navigate = useNavigate();
  const [temp, setTemp] = useState<IForm>({
    username: "",
    email: "",
    password: "",
    "confirm password": "",
    avatar: 0,
  });
  const authRelated = useContext(AuthContext);

  if (!authRelated) return null;

  const {handleSignup} = authRelated;

  // const handleSubmit = async () => {
  //   try {
  //     const response = await fetch("http://localhost:1337/createUser", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       credentials: "include",
  //       body: JSON.stringify({
  //         username: temp.username,
  //         email: temp.email,
  //         password: temp.password,
  //       }),
  //     });
  //     const output = await response.json();
  //     if(output["_id"]){
  //       console.log(output);
  //       navigate("/store");
  //     }
  //   } catch (err: any) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className="flex items-center lg:h-screen">
      <div className="py-4 mx-3 sm:mx-auto lg:mt-8 lg:w-[56rem]">
        {/* Heading */}
        <div>
          <TRArrowSVG />
          <h1 className="text-2xl mt-2 mb-1.5 font-medium">
            Create a new Account 🥳
          </h1>
          <p className="text-sm text-primary-400">
            Pls fill the following information.
          </p>
        </div>
        {/* Content */}
        <div className="flex flex-col-reverse justify-between max-w-4xl mt-3 lg:flex-row lg:mt-0 ">
          {/* Account Info */}
          <div className="w-full sm:w-[430px]">
            <h2 className="my-3 text-lg font-medium">Account Information</h2>
            <Unit
              label="Username"
              placeholder="John Doe"
              type="text"
              setTemp={setTemp}
              value={temp.username}
            />
            <Unit
              label="Email"
              placeholder="johndoe@gmail.com"
              type="text"
              setTemp={setTemp}
              value={temp.email}
            />
            <Unit
              label="Password"
              placeholder="@#%@^$&"
              type="password"
              setTemp={setTemp}
              value={temp.password}
            />
            <Unit
              label="Confirm Password"
              placeholder="@#%@^$&"
              type="password"
              setTemp={setTemp}
              value={temp["confirm password"]}
            />
            <button
              className="w-full py-3 mt-2 text-white rounded bg-accent-blue-800"
              onClick={()=>handleSignup(temp)}
            >
              Create Account
            </button>
            <p className="mt-4 text-center text-accent-blue-800">
              Already have an account ? Try{" "}
              <span
                className="underline cursor-pointer"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </span>
            </p>
          </div>
          {/* Select Avatar */}
          <div className="mb-3 sm:w-[410px] sm:my-3">
            <h2 className="mb-3 text-lg font-medium ">Select your Avatar</h2>
            <div className="flex flex-wrap bg-primary-200 rounded px-5 sm:px-10 py-7 min-h-[20rem] ">
              <div className="flex justify-between w-full ">
                <Avatar_1 />
                <Avatar_2 />
                <Avatar_3 />
                <Avatar_4 />
                <Avatar_5 />
              </div>
              <div className="flex justify-between w-full">
                <Avatar_6 />
                <Avatar_7 />
                <Avatar_8 />
                <Avatar_9 />
                <Avatar_10 />
              </div>
              <div className="flex justify-between w-full">
                <Avatar_11 />
                <Avatar_15 />
                <Avatar_12 />
                <Avatar_13 />
                <Avatar_14 />
              </div>
              <div className="flex justify-between w-full">
                <Avatar_16 />
                <Avatar_17 />
                <Avatar_18 />
                <Avatar_19 />
                <Avatar_20 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Unit({ label, placeholder, type, value, setTemp }: IUnit) {
  return (
    <div className="my-4">
      <h3 className="">{label}</h3>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setTemp((prev) => {
            return {
              ...prev,
              [label.toLowerCase()]: e.target.value,
            };
          });
        }}
        className="w-full px-4 py-2.5 font-light border rounded border-primary-400 mt-1 tracking-wide"
      />
    </div>
  );
}

// justify-between
interface IUnit {
  label: string;
  placeholder: string;
  type: "text" | "password";
  value: string;
  setTemp: React.Dispatch<React.SetStateAction<IForm>>;
}
