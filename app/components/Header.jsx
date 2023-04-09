"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import { DeviceContext } from "../lib/store/device-context";
import Link from "next/link";

function Header() {
  const { isDesktop, isTablet, openMobileMenu, setopenMobileMenu } =
    useContext(DeviceContext);

  return (
    <header className="relative grid h-[72px] w-full grid-flow-col place-items-center justify-between px-6 ">
      <Link href="/">
        <Image
          src="/assets/logo.svg"
          alt="photosnap logo"
          width={0}
          height={0}
          className="h-4 w-[170px]"
        />
      </Link>

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

      {openMobileMenu ? <NavMenu /> : ""}
    </header>
  );
}

export default Header;
