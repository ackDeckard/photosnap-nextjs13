import React from "react";
import ControlPanel from "../components/ControlPanel";
import ReadStory from "../components/ReadStory";

const data = [
  {
    id: 1,
    imgURL: "/assets/stories/desktop/moon-of-appalacia.jpg",
    alt: "florest and mountain under the light of the full moon",
    subTitle: "Last month's featured story",
    title: "HAZY FULL MOON OF APPALACHIA",
    date: "March 2nd 2020",
    author: "John Appleseed",
    text: 'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.',
    linkText: "read the story",
    specialCase: true,
  },
];

const dataReadStory = [
  {
    id: 1,
    title: "The mountains",
    author: "john appleseed",
    imgURL: "/assets/stories/desktop/mountains.jpg",
    alt: "a mountain with clouds in the base",
    date: "April 9th 2020",
  },
  {
    id: 2,
    title: "Sunset Cityscapes",
    author: "Benjamin Cruz",
    imgURL: "/assets/stories/desktop/cityscapes.jpg",
    alt: "skyscrapers viewed from above",
    date: "April 7th 2020",
  },
  {
    id: 3,
    title: "18 Days Voyage",
    author: "Alexei Borodin",
    imgURL: "/assets/stories/desktop/18-days-voyage.jpg",
    alt: "human silhouette",
    date: "April 3rd 2020",
  },
  {
    id: 4,
    title: "Architecturals",
    author: "Samantha Brooke",
    imgURL: "/assets/stories/desktop/architecturals.jpg",
    alt: "view from the side of a building",
    date: "March 29th 2020",
  },
  {
    id: 5,
    title: "World Tour 2019",
    author: "Timothy Wagner",
    imgURL: "/assets/stories/desktop/world-tour.jpg",
    alt: "view from the side of a building",
    date: "March 21st 2020",
  },
  {
    id: 6,
    title: "Architecturals",
    author: "Samantha Brooke",
    imgURL: "/assets/stories/desktop/architecturals.jpg",
    alt: "view from the side of a building",
    date: "March 19th 2020",
  },
  {
    id: 7,
    title: "Architecturals",
    author: "Samantha Brooke",
    imgURL: "/assets/stories/desktop/architecturals.jpg",
    alt: "view from the side of a building",
    date: "March 19th 2020",
  },
  {
    id: 8,
    title: "Architecturals",
    author: "Samantha Brooke",
    imgURL: "/assets/stories/desktop/architecturals.jpg",
    alt: "view from the side of a building",
  },
  {
    id: 9,
    title: "Architecturals",
    author: "Samantha Brooke",
    imgURL: "/assets/stories/desktop/architecturals.jpg",
    alt: "view from the side of a building",
  },
  {
    id: 10,
    title: "Architecturals",
    author: "Samantha Brooke",
    imgURL: "/assets/stories/desktop/architecturals.jpg",
    alt: "view from the side of a building",
  },
  {
    id: 11,
    title: "Architecturals",
    author: "Samantha Brooke",
    imgURL: "/assets/stories/desktop/architecturals.jpg",
    alt: "view from the side of a building",
  },
  {
    id: 12,
    title: "Architecturals",
    author: "Samantha Brooke",
    imgURL: "/assets/stories/desktop/architecturals.jpg",
    alt: "view from the side of a building",
  },
  {
    id: 13,
    title: "Architecturals",
    author: "Samantha Brooke",
    imgURL: "/assets/stories/desktop/architecturals.jpg",
    alt: "view from the side of a building",
  },
  {
    id: 14,
    title: "Architecturals",
    author: "Samantha Brooke",
    imgURL: "/assets/stories/desktop/architecturals.jpg",
    alt: "view from the side of a building",
  },
  {
    id: 15,
    title: "Architecturals",
    author: "Samantha Brooke",
    imgURL: "/assets/stories/desktop/architecturals.jpg",
    alt: "view from the side of a building",
  },
  {
    id: 16,
    title: "Architecturals",
    author: "Samantha Brooke",
    imgURL: "/assets/stories/desktop/architecturals.jpg",
    alt: "view from the side of a building",
  },
];

function page() {
  return (
    <div>
      {/* <ControlPanel data={data} /> */}

      <ReadStory dataReadStory={dataReadStory} />
    </div>
  );
}

export default page;
