"use client";
import React, { useState } from "react";
import JourneyImage from "@/assets/images/happy-journey.png";
import { Play } from "lucide-react";
import VideoModal from "@/components/video-modal";

export default function Journey() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="w-full relative min-h-[950px] bg-cover bg-center hover:bg-black/40 hover:bg-blend-darken transition-all duration-300 delay-150 group"
      style={{ backgroundImage: `url(${JourneyImage.src})` }}
    >
      <div className="max-w-7xl mx-auto px-5 py-32">
        <h2
          className="font-lora uppercase text-5xl font-fold text-white/90 max-w-xl"
          style={{ wordSpacing: "-5px" }}
        >
          Your Journey begins before you arrived
        </h2>
      </div>
      <VideoModal />
      <button
        onClick={() => setOpen(true)}
        className="w-16 h-16 bg-base-300/50 rounded-full flex justify-center items-center backdrop-blur-2xl border border-base-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover:scale-[1.2] transition-all duration-300 delay-150 group/button hover:opacity-80"
      >
        <Play className="fill-white stroke-white/90" />
      </button>
      <VideoModal open={open} setOpen={setOpen} />
    </div>
  );
}
