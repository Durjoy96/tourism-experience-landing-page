import Image from "next/image";
import React from "react";

export default function CustomersFeedback({ img, name, description }) {
  return (
    <div className="flex gap-4">
      <div>
        <Image
          src={img}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
      </div>
      <div className="max-w-[300px] space-y-2">
        <h4 className="uppercase text-base-content text-sm font-bold">
          {name}
        </h4>
        <p className="text-base-content-secondary text-sm font-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
