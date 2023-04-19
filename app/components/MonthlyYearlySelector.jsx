"use client";
import React, { useState } from "react";

function MonthlyYearlySelector() {
  const [payMonthYear, setpayMonthYear] = useState(false);

  const circlePosition = payMonthYear
    ? "translate-x-[150%]  "
    : "translate-x-1";

  return (
    <section className="mx-auto mb-10 mt-16 h-8 w-[255px]">
      <div className="grid  grid-flow-col place-items-center font-bold">
        <span
          onClick={() => setpayMonthYear(false)}
          className={`${
            payMonthYear ? " text-black/50" : "text-black"
          } transition-colors duration-300`}
        >
          Monthly
        </span>
        <div
          onClick={() => setpayMonthYear(!payMonthYear)}
          className="relative h-8 w-16 rounded-full bg-customGray hover:cursor-pointer  "
        >
          <div
            className={`absolute top-1 h-6 w-6 rounded-full bg-black transition-all  duration-300 ${circlePosition} `}
          ></div>
        </div>
        <span
          onClick={() => setpayMonthYear(true)}
          className={`${
            payMonthYear ? " text-black" : "text-black/50"
          }  transition-colors duration-300`}
        >
          Yearly
        </span>
      </div>
    </section>
  );
}

export default MonthlyYearlySelector;
