import Image from "next/image";
import React from "react";
import earth from "../public/assets/earth.png";
import workculture from "../public/assets/workculture.png";
import ladder from "../public/assets/1542298796.jpg";

export const Gallery = () => {
  return (
    <>
      <div className="flex justify-center flex-wrap">
        <div className="m-4 h-[30rem] w-[30rem]">
          <Image
            src={workculture}
            alt="original"
            className="object-cover h-[30rem] w-[30rem] rounded-2xl shadow-gray-400 shadow-md"
          />
        </div>
        <div className=" m-4 h-[30rem] w-[30rem] flex items-center">
          <p className="text-8xl leading-relaxed font-black px-2 z-10">
            Features <span className="text-[#ee8257]">Ought</span> to Partake{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-wrap">
        <div className=" m-4 h-[30rem] w-[30rem]">
          <Image
            src={ladder}
            alt="original"
            className="object-cover h-[30rem] w-[30rem] rounded-2xl shadow-gray-400 shadow-lg"
          />
        </div>
        <div className=" m-4 h-[30rem] w-[30rem]">
          <Image
            src={earth}
            alt="original"
            className="object-cover h-[30rem] w-[30rem] rounded-2xl shadow-gray-400 shadow-lg"
          />
        </div>
      </div>
    </>
  );
};
