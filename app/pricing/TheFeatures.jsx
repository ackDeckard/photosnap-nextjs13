import React from "react";
import Arrow from "./Arrow";

const data = [
  {
    id: 1,
    title: "Unlimited Story Posting",
    basic: true,
    pro: true,
    business: true,
  },
  {
    id: 2,
    title: "Unlimited Photo Upload",
    basic: true,
    pro: true,
    business: true,
  },
  {
    id: 3,
    title: "Embdedding custom content",
    basic: false,
    pro: true,
    business: true,
  },
  {
    id: 4,
    title: "Customize metadata",
    basic: false,
    pro: true,
    business: true,
  },
  {
    id: 5,
    title: "Advanced metrics",
    basic: false,
    pro: false,
    business: true,
  },
  {
    id: 6,
    title: "Photo downloads",
    basic: false,
    pro: false,
    business: true,
  },
  {
    id: 7,
    title: "Search engine indexing",
    basic: false,
    pro: false,
    business: true,
  },
  {
    id: 8,
    title: "Custom Analytics",
    basic: false,
    pro: false,
    business: true,
  },
];

function TheFeatures() {
  return (
    <section className="mx-7 mb-[112px]">
      <h4 className="hidden text-[40px] font-bold uppercase tracking-[4.17px] md:mb-16 md:block md:text-center">
        compare
      </h4>
      <div className="grid grid-flow-col place-items-center md:grid-cols-[350px_1fr_1fr_1fr] ">
        <h4 className="pb-[23px] text-sm font-bold uppercase tracking-[2px] md:ml-6  md:place-self-start">
          The Features
        </h4>
        <span className="hidden md:block">Basic</span>
        <span className="hidden md:block">Pro</span>
        <span className="hidden md:block">Business</span>
      </div>
      <div className="mb-[23px] h-[1px] w-full bg-black"></div>
      {data.map((item) => (
        <article key={item.id}>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-[2px] md:hidden">
            {item.title}
          </h4>
          <div className="mb-6 grid grid-flow-col place-items-center text-[10px] uppercase md:grid-cols-[350px_1fr_1fr_1fr]">
            <h4 className="hidden text-sm font-bold uppercase tracking-[2px] md:ml-6 md:block md:place-self-start">
              {item.title}
            </h4>
            <div className="grid gap-2  ">
              <span className="md:hidden">Basic</span>
              {item.basic ? <Arrow /> : ""}
            </div>
            <div className="grid gap-2 ">
              <span className="md:hidden">Pro</span>
              {item.pro ? <Arrow /> : ""}
            </div>{" "}
            <div className="grid gap-2 ">
              <span className="md:hidden">Business</span>
              {item.business ? <Arrow /> : ""}
            </div>
          </div>
          <div className="mb-[23px] h-[1px] w-full bg-customGray"></div>
        </article>
      ))}
    </section>
  );
}

export default TheFeatures;
