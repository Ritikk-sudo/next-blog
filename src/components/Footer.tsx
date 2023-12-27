import React from "react";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4 !mt-32 bg-gray-200">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex p-0 items-center sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <div className="self-center m-auto w-[50%] h-[50%] font-bold whitespace-nowrap text-[#ce9251] dark:text-white dark:hover:text-[#ce9251]">
              <Image
                className=""
                src="/logo.png"
                width={500}
                height={500}
                alt="logo"
              />
            </div>
          </Link>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 ">
            <li className="hover:text-[#ce9251]">
              <Link
                href="https://www.codewithritik.tech/#about"
                className="hover:underline me-4 md:me-6"
              >
                About
              </Link>
            </li>
            <li className="hover:text-[#ce9251]">
              <Link
                href="https://github.com/Ritikk-sudo"
                className="hover:underline me-4 md:me-6"
              >
                Github
              </Link>
            </li>
            <li className="hover:text-[#ce9251]">
              <Link
                href="https://www.instagram.com/official.ritik_k?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA=="
                className="hover:underline me-4 md:me-6"
              >
                Instagram
              </Link>
            </li>
            <li className="hover:text-[#ce9251]">
              <Link
                href="https://www.codewithritik.tech/#contact"
                className="hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block justify-center text-sm text-gray-500 text-center dark:text-gray-400">
          © 2023{" "}
          <Link href="/" className="hover:underline hover:text-[#ce9251]">
            DevTechsposure™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
