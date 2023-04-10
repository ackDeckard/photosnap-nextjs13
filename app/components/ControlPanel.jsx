import Image from "next/image";
import React from "react";
import NewStory from "./NewStory";

function ControlPanel({ data }) {
  let specialCase = true;
  return (
    <>
      {data.map((item) => (
        <section
          key={item.id + item.imgURL}
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
            // Stories page has a special caracteristic - the background image spans the entire div. The test we're doing at "item.specialCase && item.id === 1" is for that.
            className={`
            
            ${
              item.specialCase && item.id === 1
                ? "md:col-span-3 md:col-start-1 md:row-start-1 lg:col-span-5"
                : ""
            } 
            
            ${
              item.id === 1
                ? "h-[294px] md:h-[650px]"
                : "h-[271px] md:h-[600px]"
            } w-full object-cover object-center lg:col-span-4 lg:w-full ${
              !item.specialCase && item.id % 2 !== 0
                ? "md:col-start-3 lg:col-start-3"
                : "md:col-start-1 md:object-center lg:col-start-1"
            } 
    
            `}
          ></Image>

          <div
            className={`h-auto w-full md:col-span-2 md:row-start-1 md:grid md:h-full md:place-content-center lg:w-[610px] ${
              item.id % 2 !== 0
                ? "md:col-start-1 lg:col-start-1"
                : "md:col-start-2 lg:col-start-5"
            }             
            `}
          >
            <NewStory key={item.id + item.imgURL} data={item} />
          </div>
        </section>
      ))}
    </>
  );
}

export default ControlPanel;
