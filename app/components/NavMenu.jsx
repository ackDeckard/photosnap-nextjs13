import React, { useContext } from "react";
import Button from "./Button";
import { DeviceContext } from "../lib/store/device-context";
import Link from "next/link";

const menuItems = [
  {
    id: 1,
    title: "stories",
  },
  {
    id: 2,
    title: "features",
  },
  {
    id: 3,
    title: "pricing",
  },
];

function NavMenu() {
  const { isDesktop, isTablet, openMobileMenu, setopenMobileMenu } =
    useContext(DeviceContext);

  return (
    <div className="absolute -bottom-[252px] z-50 grid h-[253px] w-full bg-white p-4 md:bottom-auto md:col-start-2 md:h-auto md:grid-flow-col md:justify-between  md:px-10 ">
      <div className="mx-auto grid gap-5 text-center text-[15px] font-bold uppercase tracking-[2.5px] md:mx-0 md:grid-flow-col md:items-center md:gap-10 md:text-xs md:tracking-[2px]">
        {menuItems.map((item) => (
          <Link
            href={item.title}
            key={item.id}
            onClick={() => setopenMobileMenu(false)}
          >
            {item.title}
          </Link>
        ))}
      </div>

      <div className="mx-auto my-5 h-[1px] w-[310px] bg-black/20 md:hidden" />

      {isDesktop || isTablet ? (
        <Button
          size={{ width: 158, height: 40 }}
          btnColor="bg-black"
          textColor="text-white"
        >
          Get an Invite
        </Button>
      ) : (
        <Button btnColor="bg-black" textColor="text-white">
          Get an Invite
        </Button>
      )}
      <div className="absolute top-[254px] h-[calc(100vh-325px)] w-full bg-black/50 md:hidden"></div>
    </div>
  );
}

export default NavMenu;
