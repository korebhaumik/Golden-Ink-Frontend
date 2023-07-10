import { useState } from "react";
import { CrossSVG } from "../assets/svg";

export default function FAQList() {
  const [activeElement, setActiveElement] = useState<0 | 1 | 2 | 3>(0);
  return (
    <main className="max-w-xl">
      {/* 0 */}
      <div
        onClick={() => {
          setActiveElement(0);
        }}
        className={`${
          activeElement === 0 ? "bg-slate-800 text-white" : ""
        }  p-8 rounded-lg`}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-medium text-lg">
            How long should I expect my book to arrive?
          </h2>
          <CrossSVG
            className={`${
              activeElement === 0 ? "bg-slate-800 text-white rotate-90" : ""
            }`}
          />
        </div>
        {activeElement === 0 ? (
          <p className="font-light mt-3">
            We strive to deliver your book as quickly as possible. Typically,
            you can expect your book to arrive within 5-7 business days, but
            delivery times may vary depending on your location.
          </p>
        ) : null}
      </div>
      <hr />
      <div
        onClick={() => {
          setActiveElement(1);
        }}
        className={`${
          activeElement === 1 ? "bg-slate-800 text-white" : ""
        }  p-8 rounded-lg`}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-medium text-lg">
            What is your return and refund policy?
          </h2>
          <CrossSVG
            className={`${
              activeElement === 1 ? "bg-slate-800 text-white rotate-90" : ""
            }`}
          />
        </div>
        {activeElement === 1 ? (
          <p className="font-light mt-3">
            Returning a product is easy! Fill out the return request form with
            the necessary details, including your order number and reason for
            return.
          </p>
        ) : null}
      </div>
      <hr />
      <div
        onClick={() => {
          setActiveElement(2);
        }}
        className={`${
          activeElement === 2 ? "bg-slate-800 text-white" : ""
        }  p-8 rounded-lg`}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-medium text-lg">
            Do you offer any discounts or promotions?
          </h2>
          <CrossSVG
            className={`${
              activeElement === 2 ? "bg-slate-800 text-white rotate-90" : ""
            }`}
          />
        </div>
        {activeElement === 2 ? (
          <p className="font-light mt-3">
            Lorem ipsum dolor sit amet consectetur. Aenean laoreet lorem purus
            fermentum feugiat ac semper magna fames. Eu a ornare non viverra mi
            ac nisl. Pretium lobortis aliquet.
          </p>
        ) : null}
      </div>
      <hr />
      <div
        onClick={() => {
          setActiveElement(3);
        }}
        className={`${
          activeElement === 3 ? "bg-slate-800 text-white" : ""
        }  p-8 rounded-lg`}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-medium text-lg">
            How can I provide feedback or review a product I purchased?
          </h2>
          <CrossSVG
            className={`${
              activeElement === 3 ? "bg-slate-800 text-white rotate-90" : ""
            }`}
          />
        </div>
        {activeElement === 3 ? (
          <p className="font-light mt-3">
            Lorem ipsum dolor sit amet consectetur. Aenean laoreet lorem purus
            fermentum feugiat ac semper magna fames. Eu a ornare non viverra mi
            ac nisl. Pretium lobortis aliquet.
          </p>
        ) : null}
      </div>
      <hr />
    </main>
  );
}
