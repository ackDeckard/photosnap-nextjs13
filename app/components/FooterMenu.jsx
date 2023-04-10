import Link from "next/link";
import React from "react";

const menuItems = [
  {
    id: 0,
    title: "home",
    url: "/",
  },
  {
    id: 1,
    title: "stories",
    url: "/stories",
  },
  {
    id: 2,
    title: "features",
    url: "/features",
  },
  {
    id: 3,
    title: "pricing",
    url: "/pricing",
  },
];

function FooterMenu() {
  return (
    <div className="grid gap-5 text-center md:grid-flow-col lg:grid-flow-row lg:text-left">
      {menuItems.map((item) => (
        <Link
          href={item.url}
          className="text-xs font-bold uppercase tracking-[2px] text-white"
          key={item.id}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default FooterMenu;
