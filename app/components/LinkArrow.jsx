import Image from "next/image";
import Link from "next/link";
import React from "react";

function LinkArrow({ linkText, justify, id, whitecolor }) {
  return (
    <div
      className={` ${
        id === 1 || whitecolor ? "text-white" : "text-black"
      } flex items-center gap-4 lg:hover:cursor-pointer ${justify}`}
    >
      <Link href="#" className="text-xs font-bold uppercase tracking-[2px] ">
        {linkText}
      </Link>
      <svg
        className={`h-3 w-[42px] ${
          id === 1 || whitecolor
            ? "fill-white stroke-white"
            : "fill-black stroke-black"
        } `}
        xmlns="http://www.w3.org/2000/svg"
        width="43"
        height="14"
      >
        <g
          fill="none"
          fillRule="evenodd"
          className={`${
            id === 1 || whitecolor
          } ? "stroke="#ffffff" : "stroke="#000000"`}
        >
          <path d="M0 7h41.864M35.428 1l6 6-6 6" />
        </g>
      </svg>
    </div>
  );
}

export default LinkArrow;
