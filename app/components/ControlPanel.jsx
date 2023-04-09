import Image from "next/image";
import React from "react";
import NewStory from "./NewStory";

function ControlPanel({ data }) {
  return (
    <>
      {data.map((item) => (
        <section
          key={item.id}
          className={`md:grid md:grid-cols-[1fr_1fr_273px] md:place-content-center lg:grid-cols-[305px_1fr_1fr_1fr_305px] ${
            item.id === 1
              ? "md:h-[650px] md:bg-black"
              : "md:h-[600px] md:bg-white"
          } `}
        >
          <Image
            src={item.imgURL}
            alt={item.alt}
            width={0}
            height={0}
            priority
            unoptimized
            blurDataURL="data:..."
            placeholder="blur"
            className={`${
              item.id === 1
                ? "h-[294px] md:h-[650px]"
                : "h-[271px] md:h-[600px]"
            } w-full object-cover object-center lg:col-span-4 lg:w-full ${
              item.id % 2 !== 0
                ? "md:col-start-3 lg:col-start-3"
                : "md:col-start-1 md:object-center lg:col-start-1"
            }   `}
          ></Image>

          <div
            className={`h-auto w-full md:col-span-2 md:row-start-1 md:grid md:h-full md:place-content-center lg:w-[610px] ${
              item.id % 2 !== 0
                ? "md:col-start-1 lg:col-start-1"
                : "md:col-start-2 lg:col-start-5"
            } `}
          >
            <NewStory key={item.id} data={item} />
          </div>
        </section>
      ))}
    </>
  );
}

export default ControlPanel;
