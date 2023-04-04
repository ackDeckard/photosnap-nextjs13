"use client";
import { cva, VariantProps } from "class-variance-authority";

const Button = ({
  children,
  className,
  intent,
  hovercolor,
  size,
  ...props
}) => {
  const buttonClasses = cva(
    [
      "grid",
      "place-items-center",
      "transition",
      "duration-300",
      "ease-in-out",
      "bg-black",
      "text-white",
      "uppercase",
      "font-bold",
      "mx-auto",
    ],

    {
      variants: {
        intent: {
          primary: [
            "w-[310px]",
            "h-12",
            "text-[15px]",
            "tracking-[2.5px]",
            "bg-black",
          ],

          secondary: [
            "bg-white",
            "text-black",
            "border-gray-400",
            "hover:bg-gray-100",
            "border-solid",
            "border-2",
            "border-gray-800",
          ],
          text: ["bg-transparent", "text-black", "hover:bg-gray-100"],
        },
        size: {
          small: ["text-md", "py-1", "px-2"],
          tablet: ["w-[158px]", "h-10", "text-xs", "px-5", "py-2"],
          mobile: ["w-full", "h-12"],
        },
      },
      defaultVariants: {
        intent: "primary",
        size: "mobile",
      },
    }
  );

  return (
    <button
      className={buttonClasses({ intent, hovercolor, size, className })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
