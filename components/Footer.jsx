import React from "react";
import nature from "../public/assets/nature.jpg";
import Image from "next/image";

export const Footer = () => {
  return (
    <div
      className="flex justify-center min-h-screen m-20 rounded-lg bg-cover"
      style={{ backgroundImage: `url('/assets/nature.jpg')` }}
    >
      <div className="h-96 w-3/4 mt-10 rounded-xl bg-white/30 backdrop-blur-md p-10">
        <div className="flex flex-col justify-end items-center align-middle">
          <p className="text-6xl font-bold text-wrap">
            Every inspirition from nature
          </p>
          <p className="pt-5 text-xl">
            Get started using our services with a 30-day free trail
          </p>
          <button className="bg-black text-xl text-white px-10 py-2 rounded-md font-medium mt-20">
            Try it now
          </button>
        </div>
      </div>
    </div>
  );
};
