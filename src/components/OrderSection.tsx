import React from "react";
import { ArrowRightSVG, VisaLogoSVG } from "../assets/svg";
import BookImg from "../assets/book_1.webp";

export default function OrderSection() {
  return (
    <main className="mt-3 mb-14">
      {/* //Heading */}
      <div className="flex items-start sm:items-center justify-between ">
        <div className="flex flex-col text-primary-400 sm:flex-row ">
          <span>Order No: fkdsfhlsdf </span>
          <span>July 6, 2023</span>
        </div>
        <div className="flex items-center text-accent-blue-800 cursor-pointer sm:text-sm">
          <span className="mr-1.5">View Invoice</span>
          <ArrowRightSVG />
        </div>
      </div>
      <hr className="my-5" />
      {/* //Order Unit  */}
      <OrderUnit />
      <OrderUnit />
      <OrderUnit />
      {/* //Progress Bar */}
      <div className="mt-5">
        {/* //Proccessing Date  */}
        <h1 className="font-medium">Processing on July 7, 2023</h1>
        <div className="w-full h-2 bg-slate-300 rounded-full my-5">
          <div className="w-1/3 h-2 bg-accent-blue-800 rounded-full"></div>
        </div>
        <div className="flex justify-between text-accent-blue-800 text-sm">
          <span>Order Placed</span>
          <span>Processing</span>
          <span>Shipping</span>
          <span>Delivered</span>
        </div>
      </div>
      {/* //Billing */}
      <div className="flex flex-wrap sm:flex-row justify-between py-6 px-10 bg-primary-200 mt-5 rounded-md">
        <div className="sm:w-40 text-sm">
          <h1 className="text-base">Shipping Address</h1>
          <p className="text-primary-400 mt-2">
            101, Web Dev Inc, Opp. Cooper Hostpital, Ville Parle.
          </p>
          <p className="text-primary-400 mt-2 sm:mt-0">Mumbai - 4000001</p>
        </div>
        <div className="sm:w-52 text-sm mt-3 sm:mt-0">
          <h1 className="text-base">Payment Information</h1>
          <div className="flex">
            <VisaLogoSVG />
            <div className="ml-2">
              <p className=" mt-2 font-medium">Ending with 4242</p>
              <p className="text-primary-400">Expires 02/24</p>
            </div>
          </div>
        </div>

        <div className="w-[403px] mt-3 sm:mt-0">
          <div className="flex justify-between">
            <h2>Subtotal</h2>
            <h2>$ {"fl49824"}</h2>
          </div>
          <div className="flex justify-between mt-2">
            <h2>Shipping</h2>
            <h2>$5</h2>
          </div>
          <div className="flex justify-between mt-2">
            <h2>Taxes</h2>
            <h2>$15</h2>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between mt-2">
            <h2 className="font-medium">Total</h2>
            <h2 className="font-medium text-accent-blue-800">$ {"1392173"}</h2>
          </div>
        </div>
      </div>
    </main>
  );
}

export function OrderUnit() {
  return (
    <div className="mt-5">
      <div className="flex flex-wrap sm:flex-row justify-between text-sm leading-relaxed">
        {/* Img */}
        {/* <div></div> */}
        <img src={BookImg} className="h-36 w-32 py-4 px-7 border rounded" />
        {/* Description */}
        <div className="w-96">
          <h1 className="text-lg mt-3 sm:mt-0">The Rain Heron</h1>
          <h2 className="text-base mt-1">$500</h2>
          <p className="text-primary-400 mt-1">
            In "Rain Heron," a fabled bird becomes the target of those seeking
            its power in a world grappling with the consequences of technology
            and war.
          </p>
        </div>
        {/* shipping */}
        <div className="mt-3 sm:w-40 sm:mt-0">
          <h1 className="text-base">Shipping Address</h1>
          <p className="text-primary-400 mt-2">
            101, Web Dev Inc, Opp. Cooper Hostpital, Ville Parle.
          </p>
          <p className="text-primary-400">Mumbai - 4000001</p>
        </div>
        {/* buyers info */}
        <div>
          <h1 className="mt-3 sm:mt-0 text-base">Buyers Information</h1>
          <p className="text-primary-400 mt-2">Bhaumik Kore</p>
          <p className="text-primary-400">korebhaumik@gmail.com</p>
          <p className="text-primary-400 mt-[1.3rem]">+9152526632</p>
        </div>
      </div>
      <hr className="mt-5" />
    </div>
  );
}
