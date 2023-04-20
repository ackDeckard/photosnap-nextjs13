"use client";
import React, { useContext, useEffect, useState } from "react";
import { DeviceContext } from "../lib/store/device-context";

function FullGradientBar({ height }) {
  const { isTablet } = useContext(DeviceContext);

  return (
    <div
      className={`absolute ${
        isTablet
          ? "left-0 top-1/2  -translate-x-1/2 -translate-y-1/2 rotate-90 transform"
          : "top-0"
      } h-[6px] bg-gradient-to-l from-gradientStart via-gradientMiddle to-gradientEnd`}
      style={{
        width: isTablet ? "270px" : "100%",
      }}
    ></div>
  );
}

export default FullGradientBar;
