import { Facebook, Instagram, Linkedin, Twitter, X } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const pagesList = [
    {
      title: "Explore",
      pages: [
        "browse experience",
        "meet our hosts",
        "traveler reviews",
        "become a host",
      ],
    },
    {
      title: "Experience",
      pages: [
        "popular",
        "natures & outdoors",
        "food & culture",
        "off the beaten path",
      ],
    },
    {
      title: "Company",
      pages: ["about us", "our story", "sustainability", "careers"],
    },
    {
      title: "Experience",
      pages: [
        "popular",
        "natures & outdoors",
        "food & culture",
        "off the beaten path",
      ],
    },
    {
      title: "Help",
      pages: ["terms of service", "contact support", "privacy  policy"],
    },
    {
      title: "Support",
      pages: ["accessibility", "faqs", "cancellation policy", "help center"],
    },
  ];
  return (
    <footer className="py-12 bg-base-200">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col items-center">
          <h2 className="uppercase font-lora text-2xl md:text-3xl lg:text-4xl font-bold text-primary-content">
            Echoway
          </h2>
          <p className="text-sm uppercase text-base-content-secondary mt-2">
            step into the story of your next adventure
          </p>
        </div>
        {/* all pages */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-0 mt-8 md:mt-10 lg:mt-16">
          {pagesList.map((obj, idx) => (
            <div key={idx}>
              <h3 className="uppercase text-primary-content text-base font-semibold">
                {obj.title}
              </h3>
              <ul className="space-y-2 md:space-y-4 mt-3 md:mt-6 lg:mt-8">
                {obj.pages.map((pageName, idx) => (
                  <li
                    key={idx}
                    className="uppercase text-base-content-secondary text-sm font-medium hover:text-base-content transition duration-300 delay-150 cursor-pointer"
                  >
                    {pageName}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* copyright and socials */}
        <div className="pt-16 flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-0">
          <span className="text-sm text-base-content-secondary">
            &copy; 2025 Echoway. All right reserved. | Terms of service
          </span>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              target="_blank"
              className="w-8 h-8 bg-primary-content flex items-center justify-center"
            >
              <Facebook className="w-4 h-4 stroke-white" />
            </Link>
            <Link
              href="/"
              target="_blank"
              className="w-8 h-8 bg-primary-content flex items-center justify-center"
            >
              <Instagram className="w-4 h-4 stroke-white" />
            </Link>
            <Link
              href="/"
              target="_blank"
              className="w-8 h-8 bg-primary-content flex items-center justify-center"
            >
              <Linkedin className="w-4 h-4 stroke-white" />
            </Link>
            <Link
              href="/"
              target="_blank"
              className="w-8 h-8 bg-primary-content flex items-center justify-center"
            >
              <Twitter className="w-4 h-4 stroke-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
