import { useContext, useState } from "react";
import { useCart } from "../hooks/useCart";
import { BookType } from "../context/Store.context";
import { ImageContext } from "../context/Image.context";
import { toast } from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";

export default function Checkout() {
  const { session } = useAuth();
  console.log(session);

  const { cartData, removeFromCart, subtotal } = useCart();
  const [temp, setTemp] = useState({
    email: session.email,
    "first name": "",
    "last name": "",
    company: "",
    "apartment, suite, etc.": "",
    "street name, area, etc.": "",
    city: "",
    "postal code": "",
    "phone no.": "",
    delivery: "standard",
  });

  let cartDisplay;

  if (cartData) {
    cartDisplay = cartData.map((book) => {
      return <CartElement book={book} />;
    });
  }
  const total = subtotal + subtotal * 0.05 + 50;
  const handleSubmit = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = (email: string) => {
      return emailRegex.test(email);
    };

    if (!isValidEmail(temp.email)) {
      return toast.error("Pls enter a valid email address.");
    }
    for (const key in temp) {
      if (temp[key as keyof typeof temp] === "") {
        if (key !== "company") {
          return toast.error("Pls fill all shipping information.");
        }
      }
    }
    if (!cartData?.length) {
      return toast.error("Your Cart is empty.");
    }
    toast.loading("Your payment is processing...");
    const res = await fetch("http://localhost:1337/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ myCart: cartData, userData: temp }),
    });
    const { url }: { url: string } = await res.json();
    window.open(url, "_self");
  };

  return (
    <div className="flex flex-wrap justify-between max-w-5.5xl pt-32 mx-4 sm:mx-20 xl:mx-auto ">
      {/* LHS */}
      <div className="w-[32rem]">
        <h1 className="text-xl font-medium">Contact Information</h1>
        <FormUnit
          label="Email"
          placeholder="korebhaumik@gmail.com"
          temp={temp}
          setTemp={setTemp}
        />
        <hr className="mt-6" />
        <h1 className="mt-4 text-xl font-medium">Shipping Information</h1>
        <div className="flex justify-between">
          <FormUnit
            label="First Name"
            placeholder="Bhaumik"
            autoComplete="first-name"
            temp={temp}
            setTemp={setTemp}
          />
          <FormUnit
            label="Last Name"
            placeholder="Kore"
            autoComplete="family-name"
            temp={temp}
            setTemp={setTemp}
          />
        </div>
        <FormUnit
          label="Company"
          optional
          placeholder="Web Dev Inc."
          temp={temp}
          setTemp={setTemp}
        />
        <FormUnit
          label="Apartment, Suite, etc."
          placeholder="101, Web Dev Office,"
          autoComplete="address-line1"
          temp={temp}
          setTemp={setTemp}
        />
        <FormUnit
          label="Street Name, Area, etc."
          placeholder="Opp. Cooper Hospital"
          autoComplete="address-line2"
          temp={temp}
          setTemp={setTemp}
        />
        <div className="flex justify-between">
          <FormUnit
            label="City"
            placeholder="Mumbai"
            autoComplete="home city"
            temp={temp}
            setTemp={setTemp}
          />
          <FormUnit
            label="Postal Code"
            placeholder="400001"
            autoComplete="postal-code"
            type="number"
            temp={temp}
            setTemp={setTemp}
          />
        </div>
        <FormUnit
          label="Phone No."
          placeholder="9876543210"
          autoComplete="phone"
          type="number"
          temp={temp}
          setTemp={setTemp}
        />
        <hr className="mt-6" />
        <h1 className="mt-4 text-xl font-medium">Delivery Information</h1>
        <div className="flex justify-between mt-3 my-5">
          {/* Standard */}
          <div className="w-full relative px-4 py-3 mr-5 outline rounded cursor-pointer h-28 outline-accent-blue-800 outline-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 absolute right-3 text-accent-blue-800"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>

            <h2>Standard</h2>
            <p className="text-sm text-primary-400">6-10 business days</p>
            <p className="absolute bottom-3">₹ 50.00</p>
          </div>
          {/* Express */}
          <div className="w-full relative px-4 py-3 outline outline-primary-400 rounded cursor-pointer h-28">
            <h2>Express</h2>
            <p className="text-sm text-primary-400">2-5 business days</p>
            <p className="absolute bottom-3">₹ 150.00</p>
          </div>
        </div>
      </div>
      {/* RHS */}
      <div className="w-[30rem]">
        <h1 className="text-xl font-medium">Order Summery</h1>
        <div className="px-2 py-5 mt-3 rounded sm:px-10 bg-primary-200">
          <div>{cartDisplay}</div>
          {/* Price Calc */}
          <div className="mt-3">
            <div className="flex justify-between">
              <h2>Subtotal</h2>
              <h2>₹ {subtotal}</h2>
            </div>
            <div className="flex justify-between mt-1">
              <h2>Shipping</h2>
              <h2>₹ 50</h2>
            </div>
            <div className="flex justify-between mt-1">
              <h2>Taxes</h2>
              <h2>₹ {subtotal * 0.05}</h2>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between mt-1">
              <h2 className="font-medium">Total</h2>
              <h2 className="font-medium">₹ {total}</h2>
            </div>
            <button
              className="w-full py-3 my-3 font-medium text-white rounded bg-accent-blue-800"
              onClick={handleSubmit}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormUnit({
  label,
  placeholder,
  type,
  temp,
  optional,
  setTemp,
  autoComplete,
}: IFormUnit) {
  let small;
  label === "First Name" || label === "City"
    ? (small = "mr-5")
    : (small = undefined);
  return (
    <div className={`mt-4 ${small}  w-full`}>
      <h2 className="">
        {label}
        <span className="text-primary-400">{optional && "(Optional)"}</span>
      </h2>
      <input
        type={type}
        value={temp[label.toLowerCase()]}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={`w-full px-3 py-2.5 border font-light tracking-wide mt-1 border-primary-400 rounded`}
        onChange={(e) => {
          setTemp((prev: any) => {
            return {
              ...prev,
              [label.toLowerCase()]: e.target.value,
            };
          });
        }}
      />
    </div>
  );
}

function CartElement({ book }: ICartElementType) {
  const imgArr = useContext(ImageContext);
  const { removeFromCart } = useCart();
  return (
    <>
      <div className="flex w-full mt-5">
        <img
          src={imgArr[parseInt(book.url)]}
          className="h-24 py-4 bg-white border rounded px-7"
        />
        <div className="flex flex-col justify-between w-full h-24 ml-3">
          <div>
            <div className="flex justify-between">
              <h2 className="w-3/5 leading-tight sm:w-52">{book.title}</h2>
              <h2>₹ 500</h2>
            </div>
            <p className="text-sm text-primary-400">{book.author}</p>
          </div>
          <div className="flex justify-between text-sm font-light">
            <p className="text-primary-400">Qty 1</p>
            <a
              onClick={() => removeFromCart(book)}
              className="cursor-pointer text-accent-blue-800"
            >
              Remove
            </a>
          </div>
        </div>
      </div>
      <hr className="mt-5 border-1 " />
    </>
  );
}

interface IFormUnit {
  label: string;
  autoComplete?: string;
  placeholder: string;
  type?: "text" | "number";
  optional?: boolean;
  setTemp: React.Dispatch<React.SetStateAction<any>>;
  temp: any;
}

interface ICartElementType {
  book: BookType;
}
