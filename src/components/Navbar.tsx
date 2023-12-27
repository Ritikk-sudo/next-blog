import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { Lilita_One } from "next/font/google";
import Image from "next/image";


const font = Lilita_One({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="mx-auto max-w-5xl px-6 mt-5">
      <div className="flex justify-between items-center h-16 w-full">
      <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <div className="self-center w-[50%] h-[50%] font-bold whitespace-nowrap text-[#ce9251] dark:text-white dark:hover:text-[#ce9251]">
              <Image src="/logo.png" width={500} height={500} alt="logo" />
            </div>
          </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Navbar;
