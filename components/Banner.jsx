import React from "react";

export const Banner = () => {
  return (
    <div
      className="flex justify-center bg-cover min-h-96 opacity-80 mt-12"
      style={{ backgroundImage: `url('/assets/original.jpg')` }}
    >
      <h1 className="font-black pt-10 text-5xl">Building the future</h1>
    </div>
  );
};
