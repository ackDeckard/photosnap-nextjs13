"use client";
import { useButton } from "@react-aria/button";
import React, { useRef } from "react";
import { FocusRing } from "react-aria";

function Button({ onClick, children, size, btnColor, textColor }) {
  let ref = useRef();
  let { buttonProps, isPressed } = useButton({ onPress: onClick }, ref);

  const { width, height } = size || { width: 310, height: 48 };

  return (
    <FocusRing focusRingClass="ring ring-offset-2 ring-offset-black rounded-none ">
      <button
        // for some reason, adding ${customHeight} ${customWidth} in classname doesn't work. Tailwind?
        style={{
          width: width,
          height: height,
        }}
        className={` ${
          isPressed ? "bg-black/80" : ""
        } ${btnColor} mx-auto text-xs font-bold uppercase tracking-[2.5px] ${textColor}`}
        {...buttonProps}
        ref={ref}
      >
        {children}
      </button>
    </FocusRing>
  );
}

export default Button;
