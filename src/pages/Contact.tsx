import React from "react";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="pb-16 pt-32 max-w-5.5xl mx-4 sm:mx-20 xl:mx-auto">
      <div>
        <span>Email: </span>
        <a
          href="mailto:bhaumik.kore31@gmail.com"
          className="text-accent-blue-600 underline"
        >
          bhaumik.kore31@gmail.com
        </a>
      </div>
      <div>
        <span>Phone: </span>
        <a href="tel:9152526632" className="text-accent-blue-600 underline">
          +91 9152526632
        </a>
      </div>
      <div>
        <span>Github: </span>
        <a
          href="https://github.com/korebhaumik"
          className="text-accent-blue-600 underline"
          target="_blank"
        >
          @korebhaumik
        </a>
      </div>
    </div>
  );
}
