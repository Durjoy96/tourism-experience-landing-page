"use client";

import Image from "next/image";
import React from "react";
import LinkBtn from "./link-btn";
import { motion } from "motion/react";

export default function GuideCard({ src, name, description, animationDelay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: animationDelay }}
      viewport={{ once: true }}
    >
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
    </motion.div>
  );
}
