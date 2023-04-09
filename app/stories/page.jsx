import React from "react";
import ControlPanel from "../components/ControlPanel";

const data = [
  {
    id: 3,
    imgURL: "/assets/home/desktop/beautiful-stories.jpg",
    alt: "a desk with a notebook and some books over it",
    subTitle: "Last month's featured story",
    title: "Beautiful stories every time",
    date: "March 2nd 2020",
    author: "John Appleseed",
    text: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    linkText: "get an invite",
  },
];

function page() {
  return (
    <div>
      <ControlPanel data={data} />
    </div>
  );
}

export default page;
