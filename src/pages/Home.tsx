import { LArrowSVG, TruckSVG, RefundSVG, LockSVG } from "../assets/svg";
import FAQList from "../components/FAQList.home";
import Slider from "../components/Slider.home";
import Logo from "../assets/Logo.svg";
import Illustration from "../assets/Illustration_2.webp";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      {/* Section 1 */}
      <div className="pt-24 pb-10 -z-50 sm:pb-20 sm:pt-36 bg-primary-200">
        <div className="flex flex-wrap-reverse justify-between max-w-5.5xl mx-4 sm:mx-auto">
          {/* Content */}
          <div className="max-w-lg">
            <h4 className="my-2 font-medium text-accent-blue-600">
              # Find_Your_Golden_Ink
            </h4>
            <h1 className="max-w-lg my-0 text-3xl font-medium leading-snug sm:text-5xl sm:leading-tight sm:my-3 ">
              Your{" "}
              <span className="underline text-accent-blue-600 underline-offset-2 ">
                Golden Ink
              </span>{" "}
              is just a click away...
            </h1>
            <p className="my-4 text-accent-gray-400">
              Discover a vast collection of books across various genres. From
              bestsellers to rare finds, we have something for every book lover.
              Explore, order, and indulge in the joy of reading with us.
            </p>
            <button
              className="px-8 py-4 my-3 text-white rounded-full bg-gradient-to-r from-accent-blue-800 to-accent-blue-600"
              onClick={() => {
                navigate("/store");
              }}
            >
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
          {/* Illustration */}
          <img
            src={Illustration}
            className="hidden lg:block h-[26rem]"
            alt=""
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="py-0 sm:py-8" id="feature">
        <div className="max-w-5.5xl mx-4 mb-10 my-7 sm:mx-auto">
          <h1 className="mb-4 text-3xl font-medium leading-snug sm:text-4xl sm:leading-tight ">
            A Seamless{" "}
            <span className="underline text-sky-600">Experience</span> is what
            we offer...
          </h1>
          <p>
            Delve into a captivating reading experience with our ecommerce book
            store.
          </p>
          {/* Features */}
          <div className="flex flex-wrap items-center justify-between mt-6 mb-6 sm:mt-10 sm:mb-9">
            <div className="py-8 mb-4 text-white rounded-lg bg-slate-800 sm:w-80 px-9">
              <div className="flex items-center bg-black w-fit px-3 py-1.5 rounded-2xl">
                <div className="bg-accent-blue-600 rounded-full h-1.5 w-1.5 "></div>
                <span className="ml-2 text-xs font-light text-white">
                  Feature 1
                </span>
              </div>
              <TruckSVG />
              <h2 className="my-2 text-xl">Free Shipping</h2>
              <p className="font-light text-slate-400">
                Shop now for free shipping on all orders. Wide range of products
                delivered to your doorstep, no extra charges.
              </p>
            </div>
            <div className="py-8 mb-4 text-white rounded-lg bg-slate-800 sm:w-80 px-9">
              <div className="flex items-center bg-black w-fit px-3 py-1.5 rounded-2xl">
                <div className="bg-accent-pink rounded-full h-1.5 w-1.5 "></div>
                <span className="ml-2 text-xs font-light text-white">
                  Feature 2
                </span>
              </div>
              <RefundSVG />
              <h2 className="my-2 text-xl">Easy Refunds</h2>
              <p className="font-light text-slate-400">
                We offer hassle-free refunds on all orders. If you're not
                satisfied, simply return your purchase for a full refund.
              </p>
            </div>
            <div className="py-8 mb-4 text-white rounded-lg bg-slate-800 sm:w-80 px-9">
              <div className="flex items-center bg-black w-fit px-3 py-1.5 rounded-2xl">
                <div className="bg-accent-green rounded-full h-1.5 w-1.5 "></div>
                <span className="ml-2 text-xs font-light text-white">
                  Feature 3
                </span>
              </div>
              <LockSVG />
              <h2 className="my-2 text-xl">Secure Payments</h2>
              <p className="font-light text-slate-400">
                Shop with confidence knowing that we offer secure payment
                options to protect your personal information.
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
      <div className="py-12 bg-slate-800">
        <div className="relative max-w-5.5xl mx-4 sm:mx-auto">
          <h1 className="my-3 text-3xl font-medium leading-snug text-white sm:text-4xl sm:leading-tight">
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
      <div className="py-6 sm:py-16">
        <div className="flex flex-wrap justify-between max-w-5.5xl mx-4 sm:mx-auto">
          <h1 className="w-10 my-2 text-3xl font-medium leading-snug sm:text-4xl ">
            <span>Frequently</span> <span>Asked</span>{" "}
            <span className="">Questions</span>
          </h1>
          <FAQList />
        </div>
      </div>
      {/* Section 5 */}
      <div className="py-6 sm:py-14 bg-slate-100">
        <div className="justify-between max-w-5.5xl mx-4 sm:mx-auto">
          <div className="flex flex-wrap justify-between">
            <div>
              <h1 className="text-3xl font-medium leading-snug sm:text-4xl">
                Ready to use the Golden Ink ?
              </h1>
              <p className="mt-2 sm:w-[35rem] font-medium text-primary-600">
                {/* Create your own account now !! */}
                Immerse yourself in a world of literature with Golden Ink and Co, where reading becomes an unforgettable journey.
              </p>
            </div>
            <button
              className="py-4 mt-4 text-white bg-black rounded-full sm:my-0 max-h-14 px-9"
              onClick={() => {
                navigate("/signUp");
              }}
            >
              Get Started
            </button>
          </div>
          {/* <aside className="w-full bg-blue-300 h-80 mt-7"></aside> */}
        </div>
      </div>
      {/* Footer */}
      <div className="py-8 sm:py-10 bg-slate-800">
        <div className="flex flex-col-reverse sm:flex-row justify-between max-w-5.5xl mx-4 sm:mx-auto ">
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
          {/* Services */}
          <div className="mt-2 mb-3 text-sm font-light w-44 text-primary-400">
            <h1 className="mb-4 text-base text-white">Services</h1>
            <a href="#feature" className="block">Free Shipping</a>
            <a href="#feature" className="block">Full Refund</a>
            <a href="#feature" className="block">24/7 Customer Service</a>
          </div>
          {/* Routes */}
          <div className="w-32 mt-2 mb-3 text-sm font-light text-primary-400">
            <h1 className="mb-4 text-base text-white">Routes</h1>
            <a href="/store" className="block">Store</a>
            <a href="/orders" className="block">Orders</a>
            <a href="/contact" className="block">Contact</a>
          </div>
          {/* location */}
          <div className="w-40 mt-2 mb-3 text-sm font-light text-primary-400">
            <h1 className="mb-4 text-base text-white">Location</h1>
            <p>Mumbai</p>
            <p>Delhi</p>
            <p>Kolkata</p>
            <p>Bangalore</p>
          </div>
          {/* Newsletter */}
          <div className="mt-2 mb-3 text-sm font-light sm:w-60 text-primary-400">
            <h1 className="mb-4 text-base text-white">
              Sign up to our newsletter.
            </h1>
            <p>Access to newsletter subscription will be available soon.</p>
            <div className="relative w-full mt-3">
              {/* <input
                className="w-full px-4 py-3 text-white rounded outline-none bg-accent-blue-33"
                type="text"
                placeholder="Email Address"
              /> */}
            </div>
            {/* <button
              className="px-4 py-4 text-white bg-black"
              onClick={() => {
                navigate("/login");
              }}
            >
              Click me{" "}
            </button> */}
          </div>
        </div>
        <div className="mx-auto mt-5 sm:w-96">
          <hr />
          <p className="mt-5 text-sm text-center sm:w-auto text-primary-400">
            Copyright © 2023 Golden Ink. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}
