import React from "react";
import LinkArrow from "./LinkArrow";
import GradientBar from "./GradientBar";

function NewStory({ data }) {
  const { id, subTitle, title, date, author, text, linkText, specialCase } =
    data;

  return (
    <section
      className={`${
        id === 1 ? "bg-black text-white" : "bg-white text-black"
      }  h-full  w-full px-8 py-[72px] uppercase tracking-[2px] md:w-[387px] 
      
      
      ${specialCase ? "bg-transparent" : ""}
      `}
      id="parent-element"
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
      <p className="py-6 text-[15px] capitalize tracking-normal text-white/60">
        {text}
      </p>
      {linkText ? <LinkArrow id={id} linkText={linkText} /> : ""}

      {!specialCase && id === 1 ? <GradientBar key={id} /> : ""}
    </section>
  );
}

export default NewStory;
