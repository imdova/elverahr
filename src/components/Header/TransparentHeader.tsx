"use client";
import Logo from "@/assets/icons/logo";
import { commonLinks } from "@/constants/header";
import useScrollDetection from "@/hooks/useScrollDetection";
import { BaseHeaderProps } from "@/types";
import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
const TransparentHeader: React.FC<BaseHeaderProps> = () => {
  const isScrolled = useScrollDetection();
  const [isActive, setIsActive] = useState(false);

  return (
    <header
      className={`${
        isScrolled ? "shadow-lg bg-white" : ""
      } left-0 top-0 fixed z-50 w-full transition-all   duration-300`}>
      <div className="absolute overflow-hidden h-24"></div>
      <div className="container mx-auto px-6 lg:max-w-[1170px]">
        <div className="flex h-[70px] justify-between items-center">
          <div className="flex gap-3 items-center">
            <Link className="relative" href="/">
              <Logo color={isScrolled ? "black" : "white"} width={120} />
            </Link>
          </div>
          <div className="hidden text-main items-center space-x-4 lg:space-x-8  md:flex text-white ">
            {commonLinks.map((link) => {
              return (
                <Link
                  key={link.title}
                  href={link.url}
                  className={`font-medium capitalize link-smooth border-b border-b-transparent pb-2   ${
                    isScrolled ? "text-black hover:text-primary " : ""
                  }  hover:border-b-white `}>
                  {link.title}
                </Link>
              );
            })}
          </div>
          <div className="hidden md:flex items-center gap-3 ">
            <Link
              className={`flex justify-center items-center h-12 w-12 ${
                isScrolled
                  ? "text-black hover:text-primary link-smooth"
                  : "text-white"
              }`}
              href={"#"}>
              <Search size={18} />
            </Link>
            <button
              className={`w-28 h-10  ${
                isScrolled
                  ? "bg-primary text-white hover:bg-red-700"
                  : "bg-white text-black hover:bg-primary hover:text-white"
              } text-sm font-semibold rounded-full link-smooth`}>
              Login
            </button>
          </div>
          <div className="flex items-center">
            <button
              onClick={() =>
                isActive ? setIsActive(false) : setIsActive(true)
              }
              className="block md:hidden group h-6 w-6">
              <div className="grid justify-items-center gap-1.5">
                <span
                  className={`h-[2px] w-full rounded-full ${
                    isScrolled ? "bg-black" : "bg-white"
                  } transition ${
                    isActive ? " rotate-45 translate-y-2.5" : ""
                  }`}></span>
                <span
                  className={`h-[2px] w-full rounded-full ${
                    isScrolled ? "bg-black" : "bg-white"
                  }  ${isActive ? "scale-x-0" : ""} transition`}></span>
                <span
                  className={`h-[2px] w-full rounded-full ${
                    isScrolled ? "bg-black" : "bg-white"
                  } ${
                    isActive ? "-rotate-45 -translate-y-[7px]" : ""
                  } `}></span>
              </div>
            </button>
          </div>
        </div>
        <div
          className={`absolute top-full left-0  flex-col p-4 shadow-lg w-full overflow-hidden ${
            isActive ? "flex animate-fadeInDown" : "hidden"
          }  ${
            isScrolled
              ? "bg-white text-black "
              : "text-white bg-white/20 backdrop-blur-lg"
          }`}>
          {commonLinks.map((link) => {
            return (
              <Link
                key={link.title}
                href={link.url}
                className={`font-medium capitalize rounded-md link-smooth p-3 mb-2 ${
                  isScrolled
                    ? "hover:bg-secondary hover:text-white"
                    : "hover:bg-secondary"
                }  hover:border-b-white `}>
                {link.title}
              </Link>
            );
          })}
          <div className="flex items-center gap-3 mt-8">
            <button
              className={`w-full h-10  ${
                isScrolled ? "bg-primary text-white" : "bg-white text-black"
              } text-sm font-semibold rounded-lg`}>
              Login
            </button>
            <Link
              className={`flex justify-center items-center h-12 w-12 ${
                isScrolled
                  ? "text-black hover:text-primary link-smooth"
                  : "text-white"
              }`}
              href={"#"}>
              <Search size={18} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TransparentHeader;
