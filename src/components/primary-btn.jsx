import { ArrowRight } from "lucide-react";
import React from "react";

export default function PrimaryBtn({ text, onClick }) {
  // If you want to use the button for navigation, you can pass the `url`
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className="bg-primary text-primary-content font-medium text-xs md:text-sm uppercase pl-10 pr-24 py-3 rounded-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors delay-150 duration-300 cursor-pointer group text-nowrap"
        style={{
          clipPath: "polygon(0% 0%, 75% 0%, 82% 50%, 75% 100%, 0% 100%)",
        }}
      >
        {text}
        <ArrowRight className="w-4 h-4 md:w-6 md:h-6 group-hover:translate-x-4 transition-all delay-150 duration-300" />
      </button>
    </>
  );
}
