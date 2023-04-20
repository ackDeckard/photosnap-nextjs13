"use client";
import React, { useContext, useEffect, useState } from "react";
import { DeviceContext } from "../lib/store/device-context";

function GradientBar({ parent, offset }) {
  const { isDesktop, isTablet } = useContext(DeviceContext);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function calculateHeight() {
      const parentElement = document.querySelector(parent);
      const textHeight = parentElement.clientHeight - offset;
      return textHeight;
    }

    const calculatedHeight = calculateHeight();
    setHeight(calculatedHeight);
  }, [parent, offset]);

  return (
    <div
      className={`absolute ${
        isDesktop || isTablet
          ? "left-0 top-1/2  -translate-x-1/2 -translate-y-1/2 rotate-90 transform"
          : "left-[32px] top-0"
      } h-[6px] bg-gradient-to-l from-gradientStart via-gradientMiddle to-gradientEnd`}
      style={{
        width: isDesktop || isTablet ? `${height}px` : "128px",
      }}
    ></div>
  );
}

export default GradientBar;
