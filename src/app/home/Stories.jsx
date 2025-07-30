import Image from "next/image";
import React from "react";
import happyMemories from "@/assets/images/happy-memories.png";

export default function Stories() {
  return (
    <div className="max-w-7xl mx-auto px-5 grid grid-cols-2">
      <div>
        <h2
          className="font-lora uppercase text-3xl text-base-content font-semibold max-w-xs"
          style={{ wordSpacing: "-5px" }}
        >
          we make journeys unforgettable
        </h2>
      </div>
      <div className="flex justify-end ">
        <div className="max-w-md h-[448px] relative">
          <Image
            src={happyMemories}
            className="w-full h-full object-cover object-center"
            alt="Happy Memories"
          />
          <div className="w-[200px] h-[200px] bg-primary-content absolute -bottom-[80px] -left-[20px] px-6 py-8 flex flex-col justify-between">
            <span className="text-white font-semibold text-5xl">500k</span>
            <span className="text-white font-normal text-sm uppercase">
              more than 500,000 memories made
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
