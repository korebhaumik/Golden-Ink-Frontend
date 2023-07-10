import React from "react";
import OrderSection from "../components/OrderSection";

type Props = {};

export default function Orders({}: Props) {
  return (
    <div className="pb-16 pt-32 max-w-5.5xl mx-4 sm:mx-20 xl:mx-auto">
      <h1 className="font-medium text-lg">Order Details</h1>
        <OrderSection/>
        <OrderSection/>
        <OrderSection/>
    </div>
  );
}
