import React from "react";
import ControlPanel from "../components/ControlPanel";
import ViewFeatures from "../components/ViewFeatures";
import InviteBanner from "../components/InviteBanner";

const data = [
  {
    id: 1,
    imgURL: "/assets/features/desktop/hero.jpg",
    alt: "someone holding a camera",
    title: "Features",
    text: "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
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
  {
    id: 4,
    imgURL: "/assets/features/desktop/custom-domain.svg",
    alt: "magnifying glass over a search bar",
    title: "Custom Domain",
    text: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
  },
  {
    id: 5,
    imgURL: "/assets/features/desktop/boost-exposure.svg",
    alt: "hand over a 2d square",
    title: "Boost Your Exposure",
    text: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
  },
  {
    id: 6,
    imgURL: "/assets/features/desktop/drag-drop.svg",
    alt: "image gallery",
    title: "Drag & Drop Image",
    text: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
  },
];

function page() {
  return (
    <section>
      <ControlPanel data={data} />
      <ViewFeatures dataFeatures={dataFeatures} />
      <InviteBanner />
    </section>
  );
}

export default page;
