"use client";

import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function MobileNav() {
  const [displayMenus, setDisplayMenus] = useState(false);
  return (
    <div className="flex justify-between md:flex lg:hidden">
      <Link href="/">
        <h2 className="uppercase text-2xl text-base-content font-bold font-lora cursor-pointer">
          EchoWay
        </h2>
      </Link>
      <div>
        <button
          onClick={() =>
            setTimeout(() => setDisplayMenus((prev) => !prev), 150)
          }
        >
          {displayMenus ? (
            <X className="transition-opacity duration-300" />
          ) : (
            <MenuIcon className="transition-opacity duration-300" />
          )}
        </button>
        {/* animated dropdown menu */}
        <div
          className={`absolute flex justify-end right-0 top-full w-full bg-base-200 transition-all duration-500 ease-in-out overflow-hidden ${
            displayMenus
              ? "opacity-100 min-h-screen"
              : "opacity-0 max-h-0 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col items-end p-4 gap-2">
            <li>
              <Link
                href="/about"
                className="uppercase text-base-content/90 font-medium text-lg"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="uppercase text-base-content/90 font-medium text-lg"
              >
                stores
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="uppercase text-base-content/90 font-medium text-lg"
              >
                experiences
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="uppercase text-base-content/90 font-medium text-lg"
              >
                how it works
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="uppercase text-base-content/90 font-medium text-lg"
              >
                hosts
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="uppercase text-base-content/90 font-medium text-lg"
              >
                search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
