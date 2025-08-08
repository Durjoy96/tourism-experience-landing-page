import Image from "next/image";
import React from "react";
import LinkBtn from "./link-btn";

export default function GuideCard({ src, name, description }) {
  return (
    <div>
      <div className="w-full">
        <Image
          src={src}
          alt={name}
          className="w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-col items-center mt-2 md:mt-3">
        <span className="inline-block text-lg uppercase font-medium">
          {name}
        </span>
        <p className="max-w-11/12 text-sm flex mt-1 text-base-content-secondary">
          <span className="inline-block w-full truncate">"{description}</span>"
        </p>
        <div className="mt-3 md:mt-4">
          <LinkBtn text="view all experience" />
        </div>
      </div>
    </div>
  );
}
