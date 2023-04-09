import Image from "next/image";
import React from "react";

function ViewFeatures({ dataFeatures }) {
  return (
    <section className=" my-20 grid place-items-center px-9 text-black">
      {dataFeatures.map((item) => (
        <div key="item.id" className="mb-11 grid place-items-center">
          <Image
            src={item.imgURL}
            alt={item.alt}
            width={0}
            height={0}
            className="h-auto w-[72px] pb-12"
          />
          <h4 className="pb-4 text-lg font-bold">{item.title}</h4>
          <p className="text-center text-[15px]">{item.text}</p>
        </div>
      ))}
    </section>
  );
}

export default ViewFeatures;
