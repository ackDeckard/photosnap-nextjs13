"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import { DeviceContext } from "../lib/store/device-context";

function Header() {
  const [openMobileMenu, setopenMobileMenu] = useState(false);
  const { isDesktop, isTablet } = useContext(DeviceContext);

  console.log(isDesktop);
  return (
    <header className="relative grid h-[72px] w-full grid-flow-col place-items-center justify-between px-6 py-7">
      <Image
        src="/assets/logo.svg"
        alt="photosnap logo"
        width={0}
        height={0}
        className="h-4 w-[170px]"
      />

      {isDesktop || isTablet ? <NavMenu /> : ""}

      <button
        className="h-[8px] w-5 md:hidden"
        onClick={() => setopenMobileMenu(!openMobileMenu)}
      >
        <Image
          src="/assets/menu.svg"
          alt="access menu"
          width={0}
          height={0}
          className="h-[8px] w-[20px]"
        />
      </button>

      {openMobileMenu ? (
        <NavMenu
          openMobileMenu={openMobileMenu}
          setopenMobileMenu={setopenMobileMenu}
        />
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;
