"use client";
import React, { useContext } from "react";
import Button from "../components/Button";
import { DeviceContext } from "../lib/store/device-context";

function PickPlan({ item, bgColor, textColor, btnColor, paragraphColor }) {
  const { payMonthYear, setpayMonthYear } = useContext(DeviceContext);

  return (
    <section
      className={`mx-7 my-3 ${bgColor} pb-10 pt-14 ${paragraphColor} lg: md:grid md:grid-cols-2 lg:w-5/6 lg:grid-cols-1 lg:place-items-center lg:gap-x-5 ${
        item.title === "Pro" ? "h-[470px]" : "h-[407px]"
      }`}
    >
      {/* TITLE and Text section */}
      <div className="pb-10 md:ml-10 md:w-[270px] md:pb-8 lg:ml-0 ">
        <h4 className="pb-[18px] text-center text-2xl font-bold md:text-left lg:text-center">
          {item.title}
        </h4>
        <p className="mx-[22px] text-center text-[15px] md:mx-0 md:text-left lg:text-center">
          {item.text}
        </p>
      </div>
      {/* PRICE and MONTH section  */}
      <div className="grid place-items-center md:mr-10 md:justify-self-end lg:mr-0 lg:justify-self-auto">
        <span
          className={`text-[40px] font-bold tracking-[4.17px] lg:text-center ${paragraphColor}`}
        >
          ${payMonthYear ? item.yearPrice : item.monthPrice}
        </span>
        <span
          className={`pb-10 text-[15px] tracking-normal md:-mt-8 md:mr-2 md:justify-self-end lg:-mt-0 lg:justify-self-auto lg:text-center ${paragraphColor}/60 `}
        >
          {payMonthYear ? "per year" : "per month"}
        </span>
      </div>
      {/* Pick Plan Button section */}
      <div className="mx-9 grid place-items-center md:mx-0 md:ml-10 md:place-content-start lg:ml-0">
        <Button
          size={{ width: 245, height: 40 }}
          btnColor={btnColor}
          textColor={textColor}
        >
          Pick Plan
        </Button>
      </div>
    </section>
  );
}

export default PickPlan;
