"use client";

import React, { useEffect, useState } from "react";
import ManAndWaterfallImg from "@/assets/images/a-man-with-a-waterfall.png";
import PrimaryBtn from "@/components/primary-btn";

export default function JoinCommunity() {
  const [formHeight, setFormHeight] = useState(null);
  useEffect(() => {
    const container = document.getElementById("formContainer");
    const height = container.scrollHeight;
    setFormHeight(() => height);
  }, []);
  return (
    <div style={{ paddingBottom: `${formHeight && formHeight / 2}px` }}>
      <div
        className="w-full h-[600px] md:h-[800px] bg-fixed bg-center"
        style={{ backgroundImage: `url(${ManAndWaterfallImg.src})` }}
      >
        <div className="max-w-7xl mx-auto px-5 py-8 md:py-12 relative h-full">
          <h3 className="text-white/90 max-w-lg text-xl md:text-2xl font-medium">
            Sign up to receive exclusive access to unforgettable local
            experiences, travel inspiration, and insider tips - delivered
            straight to your inbox.
          </h3>
          {/* form */}
          <div
            id="formContainer"
            className={`bg-primary-content pt-6 pb-4 px-3 md:w-[520px] absolute left-1/2 -translate-x-1/2 flex items-center flex-col`}
            style={{
              bottom: `-${
                formHeight && formHeight / 2 //half of the formContainer height to position it on the middle of the main container
              }px`,
            }}
          >
            <span className="uppercase text-xs font-normal text-white/80 bg-white/10 px-4 py-2 rounded-full inline-block">
              Join our community
            </span>
            <h4
              className="font-lora uppercase text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 max-w-md text-center mt-4"
              style={{ wordSpacing: "-5px" }}
            >
              Ready to make memories that last a life Time
            </h4>
            <form className="py-6 px-3 bg-base-200 w-full mt-4">
              <div className="grid grid-cols-2 gap-3">
                {/* full name */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="name"
                    className="text-sm text-base-content uppercase font-semibold"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-white py-2 px-2 text-sm focus:outline-2 focus:outline-primary"
                    placeholder="Ex. Johan M"
                  />
                </div>
                {/* email address */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="text-sm text-base-content uppercase font-semibold"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-white py-2 px-2 text-sm focus:outline-2 focus:outline-primary"
                    placeholder="Ex. johan@example.com"
                  />
                </div>
                {/* interest */}
                <div className="flex flex-col gap-1 col-span-2">
                  <label
                    htmlFor="preference"
                    className="text-sm text-base-content uppercase font-semibold"
                  >
                    what are you interested in?
                  </label>
                  <select
                    id="preference"
                    className="bg-white py-2 px-2 text-sm text-gray-400 focus:outline-primary"
                  >
                    <option value="Select your Preference" selected disabled>
                      Select your Preference
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <PrimaryBtn text="subscribe now" />
              </div>
            </form>
            <div className="mt-3 w-full">
              <span className="text-[10px] text-white/50 font-normal text-left">
                * We respect your inbox, No spam, ever.{" "}
                <span className="text-white font-medium">
                  Just curated travel stories and inspiration
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
