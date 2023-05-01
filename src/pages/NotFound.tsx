import { LArrowSVG, TRArrowSVG } from "../assets/svg";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="mb-5 text-center  w-fit">
        <TRArrowSVG className="mx-auto" />
        <p className="mt-4 font-medium text-accent-blue-800">404</p>
        <h1 className="mt-3 text-4xl font-medium">Page not Found</h1>
        <p className="mt-4 text-primary-400 ">
          Sorry, we couldn't find the page you were looking for.
        </p>
        {/* Call to action */}
        <div className="flex items-center mx-auto my-4 text-sm w-fit ">
          <button
            className="px-4 py-3 mr-2 text-white rounded cursor-pointer bg-accent-blue-800"
            onClick={() => navigate("/")}
          >
            Go back home
          </button>
          <div className="flex items-center ml-2 cursor-pointer ">
            <a>Contact support</a>
            <LArrowSVG />
          </div>
        </div>
      </div>
    </div>
  );
}
