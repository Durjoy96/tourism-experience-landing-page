"use client";

import React from "react";
import heroImg from "@/assets/images/hero-img.png";
import PrimaryBtn from "@/components/primary-btn";
import LinkBtn from "@/components/link-btn";
import SimpleParallax from "simple-parallax-js";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative">
      {/* parallax background image */}
      <SimpleParallax scale={1.25} delay={1} transition="cubic-bezier(0,0,0,1)">
        <Image
          src={heroImg}
          className="w-full min-h-screen object-cover object-center"
          alt="hero image"
        />
      </SimpleParallax>
      {/* contents */}
      <div className="absolute top-1/2 lg:top-4/6 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-12 text-center max-w-3xl flex flex-col items-center">
        {/* tagline */}
        <h1 className="uppercase font-lora text-4xl md:text-5xl lg:text-7xl font-bold text-white/90">
          Unforgettable Experiences Await
        </h1>
        {/* buttons */}
        <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-center mt-8 lg:mt-12">
          <div className="ml-12">
            <PrimaryBtn text="Explore Experiences" />
          </div>
          <div className="lg:-ml-6">
            <LinkBtn text="watch the trailer" color="white" />
          </div>
        </div>
      </div>
    </div>
  );
}
