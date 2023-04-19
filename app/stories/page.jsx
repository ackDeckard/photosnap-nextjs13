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
    date: "April 16th 2020",
  },
  {
    id: 2,
    title: "Sunset Cityscapes",
    author: "Benjamin Cruz",
    imgURL: "/assets/stories/desktop/cityscapes.jpg",
    alt: "skyscrapers viewed from above",
    date: "April 14th 2020",
  },
  {
    id: 3,
    title: "18 Days Voyage",
    author: "Alexei Borodin",
    imgURL: "/assets/stories/desktop/18-days-voyage.jpg",
    alt: "human silhouette",
    date: "April 11th 2020",
  },
  {
    id: 4,
    title: "Architecturals",
    author: "Samantha Brooke",
    imgURL: "/assets/stories/desktop/architecturals.jpg",
    alt: "view from the side of a building",
    date: "April 9th 2020",
  },
  {
    id: 5,
    title: "World Tour 2019",
    author: "Timothy Wagner",
    imgURL: "/assets/stories/desktop/world-tour.jpg",
    alt: "view from a lake and mountain",
    date: "April 7th 2020",
  },
  {
    id: 6,
    title: "onforeseen corners",
    author: "william malcolm",
    imgURL: "/assets/stories/desktop/unforeseen-corners.jpg",
    alt: "a silhouette from a tree",
    date: "April 3rd 2020",
  },
  {
    id: 7,
    title: "king on africa: part II",
    author: "tim hillenburg",
    imgURL: "/assets/stories/desktop/king-on-africa.jpg",
    alt: "a close up of a lion",
    date: "March 29th 2020",
  },
  {
    id: 8,
    title: "the trip to nowhere",
    author: "felicia rourke",
    imgURL: "/assets/stories/desktop/trip-to-nowhere.jpg",
    alt: "view from the side of a building",
    date: "March 21st 2020",
  },
  {
    id: 9,
    title: "rage of the sea",
    author: "mohammed abdul",
    imgURL: "/assets/stories/desktop/rage-of-the-sea.jpg",
    alt: "sea in the sunset",
    date: "March 19th 2020",
  },
  {
    id: 10,
    title: "running free",
    author: "michelle",
    imgURL: "/assets/stories/desktop/running-free.jpg",
    alt: "two horses running free",
    date: "March 16th 2020",
  },
  {
    id: 11,
    title: "behind the waves",
    author: "lamarr wilson",
    imgURL: "/assets/stories/desktop/behind-the-waves.jpg",
    alt: "breaking wave",
    date: "March 11th 2020",
  },
  {
    id: 12,
    title: "calm waters",
    author: "Samantha Brooke",
    imgURL: "/assets/stories/desktop/calm-waters.jpg",
    alt: "sunset over a lake",
    date: "March 9th 2020",
  },
  {
    id: 13,
    title: "the milky way",
    author: "benjamin cruz",
    imgURL: "/assets/stories/desktop/milky-way.jpg",
    alt: "starts from the milky way",
    date: "March 5th 2020",
  },
  {
    id: 14,
    title: "night at the dark forest",
    author: "mohammed abdul",
    imgURL: "/assets/stories/desktop/dark-forest.jpg",
    alt: "mountains with ice",
    date: "March 4th 2020",
  },
  {
    id: 15,
    title: "somwarpet's beauty",
    author: "michelle",
    imgURL: "/assets/stories/desktop/somwarpet.jpg",
    alt: "an yellow flower known as somwarpet",
  },
  {
    id: 16,
    title: "land of dreams",
    author: "william malcolm",
    imgURL: "/assets/stories/desktop/land-of-dreams.jpg",
    alt: "a church in a hill ",
  },
];

const dataFeatures = [
  {
    id: 1,
    imgURL: "/assets/features/desktop/responsive.svg",
    alt: "icon of a desktop, a tablet and a smartphone",
    title: "100% responsive",
    text: "No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen.",
  },
  {
    id: 2,
    imgURL: "/assets/features/desktop/no-limit.svg",
    alt: "infinite symbol",
    title: "no photo upload limit",
    text: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
  },
  {
    id: 3,
    imgURL: "/assets/features/desktop/embed.svg",
    alt: "a notebook with symbols near it",
    title: "Available to Embed",
    text: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
  },
];

function page() {
  return (
    <div>
      <ControlPanel data={data} />
      <ReadStory dataReadStory={dataReadStory} />
    </div>
  );
}

export default page;
