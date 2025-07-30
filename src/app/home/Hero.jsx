import React from "react";
import heroImg from "@/assets/images/hero-img.png";
import { ArrowRight } from "lucide-react";
import PrimaryBtn from "@/components/primary-btn";
import LinkBtn from "@/components/link-btn";

export default function Hero() {
  return (
    <div
      className={`relative bg-cover bg-center bg-fixed min-h-[1024px]`}
      style={{ backgroundImage: `url(${heroImg.src})` }}
    >
      <div className="absolute top-4/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-12 text-center max-w-3xl  flex flex-col items-center">
        <h1 className="uppercase font-lora text-7xl font-semibold text-white/90">
          Unforgettable Experiences Await
        </h1>
        <div className="flex items-center mt-12">
          <PrimaryBtn text="Explore Experiences" />
          <div className="-m-6">
            <LinkBtn text="watch the trailer" color="white/90" />
          </div>
        </div>
      </div>
    </div>
  );
}
