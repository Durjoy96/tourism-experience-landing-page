import Image from "next/image";
import React from "react";
import heroImg from "@/assets/images/hero-img.png";

export default function Hero() {
  return (
    <div>
      <Image src={heroImg} />
    </div>
  );
}
