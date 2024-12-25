"use client";
import Image from "next/image";
import React from "react";
import logo from "@public/images/logo.png";

export interface LogoProps {
  className?: string;
  imageClass?: string;
  link?: string;
}
const Logo = (props: LogoProps) => {
  return (
    <div
      onClick={(e) => {
        if (props.link) {
          e.preventDefault();
          location.href = props.link;
        } else {
          location.href = "/";
        }
      }}
      className={`flex cursor-pointer items-center justify-center gap-2 font-semibold capitalize ${
        props.className ?? ""
      }`}
    >
      <Image
        src={logo}
        alt="hero image"
        width={30}
        height={35}
        className={props?.imageClass ?? ""}
      />
      {"SmartDoc"}
      <span className="contents text-[#0d7ba3]">AI</span>
    </div>
  );
};

export default Logo;
