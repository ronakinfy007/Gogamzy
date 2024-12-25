"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RiFacebookFill, RiLinkedinFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaRegCopyright, FaXTwitter, FaYoutube } from "react-icons/fa6";
import Image from "next/image";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const router = useRouter();
  const navData = [
    { title: "Disclaimer", href: "/disclaimer" },
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      title: "Terms & Condition",
      href: "/terms-conditions",
    },
  ];
  const socialLink = [
    {
      socialIcon: <RiFacebookFill />,
      ariaLabel: "facebook",
    },
    {
      socialIcon: <BsInstagram />,
      ariaLabel: "instagram",
    },
    {
      socialIcon: <FaXTwitter />,
      ariaLabel: "twitter",
    },
    {
      socialIcon: <FaYoutube />,
      ariaLabel: "youtube",
    },
    {
      socialIcon: <RiLinkedinFill />,
      ariaLabel: "youtube",
    },
  ];

  return (
    <footer
      key={Math.random()}
      id="footer"
      className={`flex flex-col h-auto w-full my-4 rounded-md gap-6 border border-[#85869833] text-white p-6`}
      style={{
        background:
          "linear-gradient(105.87deg, rgba(255, 255, 255, 0.15) 3.04%, rgba(255, 255, 255, 0) 96.05%)",
        backdropFilter: "saturate(180%) blur(40px)",
        boxShadow:
          "0px 18.26px 22.83px 0px #0000000D, -0.76px 0.76px 0.76px -1.52px #FFFFFF59 inset, 0px 0.76px 3.09px 0px #FFFFFF59 inset",
      }}
    >
      <div className="flex flex-col w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:sm:grid-cols-3 w-full lg:justify-between gap-5 lg:gap-16 ">
          <div className="flex flex-col gap-1 md:gap-2 items-start">
            <div className="text-[18px] sm:text-[20px] font-semibold self-start">
              About Us
            </div>
            <div className="text-[15px] sm:text-[16px]">
              You will find the freshest and finest collection of completely
              free online games. No need for worries when engaging in the fun
              games provided since there are no downloads, annoying ads or pop
              up windows. All your beloved games are easily retrieved by simply
              turning on the web browser for a perfect gaming experience.
            </div>
          </div>

          <div className="flex flex-col gap-1 md:gap-2 items-start">
            <div className="text-[18px] sm:text-[20px] font-semibold self-start">
              Quick Link
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 text-[15px] sm:text-[16px] gap-2 sm:gap-2 md:gap-2 lg:gap-2">
              {navData.slice(0, 4).map((link: any, index) => (
                <Link
                  href={link.href}
                  target="_blank"
                  key={index}
                  className=" hover:text-[#0d7ba3] hover:underline !text-nowrap "
                  onClick={(e) => {
                    if (!e.ctrlKey && !e.metaKey) {
                      e.preventDefault();
                      location.href = `${link.href}`;
                    }
                  }}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1 md:gap-2 items-start">
            <div className="text-[18px] sm:text-[20px] font-semibold self-start">
              Contact
            </div>
            <div className="text-[15px] md:text-[16px] flex gap-4 items-center">
              <MdEmail />
              contact@zengames.com
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full justify-center items-center relative mt-16">
          <div className="border-[1px] border-[#eeeff0] w-full"></div>
          <div className="flex gap-3 md:gap-6 absolute bottom-[90px] mb-20 px-4">
            {socialLink.map((socialLink: any, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-full h-full p-2 bg-gradient-to-br from-[#0d7ba3] to-[#d3f3ff] ease-in-out rounded-full hover:scale-110 cursor-pointer"
              >
                <Link
                  aria-label={socialLink.ariaLabel}
                  href={""}
                  className="text-[16px] md:text-[20px] text-white"
                >
                  {socialLink.socialIcon}
                </Link>
              </div>
            ))}
          </div>

          <Link
            href="/"
            className="flex items-center gap-2 text-[20px] font-semibold"
          >
            <Image
              className="rounded-full w-full h-28"
              src="/images/logo-gogamzy-02.png"
              width={50}
              height={50}
              unoptimized
              alt="Picture of the author"
            />
          </Link>

          <div className="flex w-full justify-center items-center text-[12px] md:text-[14px] text-nowrap">
            <FaRegCopyright className="mr-2 text-[15px]" /> 2024 by ZenGgames.
            All Right Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
