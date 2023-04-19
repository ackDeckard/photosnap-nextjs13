import React from "react";
import Button from "./Button";

function PickPlan({ item, bgColor, textColor, btnColor, paragraphColor }) {
  return (
    <section
      className={`mx-7 my-3 ${bgColor} pb-10 pt-14 ${paragraphColor} md:grid md:grid-cols-2 lg:grid-cols-1 lg:place-items-center `}
    >
      {/* TITLE and Text section */}
      <div className="pb-10 md:ml-10 md:w-[270px] md:pb-8">
        <h4 className="pb-[18px] text-center text-2xl font-bold md:text-left lg:text-center">
          {item.title}
        </h4>
        <p className="mx-[22px] text-center text-[15px] md:mx-0 md:text-left lg:text-center">
          {item.text}
        </p>
      </div>
      {/* PRICE and MONTH section  */}
      <div className="grid place-items-center md:mr-10 md:justify-self-end lg:justify-self-center">
        <span
          className={`text-[40px] font-bold tracking-[4.17px]  ${paragraphColor}`}
        >
          ${item.price}
        </span>
        <span
          className={`pb-10 text-[15px] tracking-normal md:-mt-8 md:mr-2 md:justify-self-end lg:-mt-0 lg:text-center ${paragraphColor}/60 `}
        >
          per month
        </span>
      </div>
      {/* Pick Plan Button section */}
      <div className="mx-9 grid place-items-center md:mx-0 md:ml-10 md:place-content-start">
        <Button
          size={{ width: 245, height: 40 }}
          btnColor={btnColor}
          textColor={textColor}
        >
          Pick Plan
        </Button>
      </div>
      {/* What's the best solution to add paddings/margins? Wrap the Button or send a prop in the button? */}
    </section>
  );
}

export default PickPlan;
