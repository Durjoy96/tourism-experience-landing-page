import Link from "next/link";
import React from "react";

export default function LinkBtn({ text, color, url }) {
  return (
    <Link
      href={url || "/"}
      className={`uppercase text-base font-semibold underline not-[]:underline-offset-2 ${
        color === "white"
          ? "text-white/70 decoration-white/70 hover:decoration-white/70"
          : "text-base-content decoration-base-content hover:decoration-base-content/80"
      }
      }  hover:opacity-80 `}
    >
      {text}
    </Link>
  );
}
