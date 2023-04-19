import ControlPanel from "./components/ControlPanel";
import ReadStory from "./components/ReadStory";
import ViewFeatures from "./components/ViewFeatures";

const data = [
  {
    id: 1,
    imgURL: "/assets/home/desktop/create-and-share.jpg",
    alt: "guy standing on a pier",
    title: "Create and share your photo stories.",
    text: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    linkText: "get an invite",
  },
  {
    id: 2,
    imgURL: "/assets/home/desktop/beautiful-stories.jpg",
    alt: "a desk with a notebook and some books over it",
    title: "Beautiful stories every time.",
    text: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    linkText: "view the stories",
  },
  {
    id: 3,
    imgURL: "/assets/home/desktop/designed-for-everyone.jpg",
    alt: "a man holding a camera",
    title: "Designed for everyone",
    text: "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.",
    linkText: "view the stories",
  },
];

const dataReadStory = [
  {
    id: 1,
    title: "The mountains",
    author: "john appleseed",
    imgURL: "/assets/stories/desktop/mountains.jpg",
    alt: "a mountain with clouds in the base",
  },
  {
    id: 2,
    title: "Sunset Cityscapes",
    author: "Benjamin Cruz",
    imgURL: "/assets/stories/desktop/cityscapes.jpg",
    alt: "skyscrapers viewed from above",
  },
  {
    id: 3,
    title: "18 Days Voyage",
    author: "Alexei Borodin",
    imgURL: "/assets/stories/desktop/18-days-voyage.jpg",
    alt: "human silhouette",
  },
  {
    id: 4,
    title: "Architecturals",
    author: "Samantha Brooke",
    imgURL: "/assets/stories/desktop/architecturals.jpg",
    alt: "view from the side of a building",
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

const beta = [
  {
    id: 1,
    imgURL: "/assets/home/desktop/create-and-share.jpg",
    alt: "guy standing on a pier",
    title: "Create and share your photo stories.",
    text: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    linkText: "get an invite",
  },
];

export default function Home() {
  return (
    <main>
      <ControlPanel data={data} />
      <ReadStory dataReadStory={dataReadStory} />
      <ViewFeatures dataFeatures={dataFeatures} />
    </main>
  );
}
