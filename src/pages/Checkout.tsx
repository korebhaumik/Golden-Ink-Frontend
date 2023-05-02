import { useContext, useState } from "react";
import { CartContext } from "../context/Cart.context";
import { BookType } from "../context/Store.context";
import { ImageContext } from "../context/Image.context";

export default function Checkout() {
  const cartRelated = useContext(CartContext);
  if (!cartRelated) return null;

  const { cartData, removeFromCart, subtotal } = cartRelated;
  const [temp, setTemp] = useState({
    email: "",
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
  const total = subtotal + 15 + 5;
  const handleSubmit = async () => {
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
        <FormUnit label="Email" placeholder="korebhaumik@gmail.com" temp={temp} setTemp={setTemp} />
        <hr className="mt-6" />
        <h1 className="mt-4 text-xl font-medium">Shipping Information</h1>
        <div className="flex justify-between">
          <FormUnit label="First Name" placeholder="Bhaumik" temp={temp} setTemp={setTemp} />
          <FormUnit label="Last Name" placeholder="Kore" temp={temp} setTemp={setTemp} />
        </div>
        <FormUnit label="Company" optional placeholder="Web Dev Inc." temp={temp} setTemp={setTemp} />
        <FormUnit
          label="Apartment, Suite, etc."
          placeholder="101, Web Dev Office,"
          temp={temp} setTemp={setTemp}
        />
        <FormUnit
          label="Street Name, Area, etc."
          placeholder="Opp. Cooper Hospital"
          temp={temp} setTemp={setTemp}
        />
        <div className="flex justify-between">
          <FormUnit label="City" placeholder="Mumbai" temp={temp} setTemp={setTemp} />
          <FormUnit label="Postal Code" placeholder="400001" type="number" temp={temp} setTemp={setTemp} />
        </div>
        <FormUnit label="Phone No." placeholder="9876543210" type="number" temp={temp} setTemp={setTemp} />
        <hr className="mt-6" />
        <h1 className="mt-4 text-xl font-medium">Delivery Information</h1>
        <div className="flex justify-between mt-3">
          {/* Standard */}
          <div className="w-full px-4 py-2 mr-5 border rounded border-primary-400 h-28 hover:outline-accent-blue-600 hover:outline-4 cursor-pointer">
            <h2>Standard</h2>
            <p>4-10 business days</p>
            <p>$5.00</p>
          </div>
          {/* Express */}
          <div className="w-full px-4 py-2 border rounded border-primary-400 cursor-pointer">
            <h2>Express</h2>
            <p>2-5 business days</p>
            <p>$15.00</p>
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
              <h2>$ {subtotal}</h2>
            </div>
            <div className="flex justify-between mt-1">
              <h2>Shipping</h2>
              <h2>$5</h2>
            </div>
            <div className="flex justify-between mt-1">
              <h2>Taxes</h2>
              <h2>$15</h2>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between mt-1">
              <h2 className="font-medium">Total</h2>
              <h2 className="font-medium">$ {total}</h2>
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

function FormUnit({ label, placeholder, type, optional, setTemp }: IFormUnit) {
  let small;
  label === "First Name" || label === "City"
    ? (small = "mr-5")
    : (small = undefined);
  return (
    <div className={`mt-4 ${small}  w-full`}>
      <h2 className="">
        {label}
        <span className="text-primary-400">{optional && " (Optional)"}</span>
      </h2>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-3 py-2.5 border font-light tracking-wide mt-1 border-primary-400 rounded`}
        onChange={(e) => {
          setTemp((prev:any) => {
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
              <h2>$500</h2>
            </div>
            <p className="text-sm text-primary-400">{book.author}</p>
          </div>
          <div className="flex justify-between text-sm font-light">
            <p className="text-primary-400">Qty 1</p>
            <a className="text-accent-blue-800 cursor-pointer">Remove</a>
          </div>
        </div>
      </div>
      <hr className="mt-5 border-1 " />
    </>
  );
}

interface IFormUnit {
  label: string;
  placeholder: string;
  type?: "text" | "number";
  optional?: boolean;
  setTemp: React.Dispatch<React.SetStateAction<any>>;
  temp: any;
}

interface ICartElementType {
  book: BookType;
}
