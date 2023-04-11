import { TRArrowSVG } from "../assets/svg";
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

type Props = {};

export default function Signup({}: Props) {
  const navigate = useNavigate();
  return (
    <div className="py-10 px-36">
      <div>
        <TRArrowSVG />
        <h1 className="text-2xl font-medium">Create a new Account 🥳</h1>
        <p className="text-sm text-primary-400 my-1">
          Pls fill the following information.
        </p>
      </div>
      {/* Content */}
      <div className="mt-3 flex justify-between flex-wrap-reverse">
        {/* Account Info */}
        <div className="w-[430px]">
          <h2 className="my-3 text-lg font-medium">Account Information</h2>
          <Unit label="Username" placeholder="John Doe" />
          <Unit label="Email" placeholder="johndoe@gmail.com" />
          <Unit label="Password" placeholder="@#%@^$&" />
          <Unit label="Confirm Password" placeholder="@#%@^$&" />
          <button className="bg-accent-blue-800 w-full py-3 text-white rounded mt-2">
            Create Account
          </button>
          <p className="mt-4 text-accent-blue-800 text-center">
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
        <div className="w-[430px]">
          <h2 className="my-3 text-lg font-medium">Select your Avatar</h2>
          <div className="flex flex-wrap bg-primary-200 px-10 py-7 min-h-[20rem] ">
            <Avatar_1 />
            <Avatar_2 />
            <Avatar_3 />
            <Avatar_4 />
            <Avatar_5 />
            <Avatar_6 />
            <Avatar_7 />
            <Avatar_8 />
            <Avatar_9 />
            <Avatar_10 />
            <Avatar_11 />
            <Avatar_11 />
            <Avatar_12 />
            <Avatar_13 />
            <Avatar_14 />
            <Avatar_15 />
            <Avatar_16 />
            <Avatar_17 />
            <Avatar_18 />
            <Avatar_19 />
            <Avatar_20 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Unit({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="my-4">
      <h3 className="">{label}</h3>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-2.5 font-light border rounded border-primary-400 mt-1"
      />
    </div>
  );
}
