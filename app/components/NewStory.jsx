import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkArrow from "./LinkArrow";

function NewStory({ data }) {
  const { id, subTitle, title, date, author, text, linkText } = data;

  return (
    <section
      className={`${
        id === 1 ? "bg-black text-white" : "bg-white text-black"
      } h-full w-full  px-8 py-[72px] uppercase  tracking-[2px] md:px-[54px]`}
    >
      {subTitle ? <h5 className="mb-4 text-xs uppercase">{subTitle}</h5> : ""}
      <h1 className="text-[32px] font-bold uppercase tracking-[3.33px] md:text-[40px]">
        {title}
      </h1>
      {/* Do we have a date and author? */}
      {date ? (
        <div className="flex gap-2 pt-4 text-[13px] capitalize">
          <div>{date}</div>
          <div className="">by {author}</div>
        </div>
      ) : (
        ""
      )}

      {/* The paragraph between the title and the link */}
      <p className="py-6 text-[15px] capitalize tracking-normal">{text}</p>
      {linkText ? <LinkArrow id={id} linkText={linkText} /> : ""}
    </section>
  );
}

export default NewStory;
