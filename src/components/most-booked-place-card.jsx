import { Dot, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import LinkBtn from "./link-btn";

export default function MostBookedPlaceCard({
  src,
  size,
  placeName,
  rating,
  reviews,
  price,
}) {
  return (
    <div
      className={`w-full relative group cursor-pointer ${
        size === "short" && "h-[350px]"
      } ${size === "original" && "h-auto"}`}
    >
      <Image src={src} className="w-full h-full object-cover object-center" />
      {/* overlay */}
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-0 group-hover:opacity-30 group-active:opacity-30 transition-all duration-500 ease-in-out delay-150"></div>
      {/* details card */}
      <div className="bg-base-200/90 p-4 absolute bottom-2 left-2 right-2 rounded-xs opacity-0 translate-y-10 group-hover:opacity-100 group-active:opacity-100 group-hover:translate-y-0 group-active:translate-y-0 transition-all duration-500 ease-in-out delay-150">
        {/* place name */}
        <span className="text-lg text-base-content font-semibold">
          {placeName}
        </span>
        {/* rating */}
        <span className="flex items-center text-base-content-secondary uppercase text-base mt-4 gap-2">
          Rating:{" "}
          <span className="flex items-center gap-1">
            <Star className="w-4 h-4 stroke-base-content fill-base-content" />
            <span className="flex items-center">
              {rating} <Dot className="w-3 h-3" /> ({reviews} Reviews)
            </span>
          </span>
        </span>
        {/* price */}
        <div className="flex items-center justify-between">
          <span className="uppercase text-base-content-secondary font-normal inline-block mt-2">
            Price:{" "}
            <span className="font-semibold text-base-content">
              FROM ${price}
            </span>
          </span>
          {/* book now btn */}
          <LinkBtn text="Book Now" />
        </div>
      </div>
    </div>
  );
}
