import React from "react";
import { DM_Sans } from "next/font/google";
import ControlPanel from "../components/ControlPanel";
import MonthlyYearlySelector from "../components/MonthlyYearlySelector";
import PickPlan from "../components/PickPlan";

const dmsans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const data = [
  {
    id: 1,
    imgURL: "/assets/pricing/desktop/hero.jpg",
    alt: "someone holding a camera",
    title: "pricing",
    text: "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",
  },
];

const dataPlan = [
  {
    id: 1,
    title: "Basic",
    text: "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    price: "19.00",
  },
  {
    id: 2,
    title: "Pro",
    text: "More advanced features available. Recommended for photography veterans and professionals.",
    price: "39.00",
  },
  {
    id: 3,
    title: "Business",
    text: "Additional features available such as more detailed metrics. Recommended for business owners.",
    price: "99.00",
  },
];

function page() {
  return (
    <section>
      {/* <ControlPanel data={data} /> */}
      <MonthlyYearlySelector />

      <div className="lg:grid lg:grid-flow-col lg:grid-cols-3">
        {dataPlan.map((item) => {
          const isEven = item.id % 2 === 0;
          const bgColor = isEven ? "bg-black" : "bg-customGray";
          const textColor = isEven ? "text-black" : "text-white";
          const btnColor = isEven ? "bg-white" : "bg-black";
          const paragraphColor = isEven ? "text-customGray" : "text-black";

          return (
            <PickPlan
              key={item.id}
              item={item}
              bgColor={bgColor}
              textColor={textColor}
              btnColor={btnColor}
              paragraphColor={paragraphColor}
            />
          );
        })}
      </div>
    </section>
  );
}

export default page;
