import { LArrowSVG, TruckSVG, RefundSVG, LockSVG } from "../assets/svg";
import FAQList from "../components/FAQList";
import Slider from "../components/Slider";
import Logo from "../../public/Logo.svg";

export default function Home() {
  return (
    <>
      {/* Section 1 */}
      <div className="pb-16 pt-36 bg-primary-200">
        <div className="flex justify-between max-w-6xl mx-auto">
          {/* Content */}
          <div className="max-w-lg ">
            <h4 className="my-2 font-medium text-accent-blue-600">
              # Optional Tag
            </h4>
            <h1 className="max-w-lg my-3 text-5xl font-medium leading-tight ">
              Some{" "}
              <span className="underline text-accent-blue-600 underline-offset-2 ">
                Crazy
              </span>{" "}
              One Liner Or Two Liner...
            </h1>
            <p className="my-4 text-accent-gray-400">
              Lorem ipsum dolor sit amet consectetur. Eu vulputate ut purus
              hendrerit at laoreet dolor vivamus. Euismod enim diam natoque
              faucibus. In libero magna ipsum nisl enim in.
            </p>
            <button className="px-8 py-4 my-3 text-white rounded-full bg-gradient-to-r from-accent-blue-800 to-accent-blue-600">
              <a className="flex items-center">
                Start Shopping
                <LArrowSVG />
              </a>
            </button>
            {/* Stats */}
            <div className="flex mt-5">
              <div className="mr-10">
                <h2 className="text-2xl font-medium">5,000+</h2>
                <p className="text-sm text-slate-400">Collection of books</p>
              </div>
              <div>
                <h2 className="text-2xl font-medium">100,000+</h2>
                <p className="text-sm text-slate-400">Happy Customers 🥰</p>
              </div>
            </div>
          </div>
          <div className="h-96 w-[500px] bg-blue-300"></div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="py-8">
        <div className="max-w-6xl mx-auto mb-10 my-7">
          <h1 className="mb-4 text-4xl font-medium ">
            A Seamless{" "}
            <span className="underline text-sky-600">Experience</span> is what
            we offer...
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nullam tortor amet aliquet.
          </p>
          {/* Features */}
          <div className="flex flex-wrap items-center justify-between my-10">
            <div className="py-8 text-white rounded-lg bg-slate-800 w-80 px-9">
              <div className="flex items-center bg-black w-fit px-3 py-1.5 rounded-2xl">
                <div className="bg-accent-blue-600 rounded-full h-1.5 w-1.5 "></div>
                <span className="ml-2 text-xs font-light text-white">
                  Feature 1
                </span>
              </div>
              <TruckSVG />
              <h2 className="my-2 text-xl">Free Shipping</h2>
              <p className="font-light text-slate-400">
                Lorem ipsum dolor sit amet consectetur. Tempus iaculis dolor
                ullamcorper fames tristique integer enim nisi.
              </p>
            </div>
            <div className="py-8 text-white rounded-lg bg-slate-800 w-80 px-9">
              <div className="flex items-center bg-black w-fit px-3 py-1.5 rounded-2xl">
                <div className="bg-accent-pink rounded-full h-1.5 w-1.5 "></div>
                <span className="ml-2 text-xs font-light text-white">
                  Feature 2
                </span>
              </div>
              <RefundSVG />
              <h2 className="my-2 text-xl">Free Shipping</h2>
              <p className="font-light text-slate-400">
                Lorem ipsum dolor sit amet consectetur. Tempus iaculis dolor
                ullamcorper fames tristique integer enim nisi.
              </p>
            </div>
            <div className="py-8 text-white rounded-lg bg-slate-800 w-80 px-9">
              <div className="flex items-center bg-black w-fit px-3 py-1.5 rounded-2xl">
                <div className="bg-accent-green rounded-full h-1.5 w-1.5 "></div>
                <span className="ml-2 text-xs font-light text-white">
                  Feature 3
                </span>
              </div>
              <LockSVG />
              <h2 className="my-2 text-xl">Free Shipping</h2>
              <p className="font-light text-slate-400">
                Lorem ipsum dolor sit amet consectetur. Tempus iaculis dolor
                ullamcorper fames tristique integer enim nisi.
              </p>
            </div>
          </div>
          <p className="text-slate-400">
            Please refer our{" "}
            <a className="text-black underline cursor-pointer">
              customer policy
            </a>{" "}
            for more information.
          </p>
        </div>
      </div>
      {/* Section 3 */}
      <div className="relative py-8 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h1 className="my-3 text-4xl font-medium text-white">
            Our <span className="underline text-sky-600 ">Customers</span> love
            us...
          </h1>
          <p className="text-slate-400">
            Lorem ipsum dolor sit amet consectetur. Nullam tortor amet aliquet.
          </p>
          <Slider />
          {/* <div className="">slider goes here</div> */}
        </div>
      </div>
      {/* Section 4 */}
      <div className="py-16">
        <div className="flex justify-between max-w-6xl mx-auto ">
          <h1 className="w-10 my-2 text-4xl font-medium leading-snug">
            <span>Frequently</span> <span>Asked</span>{" "}
            <span className="">Questions</span>
          </h1>
          <FAQList />
        </div>
      </div>
      {/* Section 5 */}
      <div className="py-10 bg-slate-100">
        <div className="justify-between max-w-6xl mx-auto ">
          <div className="flex justify-between">
            <div>
              <h1 className="my-2 text-4xl font-medium leading-snug">
                Ready to use the Golden Ink ?
              </h1>
              <p className="font-medium text-primary-600">
                Create your own account now !!
              </p>
            </div>
            <button className="text-white bg-black rounded-full max-h-14 px-9 ">
              Get Started
            </button>
          </div>
          <aside className="w-full bg-blue-300 h-80 my-7"></aside>
        </div>
      </div>
      {/* Footer */}
      <div className="py-10 bg-slate-800">
        <div className="flex justify-between max-w-6xl mx-auto ">
          <div className="w-44">
            {/* Logo */}
            <div className="flex items-center">
              <img src={Logo} className="h-10 mr-2 " />
              <h1 className="text-xl text-white">Golden Ink</h1>
            </div>
            <p className="my-2 text-sm font-light text-accent-green-gray">
              Unleashing creativity, crafting golden stories that captivate
              audiences.
            </p>
            {/* socials */}
            <div className=""></div>
          </div>
          <div className="mt-2 text-sm font-light w-44 text-primary-400">
            <h1 className="mb-4 text-base text-white">Services</h1>
            <p>Free Shipping</p>
            <p>Full Refund</p>
            <p>24/7 Customer Service</p>
          </div>
          <div className="w-32 mt-2 text-sm font-light text-primary-400">
            <h1 className="mb-4 text-base text-white">Routes</h1>
            <p>Store</p>
            <p>About Us</p>
            <p>Contact</p>
          </div>
          <div className="w-40 mt-2 text-sm font-light text-primary-400">
            <h1 className="mb-4 text-base text-white">Location</h1>
            <p>Mumbai</p>
            <p>Delhi</p>
            <p>Kolkata</p>
            <p>Bangalore</p>
          </div>
          <div className="mt-2 text-sm font-light w-60 text-primary-400">
            <h1 className="mb-4 text-base text-white">
              Sign up to our newsletter.
            </h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="relative w-full mt-3">
              {/* <input
                className="w-full px-4 py-3 rounded outline-none text-white bg-accent-blue-33"
                type="text"
                placeholder="Email Address"
              /> */}
            </div>
            <button className="bg-black text-white px-4 py-4">Click me </button>
          </div>
        </div>
        <div className="mx-auto mt-5 w-96">
          <hr />
          <p className="mt-5 text-sm text-center text-primary-400">
            Copyright © 2023 Golden Ink. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}
