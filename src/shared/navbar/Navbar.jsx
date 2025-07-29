import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-base-200 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <ul className="uppercase flex space-x-4 text-sm text-base-content/80 font-medium cursor-pointer ">
          <li className="hover:text-base-content transition-all delay-150">
            about
          </li>
          <li className="hover:text-base-content transition-all delay-150">
            stores
          </li>
          <li className="hover:text-base-content transition-all delay-150">
            Experiences
          </li>
        </ul>

        <Link href="/">
          <h2 className="uppercase text-2xl text-base-content font-bold font-lora cursor-pointer">
            EchoWay
          </h2>
        </Link>

        <ul className="uppercase flex space-x-4 text-sm text-base-content/80 font-medium cursor-pointer">
          <li className="hover:text-base-content transition-all delay-150">
            how it works
          </li>
          <li className="hover:text-base-content transition-all delay-150">
            hosts
          </li>
          <li className="hover:text-base-content transition-all delay-150">
            search
          </li>
        </ul>
      </div>
    </nav>
  );
}
