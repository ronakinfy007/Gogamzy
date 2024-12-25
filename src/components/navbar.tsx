"use client";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";

export interface NavbarProps {}

export default function Navbar(props: NavbarProps) {
  const navData = [
    { title: "Brain Strong", href: "/brainstrong-games" },
    { title: "Multiplayer", href: "/multiplayer-games" },
    { title: "Featured", href: "/feature-games" },
    { title: "Clicking", href: "/clicking-games" },
    { title: "Racing", href: "/racing-games" },
    { title: "Action", href: "/action-games" },
    { title: "Horror", href: "/horror-games" },
    { title: "Color", href: "/color-games" },
  ];
  const [open, setOpen] = useState(false);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    // Function to handle clicks outside the wrapper
    const handleClickOutside = (event: any) => {
      if (
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav
      className="flex flex-col mt-2 w-full h-[80px] justify-center relative z-[1000] text-white rounded-md"
      style={{
        background:
          "linear-gradient(105.87deg, rgba(255, 255, 255, 0.15) 3.04%, rgba(255, 255, 255, 0) 96.05%)",
        backdropFilter: "saturate(180%) blur(40px)",
        boxShadow:
          "0px 18.26px 22.83px 0px #0000000D, -0.76px 0.76px 0.76px -1.52px #FFFFFF59 inset, 0px 0.76px 3.09px 0px #FFFFFF59 inset",
      }}
    >
      <div className="flex w-full justify-between items-center px-5">
        <Link
          href="/"
          className="flex items-center gap-2 text-[20px] font-semibold"
        >
          <Image
            className="rounded-full w-full h-28"
            src="/images/logo-gogamzy-02.png"
            width={100}
            height={100}
            unoptimized
            alt="Picture of the author"
          />
          {/* <span className="text-[#F7F7F7] uppercase">gogamzy</span> */}
        </Link>

        <div className="flex items-center blog-list font-normal">
          {/* Desktop Navigation */}
          {navData.map((tab, index) => (
            <Link
              key={`desktop-nav-${index}`}
              href={tab.href}
              target="_blank"
              className="hidden lg:flex p-2 mr-1 xl:mr-5 rounded-md text-nowrap hover:text-[#0d7ba3] cursor-pointer"
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey) {
                  e.preventDefault();
                  location.href = tab.href;
                }
              }}
            >
              {tab.title}
            </Link>
          ))}

          {/* Hamburger for Mobile */}
          <RxHamburgerMenu
            size={24}
            className="lg:hidden ml-5 cursor-pointer"
            onClick={handleOpen}
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={hamburgerRef}
        className={`absolute rounded-lg mt-2 bg-white top-[80px] left-0 w-full overflow-hidden transition-all duration-300 ease-in-out shadow-lg rounded-b-md ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col mt-2">
          {navData.map((item, index) => (
            <Link
              key={`mobile-nav-${index}`}
              href={item.href}
              target="_blank"
              className="flex justify-start ml-5 w-full text-black py-2 text-center hover:text-[#0d7ba3] cursor-pointer"
              onClick={(e) => {
                if (!e.ctrlKey && !e.metaKey) {
                  e.preventDefault();
                  location.href = item.href;
                }
              }}
            >
              <label className="font-medium text-[14px]">{item.title}</label>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
