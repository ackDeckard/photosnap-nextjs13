import Image from "next/image";
import React from "react";

function ViewFeatures({ dataFeatures }) {
  return (
    <section className="grid ">
      <div className="my-20 grid place-items-center px-9 text-black  md:grid-cols-2 lg:mx-auto  lg:grid-cols-3  lg:place-items-baseline lg:gap-8 2xl:gap-24">
        {dataFeatures.map((item) => (
          <div
            key={item.id + item.imgURL}
            className="mb-11 grid max-w-[310px] place-items-center md:max-w-[340px]  lg:max-w-[350px] lg:place-items-baseline "
          >
            <Image
              src={item.imgURL}
              alt={item.alt}
              width={0}
              height={0}
              className="h-auto w-[72px] pb-12 lg:mx-auto"
            />

            <h4 className="pb-4 text-center text-lg font-bold capitalize lg:mx-auto">
              {item.title}
            </h4>
            <p className="text-center text-[15px] ">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ViewFeatures;
