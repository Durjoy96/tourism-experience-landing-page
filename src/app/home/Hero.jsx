"use client";

import React from "react";
import heroImg from "@/assets/images/hero-img.png";
import PrimaryBtn from "@/components/primary-btn";
import LinkBtn from "@/components/link-btn";
import SimpleParallax from "simple-parallax-js/";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="relative">
      {/* parallax background image */}
      <SimpleParallax scale={1.25} delay={1} transition="cubic-bezier(0,0,0,1)">
        <Image src={heroImg} className="w-full min-h-screen" alt="hero image" />
      </SimpleParallax>
      {/* contents */}
      <div className="absolute top-4/6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-12 text-center max-w-3xl  flex flex-col items-center">
        {/* tagline */}
        <h1 className="uppercase font-lora text-3xl md:text-7xl font-semibold text-white/90">
          Unforgettable Experiences Await
        </h1>
        {/* buttons */}
        <div className="flex items-center mt-12">
          <PrimaryBtn text="Explore Experiences" />
          <div className="-m-6">
            <LinkBtn text="watch the trailer" color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}
