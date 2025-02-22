"use client";
import Logo from "@/assets/icons/logo";
import { commonLinks } from "@/constants/header";
import useScrollDetection from "@/hooks/useScrollDetection";
import { BaseHeaderProps } from "@/types";
import { Search } from "lucide-react";
import Link from "next/link";
const Header: React.FC<BaseHeaderProps> = () => {
  const isScrolled = useScrollDetection();

  return (
    <header
      className={`${
        isScrolled ? "shadow-lg bg-white" : ""
      } left-0 top-0 fixed z-50 w-full transition-all   duration-300`}>
      <div className="absolute overflow-hidden h-24"></div>
      <div className="container mx-auto px-6 lg:max-w-[1170px]">
        <div className="flex h-[70px] justify-between items-center">
          <Link className="relative" href="/">
            <Logo color={isScrolled ? "black" : "white"} width={150} />
          </Link>
          <div className="hidden text-main items-center space-x-8 lg:flex text-white">
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
          <div className="flex items-center gap-3">
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
                isScrolled ? "bg-primary text-white" : "bg-white text-black"
              } text-sm font-semibold rounded-full`}>
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
