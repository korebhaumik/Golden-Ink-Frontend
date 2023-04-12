import { useNavigate } from "react-router-dom";
import { TRArrowSVG, RArrowSVG } from "../assets/svg";

type Props = {};

export default function Login({}: Props) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center h-screen ">
      <div className=" px-4 m-auto w-full sm:w-[400px]">
        <div>
          <TRArrowSVG />
          <h1 className="text-2xl mt-2 mb-1.5 font-medium">Log into your Account 🥳</h1>
          <p className=" text-sm text-primary-400">
            Pls fill the following information.
          </p>
        </div>
        {/* Content */}
        <div className="">
          {/* Account Info */}
          <div className="">
            <h2 className="my-3 text-lg font-medium">Account Information</h2>
            <Unit label="Email" placeholder="johndoe@gmail.com" type="text" />
            <Unit label="Password" placeholder="@#%@^$&" type="password" />
            <button className="w-full py-3 mt-2 text-white rounded bg-accent-blue-800">
              Log In
            </button>
            <p className="mt-4 text-center text-accent-blue-800">
              Don't have an account ? Try{" "}
              <span
                className="underline cursor-pointer"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Unit({
  label,
  placeholder,
  type,
}: {
  label: string;
  placeholder: string;
  type: "text" | "password";
}) {
  return (
    <div className="my-4">
      <h3 className="">{label}</h3>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 font-light border rounded border-primary-400 mt-1 tracking-wide"
      />
    </div>
  );
}

// onClick={() => navigate("/")}
// w-[430px]
// min-w-0 w-80