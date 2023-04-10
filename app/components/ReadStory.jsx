import React from "react";
import LinkArrow from "./LinkArrow";

function ReadStory({ dataReadStory }) {
  return (
    <section className="grid w-full md:grid-cols-2 lg:grid-cols-4">
      {dataReadStory.map((item) => (
        <div
          key={item.id + item.imgURL}
          className={`h-[375px] w-full bg-cover bg-center bg-no-repeat `}
          style={{ backgroundImage: `url(${item.imgURL})` }}
        >
          <div className="grid h-full  w-full grid-rows-[1fr_min-content] items-end  bg-gradient-to-b from-black/5  to-black/70 px-8 pb-10 capitalize text-white ">
            {item.date ? <span className="text-[13px]">{item.date}</span> : ""}
            <h2 className="text-lg font-bold">{item.title}</h2>
            <span className="text-[13px]">by {item.author}</span>
            <div className="mb-5 mt-4 h-[1px] w-full bg-gray-400/40"></div>
            <LinkArrow
              linkText="read story"
              justify={"justify-between"}
              whitecolor={true}
            />
          </div>
        </div>
      ))}
    </section>
  );
}

export default ReadStory;
