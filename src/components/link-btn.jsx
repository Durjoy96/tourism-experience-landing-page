import Link from "next/link";
import React from "react";

export default function LinkBtn({ text, color, url }) {
  return (
    <Link
      href={url || "/"}
      className={`uppercase text-base font-normal text-${
        color || "to-base-content"
      }
      } underline underline-offset-4 hover:opacity-80`}
    >
      {text}
    </Link>
  );
}
