"use client";
import { createContext, useEffect, useState } from "react";

export const DeviceContext = createContext({
  isDesktop: false,
  setIsDesktop: () => {},
  isTablet: false,
  setIsTablet: () => {},
  openMobileMenu: false,
  setopenMobileMenu: () => {},
});

export function DeviceProvider({ children }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [openMobileMenu, setopenMobileMenu] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsDesktop(true);
      setIsTablet(false);
    } else if (window.innerWidth >= 768) {
      setIsDesktop(false);
      setIsTablet(true);
    } else {
      setIsDesktop(false);
      setIsTablet(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DeviceContext.Provider
      value={{
        isDesktop,
        isTablet,
        isTablet,
        setIsTablet,
        openMobileMenu,
        setopenMobileMenu,
      }}
    >
      {children}
    </DeviceContext.Provider>
  );
}
