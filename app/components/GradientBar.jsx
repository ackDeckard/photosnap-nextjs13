import React from "react";

function GradientBar() {
  return (
    <div
      className={`absolute h-[6px] w-[128px] bg-gradient-to-l from-gradientStart via-gradientMiddle to-gradientEnd`}
    >
      GradientBar
    </div>
  );
}

export default GradientBar;
