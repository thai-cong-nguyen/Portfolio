"use client";
import React, { useState, useEffect } from "react";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ThemeToggler from "./ThemeToggler";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    // remove event
    return () => window.removeEventListener("scroll", scrollYPos);
  });
  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all `}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* nav */}
          <Nav
            containerStyles="hidden xl:flex gap-x-8 items-center"
            linkStyles="relative hover:text-primary transition-all"
            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
          />
          <ThemeToggler />
          {/* mobile nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
