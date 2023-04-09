import { Inter } from "next/font/google";
import Image from "next/image";
import NewStory from "./components/NewStory";
import ControlPanel from "./components/ControlPanel";

const inter = Inter({ subsets: ["latin"] });

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
    imgUrl: "/assets/stories/desktop/mountains.jpg",
    alt: "a mountain with clouds in the base",
  },
];

export default function Home() {
  return (
    <main>
      <ControlPanel data={data} />
      {/* {data.map((item) => (
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
      ))} */}
    </main>
  );
}
