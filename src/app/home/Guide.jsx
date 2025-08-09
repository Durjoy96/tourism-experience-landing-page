import GuideCard from "@/components/guide-card";
import React from "react";
import FirstGuide from "@/assets/images/antonio.jpg";
import SecondGuide from "@/assets/images/yukiko.jpg";
import ThirdGuide from "@/assets/images/daniel.jpg";
import { motion } from "motion/react";

export default function Guide() {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <div className="flex justify-center">
        <h2
          className="font-lora uppercase text-2xl md:text-3xl lg:text-5xl font-semibold text-base-content max-w-md text-center"
          style={{ wordSpacing: "-5px" }}
        >
          Led by locals who love it.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 mt-8 lg:mt-10">
        <GuideCard
          src={FirstGuide}
          name="antonio"
          description="Let's explore the hidden history of this ancient city together."
          animationDelay={0}
        />
        <GuideCard
          src={SecondGuide}
          name="yukio"
          description="I love sharing my favorite local dishes with new people."
          animationDelay={0.3}
        />
        <GuideCard
          src={ThirdGuide}
          name="daniel"
          description="Wine is so much more than just a drink! It's a story in a bottle."
          animationDelay={0.6}
        />
      </div>
    </div>
  );
}
